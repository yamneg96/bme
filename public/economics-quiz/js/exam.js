/* Exam engine — setup → exam (one question per page) → marked result. Answers are embedded in js/q-part*.js. */
(function () {
  "use strict";

  const cfg = window.EXAM;
  const CH_NAMES = {
    1: "Basics of Economics",
    2: "Theory of Demand and Supply",
    3: "Theory of Consumer Behaviour",
    4: "Theory of Production and Cost",
    5: "Market Structure",
    6: "Fundamental Concepts of Macroeconomics",
  };
  const BANK = (window.QB || []).map((q, i) => Object.assign({ id: i + 1 }, q));
  const KEY = "econ-exam-v2-" + cfg.key;
  const STATS_KEY = "econ-exam-stats-v1";
  const THEME_KEY = "econ-theme";
  const LETTERS = ["A", "B", "C", "D", "E"];
  const DEFAULT_SECS_PER_Q = 90; // 1:30 per question unless the user changes it

  /* ── helpers ── */
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const shuffle = (a) => {
    a = a.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  const load = (k) => { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } };
  const save = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* storage unavailable */ } };
  const store = {
    get: () => load(KEY),
    set: (v) => save(KEY, v),
    del() { try { localStorage.removeItem(KEY); } catch (e) { /* ignore */ } },
  };
  const fmtTime = (ms) => {
    const s = Math.max(0, Math.round(ms / 1000));
    const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), r = s % 60;
    const p = (n) => String(n).padStart(2, "0");
    return (h ? h + ":" : "") + p(m) + ":" + p(r);
  };

  /* ── theme ── */
  const themeBtn = $("#theme-btn");
  const applyTheme = (t) => {
    document.documentElement.dataset.theme = t;
    if (themeBtn) themeBtn.textContent = t === "dark" ? "☀️" : "🌙";
  };
  applyTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      applyTheme(next);
      try { localStorage.setItem(THEME_KEY, next); } catch (e) { /* ignore */ }
    });
  }

  /* ── dashboard stats (attempts = every time "Start exam" actually starts an exam) ── */
  const getStats = () => {
    const s = load(STATS_KEY);
    return s && s.v === 1 ? s : { v: 1, total: 0, exams: {} };
  };
  const mine = (s) => (s.exams[cfg.key] = s.exams[cfg.key] || { starts: 0, finished: 0, best: null, last: null });
  function recordStart() {
    const s = getStats();
    s.total++;
    mine(s).starts++;
    save(STATS_KEY, s);
  }
  function recordFinish(score, n) {
    const s = getStats();
    const m = mine(s);
    const pct = Math.round((score / n) * 1000) / 10;
    m.finished++;
    m.last = pct;
    if (m.best === null || pct > m.best) m.best = pct;
    save(STATS_KEY, s);
  }
  function renderDash() {
    const el = $("#dash");
    if (!el) return;
    const s = getStats();
    const m = mine(s);
    const pct = (v) => (v === null ? "–" : v + "%");
    el.innerHTML = `
      <div class="tile hot"><dt>Exam starts</dt><dd>${m.starts}</dd><small>this exam · ${s.total} across all exams</small></div>
      <div class="tile"><dt>Completed</dt><dd>${m.finished}</dd><small>finished &amp; marked</small></div>
      <div class="tile"><dt>Best score</dt><dd>${pct(m.best)}</dd><small>this exam</small></div>
      <div class="tile"><dt>Last score</dt><dd>${pct(m.last)}</dd><small>this exam</small></div>`;
  }

  /* ── state ── */
  let S = store.get();
  if (!S || S.v !== 2 || !Array.isArray(S.paper) || S.paper.some((p) => !BANK[p.id - 1])) S = null;
  if (S) {
    S.hints = S.hints || {};
    S.shown = S.shown || {};
    S.setup.mode = S.setup.mode || "exam";
    S.setup.marking = S.setup.marking || "end";
  }
  let timerHandle = null;
  let keyHandler = null;

  const app = $("#app");
  const poolFor = (chapters) => BANK.filter((q) => chapters.includes(q.ch));

  const view = (item) => {
    const q = BANK[item.id - 1];
    const opts = q.t === "tf" ? ["True", "False"] : item.perm.map((i) => q.o[i]);
    const correct = q.t === "tf" ? (q.a ? 0 : 1) : item.perm.indexOf(0);
    return { q, opts, correct };
  };

  function buildPaper(setup) {
    let pool = poolFor(setup.chapters);
    if (setup.count && setup.count < pool.length) pool = shuffle(pool).slice(0, setup.count);
    pool = setup.order === "random" ? shuffle(pool) : pool.slice().sort((a, b) => a.id - b.id);
    return pool.map((q) => {
      const n = q.t === "tf" ? 2 : q.o.length;
      const idx = Array.from({ length: n }, (_, i) => i);
      return { id: q.id, perm: q.t === "tf" || !setup.shuffleOpts ? idx : shuffle(idx) };
    });
  }

  /* total seconds for a paper of n questions, from the setup's timing choice */
  const totalSeconds = (t, n) => (t.mode === "none" ? 0 : t.mode === "custom" ? Math.round(t.minutes * 60) : t.perQ * n);

  function startExam(setup) {
    const paper = buildPaper(setup);
    S = {
      v: 2, phase: "exam", setup, paper, answers: {}, flags: {}, hints: {}, shown: {}, cur: 0,
      limit: totalSeconds(setup.timing, paper.length) * 1000,
      start: Date.now(), end: null,
    };
    store.set(S);
    recordStart();
    render();
    window.scrollTo({ top: 0 });
  }

  function finishExam() {
    if (!S || S.phase !== "exam") return;
    S.phase = "result";
    S.end = Math.min(Date.now(), S.limit ? S.start + S.limit : Infinity);
    store.set(S);
    clearInterval(timerHandle);
    const score = S.paper.filter((p) => view(p).correct === S.answers[p.id]).length;
    recordFinish(score, S.paper.length);
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function reset() {
    clearInterval(timerHandle);
    store.del();
    S = null;
    render();
    window.scrollTo({ top: 0 });
  }

  /* ── practice / marking preferences ── */
  const PREFS_KEY = "econ-exam-prefs-v1";
  const getPrefs = () => Object.assign({ mode: "exam", marking: "end" }, load(PREFS_KEY));

  /* A hint that nudges without giving the answer away: rule out two wrong options (MCQ) and point at the chapter. */
  function hintFor(item) {
    const { q, opts, correct } = view(item);
    const where = `Review Chapter ${q.ch} · ${CH_NAMES[q.ch]}.`;
    if (q.t === "tf") {
      const abs = q.q.match(/(always|never|only|all|none|every|must|cannot)/i);
      return (abs ? `Watch the absolute word “${abs[1]}”. ` : "Read the statement carefully for qualifiers. ") + where;
    }
    const wrong = opts.map((_, k) => k).filter((k) => k !== correct)
      .sort((a, b) => ((a + 1) * 2654435761 + item.id * 40503) % 97 - ((b + 1) * 2654435761 + item.id * 40503) % 97)
      .slice(0, 2).sort((a, b) => a - b);
    return `It is not ${wrong.map((k) => LETTERS[k]).join(" or ")}. ${where}`;
  }
  const eliminated = (item) => {
    if (!S.hints[item.id] || view(item).q.t === "tf") return [];
    const m = hintFor(item).match(/^It is not ([A-E])(?: or ([A-E]))?\./);
    return m ? [m[1], m[2]].filter(Boolean).map((l) => LETTERS.indexOf(l)) : [];
  };

  /* ───────────── SETUP ───────────── */
  function renderSetup() {
    const chapterRows = cfg.chapters
      .map((c) => `<label class="chk">
          <input type="checkbox" name="chap" value="${c}" checked />
          <span class="grow"><b>Chapter ${c}</b> · ${esc(CH_NAMES[c])}</span>
          <span class="xs muted">${poolFor([c]).length} Qs</span>
        </label>`)
      .join("");

    app.innerHTML = `
      <section class="card pad" aria-labelledby="setup-h">
        <h2 id="setup-h" class="title">Set up your exam</h2>
        <p class="muted sm" style="margin:.3rem 0 0">Questions appear one at a time. Press <b>Finish &amp; get my mark</b> at the end to see your score, a chapter breakdown, and the correct answer with an explanation for every question.</p>

        <form id="setup-form" class="grid2" style="margin-top:1.4rem">
          <fieldset>
            <legend class="label">Chapters to include</legend>
            ${chapterRows}
            <p id="avail" class="sm muted" style="margin:.4rem 0 0"></p>
          </fieldset>

          <div class="stack">
            <div>
              <label class="label" for="count">Number of questions</label>
              <select id="count" class="field"></select>
            </div>
            <div>
              <label class="label" for="order">Question order</label>
              <select id="order" class="field">
                <option value="chapter">By chapter (as in the module)</option>
                <option value="random">Random mix</option>
              </select>
            </div>
            <div>
              <label class="label" for="timing">Timer</label>
              <select id="timing" class="field">
                <option value="90" selected>1:30 per question (default)</option>
                <option value="60">1:00 per question</option>
                <option value="120">2:00 per question</option>
                <option value="custom">Custom total time…</option>
                <option value="none">No time limit</option>
              </select>
              <div id="custom-wrap" class="hidden" style="margin-top:.5rem">
                <label class="label xs" for="custom-min">Total minutes</label>
                <input id="custom-min" class="field" type="number" min="1" max="600" value="30" />
              </div>
              <p id="time-hint" class="hint"></p>
            </div>
            <label class="chk"><input id="shuf" type="checkbox" checked /> <span>Shuffle answer options</span></label>
          </div>

          <div class="span2 grid2" style="gap:1rem">
            <div>
              <span class="label">Mode</span>
              <div class="seg" role="radiogroup" aria-label="Mode">
                <label><input type="radio" name="mode" value="exam" /><span>📝 Exam</span></label>
                <label><input type="radio" name="mode" value="practice" /><span>💡 Practice</span></label>
              </div>
              <p id="mode-hint" class="hint"></p>
            </div>
            <div>
              <span class="label">Marking</span>
              <div class="seg" role="radiogroup" aria-label="Marking">
                <label><input type="radio" name="marking" value="end" /><span>🏁 At the end</span></label>
                <label><input type="radio" name="marking" value="instant" /><span>⚡ After each answer</span></label>
              </div>
              <p id="marking-hint" class="hint"></p>
            </div>
          </div>

          <div class="span2 row">
            <button type="submit" id="start-btn" class="btn btn-primary btn-lg">Start exam →</button>
            <span id="setup-msg" class="err" role="alert"></span>
          </div>
        </form>
      </section>`;

    const form = $("#setup-form");
    const countSel = $("#count");
    const timing = $("#timing");
    const customMin = $("#custom-min");

    const selected = () => $$('input[name="chap"]:checked', form).map((i) => +i.value);
    const questionTotal = () => {
      const n = poolFor(selected()).length;
      return +countSel.value && +countSel.value < n ? +countSel.value : n;
    };
    const timingValue = () =>
      timing.value === "custom" ? { mode: "custom", minutes: Math.max(1, +customMin.value || 1) }
      : timing.value === "none" ? { mode: "none" }
      : { mode: "perQ", perQ: +timing.value };
    const hint = () => {
      $("#custom-wrap").classList.toggle("hidden", timing.value !== "custom");
      const n = questionTotal();
      const secs = totalSeconds(timingValue(), n);
      $("#time-hint").textContent = secs
        ? `Total time for ${n} question${n === 1 ? "" : "s"}: ${fmtTime(secs * 1000)}. The exam is marked automatically when time runs out.`
        : "No time limit.";
    };
    const refresh = () => {
      const n = poolFor(selected()).length;
      $("#avail").textContent = n ? `${n} questions available in your selection.` : "Select at least one chapter.";
      const prev = countSel.value;
      const opts = [{ v: 0, t: `All ${n} questions` }];
      [20, 30, 50, 75, 100].forEach((k) => { if (k < n) opts.push({ v: k, t: `${k} random questions` }); });
      countSel.innerHTML = opts.map((o) => `<option value="${o.v}">${o.t}</option>`).join("");
      if (opts.some((o) => String(o.v) === prev)) countSel.value = prev;
      hint();
    };
    const prefs = getPrefs();
    $(`input[name="mode"][value="${prefs.mode}"]`, form).checked = true;
    $(`input[name="marking"][value="${prefs.marking}"]`, form).checked = true;
    const picked = (n) => $(`input[name="${n}"]:checked`, form).value;
    const explain = () => {
      $("#mode-hint").textContent = picked("mode") === "practice"
        ? "Hints and the correct answer with its explanation are available while you work."
        : "Real exam conditions: no hints and no answers until you finish.";
      $("#marking-hint").textContent = picked("marking") === "instant"
        ? "Each answer is marked as soon as you give it."
        : "Everything is marked together when you finish.";
    };
    form.addEventListener("change", () => { refresh(); explain(); });
    customMin.addEventListener("input", hint);
    refresh();
    explain();

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const chapters = selected();
      if (!chapters.length) { $("#setup-msg").textContent = "Please select at least one chapter."; return; }
      startExam({
        chapters,
        count: +countSel.value,
        order: $("#order").value,
        shuffleOpts: $("#shuf").checked,
        timing: timingValue(),
        mode: picked("mode"),
        marking: picked("marking"),
      });
      save(PREFS_KEY, { mode: picked("mode"), marking: picked("marking") });
    });
  }

  /* ───────────── EXAM (one question per page) ───────────── */
  const answeredCount = () => S.paper.filter((p) => S.answers[p.id] !== undefined).length;

  function renderExam() {
    const N = S.paper.length;
    app.innerHTML = `
      <div class="card examhead">
        <div class="row">
          <div class="grow" style="min-width:9rem">
            <div class="row sm" style="justify-content:space-between;gap:.5rem"><span><b id="ans-count">0</b> / ${N} answered</span><span id="ans-pct" class="muted"></span></div>
            <div class="progress" style="margin-top:.3rem"><div id="bar" style="width:0%"></div></div>
          </div>
          <div id="timer" class="timer ${S.limit ? "" : "hidden"}" aria-live="off"></div>
          <button id="finish-btn" class="btn btn-primary">Finish &amp; get my mark</button>
        </div>
      </div>

      <div class="layout">
        <section id="qpane" class="card pad" aria-live="polite"></section>
        <aside>
          <div class="card pad" style="padding:1rem">
            <b class="sm">Question map</b>
            <div id="map" class="map"></div>
            <p class="xs muted" style="margin:.8rem 0 0">Highlighted = answered · dot = marked for review</p>
            <p class="xs muted" style="margin:.5rem 0 0"><kbd>←</kbd> <kbd>→</kbd> navigate · <kbd>A</kbd>–<kbd>D</kbd> answer · <kbd>F</kbd> mark</p>
            <button id="quit-btn" class="btn btn-ghost sm" style="margin-top:.9rem;width:100%">Discard &amp; restart</button>
          </div>
        </aside>
      </div>`;

    $("#map").innerHTML = S.paper
      .map((item, i) => `<button type="button" class="dot" data-go="${i}" aria-label="Go to question ${i + 1}">${i + 1}</button>`)
      .join("");
    $("#map").addEventListener("click", (e) => {
      const b = e.target.closest("[data-go]");
      if (b) goTo(+b.dataset.go);
    });

    const askFinish = () => {
      const left = N - answeredCount();
      if (!left) return finishExam();
      openModal(
        `You still have <b>${left}</b> unanswered question${left > 1 ? "s" : ""}.`,
        "Unanswered questions are marked wrong. Do you want to finish now?",
        "Finish anyway",
        finishExam
      );
    };
    $("#finish-btn").addEventListener("click", askFinish);
    $("#quit-btn").addEventListener("click", () =>
      openModal("Discard this attempt?", "Your answers will be lost and you'll return to the setup screen.", "Discard", reset)
    );

    if (keyHandler) document.removeEventListener("keydown", keyHandler);
    keyHandler = (e) => {
      if (!S || S.phase !== "exam" || $(".modal") || e.ctrlKey || e.metaKey || e.altKey) return;
      if (/^(INPUT|SELECT|TEXTAREA)$/.test(e.target.tagName) && e.target.type !== "radio") return;
      const k = e.key.toLowerCase();
      if (k === "arrowright") goTo(S.cur + 1);
      else if (k === "arrowleft") goTo(S.cur - 1);
      else if (k === "f") toggleFlag();
      else if (LETTERS.map((l) => l.toLowerCase()).includes(k)) selectOption(LETTERS.map((l) => l.toLowerCase()).indexOf(k));
      else return;
      e.preventDefault();
    };
    document.addEventListener("keydown", keyHandler);

    showQuestion(false);
    startTimer();
  }

  function startTimer() {
    clearInterval(timerHandle);
    if (!S.limit) return;
    const tick = () => {
      const left = S.start + S.limit - Date.now();
      const el = $("#timer");
      if (!el) return clearInterval(timerHandle);
      el.textContent = "⏱ " + fmtTime(left);
      el.classList.toggle("low", left < S.limit * 0.2 && left >= S.limit * 0.08);
      el.classList.toggle("crit", left < S.limit * 0.08 || left < 30000);
      if (left <= 0) { clearInterval(timerHandle); finishExam(); }
    };
    tick();
    timerHandle = setInterval(tick, 1000);
  }

  function showQuestion(animate) {
    const N = S.paper.length;
    const i = S.cur;
    const item = S.paper[i];
    const { q, opts, correct } = view(item);
    const sel = S.answers[item.id];
    const flagged = !!S.flags[item.id];
    const practice = S.setup.mode === "practice";
    const instant = S.setup.marking === "instant";
    const revealed = !!S.shown[item.id];
    const checked = instant && sel !== undefined;
    const locked = revealed || (checked && !practice);
    const elim = eliminated(item);

    const options = opts
      .map((o, k) => {
        let cls = sel === k ? "sel" : "";
        if (revealed) cls = k === correct ? "right" : sel === k ? "wrong" : "dim";
        else if (checked && sel === k) cls = k === correct ? "right" : "wrong";
        else if (elim.includes(k)) cls += " elim";
        return `<label class="opt ${cls}${locked ? " locked" : ""}">
          <input class="sr-only" type="radio" name="q${item.id}" value="${k}" ${sel === k ? "checked" : ""} ${locked ? "disabled" : ""} />
          <span class="key">${LETTERS[k]}</span><span class="grow">${esc(o)}</span>
          ${elim.includes(k) && !revealed ? `<span class="tag tag-skip">ruled out</span>` : ""}
        </label>`;
      })
      .join("");

    /* feedback: verdict (instant marking) + practice helpers */
    let fb = "";
    if (checked && !revealed) {
      const ok = sel === correct;
      fb += `<div class="fb ${ok ? "fb-ok" : "fb-bad"}"><b>${ok ? "✓ Correct" : "✗ Not quite"}</b>${
        !practice ? " — answer locked; the full review comes when you finish." : ok ? "" : " — pick another answer, or use a hint."}</div>`;
      if (practice && ok) fb += `<p class="explain"><b>Explanation:</b> ${esc(q.e)}</p>`;
    }
    if (practice && !revealed) {
      if (S.hints[item.id]) fb += `<div class="fb fb-hint">💡 <b>Hint:</b> ${esc(hintFor(item))}</div>`;
      const canReveal = !instant || (checked && sel !== correct);
      fb += `<div class="row" style="margin-top:.7rem">${
        S.hints[item.id] ? "" : `<button type="button" class="btn btn-ghost" data-hint>💡 Hint</button>`
      }${canReveal ? `<button type="button" class="btn btn-ghost" data-reveal>👁 Show answer &amp; explanation</button>` : ""}</div>`;
    }
    if (revealed) {
      fb += `<div class="fb fb-hint"><b>Answer: ${LETTERS[correct]}.</b> ${esc(opts[correct])}</div><p class="explain"><b>Explanation:</b> ${esc(q.e)}</p>`;
    }

    const pane = $("#qpane");
    pane.innerHTML = `<div class="${animate ? "slide" : ""}">
      <div class="qhead">
        <span class="qnum">${i + 1}</span>
        <div class="grow">
          <div class="qmeta"><span class="pill">Question ${i + 1} of ${N}</span><span class="pill">Ch ${q.ch} · ${esc(CH_NAMES[q.ch])}</span><span class="pill">${q.t === "tf" ? "True / False" : "Choose one"}</span><span class="pill">${practice ? "💡 Practice" : "📝 Exam"} · ${instant ? "instant" : "end"} marking</span></div>
          <p class="qtext" style="margin:.4rem 0 0">${esc(q.q)}</p>
        </div>
      </div>
      <div class="opts" role="radiogroup" aria-label="Answer options">${options}</div>
      <div id="fb" aria-live="polite">${fb}</div>
      <div class="qfoot">
        <div class="grp">
          <button id="prev" class="btn btn-ghost" ${i === 0 ? "disabled" : ""}>← Previous</button>
          <button id="flag" class="btn btn-ghost btn-flag ${flagged ? "on" : ""}" aria-pressed="${flagged}">⚑ ${flagged ? "Marked" : "Mark for review"}</button>
        </div>
        ${i === N - 1
          ? `<button id="next" class="btn btn-primary">Review &amp; finish →</button>`
          : `<button id="next" class="btn btn-primary">Next →</button>`}
      </div>
    </div>`;

    $(".opts", pane).addEventListener("change", (e) => {
      const input = e.target.closest('input[type="radio"]');
      if (input) selectOption(+input.value);
    });
    $("#fb", pane).addEventListener("click", (e) => {
      const hintBtn = e.target.closest("[data-hint]");
      const revealBtn = e.target.closest("[data-reveal]");
      if (!hintBtn && !revealBtn) return;
      if (hintBtn) S.hints[item.id] = 1;
      if (revealBtn) S.shown[item.id] = 1;
      store.set(S);
      showQuestion(false);
    });
    $("#prev").addEventListener("click", () => goTo(S.cur - 1));
    $("#flag").addEventListener("click", toggleFlag);
    $("#next").addEventListener("click", () => (S.cur === N - 1 ? $("#finish-btn").click() : goTo(S.cur + 1)));
    updateProgress();
  }

  function goTo(i) {
    if (i < 0 || i >= S.paper.length || i === S.cur) return;
    S.cur = i;
    store.set(S);
    showQuestion(true);
    const top = $(".examhead");
    if (top && top.getBoundingClientRect().top < 0) window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function selectOption(k) {
    const item = S.paper[S.cur];
    const opts = view(item).opts;
    if (k >= opts.length || S.shown[item.id]) return;
    if (S.setup.marking === "instant" && S.setup.mode !== "practice" && S.answers[item.id] !== undefined) return; // locked once marked
    S.answers[item.id] = k;
    store.set(S);
    if (S.setup.marking === "instant") { showQuestion(false); return; }
    $$(".opt", $("#qpane")).forEach((o, idx) => {
      o.classList.toggle("sel", idx === k);
      $("input", o).checked = idx === k;
    });
    updateProgress();
  }

  function toggleFlag() {
    const id = S.paper[S.cur].id;
    if (S.flags[id]) delete S.flags[id]; else S.flags[id] = 1;
    store.set(S);
    const b = $("#flag");
    if (b) {
      const on = !!S.flags[id];
      b.classList.toggle("on", on);
      b.setAttribute("aria-pressed", on);
      b.textContent = on ? "⚑ Marked" : "⚑ Mark for review";
    }
    updateProgress();
  }

  function updateProgress() {
    const N = S.paper.length, a = answeredCount();
    const pct = Math.round((a / N) * 100);
    const c = $("#ans-count"); if (c) c.textContent = a;
    const b = $("#bar"); if (b) b.style.width = pct + "%";
    const p = $("#ans-pct"); if (p) p.textContent = pct + "%";
    $$("#map .dot").forEach((d, i) => {
      const id = S.paper[i].id;
      d.classList.toggle("done", S.answers[id] !== undefined);
      d.classList.toggle("flag", !!S.flags[id]);
      d.classList.toggle("cur", i === S.cur);
    });
  }

  /* ───────────── MODAL ───────────── */
  function openModal(title, body, okLabel, onOk) {
    const wrap = document.createElement("div");
    wrap.className = "modal";
    wrap.setAttribute("role", "dialog");
    wrap.setAttribute("aria-modal", "true");
    wrap.innerHTML = `<div class="card">
      <h3 class="h3">${title}</h3>
      <p class="muted sm" style="margin:.6rem 0 0">${body}</p>
      <div class="row" style="justify-content:flex-end;margin-top:1.2rem">
        <button data-x class="btn btn-ghost">Keep working</button>
        <button data-ok class="btn btn-primary">${okLabel}</button>
      </div></div>`;
    document.body.appendChild(wrap);
    const close = () => wrap.remove();
    $("[data-x]", wrap).addEventListener("click", close);
    $("[data-ok]", wrap).addEventListener("click", () => { close(); onOk(); });
    wrap.addEventListener("click", (e) => { if (e.target === wrap) close(); });
    wrap.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
    $("[data-ok]", wrap).focus();
  }

  /* ───────────── RESULT ───────────── */
  function gradeOf(p) {
    if (p >= 90) return { label: "Excellent", note: "Outstanding mastery of the module.", tone: "emerald" };
    if (p >= 75) return { label: "Very good", note: "Strong understanding — review the few misses below.", tone: "teal" };
    if (p >= 60) return { label: "Good", note: "Solid base. Revisit the chapters flagged in the breakdown.", tone: "sky" };
    if (p >= 50) return { label: "Pass", note: "You passed, but there are clear gaps to close.", tone: "amber" };
    return { label: "Needs more study", note: "Go back through the chapters with the lowest scores, then retake.", tone: "red" };
  }

  function renderResult() {
    if (keyHandler) { document.removeEventListener("keydown", keyHandler); keyHandler = null; }
    const N = S.paper.length;
    let score = 0;
    const byCh = {};
    const rows = S.paper.map((item, i) => {
      const v = view(item);
      const chosen = S.answers[item.id];
      const ok = chosen === v.correct;
      const status = chosen === undefined ? "skip" : ok ? "ok" : "bad";
      if (ok) score++;
      const c = (byCh[v.q.ch] = byCh[v.q.ch] || { n: 0, ok: 0 });
      c.n++; if (ok) c.ok++;
      return { i, item, v, chosen, status };
    });
    const pct = Math.round((score / N) * 1000) / 10;
    const g = gradeOf(pct);
    const wrong = rows.filter((r) => r.status === "bad").length;
    const skipped = rows.filter((r) => r.status === "skip").length;
    const took = S.end - S.start;
    const R = 52, C = 2 * Math.PI * R;

    const chapterBars = Object.keys(byCh)
      .sort((a, b) => a - b)
      .map((ch) => {
        const { n, ok } = byCh[ch];
        const p = Math.round((ok / n) * 100);
        const color = p >= 75 ? "var(--ok)" : p >= 50 ? "var(--warn)" : "var(--bad)";
        return `<div>
          <div class="row sm" style="justify-content:space-between"><span><b>Ch ${ch}</b> · ${esc(CH_NAMES[ch])}</span><span>${ok}/${n} · ${p}%</span></div>
          <div class="bar"><div style="width:${p}%;background:${color}"></div></div>
        </div>`;
      })
      .join("");

    const review = rows
      .map((r) => {
        const { q, opts, correct } = r.v;
        const optHtml = opts
          .map((o, k) => {
            const isCorrect = k === correct, isChosen = k === r.chosen;
            const cls = isCorrect ? "opt right" : isChosen ? "opt wrong" : "opt dim";
            const tag = isCorrect ? `<span class="tag tag-ok">Correct answer</span>` : isChosen ? `<span class="tag tag-bad">Your answer</span>` : "";
            return `<div class="${cls}"><span class="key">${LETTERS[k]}</span><span class="grow">${esc(o)}</span>${tag}</div>`;
          })
          .join("");
        const badge = r.status === "ok" ? `<span class="tag tag-ok">✓ Correct</span>` : r.status === "bad" ? `<span class="tag tag-bad">✗ Wrong</span>` : `<span class="tag tag-skip">Not answered</span>`;
        return `<article class="card pad rcard" data-status="${r.status}" style="padding:1rem 1.2rem">
          <header class="qhead">
            <span class="qnum ${r.status === "ok" ? "qnum-ok" : r.status === "bad" ? "qnum-bad" : ""}">${r.i + 1}</span>
            <div class="grow"><p style="margin:0;font-weight:550">${esc(q.q)}</p>
              <p class="xs muted" style="margin:.25rem 0 0">Chapter ${q.ch}</p></div>${badge}
          </header>
          <div class="opts">${optHtml}</div>
          <p class="explain"><b>Explanation:</b> ${esc(q.e)}</p>
        </article>`;
      })
      .join("");

    app.innerHTML = `
      <section class="card pad" aria-live="polite">
        <div class="row" style="gap:1.5rem">
          <div class="ringwrap">
            <svg viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="${R}" fill="none" stroke-width="10" class="ring-bg"/>
              <circle id="ring" cx="60" cy="60" r="${R}" fill="none" stroke-width="10" stroke-linecap="round" class="ring-${g.tone}" stroke-dasharray="${C}" stroke-dashoffset="${C}"/>
            </svg>
            <div class="mid">
              <span style="font:800 1.9rem Georgia,serif">${score}<span class="muted" style="font-size:1.05rem">/${N}</span></span>
              <span class="sm muted">${pct}%</span>
            </div>
          </div>
          <div class="grow" style="min-width:14rem">
            <p class="xs muted" style="margin:0;letter-spacing:.1em;text-transform:uppercase">Your mark</p>
            <h2 class="title" style="font-size:2rem">${g.label}</h2>
            <p class="muted" style="margin:.2rem 0 0">${g.note}</p>
            <dl class="stats">
              <div class="stat"><dt>Correct</dt><dd style="color:var(--ok)">${score}</dd></div>
              <div class="stat"><dt>Wrong</dt><dd style="color:var(--bad)">${wrong}</dd></div>
              <div class="stat"><dt>Unanswered</dt><dd>${skipped}</dd></div>
              <div class="stat"><dt>Time</dt><dd>${fmtTime(took)}</dd></div>
            </dl>
          </div>
        </div>
        ${S.setup.mode === "practice" ? `<p class="sm muted" style="margin:1rem 0 0">Practice mode · ${Object.keys(S.hints).length} hint${Object.keys(S.hints).length === 1 ? "" : "s"} used · ${Object.keys(S.shown).length} answer${Object.keys(S.shown).length === 1 ? "" : "s"} revealed.</p>` : ""}
        <div class="row no-print" style="margin-top:1.4rem">
          <button id="retake" class="btn btn-primary">↻ Retake (new shuffle)</button>
          <button id="newsetup" class="btn btn-ghost">Change settings</button>
          <button id="print" class="btn btn-ghost">Print / save as PDF</button>
        </div>
      </section>

      <section class="card pad" style="margin-top:1.25rem">
        <h3 class="h3">Score by chapter</h3>
        <div class="stack" style="margin-top:1rem">${chapterBars}</div>
      </section>

      <section style="margin-top:2rem">
        <div class="row" style="justify-content:space-between;margin-bottom:.8rem">
          <h3 class="h3">Review all answers</h3>
          <div class="row no-print" id="filters" style="gap:.35rem">
            <button data-f="all" class="chip on">All (${N})</button>
            <button data-f="bad" class="chip">Wrong (${wrong})</button>
            <button data-f="skip" class="chip">Unanswered (${skipped})</button>
            <button data-f="ok" class="chip">Correct (${score})</button>
          </div>
        </div>
        <div id="review" class="stack">${review}</div>
      </section>`;

    requestAnimationFrame(() => {
      const ring = $("#ring");
      if (ring) { ring.style.transition = "stroke-dashoffset 1s ease"; ring.setAttribute("stroke-dashoffset", C * (1 - score / N)); }
    });
    $("#retake").addEventListener("click", () => startExam(S.setup));
    $("#newsetup").addEventListener("click", reset);
    $("#print").addEventListener("click", () => window.print());
    $("#filters").addEventListener("click", (e) => {
      const b = e.target.closest("[data-f]");
      if (!b) return;
      $$("#filters .chip").forEach((c) => c.classList.toggle("on", c === b));
      const f = b.dataset.f;
      $$("#review .rcard").forEach((c) => (c.style.display = f === "all" || c.dataset.status === f ? "" : "none"));
    });
  }

  /* ───────────── ROUTER ───────────── */
  function render() {
    renderDash();
    if (!S) return renderSetup();
    if (S.phase === "exam") return renderExam();
    if (S.phase === "result") return renderResult();
    S = null; renderSetup();
  }

  const overview = $("#chapter-cards");
  if (overview) {
    overview.innerHTML = cfg.chapters
      .map((c) => `<li><span class="qnum">${c}</span><div><b>${esc(CH_NAMES[c])}</b><div class="xs muted">${poolFor([c]).length} questions</div></div></li>`)
      .join("");
  }
  $$("[data-total]").forEach((el) => (el.textContent = poolFor(cfg.chapters).length));

  render();
})();
