/* Revision page renderer: topics with key formulas and fully worked examples, each ending in a link to its worksheet.
   Data: window.LEARN = { prefix, worksheet: "all.html", topics: [{ id, ch, title, summary, formulas: [], examples: [{ title, problem, steps: [], answer }], tips: [] }] } */
(function () {
  "use strict";
  const L = Object.assign({}, window.LEARN_CFG, window.LEARN);
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const rt = (s) => esc(s).replace(/ₓ/g, "<sub>x</sub>").replace(/([^\s_])_([A-Za-z0-9ρφθλεμπ]+)/g, "$1<sub>$2</sub>");
  const DONE_KEY = (L.prefix || "exam") + "-revised-v1";
  let done = {};
  try { done = JSON.parse(localStorage.getItem(DONE_KEY)) || {}; } catch (e) { /* ignore */ }
  const saveDone = () => { try { localStorage.setItem(DONE_KEY, JSON.stringify(done)); } catch (e) { /* ignore */ } };

  /* theme (same storage key as the exam pages) */
  const themeBtn = $("#theme-btn");
  const applyTheme = (t) => { document.documentElement.dataset.theme = t; if (themeBtn) themeBtn.textContent = t === "dark" ? "☀️" : "🌙"; };
  applyTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light");
  if (themeBtn) themeBtn.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(next);
    try { localStorage.setItem("exam-theme", next); } catch (e) { /* ignore */ }
  });

  const link = (ch, mode) => `${L.worksheet}?ch=${ch}&mode=${mode}&marking=${mode === "practice" ? "instant" : "end"}`;
  const nExamples = L.topics.reduce((n, t) => n + t.examples.length, 0);

  const topicHtml = (t) => `
    <section class="topic card pad" id="${t.id}" data-topic="${t.id}">
      <div class="row" style="justify-content:space-between;align-items:flex-start">
        <div>
          <p class="eyebrow">${esc(L.unit)} ${t.ch} · ${esc(L.names[t.ch])}</p>
          <h2 class="title" style="margin-top:.2rem">${rt(t.title)}</h2>
        </div>
        <label class="chk revised"><input type="checkbox" data-done="${t.id}" ${done[t.id] ? "checked" : ""} /> <span>Revised</span></label>
      </div>
      <p class="muted" style="margin:.6rem 0 0">${rt(t.summary)}</p>
      ${t.formulas && t.formulas.length ? `<div class="formulas"><b class="sm">${esc(L.keyLabel || "Key formulas")}</b><ul>${t.formulas.map((f) => `<li>${rt(f)}</li>`).join("")}</ul></div>` : ""}
      ${(t.sections || []).map((sec) => `<div class="nsec"><h3 class="h3">${rt(sec.h)}</h3><ul>${sec.items.map((x) => `<li>${rt(x)}</li>`).join("")}</ul></div>`).join("")}
      ${t.examples.map((ex, i) => `
        <details class="example" open>
          <summary><span class="exnum">Example ${i + 1}</span> ${rt(ex.title)}</summary>
          <div class="exbody">
            <p class="problem"><b>Problem.</b> ${rt(ex.problem)}</p>
            <ol class="steps">${ex.steps.map((s) => `<li>${rt(s)}</li>`).join("")}</ol>
            <p class="answer">✅ <b>Answer:</b> ${rt(ex.answer)}</p>
          </div>
        </details>`).join("")}
      ${t.tips && t.tips.length ? `<div class="tips"><b class="sm">${esc(L.tipsLabel || "Watch out")}</b><ul>${t.tips.map((x) => `<li>${rt(x)}</li>`).join("")}</ul></div>` : ""}
      <div class="cta row">
        <a class="btn btn-primary" href="${link(t.ch, "practice")}">${esc(L.ctaLabel || "Practice " + L.unit + " " + t.ch + " worksheet")} →</a>
        <a class="btn btn-ghost" href="${link(t.ch, "exam")}">Exam-style test</a>
      </div>
    </section>`;

  const groups = {};
  L.topics.forEach((t) => (groups[t.ch] = groups[t.ch] || []).push(t));
  const toc = Object.keys(groups).map((ch) => `
    <div class="tocgrp"><b class="xs muted">${esc(L.unit).toUpperCase()} ${ch}</b>
    ${groups[ch].map((t) => `<a href="#${t.id}" data-toc="${t.id}"><span class="tick">${done[t.id] ? "✓" : "○"}</span> ${rt(t.title)}</a>`).join("")}</div>`).join("");

  $("#learn").innerHTML = `
    <div class="learn-layout">
      <aside class="toc card"><b class="sm">Topics</b><div id="toc-progress" class="xs muted" style="margin:.2rem 0 .6rem"></div>${toc}</aside>
      <div class="stack">${L.topics.map(topicHtml).join("")}
        <div class="card pad cta-final"><h2 class="title">Ready for the full worksheet?</h2>
          <p class="muted">Every question has a worked solution after you answer.</p>
          <div class="row"><a class="btn btn-primary btn-lg" href="${L.worksheet}?mode=practice&marking=instant">Open the practice worksheet →</a><a class="btn btn-ghost btn-lg" href="${L.worksheet}">Set up a custom test</a></div></div>
      </div>
    </div>`;

  function updateProgress() {
    const n = L.topics.filter((t) => done[t.id]).length;
    $("#toc-progress").textContent = `${n} of ${L.topics.length} topics revised · ${nExamples} worked examples`;
    $$("[data-toc]").forEach((a) => { $(".tick", a).textContent = done[a.dataset.toc] ? "✓" : "○"; });
  }
  updateProgress();
  $("#learn").addEventListener("change", (e) => {
    const c = e.target.closest("[data-done]");
    if (!c) return;
    if (c.checked) done[c.dataset.done] = 1; else delete done[c.dataset.done];
    saveDone();
    updateProgress();
  });

  /* highlight the topic being read */
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((es) => es.forEach((en) => {
      if (en.isIntersecting) $$("[data-toc]").forEach((a) => a.classList.toggle("cur", a.dataset.toc === en.target.id));
    }), { rootMargin: "-20% 0px -70% 0px" });
    $$(".topic").forEach((s) => io.observe(s));
  }
})();
