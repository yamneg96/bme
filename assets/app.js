/* Basic Optics practice quiz - vanilla JS, no build step.
   Pages: home.html (data-scope="home", slides 1-30) and all.html (data-scope="all", slides 1-100). */
(function () {
  "use strict";

  var SCOPE = document.body.getAttribute("data-scope") === "all" ? "all" : "home";
  var SLIDE_LIMIT = SCOPE === "all" ? 100 : 30;
  var SIZES = [10, 20, 30, 50];

  /* ---------- helpers ---------- */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function maxSlide(q) { return Math.max.apply(null, q.s.match(/\d+/g).map(Number)); }
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function parseNum(s) {
    var t = String(s == null ? "" : s).trim().replace(/[−–—]/g, "-").replace(",", ".");
    if (!/^[-+]?(\d+\.?\d*|\.\d+)(e[-+]?\d+)?$/i.test(t)) return NaN;
    return parseFloat(t);
  }
  function fmtTime(ms) {
    var s = Math.max(0, Math.round(ms / 1000));
    var m = Math.floor(s / 60);
    return m + ":" + String(s % 60).padStart(2, "0");
  }
  function fmtNum(n) { return String(+Number(n).toFixed(4)); }
  var store = {
    get: function (k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { window.localStorage.setItem(k, v); } catch (e) { /* storage unavailable */ } },
  };

  /* ---------- data ---------- */
  var POOL = (window.QUESTIONS || []).filter(function (q) { return maxSlide(q) <= SLIDE_LIMIT; });
  var TOPICS = [];
  POOL.forEach(function (q) { if (TOPICS.indexOf(q.topic) < 0) TOPICS.push(q.topic); });

  var LEVELS = {
    easy: { label: "easy", cls: "text-ok" },
    medium: { label: "medium", cls: "text-mute" },
    tricky: { label: "tricky", cls: "text-warn" },
  };
  var LETTERS = ["A", "B", "C", "D", "E", "F"];

  /* ---------- state ---------- */
  var root = $("#app");
  var S = {
    view: "setup",
    n: "all",
    shuffle: true,
    topics: new Set(TOPICS),
    items: [],
    ans: {},
    startedAt: 0,
    result: null,
    reviewFilter: "all",
  };
  var timerId = null;
  var bestKey = "optics.best." + SCOPE;

  function getBest() {
    try { return JSON.parse(store.get(bestKey) || "null"); } catch (e) { return null; }
  }

  /* ---------- theme toggle ---------- */
  var themeBtn = $("#theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var dark = document.documentElement.classList.toggle("dark");
      store.set("optics.theme", dark ? "dark" : "light");
      themeBtn.setAttribute("aria-pressed", dark ? "true" : "false");
    });
    themeBtn.setAttribute("aria-pressed", document.documentElement.classList.contains("dark") ? "true" : "false");
  }

  /* ---------- page chrome: hero and sticky progress bar ---------- */
  function setChrome(inQuiz) {
    var bar = $("#quizbar"), hero = $("#hero");
    if (bar) bar.classList.toggle("hidden", !inQuiz);
    if (hero) hero.classList.toggle("hidden", inQuiz);
  }

  /* ---------- toast ---------- */
  var toastTimer = null;
  function toast(msg) {
    var el = $("#toast");
    if (!el) return;
    el.textContent = msg;
    el.classList.remove("opacity-0", "translate-y-2");
    el.classList.add("opacity-100", "translate-y-0");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      el.classList.add("opacity-0", "translate-y-2");
      el.classList.remove("opacity-100", "translate-y-0");
    }, 3200);
  }

  /* ---------- setup view ---------- */
  function availableCount() {
    return POOL.filter(function (q) { return S.topics.has(q.topic); }).length;
  }
  function effectiveN() {
    var avail = availableCount();
    return S.n === "all" || S.n >= avail ? avail : S.n;
  }

  function renderSetup() {
    S.view = "setup";
    setChrome(false);
    var hero0 = $("#hero"); if (hero0) hero0.classList.remove("hidden");
    stopTimer();
    window.onbeforeunload = null;
    var avail = availableCount();
    var eff = effectiveN();
    var best = getBest();

    var sizeBtns = SIZES.filter(function (n) { return n < avail; }).concat(["all"]).map(function (n) {
      var on = n === "all" ? eff === avail : S.n === n;
      return (
        '<button type="button" data-act="size" data-n="' + n + '" aria-pressed="' + on + '" ' +
        'class="focus-ring min-w-[3.25rem] rounded-md border px-3 py-2 text-sm font-medium transition ' +
        (on ? "border-accent bg-accent text-accentfg" : "border-line bg-panel text-ink hover:border-accent") + '">' +
        (n === "all" ? "All " + avail : n) + "</button>"
      );
    }).join("");

    var topicBtns = TOPICS.map(function (t) {
      var on = S.topics.has(t);
      var count = POOL.filter(function (q) { return q.topic === t; }).length;
      return (
        '<button type="button" data-act="topic" data-topic="' + esc(t) + '" aria-pressed="' + on + '" ' +
        'class="focus-ring rounded-md border px-3 py-1.5 text-sm transition ' +
        (on ? "border-accent bg-soft text-ink" : "border-line bg-panel text-mute line-through decoration-mute/50 hover:border-accent") + '">' +
        esc(t) + ' <span class="text-mute">' + count + "</span></button>"
      );
    }).join("");

    var bestHtml = best
      ? '<p class="text-sm text-mute">Your best on this page: <strong class="text-ink">' + best.score + " / " + best.total +
        "</strong> (" + best.pct + "%)</p>"
      : '<p class="text-sm text-mute">No attempts yet on this page.</p>';

    root.innerHTML =
      '<section aria-labelledby="setup-h" class="grid gap-10 lg:grid-cols-[1fr_20rem]">' +
      '<div class="space-y-8">' +
        '<div>' +
          '<h2 id="setup-h" class="font-serif text-2xl font-semibold tracking-tight">Set up your quiz</h2>' +
          '<p class="mt-2 max-w-prose text-mute">Answer every question, then submit to get your mark with explanations and the slides to revisit. ' +
            "Nothing is shown until you submit.</p>" +
        "</div>" +
        '<div><h3 class="mb-3 font-medium">Number of questions</h3><div class="flex flex-wrap gap-2" role="group" aria-label="Number of questions">' + sizeBtns + "</div></div>" +
        '<div><div class="mb-3 flex items-baseline justify-between gap-4"><h3 class="font-medium">Topics</h3>' +
          '<div class="text-sm"><button type="button" data-act="topics-all" class="focus-ring text-accent underline underline-offset-2">Select all</button>' +
          '<span class="px-2 text-mute" aria-hidden="true">/</span>' +
          '<button type="button" data-act="topics-none" class="focus-ring text-accent underline underline-offset-2">Clear</button></div></div>' +
          '<div class="flex flex-wrap gap-2" role="group" aria-label="Topics">' + topicBtns + "</div></div>" +
        '<div><h3 class="mb-3 font-medium">Order</h3>' +
          '<label class="inline-flex cursor-pointer items-center gap-3">' +
          '<input id="opt-shuffle" type="checkbox" class="focus-ring h-5 w-5 rounded border-line accent-[rgb(var(--accent))]"' + (S.shuffle ? " checked" : "") + ">" +
          '<span>Shuffle questions and answer choices</span></label>' +
          '<p class="mt-1 text-sm text-mute">Turn this off to go through the questions in slide order.</p></div>' +
      "</div>" +
      '<aside class="h-fit space-y-5 border-l-2 border-accent bg-panel p-6">' +
        '<p class="font-serif text-4xl font-semibold tabular-nums">' + eff + '<span class="text-lg font-normal text-mute"> questions</span></p>' +
        '<p class="text-sm text-mute">' + (SCOPE === "all" ? "From slides 1–100." : "From slides 1–30.") + " Multiple choice, true/false and numeric answers.</p>" +
        bestHtml +
        '<button type="button" data-act="start" ' + (eff === 0 ? "disabled " : "") +
          'class="focus-ring w-full rounded-md bg-accent px-4 py-3 font-semibold text-accentfg transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40">Start quiz</button>' +
        (eff === 0 ? '<p class="text-sm text-bad">Select at least one topic to start.</p>' : "") +
      "</aside></section>";
  }

  /* ---------- building a quiz ---------- */
  function buildItems(questions) {
    return questions.map(function (q) {
      var order = null;
      if (q.t === "mcq") {
        var idx = q.o.map(function (_, i) { return i; });
        order = S.shuffle ? shuffle(idx) : idx;
      }
      return { q: q, order: order };
    });
  }

  function startQuiz(questions) {
    var qs = questions;
    if (!qs) {
      var pool = POOL.filter(function (q) { return S.topics.has(q.topic); });
      if (S.shuffle) pool = shuffle(pool);
      qs = pool.slice(0, effectiveN());
    }
    S.items = buildItems(qs);
    S.ans = {};
    S.result = null;
    S.startedAt = Date.now();
    renderQuiz();
  }

  /* ---------- quiz view ---------- */
  function chips(q) {
    var lv = LEVELS[q.lv] || LEVELS.medium;
    return (
      '<span class="text-xs text-mute">Slide' + (/[–,-]/.test(q.s) ? "s" : "") + " " + esc(q.s) + "</span>" +
      '<span class="text-xs text-mute">' + esc(q.topic) + "</span>" +
      '<span class="text-xs font-medium ' + lv.cls + '">' + lv.label + "</span>"
    );
  }

  var OPT_BASE =
    "flex items-start gap-3 rounded-md border border-line bg-panel px-4 py-3 transition " +
    "hover:border-accent peer-checked:border-accent peer-checked:bg-soft peer-checked:ring-1 peer-checked:ring-accent " +
    "peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent " +
    "peer-checked:[&_.badge]:border-accent peer-checked:[&_.badge]:bg-accent peer-checked:[&_.badge]:text-accentfg";
  var BADGE =
    "badge mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-line text-xs font-semibold text-mute";

  function optionHtml(name, value, letter, text) {
    return (
      '<label class="block cursor-pointer">' +
      '<input class="peer sr-only" type="radio" name="' + name + '" value="' + value + '">' +
      '<span class="' + OPT_BASE + '"><span class="' + BADGE + '" aria-hidden="true">' + letter + "</span>" +
      '<span class="min-w-0 flex-1">' + text + "</span></span></label>"
    );
  }

  function questionHtml(item, i) {
    var q = item.q;
    var name = "q-" + q.id;
    var body = "";
    if (q.t === "mcq") {
      body = item.order.map(function (orig, pos) {
        return optionHtml(name, pos, LETTERS[pos], q.o[orig]);
      }).join("");
      body = '<div class="grid gap-2" role="radiogroup" aria-labelledby="p-' + q.id + '">' + body + "</div>";
    } else if (q.t === "tf") {
      body =
        '<div class="grid gap-2 sm:grid-cols-2" role="radiogroup" aria-labelledby="p-' + q.id + '">' +
        optionHtml(name, "true", "T", "True") + optionHtml(name, "false", "F", "False") + "</div>";
    } else {
      body =
        '<div class="flex flex-wrap items-center gap-3">' +
        '<label class="sr-only" for="n-' + q.id + '">Your numeric answer</label>' +
        '<input id="n-' + q.id + '" data-num="' + q.id + '" type="text" inputmode="decimal" autocomplete="off" spellcheck="false" placeholder="Type a number" ' +
        'class="focus-ring w-44 rounded-md border border-line bg-panel px-3 py-2 tabular-nums text-ink placeholder:text-mute/70 focus:border-accent">' +
        (q.u ? '<span class="text-mute">' + esc(q.u) + "</span>" : "") +
        '<span class="text-sm text-mute">Round to a sensible number of digits.</span></div>';
    }
    return (
      '<article id="card-' + q.id + '" data-card="' + q.id + '" class="scroll-mt-28 border-l-2 border-line pl-5 transition-colors data-[missing=true]:border-bad sm:pl-7" data-missing="false">' +
      '<div class="mb-2 flex flex-wrap items-baseline gap-x-4 gap-y-1">' +
        '<span class="font-serif text-lg font-semibold tabular-nums">' + (i + 1) + ".</span>" + chips(q) + "</div>" +
      '<p id="p-' + q.id + '" class="mb-4 max-w-[68ch] font-serif text-lg leading-relaxed">' + q.q + "</p>" +
      body +
      '<p data-err="' + q.id + '" class="mt-2 hidden text-sm text-bad" role="alert"></p>' +
      "</article>"
    );
  }

  function renderQuiz() {
    S.view = "quiz";
    var total = S.items.length;
    $("#quizbar-inner").innerHTML =
      '<div class="flex flex-wrap items-center gap-x-6 gap-y-2">' +
        '<div class="min-w-[12rem] flex-1">' +
          '<div class="mb-2 flex justify-between text-sm"><span><strong id="answered" class="tabular-nums">0</strong> of ' + total + ' answered</span>' +
          '<span class="tabular-nums text-mute" id="timer" aria-label="Elapsed time">0:00</span></div>' +
          '<div class="axis" role="progressbar" aria-label="Quiz progress" aria-valuemin="0" aria-valuemax="' + total + '" aria-valuenow="0" id="bar">' +
          '<div class="beam" id="beam" style="width:0%"></div></div>' +
        "</div>" +
        '<button type="button" data-act="submit" id="submit-top" class="focus-ring rounded-md px-4 py-2 text-sm font-semibold transition"></button>' +
      "</div>";
    setChrome(true);
    root.innerHTML =
      '<form id="quiz-form" novalidate class="mx-auto mt-8 max-w-3xl space-y-12" onsubmit="return false">' +
        S.items.map(questionHtml).join("") +
        '<div class="flex flex-wrap items-center gap-4 border-t border-line pt-8">' +
          '<button type="button" data-act="submit" id="submit-bottom" class="focus-ring rounded-md px-6 py-3 font-semibold transition"></button>' +
          '<button type="button" data-act="quit" class="focus-ring text-sm text-mute underline underline-offset-2 hover:text-ink">Leave quiz</button>' +
        "</div>" +
      "</form>";
    stopTimer();
    timerId = setInterval(function () {
      var t = $("#timer");
      if (t) t.textContent = fmtTime(Date.now() - S.startedAt);
    }, 1000);
    window.onbeforeunload = function (e) {
      if (answeredCount() > 0) { e.preventDefault(); e.returnValue = ""; return ""; }
    };
    updateProgress();
    window.scrollTo({ top: 0 });
  }

  function stopTimer() { if (timerId) { clearInterval(timerId); timerId = null; } }

  function isAnswered(item) {
    var a = S.ans[item.q.id];
    if (item.q.t === "num") return !isNaN(parseNum(a));
    return a !== undefined && a !== null && a !== "";
  }
  function answeredCount() { return S.items.filter(isAnswered).length; }

  var BTN_READY = "bg-accent text-accentfg hover:opacity-90";
  var BTN_WAIT = "border border-line bg-panel text-mute hover:border-accent";

  function updateProgress() {
    var total = S.items.length;
    var done = answeredCount();
    var left = total - done;
    var pct = total ? (done / total) * 100 : 0;
    var a = $("#answered"); if (a) a.textContent = done;
    var beam = $("#beam"); if (beam) { beam.style.width = pct + "%"; beam.style.setProperty("--beam-full", pct > 0 ? (10000 / pct) + "%" : "100%"); }
    var bar = $("#bar"); if (bar) bar.setAttribute("aria-valuenow", done);
    ["#submit-top", "#submit-bottom"].forEach(function (sel) {
      var b = $(sel);
      if (!b) return;
      var base = sel === "#submit-top" ? "focus-ring rounded-md px-4 py-2 text-sm font-semibold transition " : "focus-ring rounded-md px-6 py-3 font-semibold transition ";
      b.className = base + (left === 0 ? BTN_READY : BTN_WAIT);
      b.textContent = left === 0 ? "Submit and get my mark" : "Answer " + left + " more to submit";
    });
  }

  function clearMissing(id) {
    var card = $("#card-" + id);
    if (card) card.setAttribute("data-missing", "false");
    var err = $('[data-err="' + id + '"]');
    if (err) { err.classList.add("hidden"); err.textContent = ""; }
  }

  function onAnswerEvent(target) {
    var id, val;
    if (target.matches && target.matches('input[type="radio"]')) {
      id = target.name.replace(/^q-/, "");
      var item = S.items.filter(function (it) { return it.q.id === id; })[0];
      if (!item) return;
      val = target.value;
      S.ans[id] = item.q.t === "tf" ? val === "true" : Number(val);
    } else if (target.matches && target.matches("[data-num]")) {
      id = target.getAttribute("data-num");
      S.ans[id] = target.value;
      if (isNaN(parseNum(target.value))) { delete S.ans[id]; }
    } else {
      return;
    }
    clearMissing(id);
    updateProgress();
  }

  function trySubmit() {
    var missing = S.items.filter(function (it) { return !isAnswered(it); });
    if (missing.length) {
      S.items.forEach(function (it) { clearMissing(it.q.id); });
      missing.forEach(function (it) {
        var card = $("#card-" + it.q.id);
        if (card) card.setAttribute("data-missing", "true");
        var err = $('[data-err="' + it.q.id + '"]');
        if (err) {
          var raw = it.q.t === "num" ? ($("#n-" + it.q.id) || {}).value : "";
          err.textContent = it.q.t === "num" && raw ? "Enter a number, for example 34.5 or -0.5." : "Choose an answer to continue.";
          err.classList.remove("hidden");
        }
      });
      var first = $("#card-" + missing[0].q.id);
      if (first) first.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "center" });
      toast(missing.length + (missing.length === 1 ? " question still needs" : " questions still need") + " an answer before you can submit.");
      return;
    }
    grade();
  }

  /* ---------- grading ---------- */
  function isCorrect(item) {
    var q = item.q;
    var a = S.ans[q.id];
    if (q.t === "mcq") return item.order[a] === q.a;
    if (q.t === "tf") return a === q.a;
    var v = parseNum(a);
    return !isNaN(v) && Math.abs(v - q.a) <= q.tol + 1e-9;
  }

  function grade() {
    stopTimer();
    window.onbeforeunload = null;
    var elapsed = Date.now() - S.startedAt;
    var perItem = S.items.map(function (it) { return { item: it, ok: isCorrect(it) }; });
    var score = perItem.filter(function (r) { return r.ok; }).length;
    var total = perItem.length;
    var pct = Math.round((score / total) * 100);
    S.result = { perItem: perItem, score: score, total: total, pct: pct, elapsed: elapsed };
    S.reviewFilter = "all";

    var prev = getBest();
    var isBest = !prev || pct > prev.pct || (pct === prev.pct && total > prev.total);
    if (isBest) store.set(bestKey, JSON.stringify({ score: score, total: total, pct: pct, date: new Date().toISOString() }));
    S.result.isBest = isBest && (!prev || pct > prev.pct);
    renderResult();
  }

  /* ---------- result view ---------- */
  function verdict(pct) {
    if (pct >= 90) return "Outstanding. You have this material down.";
    if (pct >= 75) return "Strong result. A few details to tighten up.";
    if (pct >= 60) return "Good effort. Read the explanations for the ones you missed.";
    if (pct >= 50) return "A pass, with room to improve. Revisit the slides listed below.";
    return "Not there yet. Re-read the slides listed below, then retake the quiz.";
  }

  function slidesToRevisit(wrong) {
    var set = {};
    wrong.forEach(function (r) { (r.item.q.s.match(/\d+/g) || []).forEach(function (n) { set[n] = true; }); });
    var nums = Object.keys(set).map(Number).sort(function (a, b) { return a - b; });
    // compress runs: 5,6,7,9 -> 5–7, 9
    var out = [], i = 0;
    while (i < nums.length) {
      var j = i;
      while (j + 1 < nums.length && nums[j + 1] === nums[j] + 1) j++;
      out.push(j > i ? nums[i] + "–" + nums[j] : String(nums[i]));
      i = j + 1;
    }
    return out.join(", ");
  }

  function breakdownRows(groups) {
    return Object.keys(groups).map(function (k) {
      var g = groups[k];
      var p = Math.round((g.ok / g.n) * 100);
      return (
        '<li class="grid grid-cols-[1fr_auto] items-baseline gap-x-4 gap-y-1">' +
        '<span>' + esc(k) + '</span><span class="tabular-nums text-sm text-mute">' + g.ok + " / " + g.n + "</span>" +
        '<div class="col-span-2 axis" aria-hidden="true"><div class="beam" style="width:' + p + "%;--beam-full:" + (p > 0 ? 10000 / p : 100) + '%"></div></div></li>'
      );
    }).join("");
  }

  function reviewOption(letter, text, state) {
    var cls = "border-line bg-panel text-mute";
    var tag = "";
    if (state === "correct") { cls = "border-ok bg-ok/10 text-ink"; tag = "Correct answer"; }
    if (state === "wrong") { cls = "border-bad bg-bad/10 text-ink"; tag = "Your answer"; }
    if (state === "right-picked") { cls = "border-ok bg-ok/10 text-ink"; tag = "Your answer, correct"; }
    return (
      '<div class="flex items-start gap-3 rounded-md border px-4 py-2.5 ' + cls + '">' +
      '<span class="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-current text-xs font-semibold" aria-hidden="true">' + letter + "</span>" +
      '<span class="min-w-0 flex-1">' + text + "</span>" +
      (tag ? '<span class="shrink-0 pl-2 text-xs font-semibold ' + (state === "wrong" ? "text-bad" : "text-ok") + '">' + tag + "</span>" : "") +
      "</div>"
    );
  }

  function reviewHtml(r, i) {
    var q = r.item.q, a = S.ans[q.id], body = "";
    if (q.t === "mcq") {
      body = '<div class="grid gap-2">' + r.item.order.map(function (orig, pos) {
        var isRight = orig === q.a, picked = pos === a;
        var st = isRight && picked ? "right-picked" : isRight ? "correct" : picked ? "wrong" : "none";
        return reviewOption(LETTERS[pos], q.o[orig], st);
      }).join("") + "</div>";
    } else if (q.t === "tf") {
      body = '<div class="grid gap-2 sm:grid-cols-2">' + [true, false].map(function (v) {
        var isRight = v === q.a, picked = v === a;
        var st = isRight && picked ? "right-picked" : isRight ? "correct" : picked ? "wrong" : "none";
        return reviewOption(v ? "T" : "F", v ? "True" : "False", st);
      }).join("") + "</div>";
    } else {
      body =
        '<p class="tabular-nums">Your answer: <strong class="' + (r.ok ? "text-ok" : "text-bad") + '">' + esc(a) + " " + esc(q.u || "") + "</strong>" +
        (r.ok ? "" : ' <span class="text-mute">Correct answer: </span><strong class="text-ok">' + fmtNum(q.a) + " " + esc(q.u || "") + "</strong>") +
        (q.tol ? ' <span class="text-sm text-mute">(accepted within ±' + fmtNum(q.tol) + ")</span>" : "") + "</p>";
    }
    return (
      '<article class="border-l-2 ' + (r.ok ? "border-ok" : "border-bad") + ' pl-5 sm:pl-7" data-ok="' + r.ok + '">' +
      '<div class="mb-2 flex flex-wrap items-baseline gap-x-4 gap-y-1">' +
        '<span class="font-serif text-lg font-semibold tabular-nums">' + (i + 1) + ".</span>" +
        '<span class="text-sm font-semibold ' + (r.ok ? "text-ok" : "text-bad") + '">' + (r.ok ? "Correct" : "Incorrect") + "</span>" + chips(q) + "</div>" +
      '<p class="mb-4 max-w-[68ch] font-serif text-lg leading-relaxed">' + q.q + "</p>" + body +
      '<p class="mt-4 max-w-[68ch] bg-soft px-4 py-3 text-[0.95rem] leading-relaxed"><span class="font-semibold">Why: </span>' + q.e + "</p>" +
      "</article>"
    );
  }

  function renderResult() {
    S.view = "result";
    setChrome(false);
    var heroR = $("#hero"); if (heroR) heroR.classList.add("hidden");
    var R = S.result;
    var wrong = R.perItem.filter(function (r) { return !r.ok; });
    var topicG = {}, levelG = {};
    R.perItem.forEach(function (r) {
      var q = r.item.q;
      topicG[q.topic] = topicG[q.topic] || { n: 0, ok: 0 };
      topicG[q.topic].n++; if (r.ok) topicG[q.topic].ok++;
      var lv = q.lv.charAt(0).toUpperCase() + q.lv.slice(1);
      levelG[lv] = levelG[lv] || { n: 0, ok: 0 };
      levelG[lv].n++; if (r.ok) levelG[lv].ok++;
    });
    var best = getBest();
    var revisit = slidesToRevisit(wrong);

    root.innerHTML =
      '<section class="mx-auto max-w-3xl" aria-labelledby="res-h">' +
        '<h2 id="res-h" tabindex="-1" class="sr-only">Your result</h2>' +
        '<div class="space-y-6">' +
          '<p class="font-serif font-semibold leading-none tracking-tight"><span class="text-7xl tabular-nums sm:text-8xl">' + R.score + '</span><span class="text-3xl text-mute sm:text-4xl"> / ' + R.total + "</span></p>" +
          '<div><div class="axis" role="img" aria-label="Score ' + R.pct + ' percent"><div class="beam" style="width:' + R.pct + "%;--beam-full:" + (R.pct > 0 ? 10000 / R.pct : 100) + '%"></div></div></div>' +
          '<p class="text-xl font-medium">' + R.pct + "%. " + esc(verdict(R.pct)) + "</p>" +
          '<p class="text-sm text-mute">Time taken ' + fmtTime(R.elapsed) + ". " +
            (R.isBest ? "New best score for this page." : best ? "Best on this page: " + best.score + " / " + best.total + " (" + best.pct + "%)." : "") + "</p>" +
          (wrong.length ? '<p class="max-w-prose"><span class="font-medium">Slides to revisit:</span> ' + esc(revisit) + "</p>" : '<p class="font-medium text-ok">Every answer was correct.</p>') +
        "</div>" +
        '<div class="mt-8 flex flex-wrap gap-3 print:hidden">' +
          '<button type="button" data-act="retake" class="focus-ring rounded-md bg-accent px-4 py-2.5 font-semibold text-accentfg transition hover:opacity-90">Retake this quiz</button>' +
          (wrong.length ? '<button type="button" data-act="retry-wrong" class="focus-ring rounded-md border border-line bg-panel px-4 py-2.5 font-medium transition hover:border-accent">Retry the ' + wrong.length + " I missed</button>" : "") +
          '<button type="button" data-act="new" class="focus-ring rounded-md border border-line bg-panel px-4 py-2.5 font-medium transition hover:border-accent">New quiz</button>' +
          '<button type="button" data-act="print" class="focus-ring rounded-md border border-line bg-panel px-4 py-2.5 font-medium transition hover:border-accent">Print or save as PDF</button>' +
        "</div>" +
        '<div class="mt-12 grid gap-10 sm:grid-cols-2">' +
          '<div><h3 class="mb-4 font-serif text-xl font-semibold">By topic</h3><ul class="space-y-4">' + breakdownRows(topicG) + "</ul></div>" +
          '<div><h3 class="mb-4 font-serif text-xl font-semibold">By difficulty</h3><ul class="space-y-4">' + breakdownRows(levelG) + "</ul></div>" +
        "</div>" +
        '<div class="mt-14 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-8">' +
          '<h3 class="font-serif text-xl font-semibold">Review your answers</h3>' +
          '<div class="flex gap-2 print:hidden" role="group" aria-label="Filter review">' +
            '<button type="button" data-act="filter" data-f="all" id="f-all" class="focus-ring rounded-md border px-3 py-1.5 text-sm"></button>' +
            '<button type="button" data-act="filter" data-f="wrong" id="f-wrong" class="focus-ring rounded-md border px-3 py-1.5 text-sm"></button>' +
          "</div>" +
        "</div>" +
        '<div id="review" class="mt-8 space-y-12">' + R.perItem.map(reviewHtml).join("") + "</div>" +
      "</section>";
    applyReviewFilter();
    window.scrollTo({ top: 0 });
    var h = $("#res-h"); if (h) h.focus({ preventScroll: true });
  }

  function applyReviewFilter() {
    var R = S.result;
    var wrongN = R.perItem.filter(function (r) { return !r.ok; }).length;
    var f = S.reviewFilter;
    var on = "border-accent bg-accent text-accentfg", off = "border-line bg-panel text-ink hover:border-accent";
    var a = $("#f-all"), w = $("#f-wrong");
    if (a) { a.className = "focus-ring rounded-md border px-3 py-1.5 text-sm " + (f === "all" ? on : off); a.textContent = "All " + R.total; a.setAttribute("aria-pressed", f === "all"); }
    if (w) { w.className = "focus-ring rounded-md border px-3 py-1.5 text-sm " + (f === "wrong" ? on : off); w.textContent = "Missed " + wrongN; w.setAttribute("aria-pressed", f === "wrong"); }
    var cards = document.querySelectorAll("#review [data-ok]");
    Array.prototype.forEach.call(cards, function (c) {
      var ok = c.getAttribute("data-ok") === "true";
      c.classList.toggle("hidden", f === "wrong" && ok);
    });
  }

  /* ---------- events ---------- */
  document.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-act]");
    if (!btn) return;
    var act = btn.getAttribute("data-act");
    if (act === "size") { var n = btn.getAttribute("data-n"); S.n = n === "all" ? "all" : Number(n); renderSetup(); }
    else if (act === "topic") {
      var t = btn.getAttribute("data-topic");
      if (S.topics.has(t)) S.topics.delete(t); else S.topics.add(t);
      renderSetup();
    }
    else if (act === "topics-all") { S.topics = new Set(TOPICS); renderSetup(); }
    else if (act === "topics-none") { S.topics = new Set(); renderSetup(); }
    else if (act === "start") { startQuiz(); }
    else if (act === "submit") { trySubmit(); }
    else if (act === "quit") {
      if (answeredCount() === 0 || window.confirm("Leave the quiz? Your answers will be lost.")) renderSetup();
    }
    else if (act === "retake") { startQuiz(S.items.map(function (it) { return it.q; })); }
    else if (act === "retry-wrong") {
      startQuiz(S.result.perItem.filter(function (r) { return !r.ok; }).map(function (r) { return r.item.q; }));
    }
    else if (act === "new") { renderSetup(); window.scrollTo({ top: 0 }); }
    else if (act === "print") { window.print(); }
    else if (act === "filter") { S.reviewFilter = btn.getAttribute("data-f"); applyReviewFilter(); }
  });

  root.addEventListener("change", function (e) {
    if (e.target.id === "opt-shuffle") { S.shuffle = e.target.checked; return; }
    if (S.view === "quiz") onAnswerEvent(e.target);
  });
  root.addEventListener("input", function (e) {
    if (S.view === "quiz" && e.target.matches("[data-num]")) onAnswerEvent(e.target);
  });
  root.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && e.target.matches && e.target.matches("[data-num]")) {
      e.preventDefault();
      var inputs = Array.prototype.slice.call(document.querySelectorAll("[data-num]"));
      var next = inputs[inputs.indexOf(e.target) + 1];
      if (next) next.focus();
    }
  });

  /* ---------- boot ---------- */
  if (!POOL.length) {
    root.innerHTML = '<p class="text-bad">The question bank failed to load. Check that assets/questions.js is deployed next to this page.</p>';
  } else {
    renderSetup();
  }

  // exposed for automated tests only
  window.__quiz = { state: S, pool: POOL };
})();
