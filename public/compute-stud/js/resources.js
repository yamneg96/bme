/* External resources (found by web search on 2026-11-05; open each link once to confirm it is still live). */
window.STUD_RES = {
 path: [
  "Read your own Chapter 1 and 2 slides, then this site's step-by-step guide (Part A).",
  "Watch a short video for each hard idea: Taylor series (3Blue1Brown) and floating point (Ciechanowski).",
  "Do the practice exams on this site (Chapters 1–2 and the full paper).",
  "Move to Part B with Autar Kaw's videos (one per method) and Chasnov's free notes.",
  "Code every method once in Python or MATLAB (Berkeley Python Numerical Methods)."
 ],
 groups: [
  { title: "Video lectures", items: [
   { name: "Autar Kaw: Holistic Numerical Methods (YouTube: numericalmethodsguy)", url: "https://ma.mathforcollege.com/videos/", level: "Beginner–intermediate", covers: "200+ short videos, one per method: errors, Taylor, bisection, Newton, Gauss, LU, regression, interpolation, integration, ODEs. Each topic page also has a textbook chapter, slides and quiz.", use: "Best match for Chapra-style courses. Watch 5–10 min videos after each guide topic." },
   { name: "3Blue1Brown: Taylor series (Essence of Calculus, ch. 11)", url: "https://www.youtube.com/watch?v=3d6DsjIBzJ4", level: "Intuition", covers: "Why derivatives at one point rebuild a function; polynomial approximation; convergence and radius of convergence.", use: "Watch before the Taylor/Maclaurin topic. Makes the ln x radius-of-convergence homework result obvious." },
   { name: "Jeffrey Chasnov (HKUST): Numerical Methods for Engineers (Coursera)", url: "https://www.coursera.org/learn/numerical-methods-engineers", level: "Intermediate", covers: "Root finding, matrices, quadrature, interpolation, ODEs, with MATLAB. Short lecture videos.", use: "Video version of Parts B. Course access may need enrolment; the notes below are free." },
   { name: "MIT OpenCourseWare 2.086: Numerical Computation for Mechanical Engineers", url: "https://ocw.mit.edu/courses/2-086-numerical-computation-for-mechanical-engineers-fall-2014", level: "Intermediate–advanced", covers: "Approximation, regression, integration, nonlinear equations, ODEs, with MATLAB.", use: "Rigour and alternative explanations once the basics are solid." }
  ]},
  { title: "Free books and notes", items: [
   { name: "Chasnov: Lecture Notes on Numerical Methods (Math 3311)", url: "https://www.math.hkust.edu.hk/~machas/numerical-methods.pdf", level: "Concise", covers: "Floating point, root finding, matrices, quadrature, interpolation, ODEs, PDEs in short chapters. Open licence (CC BY).", use: "Compact reread before an exam." },
   { name: "Chasnov: Numerical Methods for Engineers (Coursera notes)", url: "https://www.math.hkust.edu.hk/~machas/numerical-methods-for-engineers.pdf", level: "Concise", covers: "Notes that accompany the Coursera course.", use: "Same use; link reported by learners, check it opens." },
   { name: "Python Programming and Numerical Methods (Kong, Siauw, Bayen)", url: "https://pythonnumericalmethods.studentorg.berkeley.edu/notebooks/Index.html", level: "Code-first", covers: "Python basics then root finding, interpolation, integration, ODEs, with runnable Jupyter notebooks.", use: "To see every algorithm as code. The print book is by Elsevier." },
   { name: "Autar Kaw: Numerical Methods textbook and open courseware", url: "https://nm.mathforcollege.com", level: "Beginner", covers: "Free textbook chapters, slides, multiple-choice quizzes and worked examples for each method.", use: "Extra practice problems with answers." },
   { name: "MIT 2.086 textbook: Math, Numerics and Programming (Yano et al.)", url: "https://ocw.mit.edu/courses/2-086-numerical-computation-for-mechanical-engineers-spring-2013/", level: "Advanced", covers: "Readings section hosts the full online textbook.", use: "Optional depth." },
   { name: "Chapra & Canale: Numerical Methods for Engineers, 7th ed.", url: "", level: "Your main text", covers: "Already in your folder (.claude/computational): 32 chapters, 163 worked examples.", use: "Problems at the end of each chapter; this site's Part B follows its chapters." }
  ]},
  { title: "Floating point and error (deep dives)", items: [
   { name: "Bartosz Ciechanowski: Exposing Floating Point (float.exposed)", url: "https://float.exposed", level: "Interactive", covers: "Click the bits of a 16/32/64-bit float and watch the value, exponent and spacing change.", use: "Use with the number-system topic; try 0.1 and large integers." },
   { name: "Goldberg: What Every Computer Scientist Should Know About Floating-Point Arithmetic", url: "https://doi.org/10.1145/103162.103163", level: "Advanced reference", covers: "Rounding error, IEEE 754, guard digits, cancellation. Free copies are widely hosted.", use: "Only if you want the full story behind round-off." },
   { name: "IEEE 754 converter (Timo Denk)", url: "https://tools.timodenk.com/ieee-754-floating-point", level: "Tool", covers: "Convert a decimal number to its 32/64-bit pattern and back.", use: "Check your hand conversions of binary and floating-point numbers." }
  ]}
 ],
 tips: [
  "Do the arithmetic yourself first, then confirm with Python, MATLAB or a calculator; copying code does not teach the error ideas.",
  "For each method write down three things: formula, stopping rule, order of error. That is what exams ask.",
  "Check any link before relying on it. These were found by search and I could not open the videos themselves."
 ]
};
