/* Book-problems page: textbook and slide problems with statement, diagram and a step-by-step solution.
   Data: window.PROBLEMS = { items: [{ id, ch, src, title, statement, fig, steps: [], answer, book, note }] }; window.PROBLEMS_CFG = { unit, names } */
(function () {
  "use strict";
  const D = window.PROBLEMS.items;
  const CFG = window.PROBLEMS_CFG || { unit: "Chapter", names: {} };
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const rt = (s) => esc(s).replace(/ₓ/g, "<sub>x</sub>").replace(/([^\s_])_([A-Za-z0-9ρφθλεμπ]+)/g, "$1<sub>$2</sub>");
  const slug = (id) => "p-" + String(id).replace(/[^a-z0-9]/gi, "-");

  const themeBtn = $("#theme-btn");
  const applyTheme = (t) => { document.documentElement.dataset.theme = t; if (themeBtn) themeBtn.textContent = t === "dark" ? "☀️" : "🌙"; };
  applyTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light");
  if (themeBtn) themeBtn.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(next);
    try { localStorage.setItem("exam-theme", next); } catch (e) { /* ignore */ }
  });

  const chapters = Array.from(new Set(D.map((p) => p.ch))).sort((a, b) => a - b);
  const sources = Array.from(new Set(D.map((p) => p.src)));
  const state = { ch: "all", src: "all", q: "" };

  const card = (p) => `
    <article class="prob card pad" id="${slug(p.id)}" data-ch="${p.ch}" data-src="${esc(p.src)}">
      <div class="row" style="gap:.4rem">
        <span class="pill">${esc(p.src)}</span><span class="pill">${esc(CFG.unit)} ${p.ch}</span>
      </div>
      <h3 class="h3" style="margin-top:.5rem">${rt(p.title)}</h3>
      <p class="problem">${rt(p.statement)}</p>
      ${p.fig ? `<figure class="fig">${p.fig}</figure>` : ""}
      <details class="solution" open>
        <summary>Step-by-step solution</summary>
        <ol class="steps">${p.steps.map((s) => `<li>${rt(s)}</li>`).join("")}</ol>
        <p class="answer">✅ <b>Answer:</b> ${rt(p.answer)}</p>
        ${p.book ? `<p class="bookans">📖 <b>Printed in the book:</b> ${rt(p.book)}</p>` : ""}
        ${p.note ? `<p class="fbx fbx-hint" style="white-space:pre-line">⚠️ ${rt(p.note)}</p>` : ""}
      </details>
    </article>`;

  $("#problems").innerHTML = `
    <div class="card pad toolbar">
      <div class="row" style="justify-content:space-between;gap:.8rem">
        <input id="psearch" class="field" type="search" placeholder="Search problems (e.g. elbow, 4.4, cable)…" aria-label="Search problems" style="max-width:22rem" />
        <div class="row" style="gap:.4rem"><button id="expand" class="chip">Expand all</button><button id="collapse" class="chip">Collapse all</button></div>
      </div>
      <div class="row" id="chfilter" style="margin-top:.7rem;gap:.35rem"><span class="xs muted">${esc(CFG.unit)}:</span>
        <button class="chip on" data-ch="all">All (${D.length})</button>
        ${chapters.map((c) => `<button class="chip" data-ch="${c}">${c} · ${esc(CFG.names[c] || "")} (${D.filter((p) => p.ch === c).length})</button>`).join("")}
      </div>
      <div class="row" id="srcfilter" style="margin-top:.5rem;gap:.35rem"><span class="xs muted">Source:</span>
        <button class="chip on" data-src="all">All</button>
        ${sources.map((s) => `<button class="chip" data-src="${esc(s)}">${esc(s)} (${D.filter((p) => p.src === s).length})</button>`).join("")}
      </div>
      <p id="count" class="xs muted" style="margin:.7rem 0 0"></p>
    </div>
    <div id="plist" class="stack" style="margin-top:1.1rem">${D.map(card).join("")}</div>`;

  function apply() {
    const q = state.q.trim().toLowerCase();
    let n = 0;
    D.forEach((p) => {
      const el = $("#" + slug(p.id));
      const ok = (state.ch === "all" || String(p.ch) === state.ch) && (state.src === "all" || p.src === state.src) &&
        (!q || (p.title + " " + p.statement + " " + p.id).toLowerCase().includes(q));
      el.classList.toggle("hidden", !ok);
      if (ok) n++;
    });
    $("#count").textContent = `Showing ${n} of ${D.length} problems.`;
  }
  $("#psearch").addEventListener("input", (e) => { state.q = e.target.value; apply(); });
  $("#chfilter").addEventListener("click", (e) => {
    const b = e.target.closest("[data-ch]"); if (!b) return;
    state.ch = b.dataset.ch; $$("#chfilter .chip").forEach((c) => c.classList.toggle("on", c === b)); apply();
  });
  $("#srcfilter").addEventListener("click", (e) => {
    const b = e.target.closest("[data-src]"); if (!b) return;
    state.src = b.dataset.src; $$("#srcfilter .chip").forEach((c) => c.classList.toggle("on", c === b)); apply();
  });
  $("#expand").addEventListener("click", () => $$("details.solution").forEach((d) => (d.open = true)));
  $("#collapse").addEventListener("click", () => $$("details.solution").forEach((d) => (d.open = false)));
  apply();
  if (location.hash) { const t = $(location.hash); if (t) t.scrollIntoView(); }
})();
