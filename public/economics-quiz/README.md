# Introduction to Economics – Exam Practice (static site)

- `home.html` – exam on Chapters 1–3 (101 questions)
- `all.html`  – full exam, all 6 chapters (200 questions)
- `js/q-part1.js`, `js/q-part2.js` – question bank (answers + explanations embedded; first option listed = correct, options are shuffled at runtime)
- `js/exam.js` – exam engine (setup → exam → marking & review; progress saved in the browser)
- `css/tailwind.css` – compiled Tailwind (already built, no build step needed on Vercel)

## Deploy on Vercel
1. Push this folder to GitHub (or run `npx vercel` inside it).
2. Import the repo in Vercel → Framework Preset: **Other**, no build command, output directory: `.` (root).
3. Done. `/` redirects to `/home.html`.

## Editing
- Add/edit questions in `js/q-part*.js`.
- If you change Tailwind classes in HTML/JS: `npm install && npm run build`.
