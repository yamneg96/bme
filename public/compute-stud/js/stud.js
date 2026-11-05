(function () {
  "use strict";
  var D = window.STUD, R = window.STUD_RES;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var md = function (s) { return esc(s).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>"); };
  var KEY = "compute-stud-v1", st = { done: {}, cards: {}, quiz: { r: 0, t: 0 } };
  try { var j = JSON.parse(localStorage.getItem(KEY)); if (j) st = Object.assign(st, j); } catch (e) { /* ignore */ }
  var save = function () { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) { /* ignore */ } };
  var page = document.body.dataset.page;

  var tb = $("#theme-btn");
  var applyT = function (t) { document.documentElement.dataset.theme = t; if (tb) tb.textContent = t === "dark" ? "☀️" : "🌙"; };
  applyT(document.documentElement.dataset.theme === "dark" ? "dark" : "light");
  if (tb) tb.addEventListener("click", function () {
    var n = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyT(n);
    try { localStorage.setItem("exam-theme", n); } catch (e) { /* ignore */ }
  });

  var nDone = function () { return D.topics.filter(function (t) { return st.done[t.id]; }).length; };
  var list = function (arr) { return '<ol class="steps">' + arr.map(function (s) { return "<li>" + md(s) + "</li>"; }).join("") + "</ol>"; };

  function topicHTML(t) {
    var e = t.example;
    return '<article class="card pad topic" id="' + t.id + '"><div><span class="tag">' + (t.part === "A" ? "Slides" : "Beyond slides") + '</span><span class="tag' + (t.weight === "Core" ? "" : " n") + '">' + esc(t.weight) + '</span><span class="meta">' + esc(t.ch) + "</span></div>" +
      "<h2>" + esc(t.title) + '</h2><div class="idea"><b>Big idea.</b> ' + md(t.idea) + "</div>" +
      "<h3>Step by step</h3>" + list(t.steps) +
      "<h3>Formulas to know</h3>" + t.formulas.map(function (f) { return '<div class="fx">' + esc(f) + "</div>"; }).join("") +
      '<h3>Worked example</h3><div class="ex"><b>' + esc(e.title) + "</b><p>" + md(e.problem) + "</p>" + list(e.steps) + '<div class="ans">Answer: ' + md(e.answer) + "</div></div>" +
      '<h3>Common mistakes</h3><ul class="pit">' + t.pitfalls.map(function (p) { return "<li>" + md(p) + "</li>"; }).join("") + "</ul>" +
      "<h3>Check yourself</h3>" + t.check.map(function (c) { return '<details class="q"><summary>' + md(c.q) + "</summary><div>" + md(c.a) + "</div></details>"; }).join("") +
      '<button class="done-btn' + (st.done[t.id] ? " on" : "") + '" data-id="' + t.id + '">' + (st.done[t.id] ? "✓ Learned" : "Mark as learned") + "</button></article>";
  }

  function progress() {
    var p = $("#prog");
    if (p) p.style.width = (nDone() / D.topics.length * 100) + "%";
    var t = $("#prog-t");
    if (t) t.textContent = nDone() + " of " + D.topics.length + " topics learned";
  }

  function toc() {
    var h = '<nav class="card toc" aria-label="Topics">';
    D.parts.forEach(function (p) {
      h += "<h4>" + esc(p.title.split(" · ")[0]) + "</h4>";
      D.topics.filter(function (t) { return t.part === p.id; }).forEach(function (t) {
        h += '<a href="#' + t.id + '" class="' + (st.done[t.id] ? "done" : "") + '">' + esc(t.title.split(":")[0]) + "</a>";
      });
    });
    return h + "</nav>";
  }

  if (page === "index") {
    var qn = D.topics.reduce(function (a, t) { return a + t.check.length; }, 0);
    $("#stats").innerHTML = '<div class="bar"><i id="prog"></i></div><p class="meta" id="prog-t"></p><p class="meta">' + D.topics.length + " topics · " + D.cards.length + " flashcards · " + qn + " self-check questions</p>";
    progress();
  }

  if (page === "guide") {
    var h = '<div class="layout">' + toc() + "<div>" +
      '<div class="card pad" style="margin-bottom:1rem"><b>Progress</b><div class="bar"><i id="prog"></i></div><span class="meta" id="prog-t"></span></div>';
    D.parts.forEach(function (p) {
      h += '<h2 style="color:var(--brand);margin:1.2rem 0 .2rem">' + esc(p.title) + '</h2><p class="meta">' + esc(p.blurb) + "</p>";
      D.topics.filter(function (t) { return t.part === p.id; }).forEach(function (t) { h += topicHTML(t); });
    });
    $("#guide").innerHTML = h + "</div></div>";
    progress();
    document.querySelectorAll(".done-btn").forEach(function (b) {
      b.addEventListener("click", function () {
        var id = b.dataset.id;
        st.done[id] = !st.done[id];
        save();
        b.classList.toggle("on", !!st.done[id]);
        b.textContent = st.done[id] ? "✓ Learned" : "Mark as learned";
        var a = $('.toc a[href="#' + id + '"]');
        if (a) a.classList.toggle("done", !!st.done[id]);
        progress();
      });
    });
    if (location.hash) { var el = document.getElementById(location.hash.slice(1)); if (el) el.scrollIntoView(); }
  }

  if (page === "notes") {
    $("#formulas").innerHTML = D.topics.map(function (t) {
      return '<div class="card formula-card"><h3><a href="guide.html#' + t.id + '" style="color:inherit">' + esc(t.title) + '</a></h3><p style="margin:.2rem 0 .4rem;color:var(--muted)">' + md(t.idea) + "</p>" +
        t.formulas.map(function (f) { return '<div class="fx">' + esc(f) + "</div>"; }).join("") + "</div>";
    }).join("");
  }

  if (page === "revise") {
    var order = D.cards.map(function (_, i) { return i; }), pos = 0, shown = false;
    var fc = $("#fc"), cnt = $("#fc-count");
    var known = function () { return Object.keys(st.cards).filter(function (k) { return st.cards[k]; }).length; };
    var draw = function () {
      var c = D.cards[order[pos]];
      fc.innerHTML = "<div><small>" + (shown ? "Answer" : "Question (tap to flip)") + "</small>" + md(shown ? c[1] : c[0]) + "</div>";
      cnt.textContent = (pos + 1) + " / " + order.length + " · known " + known() + " of " + D.cards.length;
    };
    var go = function (d) { pos = (pos + d + order.length) % order.length; shown = false; draw(); };
    fc.addEventListener("click", function () { shown = !shown; draw(); });
    $("#fc-next").onclick = function () { go(1); };
    $("#fc-prev").onclick = function () { go(-1); };
    $("#fc-shuf").onclick = function () {
      for (var i = order.length - 1; i > 0; i--) { var k = Math.floor(Math.random() * (i + 1)); var t = order[i]; order[i] = order[k]; order[k] = t; }
      pos = 0; shown = false; draw();
    };
    $("#fc-know").onclick = function () { st.cards[order[pos]] = true; save(); go(1); };
    $("#fc-again").onclick = function () { st.cards[order[pos]] = false; save(); go(1); };
    draw();

    var qs = [];
    D.topics.forEach(function (t) { t.check.forEach(function (c) { qs.push({ q: c.q, a: c.a, t: t.title }); }); });
    var cur = null;
    var upd = function () { $("#qz-score").textContent = "Score: " + st.quiz.r + " / " + st.quiz.t; };
    var nq = function () {
      cur = qs[Math.floor(Math.random() * qs.length)];
      $("#qz-t").textContent = cur.t;
      $("#qz-q").innerHTML = md(cur.q);
      $("#qz-a").hidden = true;
      $("#qz-grade").hidden = true;
      $("#qz-show").hidden = false;
      upd();
    };
    $("#qz-show").onclick = function () { $("#qz-a").innerHTML = md(cur.a); $("#qz-a").hidden = false; $("#qz-grade").hidden = false; $("#qz-show").hidden = true; };
    $("#qz-right").onclick = function () { st.quiz.r++; st.quiz.t++; save(); nq(); };
    $("#qz-wrong").onclick = function () { st.quiz.t++; save(); nq(); };
    $("#qz-reset").onclick = function () { st.quiz = { r: 0, t: 0 }; save(); upd(); };
    nq();
  }

  if (page === "resources") {
    $("#path").innerHTML = list(R.path);
    var out = "";
    R.groups.forEach(function (gr) {
      out += '<h2 style="color:var(--brand);margin:1.5rem 0 .3rem">' + esc(gr.title) + '</h2><ul class="res">' + gr.items.map(function (i) {
        return "<li>" + (i.url ? '<a href="' + esc(i.url) + '" target="_blank" rel="noopener noreferrer">' + esc(i.name) + "</a>" : "<b>" + esc(i.name) + "</b>") +
          '<div class="meta">' + esc(i.level) + "</div><div>" + md(i.covers) + '</div><div class="meta"><b>How to use:</b> ' + md(i.use) + "</div></li>";
      }).join("") + "</ul>";
    });
    out += '<h2 style="color:var(--brand);margin:1.5rem 0 .3rem">Study tips</h2><ul>' + R.tips.map(function (t) { return "<li>" + md(t) + "</li>"; }).join("") + "</ul>";
    $("#groups").innerHTML = out;
  }
})();
