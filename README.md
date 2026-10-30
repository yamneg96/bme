# Children Quiz — Exam Practice Hub

A React + Vite + shadcn/ui landing page that asks **"Which exam are you working on today?"** and sends the student to the exam's own URL. The exams themselves are self-contained static sites served from `public/`.

| Exam | URL |
| --- | --- |
| Introduction to Economics · Chapters 1–3 | `/economics-quiz/home.html` |
| Introduction to Economics · Full exam (6 chapters) | `/economics-quiz/all.html` |
| Basic Optics · Slides 1–30 | `/optics-quiz/index.html` |
| Basic Optics · Slides 1–100 | `/optics-quiz/all.html` |

## Project layout

```
.
├── src/                    React app (landing page, shadcn components, theme provider)
├── public/
│   ├── economics-quiz/     Economics exam (vanilla JS, one question per page, light/dark theme)
│   └── optics-quiz/        Optics exam (vanilla JS + Tailwind CSS)
├── .claude/                Local notes / source module text (git-ignored)
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

## Landing page

- Animated gradient/grid background and staggered card entrance; cards lift on hover and the page fades out as you open an exam.
- Light / dark toggle (top right). Press `d` to toggle too — it follows the system theme by default.
- To add an exam, add an entry to the `EXAMS` array in `src/App.tsx` and put its static files under `public/<name>/`.

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
