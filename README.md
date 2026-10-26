# Basic Optics practice quiz

Static site (HTML, Tailwind CSS, vanilla JS). No server and no build step are needed to run or deploy it.

| Page | What it covers |
| --- | --- |
| `home.html` | 35 questions from slides 1–30 |
| `all.html` | 111 questions from slides 1–100 (includes everything on `home.html`) |

Students choose the number of questions and topics, answer every question, then submit. The mark, score by topic and difficulty, slides to revisit and an explanation for every question are shown only after submitting. Submit stays blocked until every question is answered.

## Deploy on Vercel

1. Push this folder to a GitHub repository (`node_modules` is already git-ignored).
2. In Vercel choose **Add New > Project**, import the repository.
3. Framework Preset: **Other**. Leave Build Command and Output Directory empty. Deploy.

Or from a terminal: `npx vercel --prod` inside this folder.

`vercel.json` serves `/` as `home.html` and enables clean URLs (`/home`, `/all`).

## Run locally

Open `home.html` in a browser, or run `python3 -m http.server 8000` and visit http://localhost:8000/home.html.

## Edit the questions

All questions live in `assets/questions.js`, one per line. Fields:

- `s` slide reference. A question shows on `home.html` only if its highest slide number is 30 or less.
- `t` `"mcq"` (options in `o`, correct option index in `a`), `"tf"` (`a` is true or false), or `"num"` (`a` is the answer, `tol` the allowed error, `u` the unit label).
- `e` explanation shown after submitting.

Answers are embedded in this file, so anyone who opens the browser developer tools can read them. That is fine for practice, not for a graded exam.

## Change the styling

Tailwind classes are compiled into `assets/tailwind.css` (already built and committed). After changing classes in the HTML or `assets/app.js`, rebuild:

```
npm install
npm run build:css
```

Colors are CSS variables at the top of `src/input.css` (light and dark).
