# Children Quiz — Exam Practice Hub

A React + Vite + shadcn/ui landing page that asks **"Which exam are you working on today?"** and sends the student to the exam's own URL. The exams themselves are self-contained static sites served from `public/`.

| Exam | URL |
| --- | --- |
| Introduction to Economics · Chapters 1–3 | `/economics-quiz/home.html` |
| Introduction to Economics · Full exam (6 chapters) | `/economics-quiz/all.html` |
| Basic Optics · Slides 1–30 | `/optics-quiz/index.html` |
| Basic Optics · Slides 1–100 | `/optics-quiz/all.html` |
| Electromagnetics (EMD) · Chapters 1–8 | `/emd-quiz/home.html` |
| Electromagnetics (EMD) · Full exam (15 chapters) | `/emd-quiz/all.html` |
| Electromagnetics (EMD) · Sadiku 7th edition questions (14 chapters) | `/emd-quiz/sadiku7.html` |
| Biomechanics · Chapter 5 — applications of statics (the slides) | `/biomechanics-quiz/home.html` |
| Biomechanics · Full exam (chapters 1–5) | `/biomechanics-quiz/all.html` |
| Biomechanics · Book problems solved step by step | `/biomechanics-quiz/problems.html` |
| Med · Microbiology & Infection (10 lecture decks, 375 questions) + notes | `/med-quiz/micro.html`, `/med-quiz/micro-notes.html` |
| Med · Pathology (5 decks, 257 questions) + notes | `/med-quiz/pathology.html`, `/med-quiz/pathology-notes.html` |
| Med · Physiology (circulatory system, 74 questions) + notes | `/med-quiz/physiology.html`, `/med-quiz/physiology-notes.html` |
| Med · Embryology (embryonic + fetal period, 116 questions) + notes + diagrams | `/med-quiz/embryology.html`, `/med-quiz/embryology-notes.html`, `/med-quiz/embryology-diagrams.html` |
| Computational Methods · Chapters 1–2 | `/computational-quiz/home.html` |
| Computational Methods · Full exam (+ root finding) | `/computational-quiz/all.html` |

## Project layout

