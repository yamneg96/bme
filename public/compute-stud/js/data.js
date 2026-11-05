/* Computational Methods study data. Every number below was computed (Python) and cross-checked against the course slides / Chapra & Canale. */
window.STUD = {
parts: [
  { id: "A", title: "Part A · Course slides (Chapters 1–2)", blurb: "Exactly what your slides cover: models, errors, number storage, Taylor series, finite differences." },
  { id: "B", title: "Part B · Beyond the slides (Chapra & Canale Parts 2–8)", blurb: "The standard next topics of a computational-methods course, with one worked example each." }
],
topics: [
/* ============================ PART A ============================ */
{
 id: "intro", part: "A", ch: "Slides 1.1–1.7", title: "What numerical analysis is (analytical vs computational)", weight: "Core",
 idea: "Some problems have an exact formula (analytical solution); many real ones do not, or the formula is impractical. Numerical analysis replaces the exact answer with a controlled approximation obtained by repeating simple arithmetic, and it tells you how wrong that approximation is.",
 steps: [
  "**Analytical approach**: find an exact-form expression (e.g. x = ±√2). Gives direct relationships between variables, but is hard or impossible for realistic complex systems.",
  "**Computational approach**: use numerical procedures that need only arithmetic. Usually requires discretisation (turning continuous things into finite steps) and gives an approximation whose accuracy depends on the method.",
  "**Example from the slides**: find x with x² = 2. Exact answer √2 is irrational, so in practice we use a rational number that is 'close enough'.",
  "**Babylonian (Newton) method**: start with a guess x₀, then repeat xₙ = ½(xₙ₋₁ + N/xₙ₋₁). The new guess is the average of the old guess and N divided by it. If the guess is too big, N/guess is too small, so their average lands closer.",
  "**First step of every numerical method: assume something** (the starting value x₀). The slides use x₀ = 1.",
  "**Stop when** the approximate relative error between two successive guesses is below a tolerance εₛ. Otherwise you iterate 'ad infinitum'."
 ],
 formulas: [
  "Babylonian: xₙ = ½ ( xₙ₋₁ + N / xₙ₋₁ )",
  "Stop when |εₐ| = |(xₙ − xₙ₋₁)/xₙ| × 100 % < εₛ"
 ],
 example: {
  title: "√2 by the Babylonian method, x₀ = 1",
  problem: "Compute √2 and show how fast the iteration converges.",
  steps: [
   "x₁ = ½(1 + 2/1) = 1.5",
   "x₂ = ½(1.5 + 2/1.5) = ½(1.5 + 1.33333) = 1.416667",
   "x₃ = ½(1.416667 + 1.411765) = 1.414216",
   "x₄ = 1.414213562… (true √2 = 1.414213562…)",
   "Notice the digits correct roughly double every step (1 → 3 → 6 → 11): this is quadratic convergence, the same behaviour as Newton–Raphson."
  ],
  answer: "x₁ = 1.5, x₂ = 1.4167, x₃ = 1.41422, x₄ = 1.4142136"
 },
 pitfalls: ["Writing the exact answer when asked for a numerical iteration.", "Forgetting the starting guess and the stopping rule: both are part of the method.", "Using x₀ = 0 (division by zero)."],
 check: [
  { q: "Why use numerical methods if exact formulas exist?", a: "Exact formulas often do not exist, or are impractical, for realistic complex systems. Numerical methods give controlled approximations that a computer can produce." },
  { q: "What does 'discretisation' mean?", a: "Replacing a continuous quantity or process (derivative, integral, time) by finite steps or finite differences." },
  { q: "Babylonian method for N = 9, x₀ = 1: what is x₁?", a: "½(1 + 9/1) = 5." }
 ]
},
{
 id: "models", part: "A", ch: "Slides 1.8–1.12", title: "Mathematical models and the parachutist (Euler's method)", weight: "Core",
 idea: "A mathematical model turns a physical system into an equation. For the falling parachutist, Newton's second law gives a differential equation. You can solve it with calculus (analytical) or step it forward on a computer (Euler): new value = old value + slope × step size.",
 steps: [
  "**Problem → model → solution → results.** Theory and data feed the model; the model is solved with tools (computers, statistics, numerical methods); the results are interpreted and fed back.",
  "**Name the pieces**: dependent variable (what you solve for, v), independent variable (t), parameters (m, c: properties of the system), forcing function (g: external influence).",
  "**Forces on the parachutist**: gravity pulls down F_D = mg; air resistance pushes up F_U = −cv (proportional to speed).",
  "**Newton's law** F = ma = m·dv/dt, with F = F_D + F_U ⇒ m dv/dt = mg − cv ⇒ **dv/dt = g − (c/m)v**.",
  "**Analytical solution** (v(0) = 0): v(t) = (gm/c)(1 − e^(−(c/m)t)). As t → ∞, v → gm/c, the **terminal velocity**.",
  "**Numerical idea**: replace dv/dt by a finite difference: dv/dt ≈ Δv/Δt = [v(tᵢ₊₁) − v(tᵢ)]/(tᵢ₊₁ − tᵢ).",
  "**Rearrange**: v(tᵢ₊₁) = v(tᵢ) + [g − (c/m)v(tᵢ)](tᵢ₊₁ − tᵢ). Use the new value as the old value of the next step and repeat.",
  "**Accuracy**: Euler uses the slope at the start of each step, so it lags the exact curve; **a smaller step size gives a better approximation**."
 ],
 formulas: [
  "dv/dt = g − (c/m)v",
  "v(t) = (gm/c)(1 − e^(−(c/m)t));  v_terminal = gm/c",
  "Euler:  v(tᵢ₊₁) = v(tᵢ) + [g − (c/m)v(tᵢ)] Δt",
  "New value = old value + slope × step size"
 ],
 example: {
  title: "Parachutist, m = 68.1 kg, c = 12.5 kg/s, Δt = 2 s",
  problem: "Find v(2), v(4), v(6) with Euler and compare with the exact values (g = 9.81, v(0) = 0).",
  steps: [
   "c/m = 12.5/68.1 = 0.18355 s⁻¹.  Terminal velocity gm/c = 9.81·68.1/12.5 = 53.44 m/s.",
   "t = 2: v = 0 + [9.81 − 0.18355·0]·2 = 19.62 m/s",
   "t = 4: v = 19.62 + [9.81 − 0.18355·19.62]·2 = 32.04 m/s",
   "t = 6: v = 32.04 + [9.81 − 0.18355·32.04]·2 = 39.90 m/s",
   "Exact: v(2) = 16.42, v(4) = 27.80, v(6) = 35.68 m/s",
   "True relative errors: 19.5 %, 15.3 %, 11.8 %. Euler overshoots here because the real slope falls during each step; the error shrinks as v approaches the terminal value."
  ],
  answer: "Euler 19.62, 32.04, 39.90 m/s versus exact 16.42, 27.80, 35.68 m/s"
 },
 pitfalls: ["Mixing the units of c/m (it is 1/s).", "Using the slope at the END of the step (that is a different method).", "Forgetting that the first step uses v(0), not v(Δt)."],
 check: [
  { q: "Which symbols are parameters and which is the forcing function in dv/dt = g − (c/m)v?", a: "Parameters: m and c. Forcing function: g. Dependent variable v, independent variable t." },
  { q: "Give the terminal velocity formula and what dv/dt equals there.", a: "v = gm/c; dv/dt = 0 (weight balances drag)." },
  { q: "How do you improve an Euler result?", a: "Reduce the step size Δt (or use a higher-order method such as Heun or Runge–Kutta)." }
 ]
},
{
 id: "why", part: "A", ch: "Slides 1.13–1.16", title: "Why numerical methods, BME uses and the Chapter 1 homework", weight: "Core",
 idea: "Know the five reasons numerical methods matter and five biomedical uses; then be able to solve the two homework problems (ice-ball force balance and tumour growth).",
 steps: [
  "**Why**: (1) solve complex problems with no easy analytic solution; (2) powerful problem-solving tools; (3) understand commercial software that uses numerical methods; (4) build customised programs; (5) strengthen mathematical understanding by linking maths to engineering.",
  "**BME applications**: physiological signals (filtering, interpolation, differentiation and integration of ECG/EMG/EEG); medical imaging (processing and reconstruction); pharmacokinetics (drug concentration vs time); medical devices (sensors, circuits, pumps, control); biological transport (diffusion, heat transfer, flow in tissue).",
  "**Homework 1 (ice ball, Archimedes)**: weight of ball = weight of displaced seawater. Volume of a spherical cap of height h is πh²(3r − h)/3; the submerged volume is the sphere minus the cap.",
  "ρ_s·(4/3)πr³ = ρ_f·[(4/3)πr³ − πh²(3r − h)/3]. Multiply by 3/π and tidy: **ρ_f h³ − 3ρ_f r h² + 4r³(ρ_f − ρ_s) = 0**, a cubic in h. Solve it numerically (bisection, Newton).",
  "**Homework 2 (tumour)** (a) doubling time T_d gives μ = ln 2 / T_d. (b) Volume of one cell = (π/6)d³ so V = N(π/6)d³ and dV/dt = μV. (c) Time to reach 500 µm: tumour volume = (π/6)(500)³ ⇒ N = (500/20)³ cells; t = ln(N/N₀)/μ."
 ],
 formulas: [
  "Cubic (ice ball):  ρ_f h³ − 3ρ_f r h² + 4r³(ρ_f − ρ_s) = 0",
  "N = N₀ e^(μt);  μ = ln 2 / T_d",
  "Cell volume (sphere) = (π/6)d³;  dV/dt = μV"
 ],
 example: {
  title: "Worked numbers for both homework problems",
  problem: "(i) r = 1 m, ρ_s = 920, ρ_f = 1025 kg/m³: find h. (ii) T_d = 20 h, cell d = 20 µm, start from one cell: find μ and the time to 500 µm.",
  steps: [
   "(i) 4(ρ_f − ρ_s)/ρ_f = 4·105/1025 = 0.40976, so h³ − 3h² + 0.40976 = 0 (r = 1).",
   "f(0) = +0.41 and f(1) = −1.59 change sign, so a root lies in [0,1]. Bisection or Newton gives **h ≈ 0.397 m** (the other roots are not physical).",
   "(ii) μ = ln 2/20 = **0.03466 h⁻¹**. One cell volume = (π/6)(20)³ = 4189 µm³, and dV/dt = 0.03466 V.",
   "A 500 µm sphere holds (500/20)³ = 15 625 cell-volumes (packing neglected). t = ln(15625)/0.03466 = 9.657/0.03466 ≈ **278.6 h ≈ 11.6 days**."
  ],
  answer: "h ≈ 0.397 m;  μ = 0.0347 h⁻¹, t ≈ 279 h"
 },
 pitfalls: ["Using density of the ball instead of seawater in the cap term.", "Using radius instead of diameter in (π/6)d³.", "Forgetting the root must satisfy 0 < h < 2r."],
 check: [
  { q: "List three BME applications of numerical methods.", a: "Any three of: physiological signal processing, medical imaging, pharmacokinetics, medical devices, biological transport." },
  { q: "μ for a 20 h doubling time?", a: "ln 2 / 20 = 0.0347 per hour." },
  { q: "What kind of equation does the ice-ball balance give?", a: "A cubic polynomial in the cap height h." }
 ]
},
{
 id: "accprec", part: "A", ch: "Slides 2.3–2.6", title: "Accuracy, precision and measurement error", weight: "Core",
 idea: "Accuracy is closeness to the true value. Precision is closeness of repeated values to one another. Systematic errors bias accuracy; random errors spoil precision.",
 steps: [
  "**Accuracy** = agreement between a measured value and the true value. Measure: average position − true position.",
  "**Precision** = agreement between several measurements. Measure: standard deviation (smaller = more precise).",
  "Four combinations: high accuracy + high precision (tight cluster on target), high precision + low accuracy (tight cluster, off target), low precision + high accuracy (scattered but centred), low + low.",
  "**Degree of precision** = smallest value that can be measured/computed: the smallest division on a ruler, or the smallest/largest number a computer can store. It depends on algorithm, storage capacity and number of stored digits.",
  "**Systematic error**: consistent, predictable bias in one direction. Sources: instrumental (miscalibrated thermometer reads 2 °C high), personal (parallax when reading a scale), method (wrong formula or procedure). Fix by calibration and better method.",
  "**Random error**: unpredictable variation, both + and −, from uncontrollable factors (noise). Affects precision, not overall accuracy. Reduce by averaging many readings."
 ],
 formulas: ["Accuracy ~ |mean − true|", "Precision ~ standard deviation s = √[Σ(xᵢ − x̄)²/(n − 1)]"],
 example: {
  title: "Classify the measurements",
  problem: "True value 100.0. Instrument A reads 102.1, 101.9, 102.0, 102.0. Instrument B reads 97, 103, 99, 101. Which is more accurate, which more precise?",
  steps: [
   "A: mean = 102.0, error +2.0 (biased), spread ≈ 0.08 → very precise, not accurate (systematic error).",
   "B: mean = 100.0, error 0, spread ≈ 2.6 → accurate on average, not precise (random error).",
   "Averaging cannot remove A's bias; it can shrink B's scatter."
  ],
  answer: "A: precise but inaccurate (systematic). B: accurate but imprecise (random)."
 },
 pitfalls: ["Swapping the definitions of accuracy and precision.", "Thinking more digits on a display means more accuracy."],
 check: [
  { q: "Which kind of error does not affect the average but spreads results?", a: "Random error: it hurts precision." },
  { q: "Give two examples of systematic error.", a: "Miscalibrated thermometer; parallax reading; using the wrong formula." },
  { q: "What measures precision?", a: "Standard deviation of repeated measurements." }
 ]
},
{
 id: "numsys", part: "A", ch: "Slides 2.5, 2.11–2.16", title: "Number systems: binary, floating point and IEEE 754", weight: "Core",
 idea: "Computers store numbers with a finite number of bits in base 2. Integers are exact up to a limit; real numbers are stored in floating-point form, so most are only approximated. That limitation is the source of round-off error.",
 steps: [
  "**Decimal** uses digits 0–9 (base 10). **Binary** uses 0 and 1 (base 2); each bit is a power of 2.",
  "**Binary → decimal**: multiply each bit by its power of 2 and sum. 10011₂ = 16 + 0 + 0 + 2 + 1 = 19.",
  "**Decimal → binary** (integer): divide by 2 repeatedly and read the remainders from last to first.",
  "**Integer limit**: n bits can exactly represent integers up to 2ⁿ − 1 (8 bits → 255).",
  "**Normalised floating point**: write the number as ±0.d₁d₂…dₙ × 10^s with d₁ ≠ 0 so only the significant digits and the exponent are stored. 37.5 = 0.375 × 10², −812.5 = −0.8125 × 10³, 0.005781 = 0.5781 × 10⁻².",
  "**IEEE 754 single (32 bit)**: 1 sign + 8 exponent + 23 stored mantissa bits (24 effective); about 6–9 significant digits. **Double (64 bit)**: 1 sign + 11 exponent + 52 stored mantissa bits (53 effective); about 15–17 significant digits. Arbitrary precision grows with RAM at a speed cost.",
  "**Machine epsilon** (gap between 1 and the next float): 2⁻²³ ≈ 1.19×10⁻⁷ (single), 2⁻⁵² ≈ 2.22×10⁻¹⁶ (double). It bounds the relative round-off of a single stored number."
 ],
 formulas: [
  "Value = Σ bitₖ·2ᵏ",
  "Max n-bit unsigned integer = 2ⁿ − 1",
  "x = ±0.d₁d₂…dₙ × 10^s  (decimal float model)",
  "ε_mach(single) = 2⁻²³,  ε_mach(double) = 2⁻⁵²"
 ],
 example: {
  title: "Conversions and storage",
  problem: "(a) Convert 10011₂ to decimal. (b) Convert 45 to binary. (c) Write 0.005781 in normalised form. (d) How many mantissa bits does double precision store?",
  steps: [
   "(a) 1·16 + 0·8 + 0·4 + 1·2 + 1·1 = **19**.",
   "(b) 45 ÷ 2 = 22 r1; 22 ÷ 2 = 11 r0; 11 ÷ 2 = 5 r1; 5 ÷ 2 = 2 r1; 2 ÷ 2 = 1 r0; 1 ÷ 2 = 0 r1. Read upward: **101101₂** (32 + 8 + 4 + 1 = 45 ✓).",
   "(c) Move the point so the first digit after it is non-zero: **0.5781 × 10⁻²**.",
   "(d) 52 stored (53 effective counting the hidden leading 1)."
  ],
  answer: "19;  101101₂;  0.5781×10⁻²;  52 bits"
 },
 pitfalls: ["Reading remainders in the wrong order.", "Saying 23 bits = 23 digits (they are binary digits ≈ 7 decimal digits).", "Forgetting that 0.1 has no exact binary form."],
 check: [
  { q: "Bit layout of IEEE 754 double?", a: "1 sign, 11 exponent, 52 mantissa (53 effective) = 64 bits; 15–17 significant digits." },
  { q: "Largest integer exactly representable in 10 unsigned bits?", a: "2¹⁰ − 1 = 1023." },
  { q: "Why is 1/3 stored inexactly in decimal and 0.1 in binary?", a: "They need infinitely many digits in that base, so they are rounded to the available digits." }
 ]
},
{
 id: "errors", part: "A", ch: "Slides 2.7–2.9, 2.17–2.18", title: "Defining error: absolute, relative, approximate and stopping criteria", weight: "Core",
 idea: "Error measures how far an approximation is from the truth. When the truth is known use true errors; when it is not (the normal case in iteration) use the change between successive estimates as the approximate error and stop when it is small enough.",
 steps: [
  "**True (absolute) error** E_t = V_t − V_a, where V_t is the true value, V_a the approximation. It carries sign: E > 0 means the approximation is too small (underestimates); E < 0 means it overestimates.",
  "**True relative error** ε_t = E_t / V_t (× 100 % for percent). Use it when V_t is known (benchmarks, verification).",
  "**Approximate relative error** ε_a = (present approx − previous approx) / present approx × 100 %. Use it when V_t is unknown (real iterative solvers).",
  "**Stopping rule**: iterate until |ε_a| < ε_s.",
  "**Scarborough criterion**: to be correct to n significant figures, take ε_s = (0.5 × 10^(2−n)) %. For n = 3, ε_s = 0.05 %.",
  "**Slide example**: 22/7 for π. E = π − 22/7 = −0.0012645; ε_t = E/π = −4.025×10⁻⁴ ≈ −0.04 %; with 22/7 in the denominator, ε = −4.023×10⁻⁴ ≈ −0.04 % (almost identical because the error is tiny)."
 ],
 formulas: [
  "E_t = V_t − V_a",
  "ε_t = (V_t − V_a)/V_t × 100 %",
  "ε_a = (new − old)/new × 100 %",
  "Stop when |ε_a| < ε_s;   ε_s = (0.5 × 10^(2−n)) %"
 ],
 example: {
  title: "Babylonian √23.67 and √19532",
  problem: "x₀ = 1, ε_s = 0.1 %. Report to 4 significant digits and 4 decimal places (slides 24–25).",
  steps: [
   "√23.67: the iterations converge to 4.86518…; ε_a < 0.1 % after **6 iterations** → 4.865 (4 s.f.), 4.8652 (4 d.p.).",
   "√19532: converges to 139.75693…; ε_a < 0.1 % after **11 iterations** (the large number needs more steps from x₀ = 1) → 139.8 (4 s.f.), 139.7569 (4 d.p.).",
   "Significant figures count all meaningful digits; decimal places count only digits after the point."
  ],
  answer: "4.865 / 4.8652 and 139.8 / 139.7569"
 },
 pitfalls: ["Subtracting in the wrong order and getting the wrong sign.", "Dividing ε_a by the OLD value.", "Confusing significant figures with decimal places."],
 check: [
  { q: "What does E_t < 0 mean?", a: "The approximation is larger than the true value (overestimate)." },
  { q: "True vs approximate relative error: when is each used?", a: "True when V_t is known (tests); approximate when it is not (iterations)." },
  { q: "ε_s for 4 significant figures (Scarborough)?", a: "0.5×10^(2−4) = 0.005 %." }
 ]
},
{
 id: "roundtrunc", part: "A", ch: "Slides 2.9–2.10, 2.12–2.13, 2.17–2.20", title: "Round-off vs truncation error", weight: "Core",
 idea: "Round-off comes from finite storage of digits; truncation comes from cutting an infinite process (series, step size) short. They behave differently and are reduced differently.",
 steps: [
  "**Round-off error**: caused by finite-precision arithmetic. π = 3.14159265… stored as 3.14159; 1/3 → 0.3333. Grows by accumulation in long or iterative calculations.",
  "Causes: limited floating-point digits, rounding in arithmetic operations, irrational numbers (π, √2). Reduce: higher precision (double), avoid unnecessary rounding, use numerically stable methods.",
  "**Truncation error**: caused by approximating an infinite series/process by finite terms, lower-order methods, neglecting higher-order terms. eˣ ≈ 1 + x + x²/2! leaves out x³/3! + ….",
  "Typically systematic (one direction) and grows with large step size / few terms. Reduce: more terms, higher-order method, smaller step.",
  "**Slide example**: sin 0.3 ≈ 0.3 − 0.3³/3! = 0.2955. True value 0.295520207. Truncation error ≈ 0.00002.",
  "Truncation error arises in Taylor series, numerical integration and numerical differentiation. Round-off arises everywhere numbers are stored."
 ],
 formulas: ["sin x = x − x³/3! + x⁵/5! − …", "Truncation error = true value − truncated sum"],
 example: {
  title: "sin 0.3 with two terms",
  problem: "Approximate sin(0.3) using x − x³/3! and give the truncation error and the percent relative error.",
  steps: [
   "x³/3! = 0.027/6 = 0.0045, so approximation = 0.3 − 0.0045 = **0.2955**.",
   "True value = 0.295520207 so E_t = 0.295520207 − 0.2955 = 2.02×10⁻⁵ ≈ 0.00002.",
   "ε_t = 2.02×10⁻⁵ / 0.29552 × 100 = 0.0068 %.",
   "The next term x⁵/5! = 0.00243/120 = 2.0×10⁻⁵ explains almost all the error: the first omitted term estimates the truncation error."
  ],
  answer: "0.2955; E ≈ 2.0×10⁻⁵ (0.0068 %)"
 },
 pitfalls: ["Calling a rounding of π 'truncation'.", "Thinking more terms always cures round-off (it can add more of it)."],
 check: [
  { q: "Classify: using e^x ≈ 1 + x.", a: "Truncation error (series cut short)." },
  { q: "Classify: storing π as 3.14159.", a: "Round-off error (finite digits)." },
  { q: "Name two ways to reduce truncation error.", a: "More series terms; smaller step size; higher-order method." }
 ]
},
{
 id: "taylor", part: "A", ch: "Slides 2.21–2.37", title: "Taylor and Maclaurin series", weight: "Core",
 idea: "A smooth function near a point a can be rebuilt as a polynomial whose coefficients are its derivatives at a. Polynomials need only +, −, ×, so a computer can evaluate sin, cos, eˣ with them.",
 steps: [
  "**Why**: some functions are hard to evaluate directly; a polynomial approximation is easy and is what calculators effectively use.",
  "**Derive**: assume f(x) = a₀ + a₁(x−a) + a₂(x−a)² + a₃(x−a)³ + …. Set x = a: f(a) = a₀. Differentiate and set x = a: f′(a) = a₁, f″(a) = 2!a₂, f‴(a) = 3!a₃, so aₙ = f⁽ⁿ⁾(a)/n!.",
  "**Taylor series about a**: f(x) = f(a) + f′(a)(x−a) + f″(a)(x−a)²/2! + f‴(a)(x−a)³/3! + …. Equivalent forms: f(x₀+h) = f(x₀) + f′(x₀)h + f″(x₀)h²/2! + …, with h = x − x₀ the step size and x₀ the base point.",
  "**Maclaurin series** is the special case a = 0.",
  "**Standard Maclaurin series (memorise)**: eˣ = Σ xⁿ/n!;  sin x = Σ (−1)ⁿ x²ⁿ⁺¹/(2n+1)!;  cos x = Σ (−1)ⁿ x²ⁿ/(2n)!.",
  "**Derivation for eˣ**: every derivative of eˣ is eˣ, and e⁰ = 1, so every coefficient is 1/n!.",
  "**Order**: a 'zero-order' approximation is f(a) alone; first-order adds the f′ term, and so on. Higher order = a better fit near a, but only near a."
 ],
 formulas: [
  "f(x) = Σₙ f⁽ⁿ⁾(a)(x−a)ⁿ / n!",
  "eˣ = 1 + x + x²/2! + x³/3! + …",
  "sin x = x − x³/3! + x⁵/5! − …",
  "cos x = 1 − x²/2! + x⁴/4! − …"
 ],
 example: {
  title: "e^0.5 from the Maclaurin series",
  problem: "Estimate e^0.5 with 1, 2, 3, 4 terms and find the true percent relative error (true e^0.5 = 1.648721).",
  steps: [
   "1 term: 1 → ε_t = 39.35 %",
   "2 terms: 1 + 0.5 = 1.5 → 9.02 %",
   "3 terms: 1.5 + 0.125 = 1.625 → 1.44 %",
   "4 terms: 1.625 + 0.0208333 = 1.645833 → 0.175 %",
   "Each extra term cuts the error by roughly a factor of 5–8 at x = 0.5 because the terms shrink (x small)."
  ],
  answer: "1, 1.5, 1.625, 1.6458 (errors 39.4 %, 9.0 %, 1.4 %, 0.18 %)"
 },
 pitfalls: ["Forgetting the factorial n!.", "Using (x + a) instead of (x − a).", "Using a Maclaurin series far from 0 and expecting accuracy."],
 check: [
  { q: "Write the Taylor series of f about a.", a: "f(a) + f′(a)(x−a) + f″(a)(x−a)²/2! + f‴(a)(x−a)³/3! + …" },
  { q: "What is a Maclaurin series?", a: "A Taylor series with a = 0." },
  { q: "Why does the series for sin x contain only odd powers?", a: "sin is odd: its even derivatives at 0 are 0 (sin 0 = 0, −sin 0 = 0 …)." }
 ]
},
{
 id: "remainder", part: "A", ch: "Slides 2.21–2.23, 2.41–2.42", title: "Truncation error bound and order O(hⁿ)", weight: "Core",
 idea: "When you stop a Taylor series after n terms, the first omitted term controls the error. That is why we write the error as O(hⁿ⁺¹): halving h cuts the error by 2ⁿ⁺¹.",
 steps: [
  "Truncating after the first-derivative term: f(x₀+h) = f(x₀) + f′(x₀)h + **truncation error**.",
  "Error ≈ f″(x₀)h²/2! + f‴(x₀)h³/3! + … For small h (h < 1) the first omitted term dominates, so error ∝ h². Written **O(h²)**: 'order h squared'.",
  "**Remainder (Lagrange) form**: after terms up to the nth derivative, |E| ≤ max|f⁽ⁿ⁺¹⁾(ξ)| · |x − a|ⁿ⁺¹ / (n+1)!, with ξ between a and x. Take the worst case of the derivative on that interval to get an upper bound.",
  "**Slide example**: f(x) = √x, a = 4, estimate f(5). f′ = 1/(2√x) → 1/4; f″ = −1/(4x^(3/2)) → −1/32; f‴ = 3/(8x^(5/2)) → 3/256 (at x = 4).",
  "Two terms: f(5) ≈ 2 + 0.25 = **2.25**, error bound = |f″(4)|/2! × 1² = 1/64 = **0.015625**.",
  "Three terms: add f″(4)/2!·(1)² = −1/64: f(5) ≈ **2.234375**, bound = |f‴(4)|/3! = 3/(256·6) = **0.001953**. True √5 = 2.236068, so the real errors (0.0139, 0.00169) are inside the bounds.",
  "Reading the bound: take the maximum of |f⁽ⁿ⁺¹⁾| over [a, x]; for √x the derivatives decrease with x, so the maximum is at x = a = 4."
 ],
 formulas: [
  "Error after n-th derivative term: R ≈ f⁽ⁿ⁺¹⁾(ξ) hⁿ⁺¹/(n+1)! = O(hⁿ⁺¹)",
  "|E| ≤ max|f⁽ⁿ⁺¹⁾| · |x−a|ⁿ⁺¹ / (n+1)!"
 ],
 example: {
  title: "ln x at x = 2.5 about base point 1 (homework 2.1)",
  problem: "Predict ln 2.5 with zero- to fourth-order Taylor series about x = 1 and find ε_t for each. True ln 2.5 = 0.916291.",
  steps: [
   "f = ln x: f(1) = 0, f′ = 1/x → 1, f″ = −1/x² → −1, f‴ = 2/x³ → 2, f⁗ = −6/x⁴ → −6. h = 2.5 − 1 = 1.5.",
   "Order 0: 0 → ε_t = 100 %",
   "Order 1: 1.5 → 63.7 %",
   "Order 2: 1.5 − 1.5²/2 = 0.375 → 59.1 %",
   "Order 3: 0.375 + 1.5³/3 = 1.5 → 63.7 %",
   "Order 4: 1.5 − 1.5⁴/4 = 0.234375 → 74.4 %",
   "**Meaning**: the series for ln x about 1 only converges for |x − 1| ≤ 1 (0 < x ≤ 2). x = 2.5 is outside that radius, so adding terms makes things worse and the estimates oscillate. Moving the base point closer (e.g. a = 2) fixes it."
  ],
  answer: "0, 1.5, 0.375, 1.5, 0.234 with ε_t 100 %, 63.7 %, 59.1 %, 63.7 %, 74.4 % (series diverges at h = 1.5)"
 },
 pitfalls: ["Assuming more terms always improve the answer (not true outside the radius of convergence).", "Using the derivative at the wrong point in the bound.", "Forgetting (n+1)! in the denominator."],
 check: [
  { q: "If the error is O(h²), what happens to it when h is halved?", a: "It drops by about a factor 4." },
  { q: "√x about a = 4, two terms: estimate of √5 and error bound?", a: "2.25, bound 1/64 = 0.015625." },
  { q: "Why does the ln x series about 1 fail at x = 2.5?", a: "Radius of convergence is 1; |2.5 − 1| = 1.5 is outside it." }
 ]
},
{
 id: "findiff", part: "A", ch: "Slides 2.38–2.40", title: "Finite-difference derivatives (forward, backward, centered)", weight: "Core",
 idea: "Truncating a Taylor series after the first derivative term and solving for f′ gives a formula for the derivative using only function values. The way you use the neighbours decides the order of the error.",
 steps: [
  "**Forward**: f(xᵢ₊₁) = f(xᵢ) + f′(xᵢ)h + O(h²) ⇒ f′(xᵢ) ≈ [f(xᵢ₊₁) − f(xᵢ)] / h + O(h). Uses the point ahead; first-order accurate.",
  "**Backward**: f(xᵢ₋₁) = f(xᵢ) − f′(xᵢ)h + O(h²) ⇒ f′(xᵢ) ≈ [f(xᵢ) − f(xᵢ₋₁)] / h + O(h). Uses the point behind; first-order accurate.",
  "**Centered**: write both expansions to the h² term, subtract: f(xᵢ₊₁) − f(xᵢ₋₁) = 2f′(xᵢ)h + O(h³), so f′(xᵢ) ≈ [f(xᵢ₊₁) − f(xᵢ₋₁)] / (2h) + **O(h²)**. The h² terms cancel, so it is second-order accurate.",
  "Division by h turns the O(h²) Taylor remainder into an O(h) error for forward/backward, and O(h³)/h = O(h²) for centered.",
  "Practical rule: use centered inside the data; use forward at the first point and backward at the last point."
 ],
 formulas: [
  "Forward:   f′(xᵢ) ≈ [f(xᵢ₊₁) − f(xᵢ)] / h        O(h)",
  "Backward:  f′(xᵢ) ≈ [f(xᵢ) − f(xᵢ₋₁)] / h        O(h)",
  "Centered:  f′(xᵢ) ≈ [f(xᵢ₊₁) − f(xᵢ₋₁)] / (2h)   O(h²)"
 ],
 example: {
  title: "Derivative of eˣ at x = 1 with h = 0.1",
  problem: "True f′(1) = e = 2.718282. Compute the three approximations and their errors.",
  steps: [
   "Forward: (e^1.1 − e^1)/0.1 = (3.004166 − 2.718282)/0.1 = **2.8588** (error −0.1406, 5.2 %)",
   "Backward: (e^1 − e^0.9)/0.1 = (2.718282 − 2.459603)/0.1 = **2.5868** (error +0.1315, 4.8 %)",
   "Centered: (e^1.1 − e^0.9)/0.2 = **2.7228** (error −0.0045, 0.17 %)",
   "Forward over- and backward under-estimate with nearly equal and opposite errors; their average is the centered formula. Centered is about 30 times more accurate here."
  ],
  answer: "Forward 2.8588, backward 2.5868, centered 2.7228 (true 2.7183)"
 },
 pitfalls: ["Dividing by h instead of 2h in the centered formula.", "Believing all three have the same order."],
 check: [
  { q: "Order of forward, backward and centered differences?", a: "O(h), O(h), O(h²)." },
  { q: "Why is centered better?", a: "The h² terms of the two Taylor expansions cancel on subtraction." },
  { q: "f = x² at x = 3, h = 1: forward and centered estimates of f′?", a: "Forward (16−9)/1 = 7; centered (16−4)/2 = 6 (exact 6)." }
 ]
},
{
 id: "errprop", part: "A", ch: "Slide 2.43 (homework 2.2)", title: "Error propagation (Stefan–Boltzmann example)", weight: "Core",
 idea: "A small uncertainty in an input becomes an uncertainty in the output. A first-order Taylor expansion gives it quickly: Δf ≈ |f′(x)|Δx. Comparing with the exact change shows the effect of nonlinearity.",
 steps: [
  "Model: radiated power H = AσeT⁴ (A area, σ = 5.67×10⁻⁸ W m⁻² K⁻⁴, e emissivity, T absolute temperature).",
  "**First-order error**: ΔH ≈ |dH/dT| ΔT = 4AσeT³ ΔT.",
  "**Exact error**: evaluate H(T + ΔT) − H(T) and H(T) − H(T − ΔT).",
  "Compare: because T⁴ is convex, the exact + change is larger than the first-order value and the − change is smaller. The linear estimate sits between them; the gap grows with ΔT.",
  "General multi-variable form: Δf ≈ Σ |∂f/∂xᵢ| Δxᵢ."
 ],
 formulas: ["Δf ≈ |f′(x)| Δx", "Δf ≈ Σᵢ |∂f/∂xᵢ| Δxᵢ", "H = AσeT⁴, ΔH ≈ 4AσeT³ΔT"],
 example: {
  title: "Steel plate: A = 0.15 m², e = 0.90, T = 650 ± 20 K and ± 40 K",
  problem: "Find H and its error, first-order versus exact.",
  steps: [
   "H = 0.15 × 5.67×10⁻⁸ × 0.90 × 650⁴ = **1366.4 W**.",
   "dH/dT = 4AσeT³ = 4(0.15)(5.67×10⁻⁸)(0.90)(650³) = 8.408 W/K.",
   "**ΔT = ±20**: first-order ΔH = 8.408 × 20 = **168.2 W** (12.3 % of H). Exact: H(670) − H(650) = +176.1 W; H(650) − H(630) = −160.6 W.",
   "**ΔT = ±40**: first-order ΔH = **336.3 W** (24.6 %). Exact: H(690) − H(650) = +368.7 W; H(650) − H(610) = −306.5 W.",
   "Interpretation: doubling the temperature uncertainty doubles the first-order error but the exact asymmetry grows: the exact changes sit +4.7 % / −4.5 % from the linear estimate at ±20 K, and +9.6 % / −8.9 % at ±40 K. A 3 % uncertainty in T gives a 12 % uncertainty in H because of the T⁴ dependence (power law: relative error ×4)."
  ],
  answer: "H = 1366 W; ±20 K: ΔH ≈ 168 W (exact +176/−161); ±40 K: ΔH ≈ 336 W (exact +369/−307)"
 },
 pitfalls: ["Using °C instead of kelvin.", "Forgetting the exponent multiplies the relative error (×4 for T⁴)."],
 check: [
  { q: "A quantity y = x³ has x known to ±1 %. Approximate relative error in y?", a: "About 3 % (exponent × relative error)." },
  { q: "Why is the exact error asymmetric?", a: "The function is nonlinear (curved); the first-order estimate uses only the slope at one point." },
  { q: "Name the formula for the first-order error.", a: "Δf ≈ |f′(x)|Δx (a one-term Taylor expansion)." }
 ]
},

/* ============================ PART B ============================ */
{
 id: "bisection", part: "B", ch: "Chapra Ch. 5", title: "Roots of equations I: bisection and false position", weight: "Next",
 idea: "A root is a value where f(x) = 0. Bracketing methods keep an interval [a, b] that surely contains the root (f changes sign) and shrink it.",
 steps: [
  "**Check** f(a)·f(b) < 0 (sign change ⇒ at least one root for continuous f).",
  "**Bisection**: c = (a + b)/2. If f(a)f(c) < 0 the root is in [a, c], so set b = c; otherwise set a = c. Repeat.",
  "Each step halves the interval: after n steps the interval is (b₀ − a₀)/2ⁿ. Guaranteed to converge; slow (linear).",
  "**Steps needed** for an absolute tolerance E: n ≥ log₂[(b₀ − a₀)/E].",
  "**False position (regula falsi)**: instead of the midpoint use where the straight line through (a, f(a)) and (b, f(b)) crosses zero: c = b − f(b)(a − b)/(f(a) − f(b)). Keep the sub-interval with the sign change. Usually faster but can stall with one end fixed.",
  "**Stop** when |ε_a| < ε_s (see error topic)."
 ],
 formulas: ["Bisection: c = (a+b)/2", "False position: c = b − f(b)(a−b) / [f(a) − f(b)]", "n = log₂[(b−a)/E]"],
 example: {
  title: "Root of f(x) = x³ − x − 2 in [1, 2] (exact root 1.521380)",
  problem: "Do the first iterations of both methods.",
  steps: [
   "f(1) = −2, f(2) = +4 → sign change ✓.",
   "**Bisection**: c₁ = 1.5 (f = −0.125 → root in [1.5, 2]); c₂ = 1.75 (+1.609); c₃ = 1.625 (+0.666); c₄ = 1.5625 (+0.252); c₅ = 1.53125 (+0.059); c₆ = 1.515625 (−0.034). Error halves each step: after 6 steps interval width 1/64.",
   "**False position**: c₁ = 1.33333 (f = −0.963); c₂ = 1.46269 (−0.333); c₃ = 1.50402 (−0.102); c₄ = 1.51633 (−0.030). Left end keeps moving; the right end stays at 2: typical 'one-sided' convergence.",
   "After 4 steps false position (1.5163) is closer than bisection's 4th midpoint (1.5625)."
  ],
  answer: "Root ≈ 1.5214; bisection 1.5156 after 6 steps; false position 1.5163 after 4"
 },
 pitfalls: ["Starting with an interval without a sign change.", "Wrongly updating the end that keeps the same sign."],
 check: [
  { q: "How many bisections shrink [1, 2] to width below 0.001?", a: "n ≥ log₂(1/0.001) = 9.97, so 10." },
  { q: "Bracketing vs open methods?", a: "Bracketing keeps a sign-changing interval (always converges); open methods use one or two starting guesses (faster but may diverge)." },
  { q: "Why can false position stall?", a: "One end can stay fixed while the other creeps toward the root." }
 ]
},
{
 id: "newton", part: "B", ch: "Chapra Ch. 6", title: "Roots of equations II: Newton–Raphson and secant", weight: "Next",
 idea: "Open methods follow the tangent (or a secant line) to zero. They converge much faster than bracketing methods when started near the root, but can diverge.",
 steps: [
  "**Newton–Raphson**: the tangent at (xᵢ, f(xᵢ)) crosses zero at xᵢ₊₁ = xᵢ − f(xᵢ)/f′(xᵢ). It comes from the first-order Taylor expansion: set f(xᵢ₊₁) ≈ f(xᵢ) + f′(xᵢ)(xᵢ₊₁ − xᵢ) = 0.",
  "Convergence is **quadratic**: the number of correct digits roughly doubles per step. The Babylonian method is Newton on f = x² − N.",
  "Needs f′ and a good start; fails if f′ ≈ 0 or the iteration overshoots away.",
  "**Secant**: replace f′ by a finite difference through the last two points: xᵢ₊₁ = xᵢ − f(xᵢ)(xᵢ₋₁ − xᵢ)/(f(xᵢ₋₁) − f(xᵢ)). No derivative needed, superlinear convergence (order ≈ 1.62).",
  "Use ε_a to stop."
 ],
 formulas: ["Newton: xᵢ₊₁ = xᵢ − f(xᵢ)/f′(xᵢ)", "Secant: xᵢ₊₁ = xᵢ − f(xᵢ)(xᵢ₋₁ − xᵢ)/[f(xᵢ₋₁) − f(xᵢ)]"],
 example: {
  title: "Same f(x) = x³ − x − 2 with Newton (x₀ = 1.5) and secant (1, 2)",
  problem: "f′(x) = 3x² − 1. Do four steps of each.",
  steps: [
   "Newton: x₁ = 1.5 − (−0.125)/5.75 = **1.521739** (ε_a = 1.43 %)",
   "x₂ = **1.521380** (ε_a = 0.0236 %), x₃ = **1.5213797068** (ε_a = 6.5×10⁻⁶ %), x₄ = 1.52137970680457 (digits double each step).",
   "Secant: x₂ = 1.333333, x₃ = 1.462687, x₄ = 1.531169, x₅ = 1.520926: slower than Newton but needs no derivative.",
   "Compare: bisection needed >20 steps to get 6 digits; Newton needed 3."
  ],
  answer: "Newton: 1.521739 → 1.521380 → 1.5213797; secant reaches 1.5209 in 4 steps"
 },
 pitfalls: ["Starting where f′ ≈ 0.", "Stopping on |f| small only (check the change in x too)."],
 check: [
  { q: "Newton step for f = x² − 2 at x = 1?", a: "x₁ = 1 − (−1)/2 = 1.5." },
  { q: "Convergence rate of Newton–Raphson?", a: "Quadratic (digits correct double each step)." },
  { q: "Advantage of secant over Newton?", a: "No derivative needed." }
 ]
},
{
 id: "gauss", part: "B", ch: "Chapra Ch. 9–11", title: "Linear algebraic equations: Gauss elimination, pivoting, LU", weight: "Next",
 idea: "Many models become [A]{x} = {b}. Gauss elimination reduces A to upper-triangular form (forward elimination) and then solves from the bottom up (back substitution).",
 steps: [
  "**Forward elimination**: for each pivot row, multiply it by factor = aᵢₖ/aₖₖ and subtract from the rows below to zero the column under the pivot.",
  "**Back substitution**: solve the last equation for the last unknown, substitute upward.",
  "**Pivoting**: swap rows so the pivot is the largest available coefficient; avoids division by zero and cuts round-off.",
  "**Singular / ill-conditioned**: a zero pivot after pivoting means singular (no unique solution). A tiny determinant relative to the coefficients means ill-conditioned: small input changes give large output changes.",
  "**LU decomposition**: store the elimination factors in L (unit lower triangular) so [A] = [L][U]. Solve Ly = b (forward), then Ux = y (back). Efficient for many right-hand sides.",
  "Cost: about 2n³/3 flops for elimination, n² for each substitution."
 ],
 formulas: ["factor f = aᵢₖ/aₖₖ;  row_i ← row_i − f·row_k", "Back substitution: xᵢ = (bᵢ − Σⱼ>ᵢ aᵢⱼxⱼ)/aᵢᵢ", "A = LU;  Ly = b;  Ux = y"],
 example: {
  title: "2x + y − z = 8;  −3x − y + 2z = −11;  −2x + y + 2z = −3",
  problem: "Solve by Gauss elimination.",
  steps: [
   "R₂ ← R₂ + 1.5R₁ gives 0.5y + 0.5z = 1;  R₃ ← R₃ + R₁ gives 2y + z = 5.",
   "R₃ ← R₃ − 4R₂ (factor 2/0.5 = 4): 2y + z − 2y − 2z = 5 − 4 → **−z = 1**.",
   "Back substitution: z = −1; 0.5y − 0.5 = 1 → y = 3; 2x + 3 + 1 = 8 → x = 2.",
   "Check eq. 2: −3(2) − 3 + 2(−1) = −11 ✓."
  ],
  answer: "x = 2, y = 3, z = −1"
 },
 pitfalls: ["Forgetting to apply row operations to the right-hand side.", "Dividing by a zero or tiny pivot."],
 check: [
  { q: "What does the pivot do and why swap rows?", a: "The pivot is the divisor in elimination; swapping to the largest coefficient avoids division by zero and reduces round-off." },
  { q: "When is LU better than plain elimination?", a: "When the same A is solved with many different right-hand sides." },
  { q: "Meaning of ill-conditioned?", a: "Tiny changes in the data cause huge changes in the solution (determinant near zero)." }
 ]
},
{
 id: "iter", part: "B", ch: "Chapra Ch. 11–12", title: "Iterative solution of linear systems (Jacobi, Gauss–Seidel)", weight: "Next",
 idea: "Instead of eliminating, guess a solution and refine it repeatedly. Gauss–Seidel uses each newly computed value immediately. It works well for large sparse systems, but only converges if the matrix is (roughly) diagonally dominant.",
 steps: [
  "Solve each equation for its diagonal unknown: xᵢ = (bᵢ − Σⱼ≠ᵢ aᵢⱼxⱼ)/aᵢᵢ.",
  "**Jacobi**: use only the previous iteration's values in the whole sweep.",
  "**Gauss–Seidel**: use new values as soon as they are computed within the sweep. Usually about twice as fast.",
  "Start from x = 0 (or any guess); stop when every unknown has |ε_a| < ε_s.",
  "**Convergence condition (sufficient)**: |aᵢᵢ| > Σⱼ≠ᵢ |aᵢⱼ| for every row (diagonal dominance). Reorder equations to make it so.",
  "**Relaxation**: xᵢ_new = λ·x_new + (1 − λ)·x_old to speed up (0<λ<2)."
 ],
 formulas: ["xᵢ⁽ᵏ⁺¹⁾ = (bᵢ − Σⱼ<ᵢ aᵢⱼxⱼ⁽ᵏ⁺¹⁾ − Σⱼ>ᵢ aᵢⱼxⱼ⁽ᵏ⁾)/aᵢᵢ", "Diagonal dominance: |aᵢᵢ| > Σⱼ≠ᵢ |aᵢⱼ|"],
 example: {
  title: "10x − y + 2z = 6;  −x + 11y − z = 25;  2x − y + 10z = −11",
  problem: "Gauss–Seidel from (0, 0, 0).",
  steps: [
   "Diagonally dominant (10 > 3, 11 > 2, 10 > 3) ✓.",
   "Pass 1: x = (6 + 0 − 0)/10 = 0.6;  y = (25 + 0.6 + 0)/11 = 2.3273;  z = (−11 − 1.2 + 2.3273)/10 = −0.9873",
   "Pass 2: x = 1.0302;  y = 2.2766;  z = −1.0784",
   "Pass 3: x = 1.0433;  y = 2.2695;  z = −1.0817",
   "Pass 5: x = 1.04327, y = 2.26923, z = −1.08173 (changes now < 10⁻⁵)."
  ],
  answer: "x ≈ 1.0433, y ≈ 2.2692, z ≈ −1.0817"
 },
 pitfalls: ["Applying the method to a non-diagonally-dominant system without checking.", "Using old values in Gauss–Seidel (that is Jacobi)."],
 check: [
  { q: "Difference between Jacobi and Gauss–Seidel?", a: "Gauss–Seidel uses updated values immediately within the same sweep; Jacobi waits for the next sweep." },
  { q: "Sufficient convergence condition?", a: "Strict diagonal dominance of A." },
  { q: "When prefer iterative over elimination?", a: "Large sparse systems where elimination costs too much memory and time." }
 ]
},
{
 id: "fit", part: "B", ch: "Chapra Ch. 17–18", title: "Curve fitting: regression and interpolation", weight: "Next",
 idea: "Regression fits one smooth curve through noisy data (does not pass through every point). Interpolation builds a curve that passes exactly through every data point, used to estimate between points.",
 steps: [
  "**Least-squares line** y = a₀ + a₁x: choose a₀, a₁ to minimise Σ(yᵢ − a₀ − a₁xᵢ)².",
  "Normal equations give a₁ = [nΣxy − ΣxΣy]/[nΣx² − (Σx)²] and a₀ = ȳ − a₁x̄.",
  "**Goodness**: r² = (S_t − S_r)/S_t where S_t = Σ(y − ȳ)² and S_r = Σ(y − a₀ − a₁x)². r² near 1 means a good fit.",
  "**Interpolation** (Newton form): linear f₁(x) = f(x₀) + f[x₁,x₀](x − x₀); quadratic adds f[x₂,x₁,x₀](x − x₀)(x − x₁), where divided differences are f[x₁,x₀] = (f(x₁) − f(x₀))/(x₁ − x₀) etc. Lagrange form gives the same polynomial.",
  "n+1 points define a unique polynomial of degree n. High degree can oscillate wildly: prefer splines or lower-order local fits."
 ],
 formulas: [
  "a₁ = [nΣxy − ΣxΣy] / [nΣx² − (Σx)²];  a₀ = ȳ − a₁x̄",
  "r² = (S_t − S_r)/S_t",
  "f₂(x) = b₀ + b₁(x−x₀) + b₂(x−x₀)(x−x₁)"
 ],
 example: {
  title: "Regression of 5 points and interpolation of ln 2",
  problem: "(a) Fit y to x = 1…5, y = 2.2, 2.8, 3.6, 4.5, 5.1.  (b) Estimate ln 2 from ln 1 = 0, ln 4 = 1.386294, ln 6 = 1.791759.",
  steps: [
   "(a) Σx = 15, Σy = 18.2, Σxy = 62.1, Σx² = 55, n = 5. a₁ = (5·62.1 − 15·18.2)/(5·55 − 225) = 37.5/50 = **0.75**; a₀ = 3.64 − 0.75·3 = **1.39**. So y = 1.39 + 0.75x.",
   "S_t = 5.652, S_r = 0.027, r² = **0.995**: an excellent fit.",
   "(b) Linear using (1, 4): slope 0.462098, f₁(2) = **0.4621** (true 0.6931, error 33 %).",
   "Quadratic: f[x₁,x₀] = 0.462098; f[x₂,x₁] = 0.202733; f[x₂,x₁,x₀] = (0.202733 − 0.462098)/(6 − 1) = −0.051873; f₂(2) = 0.462098 − 0.051873·(2−1)(2−4) = **0.56584** (error 18.4 %).",
   "Adding one more point improved the estimate: curvature matters."
  ],
  answer: "y = 1.39 + 0.75x (r² = 0.995);  ln 2 ≈ 0.4621 linear, 0.5658 quadratic (true 0.6931)"
 },
 pitfalls: ["Calling regression 'interpolation' (a regression line need not touch any point).", "Extrapolating far beyond the data."],
 check: [
  { q: "Difference between regression and interpolation?", a: "Regression minimises overall error for noisy data; interpolation passes exactly through each point." },
  { q: "What does r² = 0.99 tell you?", a: "99 % of the variance of y is explained by the fit." },
  { q: "Degree of the polynomial through 4 points?", a: "Up to degree 3." }
 ]
},
{
 id: "integ", part: "B", ch: "Chapra Ch. 21–22", title: "Numerical integration (trapezoidal and Simpson)", weight: "Next",
 idea: "When an integral has no closed form (or the data are tabulated, e.g. ECG area), approximate the area by summing simple shapes under the curve.",
 steps: [
  "**Trapezoidal rule (one segment)**: I ≈ (b − a)[f(a) + f(b)]/2. **Composite** with n equal strips of width h: I ≈ (h/2)[f(x₀) + 2Σ f(xᵢ) + f(xₙ)]. Error O(h²).",
  "**Simpson's 1/3 rule**: fit a parabola through three points: I ≈ (h/3)[f(x₀) + 4f(x₁) + f(x₂)]. **Composite** (n even): (h/3)[f₀ + 4(f₁ + f₃ + …) + 2(f₂ + f₄ + …) + fₙ]. Error O(h⁴), exact for cubics.",
  "**Simpson's 3/8** handles an odd number of segments.",
  "Halving h cuts the trapezoid error ≈ 4×, the Simpson error ≈ 16×.",
  "Numerical differentiation is the reverse operation (finite differences, previous topic)."
 ],
 formulas: ["Trapezoid: (h/2)[f₀ + 2Σfᵢ + fₙ]", "Simpson 1/3: (h/3)[f₀ + 4Σ(odd) + 2Σ(even) + fₙ]", "E_trap = −(b−a)h² f″(ξ)/12;  E_simp = −(b−a)h⁴ f⁗(ξ)/180"],
 example: {
  title: "∫₀^π sin x dx = 2 with n = 4 (h = π/4)",
  problem: "Compare the two rules.",
  steps: [
   "Nodes: 0, π/4, π/2, 3π/4, π with f = 0, 0.70711, 1, 0.70711, 0.",
   "Trapezoid: (π/8)[0 + 2(0.70711 + 1 + 0.70711) + 0] = (π/8)(4.82843) = **1.89612** (error 5.2 %).",
   "Simpson: (π/12)[0 + 4(0.70711 + 0.70711) + 2(1) + 0] = (π/12)(7.65685) = **2.00456** (error 0.23 %).",
   "Simpson is ~20× better for the same function values."
  ],
  answer: "Trapezoid 1.8961, Simpson 2.0046 (exact 2)"
 },
 pitfalls: ["Using Simpson 1/3 with an odd number of segments.", "Wrong weights (1-4-2-4-…-4-1)."],
 check: [
  { q: "Weights of composite Simpson 1/3 for n = 4?", a: "1, 4, 2, 4, 1 times h/3." },
  { q: "Order of error: trapezoid vs Simpson?", a: "O(h²) vs O(h⁴)." },
  { q: "Name one BME use.", a: "Area under an ECG/EMG curve, drug exposure AUC from concentration–time data." }
 ]
},
{
 id: "ode", part: "B", ch: "Chapra Ch. 25–26", title: "Ordinary differential equations: Euler, Heun, Runge–Kutta", weight: "Next",
 idea: "All these methods have the Chapter 1 form: new = old + slope × step. They differ in how the slope is chosen. Better slopes mean higher order and smaller error.",
 steps: [
  "**Euler** (order 1): yᵢ₊₁ = yᵢ + f(xᵢ, yᵢ)h. Slope at the start of the step. Global error O(h).",
  "**Heun** (order 2, predictor–corrector): predictor yᵢ⁰₊₁ = yᵢ + f(xᵢ,yᵢ)h; slope at the end f(xᵢ₊₁, y⁰ᵢ₊₁); use the average of the two slopes: yᵢ₊₁ = yᵢ + h[f₁ + f₂]/2. Global error O(h²).",
  "**Classical 4th-order Runge–Kutta**: k₁ = f(xᵢ,yᵢ); k₂ = f(xᵢ+h/2, yᵢ+k₁h/2); k₃ = f(xᵢ+h/2, yᵢ+k₂h/2); k₄ = f(xᵢ+h, yᵢ+k₃h); yᵢ₊₁ = yᵢ + (h/6)(k₁ + 2k₂ + 2k₃ + k₄). Global error O(h⁴).",
  "**Stability/stiffness**: for fast-decaying components explicit methods need very small h; use implicit methods for stiff systems.",
  "Systems of ODEs and higher-order ODEs: write as a set of first-order equations and apply the method to each."
 ],
 formulas: ["Euler: yᵢ₊₁ = yᵢ + f(xᵢ,yᵢ)h", "Heun: yᵢ₊₁ = yᵢ + h(k₁ + k₂)/2", "RK4: yᵢ₊₁ = yᵢ + (h/6)(k₁+2k₂+2k₃+k₄)"],
 example: {
  title: "y′ = y, y(0) = 1, h = 0.5, find y(1) (exact e = 2.71828)",
  problem: "Compare the three methods with two steps.",
  steps: [
   "Euler: y(0.5) = 1 + 0.5 = 1.5; y(1) = 1.5 + 0.75 = **2.25** (error 17.2 %).",
   "Heun: step 1: k₁ = 1, k₂ = 1.5, y = 1 + 0.5(1.25) = 1.625; step 2: k₁ = 1.625, k₂ = 2.4375, y = 1.625 + 0.5(2.03125) = **2.640625** (error 2.9 %).",
   "RK4 (one step is: k₁ = 1, k₂ = 1.25, k₃ = 1.3125, k₄ = 1.65625 → y = 1.6484375); second step gives **2.717346** (error 0.03 %).",
   "More work per step (1, 2, 4 evaluations) buys a lot more accuracy."
  ],
  answer: "Euler 2.25, Heun 2.6406, RK4 2.7173 (exact 2.7183)"
 },
 pitfalls: ["Using the same slope for the whole step in Heun/RK.", "Reducing h in Euler without noticing round-off growth."],
 check: [
  { q: "Orders of Euler, Heun, RK4?", a: "1, 2, 4." },
  { q: "Which slope does Euler use?", a: "The slope at the beginning of the interval." },
  { q: "How do you solve y″ = f numerically?", a: "Introduce v = y′ and solve the system y′ = v, v′ = f." }
 ]
},
{
 id: "opt", part: "B", ch: "Chapra Ch. 13–16, 29–32", title: "Optimisation and PDEs (overview)", weight: "Overview",
 idea: "Optimisation finds the x that maximises or minimises f(x). PDEs add more than one independent variable; finite differences turn them into big algebraic systems.",
 steps: [
  "**Golden-section search** (1-D, no derivatives, for a unimodal f on [xₗ, xᵤ]): d = 0.618(xᵤ − xₗ); x₁ = xₗ + d, x₂ = xᵤ − d. Compare f(x₁), f(x₂) and discard the outer part not containing the optimum. Each step shrinks the interval by 0.618 and re-uses one point.",
  "**Newton's method for optimisation**: solve f′(x) = 0 using xᵢ₊₁ = xᵢ − f′(xᵢ)/f″(xᵢ). Multi-dimensional: gradient descent, steepest ascent.",
  "**Linear programming**: maximise a linear objective under linear constraints.",
  "**PDE types**: elliptic (Laplace ∇²T = 0), parabolic (heat/diffusion ∂T/∂t = α∇²T), hyperbolic (waves).",
  "**Finite differences**: replace derivatives with the formulas of the finite-difference topic on a grid. For Laplace: Tᵢ,ⱼ = ¼(Tᵢ₊₁,ⱼ + Tᵢ₋₁,ⱼ + Tᵢ,ⱼ₊₁ + Tᵢ,ⱼ₋₁): each grid value is the average of its neighbours; solve with Gauss–Seidel.",
  "**Finite elements** split the domain into elements with simple shape functions; common in biomechanics and tissue transport."
 ],
 formulas: ["Golden ratio factor 0.61803", "Newton optimisation: xᵢ₊₁ = xᵢ − f′/f″", "Laplace 5-point: Tᵢⱼ = ¼ΣTneighbours"],
 example: {
  title: "Golden-section: maximise f(x) = 2 sin x − x²/10 on [0, 4]",
  problem: "Do the first iterations (true maximum x = 1.4276, f = 1.7757).",
  steps: [
   "d = 0.618(4) = 2.472: x₁ = 2.472, x₂ = 1.528. f(x₁) = 0.630, f(x₂) = 1.765. Since f(x₂) > f(x₁), discard (x₁, 4]: new [0, 2.472].",
   "Next d = 0.618(2.472) = 1.528: x₁ = 1.528 (old x₂ reused), x₂ = 0.944. f(1.528) = 1.765 > f(0.944) = 1.531: discard [0, 0.944): new [0.944, 2.472].",
   "Next: x₁ = 1.889, x₂ = 1.528 → f(1.889)=1.543 < f(1.528): discard (1.889, 2.472]: new [0.944, 1.889]. The bracket shrinks 38 % per step around the true max 1.4276."
  ],
  answer: "Bracket after 3 steps: [0.944, 1.889] containing 1.4276"
 },
 pitfalls: ["Applying golden-section to non-unimodal functions.", "Confusing finding a root of f (f = 0) with finding an optimum (f′ = 0)."],
 check: [
  { q: "Optimum condition for a smooth f(x)?", a: "f′(x) = 0; f″ < 0 for a maximum, > 0 for a minimum." },
  { q: "Why is the golden ratio efficient?", a: "One interior point is re-used each step, so only one new function evaluation is needed." },
  { q: "Laplace finite-difference rule?", a: "Each interior value equals the average of its four neighbours." }
 ]
}
],
cards: [
  ["Define accuracy and precision", "Accuracy = closeness to the true value. Precision = closeness of repeated values to each other (standard deviation)."],
  ["Systematic vs random error", "Systematic: consistent bias (calibration, parallax, wrong method). Random: unpredictable scatter; hurts precision."],
  ["IEEE 754 single and double", "Single 32-bit: 1+8+23 (24 effective), 6–9 digits. Double 64-bit: 1+11+52 (53 effective), 15–17 digits."],
  ["Integer limit for n bits", "2ⁿ − 1"],
  ["Machine epsilon (single, double)", "2⁻²³ ≈ 1.19×10⁻⁷;  2⁻⁵² ≈ 2.22×10⁻¹⁶"],
  ["True error and sign meaning", "E = V_t − V_a. E > 0: underestimate; E < 0: overestimate."],
  ["True relative error", "ε_t = (V_t − V_a)/V_t × 100 %"],
  ["Approximate relative error", "ε_a = (new − old)/new × 100 %; stop when |ε_a| < ε_s"],
  ["Scarborough criterion", "ε_s = (0.5 × 10^(2−n)) % gives n correct significant figures."],
  ["Round-off vs truncation", "Round-off: finite digits stored. Truncation: infinite series/process cut short."],
  ["Babylonian method", "xₙ = ½(xₙ₋₁ + N/xₙ₋₁): Newton's method for x² = N."],
  ["Euler's method", "new = old + slope × step. v(tᵢ₊₁) = v(tᵢ) + [g − (c/m)v(tᵢ)]Δt"],
  ["Parachutist solution", "v(t) = (gm/c)(1 − e^(−(c/m)t)); terminal velocity gm/c."],
  ["Taylor series", "f(x) = Σ f⁽ⁿ⁾(a)(x−a)ⁿ/n!;  Maclaurin when a = 0."],
  ["Maclaurin eˣ, sin x, cos x", "Σxⁿ/n!;  Σ(−1)ⁿx²ⁿ⁺¹/(2n+1)!;  Σ(−1)ⁿx²ⁿ/(2n)!"],
  ["Meaning of O(hⁿ)", "Error is proportional to hⁿ for small h; halving h divides the error by 2ⁿ."],
  ["Forward / backward / centered orders", "O(h), O(h), O(h²)"],
  ["Centered difference", "f′(xᵢ) ≈ [f(xᵢ₊₁) − f(xᵢ₋₁)]/(2h)"],
  ["Error propagation", "Δf ≈ |f′|Δx; multi-variable Δf ≈ Σ|∂f/∂xᵢ|Δxᵢ."],
  ["Bisection step count", "n ≥ log₂[(b−a)/E]"],
  ["Newton–Raphson", "xᵢ₊₁ = xᵢ − f(xᵢ)/f′(xᵢ), quadratic convergence."],
  ["Secant method", "Newton with f′ replaced by a finite difference through the last two points."],
  ["Gauss elimination", "Forward elimination to upper-triangular, then back substitution; pivot to avoid small divisors."],
  ["Gauss–Seidel convergence", "Guaranteed when the matrix is strictly diagonally dominant."],
  ["Simpson vs trapezoid", "Simpson 1/3: O(h⁴), weights 1-4-2-4-…-1; trapezoid O(h²)."],
  ["RK4", "yᵢ₊₁ = yᵢ + (h/6)(k₁ + 2k₂ + 2k₃ + k₄)"],
  ["Golden ratio factor", "0.618: interval shrinks by 0.618 per step; one point re-used."],
  ["Why does adding Taylor terms sometimes fail?", "Outside the radius of convergence (e.g. ln x about 1 for x > 2) the series diverges."]
]
};