```
.
├── src/                    React app (landing page, shadcn components, theme provider)
├── public/
│   ├── shared/             Shared exam engine (exam.js), revise-page renderer (learn.js) and theme CSS
│   ├── economics-quiz/     Economics exam (question bank only, uses shared/)
│   ├── emd-quiz/           Electromagnetics exam — 131 questions, 93 numeric workouts with step-by-step solutions
│   ├── biomechanics-quiz/  Biomechanics exam — 149 questions (94 on the joints, Ch 5), 81 numeric workouts, Revise page
│   ├── med-quiz/           Med — one exam page and one short-notes page per subject group; each deck is a "chapter" (16 decks)
│   ├── computational-quiz/ Computational Methods exam — 51 questions, 33 numeric workouts
│   └── optics-quiz/        Optics exam (vanilla JS + Tailwind CSS)
├── .claude/                Local notes: module .md files (Economics text, Optics slides OCR) — git-ignored
├── components.json         shadcn/ui configuration
└── vite.config.ts
```

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
```

Other scripts: `npm run build` (type-check + production build to `dist/`), `npm run preview`, `npm run lint`, `npm run typecheck`.

The shadcn project was created with:

```bash
npx shadcn@latest init --preset b0 --template vite --pointer
```

Add more components with `npx shadcn@latest add <component>`.

## Med figures and animations

The Med subjects each have a separate Diagrams page (`/med-quiz/<subject>-diagrams.html`, 61 questions, kept apart from the regular exams) using SVG diagrams drawn for the course: growth curve, oxygen tubes, bacterial shapes, virus structure and symmetry, chain of infection, cell cycle, pedigrees, hypersensitivity types, heart and valves, fetal circulation, vessel wall, capillary types. The notes pages also show the diagrams plus step-through animations (viral replication, growth phases, type I hypersensitivity, blood flow through the heart) with Back / Play / Next controls. Diagrams are generated in code, not copied from the slides.

## Landing page

- Two levels: category cards first (Economics, Optics, EMD, Computational Methods, Biomechanics, Med), then a category page listing its exams, notes and (for Med) lecture decks with a subject filter. The state lives in the URL (`?c=med&g=micro`) so Back and links work. The catalogue is `src/catalog.ts`; the folder names under `.claude/` are the category names (extracted text of the Med decks is in `.claude/Med/text/`, git-ignored).

- Animated gradient/grid background and staggered card entrance; cards lift on hover and the page fades out as you open an exam.
- Light / dark toggle (top right). Press `d` to toggle too — it follows the system theme by default.
- To add an exam or category, edit `src/catalog.ts` and put its static files under `public/<name>/`.

## Practice / exam modes (both exams)

On each exam's setup screen there are two toggles:

| Toggle | Options |
| --- | --- |
| **Mode** | **Exam** — no hints, no answers until you finish. **Practice** — a 💡 Hint button (rules out two wrong options, or points to the slide/chapter and gives the answer's magnitude for numeric questions) and, after a wrong answer, *Show answer & explanation*. |
| **Marking** | **At the end** — everything is marked when you finish. **After each answer** — each answer is marked immediately (locked in exam mode; in practice mode you can change it). |

Your last choice is remembered in the browser. Practice results show how many hints and reveals were used.

## Revise pages (worked examples → worksheet)

The EMD and Computational Methods exams each have a **📘 Revise** page (`/emd-quiz/learn.html`, `/computational-quiz/learn.html`): per topic a short summary, key formulas, fully worked step-by-step examples, a "Watch out" box, a *Revised* tick (saved in the browser) and buttons that open that topic's worksheet. Worksheet links are deep links such as `/emd-quiz/all.html?ch=3&mode=practice&marking=instant`.

- EMD: 24 topics / 53 examples — vectors, coordinate systems, differential elements, line integrals, surface integrals & flux, volume integrals, gradient, divergence theorem, curl & Stokes, Laplacian, Coulomb, Gauss, potential, materials, boundary-value problems, Biot–Savart/Ampère, forces & inductance, Maxwell, waves, transmission lines, waveguides, antennas, finite differences.
- Computational Methods: 11 topics / 22 examples — modelling & Euler, growth models, Babylonian iteration, number systems, accuracy & precision, error definitions, round-off vs truncation, error propagation, Taylor series, finite differences, root finding.

The content is generated by scripts so every number is computed (integrals are checked symbolically with sympy).

## Workout (numeric) questions

The EMD and Computational exams contain **workout questions**: type a number (`0.0165`, `3.2e-5` or `3.2×10^-5`), accepted within a stated tolerance. Banks are generated by Python scripts so every answer and every step in the explanation is computed from the same numbers. Practice mode gives a hint (sign + order of magnitude + chapter) and *Show answer & explanation* with the full worked solution.

The **Sadiku 7th edition** page (`sadiku7.html`) is a second EMD bank built from the newer book: 178 questions — review questions with the book's own answer keys, end-of-chapter problems worked in full, 25 **calculus/integration workouts** (line integrals and path dependence, circulation, flux through surfaces, volume integrals for charge, divergence theorem, Stokes, Gauss, potential and Biot–Savart integrals — every integral verified with sympy), and the new application notes (graphene, memristor, metamaterials, RFID…).

The **Biomechanics** exam (`/biomechanics-quiz/`) follows *Fundamentals of Biomechanics* chapters 1–5 with Chapter 5 (statics applied to the elbow, shoulder, neck, spine, hip, knee and ankle) weighted most and matching the course slides; the Chapter 5 page contains only those questions. Workout questions carry SVG free-body diagrams (67 of 81), and the **📚 Book problems** page (next to Revise) solves the textbook's exercise problems (chapters 2–5), its worked examples and the slide examples step by step with diagrams and the printed answers (63 problems, searchable and filterable), in case a test repeats them. Book answers are cross-checked in code; where the printed example numbers are inconsistent with the book's own equations (knee Example 5.6, Problem 5.3) the bank uses the equation results.

Source notes for these courses (git-ignored, in `.claude/`): `emd/` (full Sadiku text, 131 worked examples, review questions, study guide) and `computational/` (OCR of the course slides, Chapra & Canale text, worked examples, study guide).

## Economics exam features

- One question per page with previous / next, a question map, "mark for review" and keyboard shortcuts (`←` `→`, `A`–`D`, `F`).
- Timer defaults to **1:30 per question** (total = questions × 1:30). Switchable to 1:00 or 2:00 per question, a custom total, or no limit; the exam is auto-marked when time runs out.
- Dashboard with exam starts, completed attempts, best score and last score (stored in `localStorage`).
- Light and dark theme.
- Final mark, per-chapter breakdown and an explanation for every question.

## Deploy

Deploy the repo to Vercel (or any static host) as a **Vite** project: build command `npm run build`, output directory `dist`.

## Git workflow

Remote: `origin` → `https://github.com/yamneg96/bme.git`, branch `main`.

```bash
git add -A
git commit -m "describe the change"
git push origin main
```
