/* Electromagnetics — Sadiku, Elements of Electromagnetics, 7th ed. (2018): review questions (book answer keys), end-of-chapter problem workouts, and the new application notes. */
window.QB = [
{
"ch": 1,
"t": "mc",
"q": "Which of the following quantities is not a vector: force, momentum, acceleration, work, weight?",
"o": [
"Work",
"Force",
"Momentum",
"Weight"
],
"e": "Work W = F·d is a dot product, hence a scalar. Force, momentum, acceleration and weight all have direction."
},
{
"ch": 1,
"t": "mc",
"q": "Which of the following is NOT a scalar field?",
"o": [
"Displacement of a mosquito in space",
"Light intensity in a drawing room",
"Temperature distribution in your classroom",
"Atmospheric pressure in a given region"
],
"e": "Displacement has magnitude and direction at each point, so it is a vector. Intensity, temperature, pressure (and humidity) are scalars."
},
{
"ch": 1,
"t": "mc",
"q": "Which of these is correct?",
"o": [
"A × B + B × A = 0",
"A × A = |A|²",
"A · B · C = B · C · A",
"a_x · a_y = a_z"
],
"e": "The cross product is anticommutative: B × A = −A × B, so the sum is 0. A × A = 0, a_x·a_y = 0, and A·B·C is not even defined (dot of a scalar and a vector)."
},
{
"ch": 1,
"t": "mc",
"q": "Which of the following identities is NOT valid?",
"o": [
"a(b + c) = ab + bc",
"a × (b + c) = a × b + a × c",
"a · b = b · a",
"c · (a × b) = −b · (a × c)"
],
"e": "The correct distributive law is a(b + c) = ab + ac, not ab + bc. The other identities are standard (the last is the triple-product rule: swapping two vectors flips the sign)."
},
{
"ch": 1,
"t": "num",
"q": "Let F = 2a_x − 6a_y + 10a_z and G = a_x + G_y a_y + 5a_z. If F and G have the same unit vector, find G_y.",
"a": -3.0,
"tol": 0.01,
"u": "",
"e": "Same unit vector ⇒ G is a positive multiple of F. Compare components: G_x/F_x = 1/2 and G_z/F_z = 5/10 = 1/2.\nSo G = F/2 and G_y = −6/2 = −3."
},
{
"ch": 1,
"t": "num",
"q": "A = a_x + α a_y + a_z and B = α a_x + a_y + a_z. If A and B are perpendicular, find α.",
"a": -0.5,
"tol": 0.001,
"u": "",
"e": "Perpendicular ⇒ A·B = 0:  α(1) + α(1) + 1(1) = 2α + 1 = 0 ⇒ α = −1/2."
},
{
"ch": 1,
"t": "num",
"q": "Find the component (scalar projection) of 6a_x + 2a_y − 3a_z along 3a_x − 4a_y.",
"a": 2.0,
"tol": 0.01,
"u": "",
"e": "A_B = A·B/|B| = (6·3 + 2·(−4) + 0)/√(9 + 16) = (18 − 8)/5 = 2."
},
{
"ch": 1,
"t": "num",
"q": "Given A = −6a_x + 3a_y + 2a_z, find the projection of A along a_y.",
"a": 3.0,
"tol": 0.01,
"u": "",
"e": "The projection of A along a_y is A·a_y = A_y = 3 (the y-component)."
},
{
"ch": 2,
"t": "mc",
"q": "At the Cartesian point (−3, 4, −1), which of the following is INCORRECT?",
"o": [
"ρ = −5",
"r = √26",
"θ = tan⁻¹(5/−1)",
"φ = tan⁻¹(4/−3)"
],
"e": "In cylindrical coordinates ρ = √(x² + y²) = 5 ≥ 0 — it can never be negative. r = √(9 + 16 + 1) = √26, θ = tan⁻¹(ρ/z) = tan⁻¹(5/−1) and φ = tan⁻¹(y/x) = tan⁻¹(4/−3) are correct."
},
{
"ch": 2,
"t": "mc",
"q": "Which of these is NOT valid at the point (0, 4, 0)?",
"o": [
"a_z = 4a_y",
"a_φ = −a_x",
"a_θ = −a_z",
"a_ρ = a_y"
],
"e": "At (0, 4, 0): φ = 90°, θ = 90°. Then a_ρ = a_y, a_φ = −a_x, a_θ = −a_z are all true, but a_z is a fixed unit vector — it cannot equal 4a_y."
},
{
"ch": 2,
"t": "mc",
"q": "A unit normal vector to the cone θ = 30° is:",
"o": [
"a_θ",
"a_r",
"a_φ",
"none of these"
],
"e": "The surface θ = constant is normal to the direction of increasing θ, which is a_θ."
},
{
"ch": 2,
"t": "mc",
"q": "If H = 4a_ρ − 3a_φ + 5a_z at (1, π/2, 0), the component of H parallel to the surface ρ = 1 is:",
"o": [
"−3a_φ + 5a_z",
"4a_ρ",
"5a_z",
"−3a_φ"
],
"e": "The surface ρ = 1 has normal a_ρ. The parallel (tangential) part is whatever is not along a_ρ: −3a_φ + 5a_z."
},
{
"ch": 2,
"t": "mc",
"q": "Given G = 20a_r + 50a_θ + 40a_φ at (1, π/2, π/6), the component of G perpendicular to the surface θ = π/2 is:",
"o": [
"50a_θ",
"20a_r",
"40a_φ",
"20a_r + 40a_φ"
],
"e": "The surface θ = π/2 (the xy-plane) has normal a_θ, so the perpendicular component is the a_θ part: 50a_θ."
},
{
"ch": 2,
"t": "mc",
"q": "The surfaces ρ = 2 and z = 1 intersect in:",
"o": [
"a circle",
"an infinite plane",
"a cylinder",
"a cone"
],
"e": "ρ = 2 is a cylinder and z = 1 a plane perpendicular to its axis; their intersection is a circle of radius 2 at height 1."
},
{
"ch": 3,
"t": "mc",
"q": "If r = x a_x + y a_y + z a_z is the position vector and r = |r|, which of the following is INCORRECT?",
"o": [
"∇ · r = 1",
"∇r = r/r",
"∇²(r · r) = 6",
"∇ × r = 0"
],
"e": "∇·r = ∂x/∂x + ∂y/∂y + ∂z/∂z = 3, not 1. The rest are correct: ∇r = r/r (unit radial vector), ∇²(r·r) = ∇²(x² + y² + z²) = 6, and ∇×r = 0 (r is irrotational)."
},
{
"ch": 3,
"t": "mc",
"q": "Which of the following expressions is mathematically defined (A is a vector field, V a scalar field)?",
"o": [
"∇(∇ · A)",
"∇ × ∇ · A",
"∇ · (∇ · A)",
"∇(∇V)"
],
"e": "∇·A is a scalar, so its gradient ∇(∇·A) is a vector — defined. ∇×(∇·A) and ∇·(∇·A) try to apply curl/divergence to a scalar; ∇(∇V) takes the gradient of a vector."
},
{
"ch": 3,
"t": "mc",
"q": "Which of the following is always zero?",
"o": [
"curl grad (∇ × ∇V)",
"grad div (∇∇·A)",
"div grad (∇·∇V)",
"curl curl (∇×∇×A)"
],
"e": "∇×(∇V) = 0 for any scalar V: gradient fields are irrotational. ∇·∇V = ∇²V is the Laplacian (generally non-zero)."
},
{
"ch": 3,
"t": "mc",
"q": "Given A = 3x²yz a_x + x³z a_y + (x³y − 2z) a_z, it can be said that A is:",
"o": [
"conservative",
"solenoidal",
"harmonic",
"divergenceless"
],
"e": "∇×A = (∂A_z/∂y − ∂A_y/∂z, ∂A_x/∂z − ∂A_z/∂x, ∂A_y/∂x − ∂A_x/∂y) = (x³ − x³, 3x²y − 3x²y, 3x²z − 3x²z) = 0 ⇒ conservative (irrotational).\n∇·A = 6xyz + 0 − 2 ≠ 0, so it is not solenoidal/divergenceless."
},
{
"ch": 3,
"t": "tf",
"q": "The surface current density J in a rectangular waveguide diverges at the top wall of the guide, whereas it is divergenceless at the side wall (as shown by the field plot in the book).",
"a": true,
"e": "True — the book's answer for review question 3.8 (the current lines start/end at the top wall, i.e. there is a net charge-density change there, while along the side wall they run parallel)."
},
{
"ch": 3,
"t": "tf",
"q": "Stokes's theorem is applicable only when a closed path exists and the vector field and its derivatives are continuous within the path.",
"a": true,
"e": "True. Stokes's theorem ∮A·dl = ∬(∇×A)·dS requires a closed contour and a field that is continuously differentiable on a surface bounded by it."
},
{
"ch": 3,
"t": "mc",
"q": "If a vector field Q is solenoidal, which of these is true?",
"o": [
"∮_S Q · dS = 0",
"∮_L Q · dl = 0",
"∇ × Q = 0",
"∇ × Q ≠ 0"
],
"e": "Solenoidal means ∇·Q = 0, so by the divergence theorem the net flux through any closed surface is zero. The circulation ∮Q·dl need not vanish."
},
{
"ch": 4,
"t": "mc",
"q": "Point charges Q₁ = 1 nC and Q₂ = 2 nC are at some distance apart. Which of the following statements is INCORRECT?",
"o": [
"As the distance between them decreases, the force on Q₁ increases linearly",
"The force on Q₁ is repulsive",
"The force on Q₂ is the same in magnitude as that on Q₁",
"The force on Q₂ is along the line joining them"
],
"e": "Coulomb's force varies as 1/R², so it increases as the inverse SQUARE of the distance, not linearly. The other three statements are true (like charges repel, Newton's third law, central force)."
},
{
"ch": 4,
"t": "num",
"q": "The plane z = 10 m carries a uniform surface charge of 20 nC/m². Find the magnitude of the electric field at the origin (take ε₀ = 8.854×10⁻¹² F/m).",
"a": 1129.433025,
"tol": 11.29,
"u": "V/m",
"tolPct": 1,
"e": "For an infinite sheet E = ρ_S/(2ε₀), independent of distance, directed away from a positive sheet.\n|E| = 20×10⁻⁹/(2 × 8.854×10⁻¹²) = 1129 V/m (the book uses ε₀ ≈ 10⁻⁹/36π, giving 360π ≈ 1131 V/m). At the origin, below the sheet, E points in the −a_z direction."
},
{
"ch": 4,
"t": "num",
"q": "Point charges 30 nC, −20 nC and 10 nC are at (−1, 0, 2), (0, 0, 0) and (1, 5, −1). Find the total flux, in nC, leaving a cube of side 6 m centred at the origin.",
"a": 10.0,
"tol": 0.01,
"u": "nC",
"e": "The cube extends from −3 to +3 m in each direction. The charges at (−1,0,2) and (0,0,0) are inside; (1, 5, −1) has y = 5 > 3 so it lies outside.\nBy Gauss's law the flux is the enclosed charge: 30 − 20 = 10 nC."
},
{
"ch": 4,
"t": "mc",
"q": "The electric flux density on a spherical surface r = b is the same for a point charge Q at the origin and for the same charge Q distributed uniformly on a surface r = a (a < b). True or false?",
"o": [
"True (same D)",
"False (D differs)",
"Only when a = b",
"Only for a conducting sphere"
],
"e": "By Gauss's law, ∮D·dS = Q_enc for the sphere r = b in both cases, and spherical symmetry makes D = Q/(4πb²) a_r. The inner distribution does not matter as long as it is spherically symmetric."
},
{
"ch": 4,
"t": "mc",
"q": "By saying that the electrostatic field is conservative, we do NOT mean that:",
"o": [
"the potential difference between any two points is zero",
"it is the gradient of a scalar potential",
"its circulation is identically zero",
"the work done in a closed path inside the field is zero"
],
"e": "Conservative means E = −∇V, ∮E·dl = 0 (curl-free), so no net work around a closed path. It certainly does not mean V_AB = 0: different points generally have different potentials."
},
{
"ch": 4,
"t": "mc",
"q": "A uniform field exists in a room with the lines of force horizontal and at right angles to one wall. Walking toward the wall from which the lines of force emerge, you move toward points of:",
"o": [
"higher potential",
"lower potential",
"the same potential (equipotential)",
"zero potential"
],
"e": "Field lines point from high to low potential (E = −∇V). You walk against E (toward the source wall), so the potential rises."
},
{
"ch": 4,
"t": "mc",
"q": "A charge Q is uniformly distributed throughout a sphere of radius a. Taking V = 0 at infinity, the potential at r = b < a is:",
"o": [
"−∫_∞^a [Q/(4πε₀r²)] dr − ∫_a^b [Qr/(4πε₀a³)] dr",
"−∫_∞^b [Q/(4πε₀r²)] dr",
"−∫_∞^b [Qr/(4πε₀a³)] dr",
"−∫_∞^a [Qr/(4πε₀a³)] dr"
],
"e": "Integrate E from infinity to the point along a radial path. Outside the sphere (r > a), E = Q/(4πε₀r²); inside (r < a) E = Qr/(4πε₀a³). The path from ∞ to b < a passes through both regions, so both pieces are needed."
},
{
"ch": 4,
"t": "num",
"q": "V = 3x²y − yz volts. Find the magnitude of E at the point (1, 0, −1). (E = −∇V)",
"a": 4.0,
"tol": 0.04,
"u": "V/m",
"e": "∇V = (6xy, 3x² − z, −y). At (1, 0, −1): (0, 3 + 1, 0) = (0, 4, 0).\nE = −∇V = −4 a_y, so |E| = 4 V/m (so the statement 'V and E both vanish there' is false: V = 0 but E ≠ 0)."
},
{
"ch": 4,
"t": "num",
"q": "For V = 3x²y − yz, the point P(2, −1, 4) lies on the equipotential surface V = −8. Find the x-component of the unit vector normal to this surface at P.",
"a": -0.8300573566,
"tol": 0.008301,
"u": "",
"tolPct": 1,
"e": "∇V = (6xy, 3x² − z, −y) = (6·2·(−1), 12 − 4, 1) = (−12, 8, 1) at P; |∇V| = √(144 + 64 + 1) = 14.46.\na_n = ∇V/|∇V| = (−0.8301, 0.5534, 0.06917); the x-component is −0.8301.\n(Check: V(P) = 3(4)(−1) − (−1)(4) = −8 ✓.)"
},
{
"ch": 4,
"t": "num",
"q": "Point charges 1 μC and 4 μC are located at (−2, 1, 5) and (1, 3, −1). Find the energy stored in the field, in mJ. (k = 9×10⁹)",
"a": 5.142857143,
"tol": 0.05143,
"u": "mJ",
"tolPct": 1,
"e": "R = |(1,3,−1) − (−2,1,5)| = √(9 + 4 + 36) = 7 m.\nW = kQ₁Q₂/R = 9×10⁹ × (10⁻⁶)(4×10⁻⁶)/7 = 0.005143 J = 5.143 mJ."
},
{
"ch": 5,
"t": "mc",
"q": "Which of these is NOT an example of convection current?",
"o": [
"Electric current flowing in a copper wire",
"A moving charged belt",
"Electronic movement in a vacuum tube",
"An electron beam in a television tube"
],
"e": "Convection current is charge carried by a moving medium or in free space (no ohmic collisions): belts, vacuum tubes, electron beams. Current in a copper wire is conduction current, J = σE."
},
{
"ch": 5,
"t": "mc",
"q": "What happens when a steady potential difference is applied across the ends of a conducting wire?",
"o": [
"The random electronic motion is, on average, equivalent to a constant velocity (drift velocity) of each electron",
"All electrons move with a constant acceleration",
"All electrons move with a constant velocity",
"Each electron has a constant non-zero acceleration on average"
],
"e": "Collisions with the lattice balance the force of the field, so the electrons acquire an average drift velocity u = μ_e E. They do not accelerate indefinitely, and not every electron moves identically."
},
{
"ch": 5,
"t": "mc",
"q": "The formula R = ℓ/(σS) for resistance is for thin wires. True, false or not necessarily?",
"o": [
"Not necessarily",
"True — only for thin wires",
"False — never valid",
"Only for superconductors"
],
"e": "R = ℓ/(σS) holds for any homogeneous conductor of uniform cross-section S and length ℓ with the current distributed uniformly — it is not restricted to thin wires. For non-uniform shapes use R = ∫dl/(σS) or R = V/I."
},
{
"ch": 5,
"t": "num",
"q": "Seawater has ε_r = 80. Find its permittivity ε = ε_rε₀ in units of 10⁻¹⁰ F/m. (ε₀ = 8.854×10⁻¹² F/m)",
"a": 7.0832,
"tol": 0.07083,
"u": "×10⁻¹⁰ F/m",
"tolPct": 1,
"e": "ε = ε_r ε₀ = 80 × 8.854×10⁻¹² = 7.083×10^−10 F/m = 7.083 ×10⁻¹⁰ F/m.\n(The book quotes 7.074×10⁻¹⁰ with a slightly different ε₀ approximation.)"
},
{
"ch": 5,
"t": "tf",
"q": "Both ε₀ and the electric susceptibility χ_e are dimensionless.",
"a": false,
"e": "χ_e (and ε_r = 1 + χ_e) are dimensionless, but ε₀ = 8.854×10⁻¹² has units of farads per metre."
},
{
"ch": 5,
"t": "mc",
"q": "If ∇·D = ε∇·E and ∇·J = σ∇·E in a given material, the material is said to be:",
"o": [
"linear and homogeneous",
"linear and isotropic",
"isotropic and homogeneous",
"homogeneous only"
],
"e": "Pulling ε and σ out of the divergence means they do not vary with position (homogeneous); D = εE and J = σE being simple proportionalities means the material is linear."
},
{
"ch": 5,
"t": "num",
"q": "Find the relaxation time of mica (σ = 10⁻¹⁵ S/m, ε_r = 6) in hours. (ε₀ = 8.854×10⁻¹²)",
"a": 14.75666667,
"tol": 0.1476,
"u": "hr",
"tolPct": 1,
"e": "T_r = ε/σ = 6 × 8.854×10⁻¹²/10⁻¹⁵ = 5.312e+04 s = 14.76 hours ≈ 15 hours.\nMica is an excellent insulator, so charges on it persist for hours; for copper T_r ≈ 10⁻¹⁹ s."
},
{
"ch": 5,
"t": "mc",
"q": "Which of the following statements is INCORRECT?",
"o": [
"A conductor is an equipotential body in steady state and E is always tangential to the conductor",
"The conductivities of conductors and insulators vary with temperature and frequency",
"Nonpolar molecules have no permanent dipoles",
"In a linear dielectric, P varies linearly with E"
],
"e": "At the surface of a conductor E_t = 0: the field is always NORMAL to a conductor in electrostatic conditions (D_n = ρ_S). The other statements are true (P = χ_eε₀E; non-polar molecules form dipoles only when a field is applied)."
},
{
"ch": 5,
"t": "tf",
"q": "The electric conditions (charge and potential) inside and outside an electric screening (shield) are completely independent of one another.",
"a": true,
"e": "True — electrostatic shielding: a closed conducting enclosure keeps the interior field independent of the charges outside (and vice versa for a grounded shell)."
},
{
"ch": 6,
"t": "tf",
"q": "The equation ∇·(−ε∇V) = ρ_v may be regarded as Poisson's equation for an inhomogeneous medium.",
"a": true,
"e": "True. With D = εE and E = −∇V, Gauss's law ∇·D = ρ_v gives ∇·(−ε∇V) = ρ_v. For constant ε it reduces to ∇²V = −ρ_v/ε."
},
{
"ch": 6,
"t": "mc",
"q": "In cylindrical coordinates, ∂²ψ/∂ρ² + (1/ρ)∂ψ/∂ρ + ∂²ψ/∂z² + 10 = 0 is called:",
"o": [
"Poisson's equation",
"Laplace's equation",
"Maxwell's equation",
"Helmholtz's equation"
],
"e": "The first three terms are ∇²ψ (no φ-dependence), so the equation reads ∇²ψ = −10. A non-zero source term on the right makes it Poisson's equation; Laplace's equation has zero on the right."
},
{
"ch": 6,
"t": "tf",
"q": "Two potential functions V₁ and V₂ satisfy Laplace's equation within a closed region and take the same values on its surface. Then V₁ must equal V₂.",
"a": true,
"e": "True — the uniqueness theorem: the solution of Laplace's (or Poisson's) equation that satisfies the boundary conditions is unique."
},
{
"ch": 6,
"t": "mc",
"q": "Which of the following potentials does NOT satisfy Laplace's equation (r and φ are spherical coordinates in (c), ρ and φ cylindrical in (e))?",
"o": [
"V = r cos φ",
"V = 2x + 5",
"V = 10xy",
"V = 10/r"
],
"e": "V = 2x + 5 (∇² = 0), V = 10xy (∂²/∂x² and ∂²/∂y² are both 0) and V = 10/r (spherical) satisfy ∇²V = 0. For V = r cos φ in spherical coordinates the φ-term (1/(r² sin²θ))∂²V/∂φ² = −cos φ/(r sin²θ) ≠ 0 and nothing cancels it. (V = ρ cos φ + 10 in cylindrical coordinates does satisfy Laplace.)"
},
{
"ch": 6,
"t": "mc",
"q": "Which of the following is NOT true?",
"o": [
"10 sin 2x is a solution to φ″(x) − 4φ(x) = 0",
"−5 cos 3x is a solution to φ″(x) + 9φ(x) = 0",
"−4 cosh 3y is a solution to R″(y) − 9R(y) = 0",
"sinh 2y is a solution to R″(y) − 4R(y) = 0"
],
"e": "d²/dx²[10 sin 2x] = −40 sin 2x, so 10 sin 2x solves φ″ + 4φ = 0, not φ″ − 4φ = 0. The cos 3x, cosh 3y and sinh 2y cases are correct (sines/cosines for +k², hyperbolic functions for −k²)."
},
{
"ch": 6,
"t": "tf",
"q": "The capacitance of a capacitor filled with a linear dielectric is independent of the charge on the plates and of the potential difference between them.",
"a": true,
"e": "True: C = Q/V = εA/d depends only on geometry and ε (Q and V are proportional)."
},
{
"ch": 6,
"t": "mc",
"q": "A parallel-plate capacitor connected to a battery stores twice as much charge with a given dielectric as it does with air. The susceptibility of the dielectric is:",
"o": [
"1",
"0",
"2",
"3"
],
"e": "Same V and double Q ⇒ C doubles ⇒ ε_r = 2. Since ε_r = 1 + χ_e, the susceptibility is χ_e = 1."
},
{
"ch": 6,
"t": "num",
"q": "A potential difference V₀ is applied to a mercury column in a cylindrical container. The mercury is poured into another cylindrical container of half the radius and the same V₀ is applied across its ends. By what factor does the resistance increase?",
"a": 16.0,
"tol": 0.1,
"u": "×",
"e": "Volume of mercury is fixed: πa²ℓ = π(a/2)²ℓ′ ⇒ ℓ′ = 4ℓ.\nR = ℓ/(σπa²). New R′ = (4ℓ)/(σπ(a/2)²) = 16 ℓ/(σπa²) = 16R."
},
{
"ch": 6,
"t": "num",
"q": "Two conducting plates are inclined at an angle of 30° to each other, with a point charge between them. How many image charges are there?",
"a": 11.0,
"tol": 0.1,
"u": "images",
"e": "For a wedge of angle α = 360°/n, the number of image charges is n − 1.\nn = 360°/30° = 12 ⇒ 12 − 1 = 11 images (plus the original charge)."
},
{
"ch": 7,
"t": "mc",
"q": "Which of the following is NOT a source of magnetostatic fields?",
"o": [
"An accelerated charge",
"A dc current in a wire",
"A permanent magnet",
"A charged disk rotating at uniform speed"
],
"e": "Magnetostatic fields come from steady currents: dc currents, magnetization (permanent magnets) and charges moving at constant speed (a uniformly rotating charged disk is a steady current). An accelerated charge radiates and produces time-varying fields."
},
{
"ch": 7,
"t": "tf",
"q": "A current filament along the z-axis carries 10π A in the +z direction. At the point (5, 3π/2, 0) the magnetic field is H = −a_φ A/m.",
"a": false,
"e": "H = I/(2πρ) a_φ = 10π/(2π × 5) a_φ = +1 a_φ A/m (right-hand rule: thumb along +z, fingers along +a_φ), not −a_φ.\n(At (0,5,0), a_φ = −a_x, so H = −a_x is correct; at (−3,4,0), a_φ = (−0.8, −0.6).)"
},
{
"ch": 7,
"t": "num",
"q": "The plane y = 0 carries a uniform surface current K = 30a_z mA/m. Find H_x at the point (1, 10, −2) in mA/m.",
"a": -15.0,
"tol": 0.15,
"u": "mA/m",
"e": "For a current sheet H = ½ K × a_n with a_n the unit normal pointing toward the field point. At y = 10 > 0, a_n = +a_y.\nK × a_n = 30(a_z × a_y) = −30 a_x  ⇒  H = −15 a_x mA/m (independent of the distance 10 m)."
},
{
"ch": 7,
"t": "mc",
"q": "Which of these statements is NOT characteristic of a static magnetic field?",
"o": [
"It is conservative",
"It is solenoidal",
"It has no sinks or sources",
"Magnetic flux lines are always closed"
],
"e": "∇×H = J ≠ 0 where current flows, so the magnetic field is not conservative (∮H·dl = I_enc). It is solenoidal (∇·B = 0): flux lines close on themselves and there are no sources or sinks."
},
{
"ch": 7,
"t": "mc",
"q": "Two identical coaxial circular coils carry the same current I but in opposite directions. The magnitude of B at a point on the axis midway between the coils is:",
"o": [
"zero",
"the same as that produced by one coil",
"twice that produced by one coil",
"half that produced by one coil"
],
"e": "The two coils produce axial fields of equal magnitude at the midpoint but opposite directions, so they cancel (an anti-Helmholtz arrangement)."
},
{
"ch": 7,
"t": "mc",
"q": "Which one of these equations is NOT Maxwell's equation for a static electromagnetic field in a linear homogeneous medium?",
"o": [
"∇²A = μ₀J",
"∇·B = 0",
"∇×D = 0",
"∮_L B·dl = μ₀I"
],
"e": "With B = ∇×A and the Coulomb gauge, the vector Poisson equation is ∇²A = −μ₀J (note the minus sign). The other equations are valid static Maxwell equations (∇×D = 0 for homogeneous media since ∇×E = 0)."
},
{
"ch": 7,
"t": "mc",
"q": "Two bar magnets with their north poles of strength Q_m1 = 10 A·m and Q_m2 = 10 A·m (magnetic charges) are placed inside a volume as shown. The magnetic flux leaving the volume is:",
"o": [
"0 Wb",
"200 Wb",
"30 Wb",
"10 Wb"
],
"e": "∇·B = 0: magnetic charges never exist alone; each magnet's north pole is paired with a south pole inside the volume, so the net flux through any closed surface around them is zero."
},
{
"ch": 8,
"t": "tf",
"q": "The magnetic force F_m on a charged particle can perform work, just like the electric force F_e.",
"a": false,
"e": "False. F_m = Qu × B is always perpendicular to the velocity, so F_m·u = 0: it changes the direction of motion but not the speed or kinetic energy. F_e = QE can do work."
},
{
"ch": 8,
"t": "tf",
"q": "The electric force F_e on a charged particle depends on the velocity of the particle.",
"a": false,
"e": "False. F_e = QE is independent of velocity; only the magnetic force F_m = Qu × B depends on u."
},
{
"ch": 8,
"t": "mc",
"q": "Two thin parallel wires carry currents along the same direction. The force experienced by one due to the other is:",
"o": [
"perpendicular to the lines and attractive",
"parallel to the lines",
"perpendicular to the lines and repulsive",
"zero"
],
"e": "Each wire sits in the field B = μ₀I/(2πd) of the other, and F = IL × B points toward the other wire for parallel currents: attraction, along the line joining the wires (perpendicular to both wires)."
},
{
"ch": 8,
"t": "tf",
"q": "A circular current loop in a uniform magnetic field experiences zero net force (although it may experience a torque).",
"a": true,
"e": "True: the forces on opposite elements of the loop cancel (F = I∮dl × B = I(∮dl) × B = 0), and the loop only feels a torque T = m × B."
},
{
"ch": 8,
"t": "mc",
"q": "Which of these materials requires the lowest value of magnetic field strength to magnetize it?",
"o": [
"Nickel",
"Silver",
"Tungsten",
"Sodium chloride"
],
"e": "Nickel is ferromagnetic (very large μ_r), so a small H produces a large magnetization. Silver is diamagnetic, tungsten paramagnetic and sodium chloride essentially non-magnetic."
},
{
"ch": 8,
"t": "mc",
"q": "Identify the statement that is NOT true of ferromagnetic materials:",
"o": [
"They have a fixed value of μ_r",
"They have a large χ_m",
"Energy loss is proportional to the area of the hysteresis loop",
"They lose their non-linearity above the Curie temperature"
],
"e": "μ_r of a ferromagnet is not fixed: B–H is non-linear (μ_r changes with H and with history, hence hysteresis). The other statements are true: large susceptibility, hysteresis loss ∝ loop area, and above the Curie temperature the material becomes paramagnetic/linear."
},
{
"ch": 8,
"t": "num",
"q": "A multilayer coil of 2000 turns of fine wire is 20 mm long and has a winding thickness of 5 mm. The coil carries 5 mA. Find the magnetomotive force in ampere-turns.",
"a": 10.0,
"tol": 0.1,
"u": "A·t",
"e": "mmf 𝓕 = NI = 2000 × 5×10⁻³ = 10 A·t (the length and winding thickness are not needed)."
},
{
"ch": 9,
"t": "num",
"q": "The flux through each turn of a 100-turn coil is (t³ − 2t) mWb, where t is in seconds. Find the induced emf at t = 2 s, in volts.",
"a": -1.0,
"tol": 0.01,
"u": "V",
"e": "emf = −N dΦ/dt with Φ = (t³ − 2t)×10⁻³ Wb.\ndΦ/dt = (3t² − 2)×10⁻³ = (12 − 2)×10⁻³ = 10×10⁻³ Wb/s at t = 2.\nemf = −100 × 10×10⁻³ = −1 V."
},
{
"ch": 9,
"t": "mc",
"q": "Two identical conducting coils 1 and 2 (coil 2 is split open) are placed in a uniform magnetic field that decreases at a constant rate, with the plane of the coils perpendicular to the field lines. Which statement is true?",
"o": [
"An emf is induced in both coils",
"An emf is induced only in the split coil 2",
"Equal Joule heating occurs in both coils",
"Joule heating does not occur in either coil"
],
"e": "Faraday's law gives the emf −dΦ/dt around the loop whether or not the loop is closed, so both coils have an induced emf. Only the closed coil carries a current and dissipates Joule heat; the split coil is an open circuit."
},
{
"ch": 9,
"t": "mc",
"q": "A loop is rotating about the y-axis in a magnetic field B = B₀ sin ωt a_x Wb/m². The voltage induced in the loop is due to:",
"o": [
"a combination of motional and transformer emf",
"motional emf only",
"transformer emf only",
"none of the above"
],
"e": "The field varies with time (transformer emf, ∂B/∂t) and the loop moves through the field (motional emf, u × B). Both contribute: emf = −∫(∂B/∂t)·dS + ∮(u×B)·dl."
},
{
"ch": 9,
"t": "mc",
"q": "The concept of displacement current was a major contribution attributed to:",
"o": [
"Maxwell",
"Faraday",
"Lenz",
"Lorentz"
],
"e": "Maxwell added ∂D/∂t to Ampère's law, making ∇×H = J + ∂D/∂t consistent with charge conservation and predicting electromagnetic waves."
},
{
"ch": 9,
"t": "mc",
"q": "Which of the following is NOT a correct Maxwell equation for time-varying fields?",
"o": [
"∇·E = −∂B/∂t",
"∇·D = ρ_v",
"∮_L H·dl = ∫_S (σE + ε ∂E/∂t)·dS",
"∮_S B·dS = 0"
],
"e": "Faraday's law involves the CURL: ∇×E = −∂B/∂t. The divergence of E is ρ_v/ε. The other three are Gauss's law, the integral form of Ampère–Maxwell (J = σE plus displacement current) and ∇·B = 0."
},
{
"ch": 9,
"t": "mc",
"q": "Which of the following statements is NOT true of a phasor?",
"o": [
"It is a time-dependent quantity",
"It may be a scalar or a vector",
"It is a complex quantity",
"A phasor V_s may be written V₀∠θ or V₀e^(jθ) with V₀ = |V_s|"
],
"e": "A phasor is a time-INDEPENDENT complex amplitude: the sinusoid is recovered as Re(V_s e^(jωt)). It may be scalar or vector, and it carries magnitude and phase."
},
{
"ch": 9,
"t": "mc",
"q": "If E_s = 10 e^(j4x) a_y, which of these is NOT a correct representation of E?",
"o": [
"10 cos(ωt + j4x) a_y",
"Re(E_s e^(jωt))",
"Re(E_s e^(−jωt))",
"Im(E_s e^(jωt))"
],
"e": "E = Re(E_s e^(jωt)) = 10 cos(ωt + 4x) a_y; the phase 4x is real. A cosine with a complex argument (ωt + j4x) is not a real field. Re(E_s e^(−jωt)) = 10cos(4x − ωt) = 10 cos(ωt − 4x) and Im(…) = 10 sin(ωt + 4x) are valid forms (conventions differ)."
},
{
"ch": 10,
"t": "mc",
"q": "Which of these functions does NOT satisfy the wave equation?",
"o": [
"cos(5y + 2x)",
"50 e^(jω(t − 5z))",
"(x + 2t)²",
"cos²(y + 5t)"
],
"e": "A solution must be a function of position and time of the form f(x ± ut) (or a combination such as sin x cos t). cos(5y + 2x) contains no time dependence, so ∂²/∂t² = 0 while ∇² ≠ 0 — it fails. (x+2t)² and cos²(y+5t) are functions of a single travelling variable."
},
{
"ch": 10,
"t": "mc",
"q": "Which of the following statements is NOT true of waves in general?",
"o": [
"The phenomenon may be a function of time only",
"The phenomenon may be sinusoidal or cosinusoidal",
"The phenomenon must be a function of time and space",
"For practical reasons, it must be finite in extent"
],
"e": "A wave is a disturbance that varies with both time and position (it propagates). A quantity depending only on time is an oscillation, not a wave."
},
{
"ch": 10,
"t": "num",
"q": "E = 10 cos(10⁷t + kz) a_y V/m is a wave in free space. Find its wavelength in metres. (c = 3×10⁸ m/s)",
"a": 188.4955592,
"tol": 1.885,
"u": "m",
"tolPct": 1,
"e": "k = β = ω/c = 10⁷/(3×10⁸) = 0.03333 rad/m (not 0.33).\nλ = 2π/β = 188.5 m.  (The wave travels along −a_z because of the +kz, has amplitude 10 V/m and does not attenuate.)"
},
{
"ch": 10,
"t": "num",
"q": "H = 0.5 e^(−0.1x) sin(10⁶t − 2x) a_z A/m. Find the period of the wave in microseconds.",
"a": 6.283185307,
"tol": 0.06283,
"u": "μs",
"tolPct": 1,
"e": "ω = 10⁶ rad/s ⇒ T = 2π/ω = 6.283×10^−6 s = 6.283 μs (not 1 μs).\nFor reference: α = 0.1 Np/m, β = +2 rad/m, the wave travels in +x and decays."
},
{
"ch": 10,
"t": "mc",
"q": "What is the major factor for determining whether a medium is free space, a lossless dielectric, a lossy dielectric, or a good conductor?",
"o": [
"Loss tangent",
"Attenuation constant",
"Constitutive parameters only (σ, ε, μ) without the frequency",
"Reflection coefficient"
],
"e": "The classification depends on tan θ = σ/(ωε): ≪ 1 lossy dielectric (≈ lossless), ≈ 1 quasi-conductor, ≫ 1 good conductor — it combines σ and ε with the frequency. σ, ε and μ alone are not enough."
},
{
"ch": 10,
"t": "num",
"q": "E = 10 cos(10⁸t − 3y) a_x V/m in a non-magnetic (μ_r = 1) lossless medium. Find the relative permittivity ε_r. (c = 3×10⁸)",
"a": 81.0,
"tol": 0.81,
"u": "",
"tolPct": 1,
"e": "No attenuation ⇒ lossless dielectric. β = ω√(με) = (ω/c)√ε_r ⇒ √ε_r = βc/ω = 3 × 3×10⁸/10⁸ = 9.\nε_r = 81 (like water at low frequency)."
},
{
"ch": 10,
"t": "tf",
"q": "Electromagnetic waves travel faster in conductors than in dielectrics.",
"a": false,
"e": "False. u = ω/β; in a good conductor β = √(πfμσ) is very large so u = √(4πf/(μσ)) is small compared with the speed in a dielectric (c/√ε_r)."
},
{
"ch": 10,
"t": "tf",
"q": "In a good conductor, E and H are in time phase.",
"a": false,
"e": "False. η_c = √(jωμ/σ) has a phase of 45°, so H lags E by 45° in a good conductor (they are in phase only in lossless media)."
},
{
"ch": 10,
"t": "tf",
"q": "The Poynting vector physically denotes the power density leaving or entering a given volume in a time-varying field.",
"a": true,
"e": "True: S = E × H (W/m²) is the instantaneous power flow per unit area (Poynting's theorem)."
},
{
"ch": 11,
"t": "mc",
"q": "Which of the following conditions will NOT guarantee a distortionless transmission line?",
"o": [
"Very low frequency range (R ≫ ωL, G ≫ ωC)",
"R = 0 = G",
"RC = GL",
"Very high frequency range (R ≪ ωL, G ≪ ωC)"
],
"e": "Distortionless needs R/L = G/C (RC = GL). The lossless case R = G = 0 satisfies it, and at very high frequency R ≪ ωL, G ≪ ωC the line is effectively lossless. The very-low-frequency condition R ≫ ωL, G ≫ ωC does not force R/L = G/C."
},
{
"ch": 11,
"t": "mc",
"q": "Which of these is NOT true of a lossless line?",
"o": [
"Z_in = −jZ₀ for a shorted line with ℓ = λ/8",
"Z_in = j∞ for a shorted line with ℓ = λ/4",
"Z_in = Z₀ for a matched line",
"At a half-wavelength from a load, Z_in = Z_L (repeating every half wavelength)"
],
"e": "A shorted line has Z_in = jZ₀ tan βℓ; at ℓ = λ/8, tan(π/4) = 1 so Z_in = +jZ₀ (inductive), not −jZ₀. At λ/4 the tangent is infinite (j∞); a matched line always looks like Z₀; and the impedance repeats every λ/2."
},
{
"ch": 11,
"t": "num",
"q": "A lossless line of length 50 cm has L = 10 μH/m and C = 40 pF/m and operates at 30 MHz. Find its electrical length in degrees.",
"a": 108.0,
"tol": 0.54,
"u": "°",
"tolPct": 0.5,
"e": "u = 1/√(LC) = 1/√(10×10⁻⁶ × 40×10⁻¹²) = 5×10^7 m/s.\nλ = u/f = 1.667 m.\nℓ/λ = 0.5/1.667 = 0.3 ⇒ electrical length βℓ = 0.3 × 360° = 108°."
},
{
"ch": 11,
"t": "num",
"q": "In an air line, adjacent voltage maxima are found at 12.5 cm and 37.5 cm. What is the operating frequency, in MHz? (c = 3×10⁸ m/s)",
"a": 600.0,
"tol": 6.0,
"u": "MHz",
"tolPct": 1,
"e": "Adjacent maxima are λ/2 apart: λ/2 = 37.5 − 12.5 = 25 cm ⇒ λ = 50 cm.\nf = c/λ = 3×10⁸/0.5 = 600 MHz."
},
{
"ch": 11,
"t": "tf",
"q": "On the Smith chart, any impedance repeats itself every λ/4.",
"a": false,
"e": "False: a full revolution around the chart corresponds to λ/2 (the impedance repeats every half wavelength). A quarter wavelength is half a revolution and inverts the normalised impedance (Z → 1/Z)."
},
{
"ch": 11,
"t": "tf",
"q": "An s = 2 circle on the Smith chart is the same as the |Γ| = 0.5 circle.",
"a": false,
"e": "False: |Γ| = (s − 1)/(s + 1) = 1/3 for s = 2. The |Γ| = 0.5 circle corresponds to s = 3."
},
{
"ch": 11,
"t": "tf",
"q": "The basic principle of any matching scheme is to eliminate the reflected wave between the source and the matching device.",
"a": true,
"e": "True: a matching network (quarter-wave transformer, stub) is designed so the reflections it produces cancel the load's reflection, leaving a matched line between source and match."
},
{
"ch": 11,
"t": "tf",
"q": "The slotted line is used to determine only the load impedance Z_L.",
"a": false,
"e": "False: a slotted line measures the standing wave ratio and the position of voltage minima, from which Γ, Z_L and also frequency/wavelength can be found — it is not restricted to Z_L."
},
{
"ch": 12,
"t": "mc",
"q": "At microwave frequencies we prefer waveguides to transmission lines for transporting EM energy because of all of the following EXCEPT that:",
"o": [
"transmission lines are larger than waveguides",
"losses in transmission lines are prohibitively large",
"waveguides have larger bandwidths and lower signal attenuation",
"transmission lines support only the TEM mode"
],
"e": "At microwave frequencies two-conductor lines suffer large conductor/dielectric losses and support only TEM, whereas waveguides offer low loss and wide bandwidth. 'Transmission lines are larger than waveguides' is not a reason — hollow guides are generally bulkier."
},
{
"ch": 12,
"t": "mc",
"q": "The dominant mode of a rectangular waveguide (a > b) is:",
"o": [
"TE₁₀",
"TE₁₁",
"TM₁₁",
"TE₁₀₁"
],
"e": "TE₁₀ has the lowest cutoff, f_c = u/(2a). TM₁₁ and TE₁₁ have higher cutoffs; TE₁₀₁ is a resonant-cavity mode, not a waveguide mode."
},
{
"ch": 12,
"t": "tf",
"q": "The TM₁₀ mode can exist in a rectangular waveguide.",
"a": false,
"e": "False: TM modes need m ≥ 1 and n ≥ 1 (E_z must vanish on all walls), so the lowest TM mode is TM₁₁."
},
{
"ch": 12,
"t": "num",
"q": "In a rectangular waveguide with a = 2b, the TE₀₂ cutoff frequency is 12 GHz. Find the cutoff frequency of the TM₁₁ mode in GHz. (c = 3×10⁸ m/s)",
"a": 6.708203932,
"tol": 0.06708,
"u": "GHz",
"tolPct": 1,
"e": "f_c(0,2) = (c/2)(2/b) = c/b = 12 GHz ⇒ b = 3×10⁸/12×10⁹ = 2.5 cm and a = 5 cm.\nf_c(1,1) = (c/2)√((1/a)² + (1/b)²) = 1.5×10⁸ √(20² + 40²) = 1.5×10⁸ × 44.72 = 6.708 GHz = 3√5 GHz."
},
{
"ch": 12,
"t": "num",
"q": "A tunnel is 4 m by 7 m in cross section and is treated as an air-filled rectangular waveguide. Find the cutoff frequency of its dominant mode, in MHz. (c = 3×10⁸)",
"a": 21.42857143,
"tol": 0.2143,
"u": "MHz",
"tolPct": 1,
"e": "TE₁₀ with the larger dimension a = 7 m: f_c = c/(2a) = 3×10⁸/14 = 21.43 MHz.\nA 10 MHz AM signal is below this cutoff, so it is attenuated: a car in the tunnel does not receive it (while FM at ~100 MHz passes)."
},
{
"ch": 12,
"t": "mc",
"q": "When the electric field in a resonant cavity is at its maximum value, the magnetic energy of the cavity is:",
"o": [
"zero",
"at its maximum value",
"at 1/√2 of its maximum value",
"at half its maximum value"
],
"e": "Energy oscillates between the electric and magnetic fields (90° out of phase in time): when W_E is maximum, W_H = 0, and their sum stays constant."
},
{
"ch": 12,
"t": "mc",
"q": "How many degenerate dominant modes exist in a cubic resonant cavity (a = b = c)?",
"o": [
"3",
"0",
"2",
"∞"
],
"e": "The lowest modes are TE₀₁₁, TE₁₀₁ and TM₁₁₀. In a cube, all three have the same resonant frequency f = (c/2a)√2 — three degenerate dominant modes."
},
{
"ch": 13,
"t": "num",
"q": "An antenna in a city is a source of radio waves. How long (in milliseconds) do the waves take to reach a town 12,000 km away? (c = 3×10⁸ m/s)",
"a": 40.0,
"tol": 0.4,
"u": "ms",
"tolPct": 1,
"e": "t = d/c = 1.2×10⁷ m/(3×10⁸ m/s) = 0.04 s = 40 ms."
},
{
"ch": 13,
"t": "mc",
"q": "In the expressions for the fields of a dipole (terms in 1/r, 1/r² and 1/r³), which term is the radiation term?",
"o": [
"The 1/r term",
"The 1/r² term",
"The 1/r³ term",
"All of the terms"
],
"e": "Only the 1/r (far-field) term carries power to infinity: its power density ∝ 1/r² gives a finite radiated power through a sphere. The 1/r² (induction) and 1/r³ (electrostatic) terms are near-field terms."
},
{
"ch": 13,
"t": "num",
"q": "Find the radiation resistance of a very small, thin wire of length λ/100.",
"a": 0.07895683521,
"tol": 0.0007896,
"u": "Ω",
"tolPct": 1,
"e": "R_rad = 80π²(ℓ/λ)² = 80π²(0.01)² = 0.07896 Ω ≈ 0.08 Ω — so tiny that most of the input power is lost in ohmic resistance."
},
{
"ch": 13,
"t": "mc",
"q": "A quarter-wave monopole antenna operating in air at 1 MHz must have an overall length of:",
"o": [
"75 m",
"300 m",
"150 m",
"ℓ ≪ λ (a few centimetres)"
],
"e": "λ = c/f = 3×10⁸/10⁶ = 300 m, so λ/4 = 75 m. (That is why AM broadcast towers are tall.)"
},
{
"ch": 13,
"t": "num",
"q": "A small single-turn loop antenna has a radiation resistance of 0.04 Ω. How many turns are needed to produce a radiation resistance of 1 Ω?",
"a": 5.0,
"tol": 0.1,
"u": "turns",
"e": "R_rad of a small loop ∝ N² (field ∝ N, power ∝ N²).\nN² = 1/0.04 = 25 ⇒ N = 5 turns."
},
{
"ch": 13,
"t": "num",
"q": "At 8 km from a small dipole antenna the field strength is 12 μV/m. What is the field strength at 20 km, in μV/m?",
"a": 4.8,
"tol": 0.048,
"u": "μV/m",
"tolPct": 1,
"e": "In the far field E ∝ 1/r: E₂ = E₁ r₁/r₂ = 12 × 8/20 = 4.8 μV/m."
},
{
"ch": 13,
"t": "num",
"q": "An antenna has U_max = 10 W/sr, U_ave = 4.5 W/sr and radiation efficiency η_r = 95 %. Find the input power in watts.",
"a": 59.52491344,
"tol": 0.5952,
"u": "W",
"tolPct": 1,
"e": "Radiated power P_rad = 4π U_ave = 4π × 4.5 = 56.55 W.\nP_in = P_rad/η_r = 56.55/0.95 = 59.52 W.\n(Directivity D = U_max/U_ave = 2.222.)"
},
{
"ch": 13,
"t": "tf",
"q": "A receiving antenna of maximum dimension 3 m operating at 100 MHz has an aircraft 0.5 km away in its far-field region.",
"a": true,
"e": "True. λ = c/f = 3 m, and the far field starts at r > 2d²/λ = 2(3)²/3 = 6 m; 500 m is far beyond that."
},
{
"ch": 13,
"t": "num",
"q": "A receiving antenna 100 m from the transmitter has an effective area of 500 cm². The power density at its location is 2 mW/m². Find the total received power in μW.",
"a": 100.0,
"tol": 1.0,
"u": "μW",
"tolPct": 1,
"e": "P_r = S A_e = (2×10⁻³ W/m²)(500×10⁻⁴ m²) = 1×10^−4 W = 100 μW."
},
{
"ch": 13,
"t": "num",
"q": "A monostatic radar's received power ∝ σ/r⁴. A target of radar cross-section 5 m² at R/2 gives a certain signal. What cross-section is needed at 3R/2 for an equal signal, in m²?",
"a": 405.0,
"tol": 2.025,
"u": "m²",
"tolPct": 0.5,
"e": "Equal signal: σ₂/(3R/2)⁴ = σ₁/(R/2)⁴ ⇒ σ₂ = σ₁ (3R/2 ÷ R/2)⁴ = 5 × 3⁴ = 405 m²."
},
{
"ch": 14,
"t": "mc",
"q": "Which of the following is NOT a correct finite-difference approximation to dV/dx at x₀ (h = Δx)?",
"o": [
"[V(x₀ + h) − V(x₀ − h)]/h",
"[V(x₀ + h) − V(x₀)]/h",
"[V(x₀) − V(x₀ − h)]/h",
"[V(x₀ + h) − V(x₀ − h)]/(2h)"
],
"e": "The centred difference needs the factor 2h in the denominator because the two points are 2h apart. The others are the forward, backward and (correct) central formulas."
},
{
"ch": 14,
"t": "num",
"q": "A triangular finite-element has corner potentials 10 V, 20 V and 0 V and is in free space with no charge. What is the approximate potential at its centre (centroid)?",
"a": 10.0,
"tol": 0.1,
"u": "V",
"e": "For a linear (first-order) triangular element the potential varies linearly; at the centroid it equals the average of the nodal values: (10 + 20 + 0)/3 = 10 V."
},
{
"ch": 14,
"t": "num",
"q": "A rectangular plate 10 cm × 20 cm is divided into eight subregions by lines 5 cm apart parallel to the edges. If the plate edges are connected to sources, how many free nodes are there?",
"a": 3.0,
"tol": 0.1,
"u": "nodes",
"e": "The grid has 10/5 = 2 by 20/5 = 4 subregions ⇒ 3 × 5 = 15 nodes in total.\nNodes on the edges are fixed by the sources: free (interior) nodes = (2 − 1)(4 − 1) = 3."
},
{
"ch": 14,
"t": "num",
"q": "Using the difference equation V_n = V_{n−1} + V_{n+1} with V₀ = V₅ = 1 and initial values V_n = 0 for 1 ≤ n ≤ 4, updating the nodes in order n = 1, 2, 3, 4 each iteration with the newest values (Gauss–Seidel), find V₂ after the third iteration.",
"a": 9.0,
"tol": 0.1,
"u": "",
"e": "Iteration 1: V₁ = 1 + 0 = 1, V₂ = 1 + 0 = 1, V₃ = 1 + 0 = 1, V₄ = 1 + 1 = 2.\nIteration 2: V₁ = 1 + 1 = 2, V₂ = 2 + 1 = 3, V₃ = 3 + 2 = 5, V₄ = 5 + 1 = 6.\nIteration 3: V₁ = 1 + 3 = 4, V₂ = 4 + 5 = 9, …\nSo V₂ = 9 after the third iteration."
},
{
"ch": 14,
"t": "mc",
"q": "The coefficient matrix [A] obtained in the moment method does NOT have one of these properties:",
"o": [
"It is banded",
"It is dense (has many non-zero terms)",
"It is square and symmetric",
"It depends on the geometry of the given problem"
],
"e": "In the method of moments every basis function interacts with every other through the Green's function, so [A] is dense (not banded/sparse as in finite differences or finite elements)."
},
{
"ch": 14,
"t": "num",
"q": "If the 10 cm × 20 cm plate (5 cm grid) is discretised for finite-element analysis with the same number of grid points, using right-triangle elements, how many triangular elements are there?",
"a": 16.0,
"tol": 0.1,
"u": "elements",
"e": "The 5 cm grid gives 2 × 4 = 8 rectangular cells; each cell is split into 2 triangles ⇒ 16 elements."
},
{
"ch": 14,
"t": "mc",
"q": "Which of these statements is NOT true about shape functions?",
"o": [
"The shape function associated with a node is zero at that node",
"They are interpolatory in nature",
"They must be continuous across the elements",
"Their sum is identically equal to unity at every point within the element"
],
"e": "A shape function N_i is exactly 1 at its own node i and 0 at every other node (N_i(x_j) = δ_ij). Because they interpolate, ΣN_i = 1 everywhere in the element and continuity across elements is required."
},
{
"ch": 14,
"t": "num",
"q": "Find the area of the triangular element with nodes (3, 0), (2, 3) and (0, 1).",
"a": 4.0,
"tol": 0.04,
"u": "",
"e": "A = ½|x₁(y₂ − y₃) + x₂(y₃ − y₁) + x₃(y₁ − y₂)| = ½|3(3 − 1) + 2(1 − 0) + 0(0 − 3)| = ½(6 + 2) = 4."
},
{
"ch": 2,
"t": "num",
"q": "Problem 2.1(c): Convert the Cartesian point R(6, 2, −4) to spherical coordinates. Find θ in degrees.",
"a": 122.3115332,
"tol": 0.3669,
"u": "°",
"tolPct": 0.3,
"e": "r = √(6² + 2² + (−4)²) = √56 = 7.483.\nθ = cos⁻¹(z/r) = cos⁻¹(−4/7.483) = 122.3° (obtuse because z < 0).\n(Book answer: R(7.483, 122.31°, 18.435°) ✓. In cylindrical form R(6.325, 18.435°, −4).)"
},
{
"ch": 2,
"t": "num",
"q": "Problem 2.5: T is the spherical point (10, 60°, 30°). Find its Cartesian x-coordinate.",
"a": 7.5,
"tol": 0.0375,
"u": "",
"tolPct": 0.5,
"e": "x = r sin θ cos φ = 10 sin 60° cos 30° = 10(0.8660)(0.8660) = 7.5.\n(y = 10 sin 60° sin 30° = 4.33, z = 10 cos 60° = 5; cylindrical T(8.66, 30°, 5) — as in the book.)"
},
{
"ch": 3,
"t": "num",
"q": "Problem 3.1(a): Find the length of the curve ρ = 3, π/4 < φ < π/2, z = constant.",
"a": 2.35619449,
"tol": 0.01178,
"u": "",
"tolPct": 0.5,
"e": "On a ρ = constant, z = constant curve, dl = ρ dφ. L = ρ(φ₂ − φ₁) = 3(π/2 − π/4) = 3π/4 = 2.356."
},
{
"ch": 3,
"t": "num",
"q": "Problem 3.1(b): Find the length of the curve r = 1, θ = 30°, 0 < φ < 60° (spherical).",
"a": 0.5235987756,
"tol": 0.002618,
"u": "",
"tolPct": 0.5,
"e": "dl = r sin θ dφ. L = (1)(sin 30°)(π/3) = 0.5 × 1.0472 = 0.5236."
},
{
"ch": 3,
"t": "num",
"q": "Problem 3.1(c): Find the length of the curve r = 4, 30° < θ < 90°, φ = constant.",
"a": 4.188790205,
"tol": 0.02094,
"u": "",
"tolPct": 0.5,
"e": "dl = r dθ. L = 4(π/2 − π/6) = 4(π/3) = 4.189."
},
{
"ch": 3,
"t": "num",
"q": "Problem 3.2(a): Find the area of the surface ρ = 2, 0 < z < 5, π/3 < φ < π/2.",
"a": 5.235987756,
"tol": 0.02618,
"u": "",
"tolPct": 0.5,
"e": "dS = ρ dφ dz on ρ = 2. A = 2 × (π/2 − π/3) × 5 = 2 × (π/6) × 5 = 5.236."
},
{
"ch": 3,
"t": "num",
"q": "Problem 3.2(b): Find the area of the surface z = 1, 1 < ρ < 3, 0 < φ < π/4.",
"a": 3.141592654,
"tol": 0.01571,
"u": "",
"tolPct": 0.5,
"e": "dS = ρ dρ dφ. A = ∫₁³ρ dρ ∫₀^(π/4) dφ = [(9 − 1)/2](π/4) = 4(π/4) = π = 3.142."
},
{
"ch": 3,
"t": "num",
"q": "Problem 3.2(c): Find the area of the spherical surface r = 10, π/4 < θ < 2π/3, 0 < φ < 2π.",
"a": 758.4475592,
"tol": 3.792,
"u": "",
"tolPct": 0.5,
"e": "dS = r² sin θ dθ dφ. A = 100(2π)[−cos θ]_(π/4)^(2π/3) = 200π(cos 45° − cos 120°) = 200π(0.7071 + 0.5) = 758.4."
},
{
"ch": 3,
"t": "num",
"q": "Problem 3.2(d): Find the area of the surface 0 < r < 4, 60° < θ < 90°, φ = constant.",
"a": 4.188790205,
"tol": 0.02094,
"u": "",
"tolPct": 0.5,
"e": "On a φ = constant surface dS = r dr dθ. A = ∫₀⁴r dr ∫_(π/3)^(π/2) dθ = (16/2)(π/6) = 4.189."
},
{
"ch": 4,
"t": "num",
"q": "Problem 4.1: Point charges Q₁ = 5 μC and Q₂ = −4 μC are at (3, 2, 1) and (−4, 0, 6). Find the magnitude of the force on Q₁ in mN. (k = 9×10⁹)",
"a": 2.307692308,
"tol": 0.01154,
"u": "mN",
"tolPct": 0.5,
"e": "R = r₁ − r₂ = (3,2,1) − (−4,0,6) = (7, 2, −5), |R| = √78 = 8.832.\nF = kQ₁Q₂R/|R|³ = 9×10⁹(5×10⁻⁶)(−4×10⁻⁶)/78 × a_R = (−1.829, −0.5226, 1.306) mN.\n|F| = 2.308 mN. (Book answer: −1.8291a_x − 0.5226a_y + 1.3065a_z mN ✓ — attractive.)"
},
{
"ch": 5,
"t": "num",
"q": "Problem 5.7: A cylindrical carbon bar (σ = 3×10⁴ S/m) has radius 5 mm and length 8 cm. A 9 V potential difference is applied across its ends. Find the current in the bar.",
"a": 265.0718801,
"tol": 1.325,
"u": "A",
"tolPct": 0.5,
"e": "R = ℓ/(σS) = 0.08/(3×10⁴ × π(0.005)²) = 33.95 mΩ.\nI = V/R = 9/0.03395 = 265.1 A.  (Power: P = VI = 2.386 kW — the book gives R = 33.95 mΩ, I = 265.1 A, P = 2.386 kW ✓.)"
},
{
"ch": 5,
"t": "num",
"q": "Problem 5.8: A conducting wire of radius 2 mm and length 100 m carries 0.3 A when 9 V dc is applied. Find the conductivity of the wire in S/m.",
"a": 265258.2385,
"tol": 1326.0,
"u": "S/m",
"tolPct": 0.5,
"e": "E = V/ℓ = 9/100 = 0.09 V/m.\nJ = I/S = 0.3/(π × 0.002²) = 2.387e+04 A/m².\nσ = J/E = 2.387e+04/0.09 = 2.653×10^5 S/m."
},
{
"ch": 5,
"t": "num",
"q": "Problem 5.10: A wire of diameter 4 mm and length 5 m carries 2 A when 12 V is applied across it. Find its conductivity in S/m.",
"a": 66314.55962,
"tol": 331.6,
"u": "S/m",
"tolPct": 0.5,
"e": "R = V/I = 6 Ω. S = π(0.002)² = 1.257×10^−5 m².\nσ = ℓ/(RS) = 5/(6 × 1.257×10^−5) = 6.631e+04 S/m."
},
{
"ch": 9,
"t": "num",
"q": "Problem 9.1: A circular loop of radius 20 cm lies in the z = 0 plane in B = 10 cos 377t a_z mWb/m². Find the peak induced emf, in mV.",
"a": 473.7521722,
"tol": 2.369,
"u": "mV",
"tolPct": 0.5,
"e": "Φ = B·S = (10×10⁻³ cos 377t)(π 0.2²) = 0.001257 cos 377t Wb.\nemf = −dΦ/dt = 0.001257 × 377 sin 377t ⇒ peak = 0.4738 V = 473.8 mV."
},
{
"ch": 9,
"t": "num",
"q": "Problem 9.3: A loop of radius 0.2 m and resistance 4 Ω lies in the xy-plane in B = 40 sin 10⁴t mWb/m² (normal to the loop). Find the peak current in the loop.",
"a": 12.56637061,
"tol": 0.06283,
"u": "A",
"tolPct": 0.5,
"e": "Φ = Bπa² = 40×10⁻³ sin(10⁴t) × 0.1257 ⇒ emf = −dΦ/dt = −50.27 cos(10⁴t) V (peak 50.27 V).\nI = emf/R = 50.27/4 = 12.57 A peak."
},
{
"ch": 10,
"t": "num",
"q": "Problem 10.1: E = 25 sin(2π×10⁶t − 6x) a_z V/m. Find the wave velocity u in m/s.",
"a": 1047197.551,
"tol": 5236.0,
"u": "m/s",
"tolPct": 0.5,
"e": "ω = 2π×10⁶ rad/s, β = 6 rad/m ⇒ u = ω/β = 1.047×10^6 m/s.\n(Period T = 1 μs, wavelength λ = 2π/6 = 1.047 m; the wave travels in the +x direction.)"
},
{
"ch": 10,
"t": "num",
"q": "Problem 10.2(d): Find the wavelength in vacuum of a 2.4 GHz microwave-oven wave, in cm. (c = 3×10⁸ m/s)",
"a": 12.5,
"tol": 0.0625,
"u": "cm",
"tolPct": 0.5,
"e": "λ = c/f = 3×10⁸/2.4×10⁹ = 0.125 m = 12.5 cm.\n(For comparison: 60 Hz → 5000 km, 2 MHz → 150 m, 120 MHz → 2.5 m.)"
},
{
"ch": 10,
"t": "num",
"q": "Problem 10.3: In free space H = 0.4 cos(10⁸t + βy) A/m. Find the wavelength in metres. (c = 3×10⁸)",
"a": 18.84955592,
"tol": 0.09425,
"u": "m",
"tolPct": 0.5,
"e": "β = ω/c = 10⁸/(3×10⁸) = 0.3333 rad/m ⇒ λ = 2π/β = 18.85 m. The wave travels in the −y direction because of +βy."
},
{
"ch": 12,
"t": "num",
"q": "Problem 12.4: An air-filled waveguide has a cross-section 2.4 cm × 1.2 cm. Find the cutoff frequency of the TE₁₀ mode, in GHz. (c = 3×10⁸)",
"a": 6.25,
"tol": 0.03125,
"u": "GHz",
"tolPct": 0.5,
"e": "f_c(TE₁₀) = c/(2a) = 3×10⁸/(2 × 0.024) = 6.25 GHz.\n(TE₀₁ and TE₂₀ have f_c = 12.5 GHz and TE₀₂ = 25 GHz, so at 12 GHz only TE₁₀ propagates.)"
},
{
"ch": 12,
"t": "num",
"q": "Problem 12.6: Treat a tunnel 8 m × 16 m as an air-filled rectangular waveguide. Find the cutoff frequency of its dominant mode in MHz. (A 1.5 MHz AM signal and a 120 MHz FM signal are to be compared.)",
"a": 9.375,
"tol": 0.04688,
"u": "MHz",
"tolPct": 0.5,
"e": "f_c = c/(2a) with a = 16 m = 9.375 MHz.\n1.5 MHz < f_c ⇒ the AM signal does not pass; 120 MHz > f_c ⇒ the FM signal passes."
},
{
"ch": 12,
"t": "num",
"q": "Problem 12.8: An air-filled waveguide operates at 40 GHz. For the TE₁₂ mode the cutoff frequency is 25 GHz. Find the phase velocity in units of 10⁸ m/s. (c = 3×10⁸)",
"a": 3.843075691,
"tol": 0.01922,
"u": "×10⁸ m/s",
"tolPct": 0.5,
"e": "√(1 − (f_c/f)²) = √(1 − (25/40)²) = 0.7806.\nu_p = c/0.7806 = 3.843×10^8 m/s.\nAlso: λ = 7.5 mm, λ_g = λ/0.7806 = 9.608 mm, β = 2π/λ_g = 654 rad/m, η_TE = 377/0.7806 = 482.9 Ω."
},
{
"ch": 13,
"t": "num",
"q": "Problem 13.2: A dipole has ℓ = 0.02λ, I₀ = 3 A, f = 400 MHz, r = 60 m. Find the magnitude of E at θ = 90° in V/m. (η₀ = 377 Ω; |E| = η₀I₀(dℓ/λ)/(2r) sinθ)",
"a": 0.1885,
"tol": 0.001885,
"u": "V/m",
"tolPct": 1,
"e": "For a Hertzian dipole |E_θ| = (η₀ I₀ dℓ/(2λ r)) sin θ.\n|E| = 377 × 3 × 0.02/(2 × 60) = 0.1885 V/m. (Radiation resistance R_rad = 80π²(0.02)² = 0.3158 Ω and P_rad = ½I₀²R_rad = 1.421 W.)"
},
{
"ch": 13,
"t": "num",
"q": "Problem 13.4: What current must a 2 cm Hertzian dipole carry to radiate 12 W at 140 MHz? (c = 3×10⁸)",
"a": 18.67987553,
"tol": 0.1868,
"u": "A",
"tolPct": 1,
"e": "λ = c/f = 2.143 m. R_rad = 80π²(0.02/λ)² = 0.06878 Ω.\nP_rad = ½I₀²R_rad ⇒ I₀ = √(2 × 12/0.06878) = 18.68 A."
},
{
"ch": 14,
"t": "num",
"q": "Problem 14.2: d²V/dx² = x + 1 for 0 < x < 1 with V(0) = 0 and V(1) = 1. Find the exact value of V(0.5).",
"a": 0.3125,
"tol": 0.001563,
"u": "",
"tolPct": 0.5,
"e": "Integrate twice: V = x³/6 + x²/2 + C₁x + C₂. V(0) = 0 ⇒ C₂ = 0; V(1) = 1/6 + 1/2 + C₁ = 1 ⇒ C₁ = 1/3.\nV(0.5) = 0.5³/6 + 0.5²/2 + 0.5/3 = 0.02083 + 0.125 + 0.1667 = 0.3125.\nThe finite-difference solution (Δ = 0.25) approaches this value as the iterations converge."
},
{
"ch": 4,
"t": "mc",
"q": "Electrostatic discharge (ESD) is best described as:",
"o": [
"the sudden transfer of static charge between objects at different electrostatic potentials",
"a slow leakage of current through an insulator",
"a steady dc current in a wire",
"radiation from an antenna"
],
"e": "The 'zap' after walking on a synthetic carpet and touching a metal doorknob is ESD. It belongs to the family of electrical overstress (EOS) events, which also includes lightning and electromagnetic pulses, and it can destroy integrated circuits."
},
{
"ch": 5,
"t": "mc",
"q": "High dielectric-constant materials are important to the semiconductor industry mainly because:",
"o": [
"a higher dielectric constant stores more charge so that circuits can be made smaller",
"they conduct more current",
"they have lower permittivity",
"they eliminate the need for insulators"
],
"e": "ε_r measures a material's ability to be polarised: the higher it is, the more charge a capacitor can store per volume — and, for a dielectric resonator, the diameter at a fixed frequency scales as 1/√ε_r, so it can be made smaller."
},
{
"ch": 5,
"t": "mc",
"q": "Graphene is best described as:",
"o": [
"a two-dimensional sheet of carbon atoms in a honeycomb lattice with very high electrical and thermal conductivity",
"a three-dimensional insulating crystal",
"a polymer with very low conductivity",
"a liquid dielectric"
],
"e": "Graphene is a single planar layer of carbon atoms (bond length ≈ 0.142 nm), the thinnest yet one of the strongest materials, nearly transparent and highly conductive. Geim and Novoselov (Manchester) isolated it in 2004 and received the 2010 Nobel Prize in Physics."
},
{
"ch": 5,
"t": "tf",
"q": "Graphene was first isolated in the laboratory by Andre Geim and Kostya Novoselov at the University of Manchester, work that earned them the 2010 Nobel Prize in Physics.",
"a": true,
"e": "True — they produced the first isolated graphene flakes (2003–2004). They also showed graphene exhibits the quantum Hall effect at room temperature."
},
{
"ch": 6,
"t": "mc",
"q": "Supercapacitors (ultracapacitors) are useful in electric vehicles mainly because they:",
"o": [
"charge and discharge very quickly, bridging the gap between electrolytic capacitors and batteries",
"have a very high voltage rating",
"have capacitance only in the picofarad range",
"cannot store energy"
],
"e": "Supercapacitors (electric double-layer capacitors) reach kilofarad values at lower voltage ratings and charge/discharge far faster than rechargeable batteries — ideal for regenerative braking and burst-mode power delivery."
},
{
"ch": 7,
"t": "tf",
"q": "Lightning is a transient, high-current electric discharge and a major natural source of electromagnetic radiation that interferes with electronics and communications.",
"a": true,
"e": "True. Lightning strikes the earth about 100 times every second; lightning rods are used to protect people and structures."
},
{
"ch": 7,
"t": "mc",
"q": "In a polywell, electrons injected into a polyhedral arrangement of coils are pushed toward the centre because:",
"o": [
"the coils create a magnetic field that is null at the centre of the cube",
"the coils produce a very strong field at the centre",
"an electric field repels electrons from the walls only",
"gravity pulls them down"
],
"e": "Coil positions and current directions are chosen so the magnetic field vanishes at the centre; the injected electrons are driven there and form a cloud that creates an electrostatic potential well used in fusion research."
},
{
"ch": 8,
"t": "mc",
"q": "According to Earnshaw's theorem, static levitation (stable suspension against gravity) is impossible using:",
"o": [
"any combination of fixed magnets and electric charges",
"diamagnetic materials",
"superconductors only",
"rotating magnets only"
],
"e": "Earnshaw's theorem forbids stable static levitation with fixed magnets/charges; maglev gets around it using diamagnetism, superconductors or active control."
},
{
"ch": 8,
"t": "mc",
"q": "SQUIDs (superconducting quantum interference devices) are used as:",
"o": [
"extremely sensitive detectors of magnetic flux (down to about 5×10⁻¹⁸ T)",
"high-power transmitters",
"dielectric resonators",
"electrostatic shields"
],
"e": "SQUIDs measure feeble magnetic fields in applications such as magnetocardiography, geomagnetism, low-field MRI/NMR and non-destructive testing."
},
{
"ch": 9,
"t": "mc",
"q": "The memristor, proposed by Leon Chua in 1971, is a two-terminal circuit element that links:",
"o": [
"magnetic flux and electric charge (φ = M(q))",
"voltage and current only",
"charge and voltage only",
"inductance and capacitance only"
],
"e": "Chua proposed the memristor as the fourth basic circuit element beside R, L and C, with a charge-controlled constitutive relation φ = M(q). A physical TiO₂ device was reported by Hewlett-Packard in 2008."
},
{
"ch": 10,
"t": "num",
"q": "60 GHz wireless technology is used for short-range multi-gigabit links. What is its free-space wavelength in millimetres? (c = 3×10⁸ m/s)",
"a": 5.0,
"tol": 0.05,
"u": "mm",
"tolPct": 1,
"e": "λ = c/f = 3×10⁸/(60×10⁹) = 0.005 m = 5 mm (\"nearly 5 mm\", as the book says). Millimetre waves span 30–300 GHz (10 mm down to 1 mm)."
},
{
"ch": 11,
"t": "mc",
"q": "Metamaterials are also called left-handed or double-negative materials because:",
"o": [
"they can have simultaneously negative permittivity and permeability, giving a negative refractive index",
"they have zero permittivity",
"they only work for static fields",
"they are made of ferromagnetic metals"
],
"e": "Veselago (1967) showed that a medium with ε < 0 and μ < 0 would refract anomalously. Such materials are built from engineered units (e.g. split rings) in a host medium rather than inheriting properties from atoms."
},
{
"ch": 12,
"t": "mc",
"q": "Which of the following is an advantage of optical fibre over copper wire for communications?",
"o": [
"Very high bandwidth, low attenuation and immunity to electromagnetic interference",
"Higher attenuation, so repeaters are needed more often",
"It is easy to tap without interrupting communication",
"It conducts electric current"
],
"e": "Optical fibre offers huge bandwidth, low loss (long spans without repeaters), no radiation or EMI pick-up (no metal, no conduction currents), better security and falling cost."
},
{
"ch": 12,
"t": "mc",
"q": "Metamaterial cloaking works by:",
"o": [
"bending waves around an object using a negative refractive index so little is reflected",
"absorbing all light as heat",
"increasing reflections from the object",
"making the object a perfect conductor"
],
"e": "A negative-index metamaterial can steer the wave around the object instead of reflecting it, making the object (nearly) invisible. Duke University researchers (Smith and Landy, 2011) achieved much improved cloaking."
},
{
"ch": 13,
"t": "mc",
"q": "Electromagnetic compatibility (EMC) is achieved when a device:",
"o": [
"functions satisfactorily without introducing intolerable disturbances to its electromagnetic environment or to other devices",
"radiates as strongly as possible",
"is shielded so it cannot receive any signal",
"operates at a single frequency only"
],
"e": "EMI is the degradation of a device's performance due to the electromagnetic environment; EMC means devices coexist, each working as intended — achieved by grounding, shielding and filtering."
},
{
"ch": 13,
"t": "tf",
"q": "RFID can read data from electronic labels without contact and without needing a line of sight, unlike bar codes.",
"a": true,
"e": "True: RFID uses electromagnetic signals (EPC tags are an industry standard); bar codes need line-of-sight and store far less data."
},
{
"ch": 13,
"t": "mc",
"q": "Fractal antennas are based on the idea that:",
"o": [
"self-similar, iteratively generated geometries can give compact multi-band antennas",
"antennas must have a smooth Euclidean shape",
"the antenna must be exactly λ/2 long",
"antennas must be made of fractals of carbon only"
],
"e": "Fractals (Mandelbrot) are iteratively generated self-similar shapes with fractal dimension; applying them to antenna design yields compact, wide-/multi-band antennas."
},
{
"ch": 3,
"t": "num",
"q": "Calculus: A = x² a_x + xy a_y. Evaluate ∫A·dl from (0,0) to (1,1) along the straight line y = x.",
"a": 0.6666666667,
"tol": 0.003333,
"u": "",
"tolPct": 0.5,
"e": "A·dl = x² dx + xy dy (no z-part). On y = x: dy = dx, so A·dl = x² dx + x·x dx = 2x² dx.\n∫₀¹ 2x² dx = 2/3 = 0.6667."
},
{
"ch": 3,
"t": "num",
"q": "Calculus: the same field A = x² a_x + xy a_y, now from (0,0) to (1,1) along the parabola y = x².",
"a": 0.7333333333,
"tol": 0.003667,
"u": "",
"tolPct": 0.5,
"e": "On y = x²: dy = 2x dx, so A·dl = x² dx + x(x²)(2x dx) = (x² + 2x⁴) dx.\n∫₀¹ (x² + 2x⁴) dx = 1/3 + 2/5 = 11/15 = 0.7333.\nDifferent from the straight-line value 2/3, so A is NOT conservative (∂A_y/∂x = y ≠ ∂A_x/∂y = 0)."
},
{
"ch": 3,
"t": "num",
"q": "Calculus: A = y a_x + z a_y + x a_z. Find ∫A·dl from (0,0,0) to (1,2,3) along the straight line r = t(1, 2, 3), 0 ≤ t ≤ 1.",
"a": 5.5,
"tol": 0.0275,
"u": "",
"tolPct": 0.5,
"e": "Parametrise: x = t, y = 2t, z = 3t ⇒ dl = (1, 2, 3) dt.\nA = (y, z, x) = (2t, 3t, t) ⇒ A·dl = (2t)(1) + (3t)(2) + (t)(3) = 2t + 6t + 3t = 11t dt.\n∫₀¹ 11t dt = 11/2 = 5.5."
},
{
"ch": 3,
"t": "num",
"q": "Calculus: A = −y a_x + x a_y. Find the circulation ∮A·dl counter-clockwise around the rectangle 0 ≤ x ≤ 2, 0 ≤ y ≤ 3.",
"a": 12.0,
"tol": 0.06,
"u": "",
"tolPct": 0.5,
"e": "Stokes: ∮A·dl = ∬(∇×A)·dS with ∇×A = (∂A_y/∂x − ∂A_x/∂y) a_z = (1 + 1) a_z = 2a_z.\n∬ 2 dS = 2 × area = 2 × (2 × 3) = 12.\n(Direct check: bottom 0, right side ∫x dy = 2·3 = 6, top ∫−y dx = −3·(−2) = 6, left 0 ⇒ 12 ✓.)"
},
{
"ch": 3,
"t": "num",
"q": "Calculus: A = 3ρ a_φ. Find ∮A·dl counter-clockwise around the circle ρ = 2, z = 0.",
"a": 75.39822369,
"tol": 0.377,
"u": "",
"tolPct": 0.5,
"e": "dl = ρ dφ a_φ ⇒ A·dl = 3ρ · ρ dφ = 3ρ² dφ. At ρ = 2: 12 dφ.\n∮ = 12 × 2π = 24π = 75.4.\n(Check with Stokes: (∇×A)_z = (1/ρ)d(ρ·3ρ)/dρ = 6, flux through the disk = 6 × π(2²) = 24π ✓.)"
},
{
"ch": 3,
"t": "num",
"q": "Calculus: F = ρ² a_ρ + z a_z. Find the flux of F out of the curved surface ρ = 3, 0 ≤ z ≤ 2 (full circle).",
"a": 339.2920066,
"tol": 1.696,
"u": "",
"tolPct": 0.5,
"e": "On ρ = 3: F·a_ρ = ρ² = 9 and dS = ρ dφ dz = 3 dφ dz a_ρ. (The z a_z part is tangent to this surface.)\nΨ = ∫₀²dz ∫₀^(2π) 9 · 3 dφ = 27 × 2 × 2π = 108π = 339.3."
},
{
"ch": 3,
"t": "num",
"q": "Calculus: A = r² a_r. Find the flux out of the sphere r = 3.",
"a": 1017.87602,
"tol": 5.089,
"u": "",
"tolPct": 0.5,
"e": "On r = 3: A_r = 9 and dS = r² sin θ dθ dφ a_r = 9 sin θ dθ dφ a_r.\nΨ = 9 × 9 ∫₀^π sin θ dθ ∫₀^(2π) dφ = 81 × 2 × 2π = 324π = 1018."
},
{
"ch": 3,
"t": "num",
"q": "Calculus: A = x a_x + y a_y + (x + y + 1) a_z. Find the flux upward (+a_z) through the square z = 0, 0 ≤ x, y ≤ 2.",
"a": 12.0,
"tol": 0.06,
"u": "",
"tolPct": 0.5,
"e": "On z = 0: dS = dx dy a_z and A·dS = (x + y + 1) dx dy.\nΨ = ∫₀²∫₀² (x + y + 1) dx dy = [∫x dx](2) + [∫y dy](2) + 4 = 4 + 4 + 4 = 12."
},
{
"ch": 3,
"t": "num",
"q": "Calculus: A = x²y a_x. Find the flux through the face x = 2 of the cube 0 ≤ x, y, z ≤ 2, outward (+a_x).",
"a": 16.0,
"tol": 0.08,
"u": "",
"tolPct": 0.5,
"e": "On x = 2: A_x = 4y and dS = dy dz a_x.\nΨ = ∫₀²dz ∫₀² 4y dy = 2 × 4 × 2 = 16 (since ∫₀² y dy = 2)."
},
{
"ch": 3,
"t": "num",
"q": "Calculus: ρ_v = ρ²z C/m³ inside the cylinder ρ ≤ 1, 0 ≤ z ≤ 2. Find the total charge.",
"a": 3.141592654,
"tol": 0.01571,
"u": "C",
"tolPct": 0.5,
"e": "Q = ∭ρ_v dv = ∫₀²z dz ∫₀^(2π)dφ ∫₀¹ ρ² · ρ dρ = (2)(2π)(1/4) = π = 3.142 C."
},
{
"ch": 3,
"t": "num",
"q": "Calculus: ρ_v = 10r² C/m³ inside a sphere of radius 0.5 m. Find the total charge.",
"a": 0.7853981634,
"tol": 0.003927,
"u": "C",
"tolPct": 0.5,
"e": "dv = r² sin θ dr dθ dφ. Q = ∫₀^R 10r² · r² dr × 4π = 10 (R⁵/5)(4π) = 8πR⁵.\nR = 0.5 ⇒ R⁵ = 0.03125 ⇒ Q = 8π × 0.03125 = 0.7854 C."
},
{
"ch": 3,
"t": "num",
"q": "Calculus: ρ_v = xyz C/m³ inside the cube 0 ≤ x, y, z ≤ 2. Find the total charge.",
"a": 8.0,
"tol": 0.04,
"u": "C",
"tolPct": 0.5,
"e": "Q = ∫₀²x dx ∫₀²y dy ∫₀²z dz = 2 × 2 × 2 = 8 C (each integral is [x²/2]₀² = 2)."
},
{
"ch": 3,
"t": "num",
"q": "Calculus: A = ρ² a_ρ + z a_z. Use the divergence theorem to find the total flux out of the closed cylinder ρ ≤ 1, 0 ≤ z ≤ 2.",
"a": 18.84955592,
"tol": 0.09425,
"u": "",
"tolPct": 0.5,
"e": "∇·A = (1/ρ)∂(ρ·ρ²)/∂ρ + ∂z/∂z = 3ρ + 1.\nΨ = ∭(3ρ + 1) ρ dρ dφ dz = 2π × 2 × ∫₀¹ (3ρ² + ρ) dρ = 4π(1 + 1/2) = 6π = 18.85.\n(Faces: side 1·2π·2 = 4π, top 2·π = 2π, bottom 0 ⇒ 6π ✓.)"
},
{
"ch": 3,
"t": "num",
"q": "Calculus: A = r² a_r. Use the divergence theorem to find the flux out of the sphere r = 2.",
"a": 201.0619298,
"tol": 1.005,
"u": "",
"tolPct": 0.5,
"e": "∇·A = (1/r²)d(r²·r²)/dr = 4r.\nΨ = ∭4r · r² sin θ dr dθ dφ = 4 ∫₀² r³ dr × 4π = 4(4)(4π) = 64π = 201.1.\n(Direct: A_r = 4 on r = 2 and area 16π ⇒ 64π ✓.)"
},
{
"ch": 3,
"t": "num",
"q": "Calculus: Use Stokes's theorem to find ∮A·dl counter-clockwise around the unit square 0 ≤ x, y ≤ 1 for A = −y² a_x + x² a_y.",
"a": 2.0,
"tol": 0.01,
"u": "",
"tolPct": 0.5,
"e": "(∇×A)_z = ∂A_y/∂x − ∂A_x/∂y = 2x + 2y.\n∮A·dl = ∬(2x + 2y) dx dy = 2(1/2) + 2(1/2) = 2."
},
{
"ch": 3,
"t": "num",
"q": "Calculus: A = ρ³ a_φ. Find ∮A·dl around the circle ρ = 2 and confirm with Stokes's theorem.",
"a": 100.5309649,
"tol": 0.5027,
"u": "",
"tolPct": 0.5,
"e": "Line integral: A·dl = ρ³ · ρ dφ = ρ⁴ dφ = 16 dφ ⇒ ∮ = 32π = 100.5.\nStokes: (∇×A)_z = (1/ρ)d(ρ·ρ³)/dρ = 4ρ² ⇒ ∬4ρ² ρ dρ dφ = 4(2⁴/4)(2π) = 32π ✓."
},
{
"ch": 4,
"t": "num",
"q": "Calculus: D = ρ² a_ρ C/m². Find the charge enclosed by the cylinder ρ = 2, 0 ≤ z ≤ 3 using Q = ∮D·dS.",
"a": 150.7964474,
"tol": 0.754,
"u": "C",
"tolPct": 0.5,
"e": "Only the curved side carries flux (D has no z-part). On ρ = 2: D = 4 a_ρ, dS = 2 dφ dz a_ρ.\nQ = ∫₀³dz ∫₀^(2π) 4·2 dφ = 8 × 3 × 2π = 48π = 150.8 C.\n(Check: ∇·D = (1/ρ)d(ρ³)/dρ = 3ρ; ∭3ρ ρ dρ dφ dz = 3(8/3)(2π)(3) = 48π ✓.)"
},
{
"ch": 4,
"t": "num",
"q": "Calculus: D = 5r a_r C/m². Find the charge inside the sphere r = 2 m.",
"a": 502.6548246,
"tol": 2.513,
"u": "C",
"tolPct": 0.5,
"e": "∇·D = (1/r²)d(5r·r²)/dr = 15 ⇒ ρ_v = 15 C/m³ (uniform).\nQ = ∭15 dv = 15 × (4/3)π(2)³ = 160π = 502.7 C.\n(Flux check: D = 10 at r = 2, area 16π ⇒ 160π ✓.)"
},
{
"ch": 4,
"t": "num",
"q": "Calculus: E = y a_x + x a_y V/m. Find V_AB = V_A − V_B = −∫_B^A E·dl for A(1, 2, 0) and B(0, 0, 0).",
"a": -2.0,
"tol": 0.02,
"u": "V",
"e": "E·dl = y dx + x dy = d(xy), so the field is conservative (E = −∇V with V = −xy + C).\nV_AB = −[xy]_(0,0)^(1,2) = −(2 − 0) = −2 V."
},
{
"ch": 4,
"t": "num",
"q": "Calculus: E = 3x² a_x V/m. How much work (in joules) does the electric field do on a charge Q = 2 C moving from x = 0 to x = 2 m along the x-axis?",
"a": 16.0,
"tol": 0.16,
"u": "J",
"e": "W = Q∫E·dl = 2∫₀² 3x² dx = 2[x³]₀² = 2 × 8 = 16 J.\n(An external agent moving the charge slowly would supply −16 J, i.e. W_agent = −Q∫E·dl.)"
},
{
"ch": 4,
"t": "num",
"q": "Calculus: An infinite line charge ρ_L = 5 nC/m lies on the z-axis. Find the potential difference V_AB between the points ρ = 1 m (A) and ρ = 3 m (B) by integrating E. (ε₀ = 8.854×10⁻¹²)",
"a": 98.7404429,
"tol": 0.4937,
"u": "V",
"tolPct": 0.5,
"e": "E = ρ_L/(2πε₀ρ) a_ρ. V_AB = −∫_B^A E·dρ = −(ρ_L/2πε₀)∫₃¹ dρ/ρ = (ρ_L/2πε₀) ln(3/1).\n= 89.88 × ln 3 = 98.74 V (A at the smaller radius is at the higher potential)."
},
{
"ch": 4,
"t": "num",
"q": "Calculus: A ring of radius a = 2 m carries ρ_L = 10 nC/m. Find the potential on its axis at h = 3 m by integrating dV = ρ_L dl/(4πε₀R). (ε₀ = 8.854×10⁻¹²)",
"a": 313.2483602,
"tol": 1.566,
"u": "V",
"tolPct": 0.5,
"e": "Every element is the same distance R = √(a² + h²) = √13 = 3.606 m from the axis point, so\nV = ρ_L(2πa)/(4πε₀R) = ρ_L a/(2ε₀R) = (10⁻⁸)(2)/(2 × 8.854×10⁻¹² × 3.606) = 313.2 V."
},
{
"ch": 4,
"t": "num",
"q": "Calculus: A circular disc of radius 2 m carries ρ_S = 5ρ nC/m² (ρ in metres). Find the total charge in nC.",
"a": 83.7758041,
"tol": 0.4189,
"u": "nC",
"tolPct": 0.5,
"e": "Q = ∬ρ_S dS = ∫₀^(2π)dφ ∫₀² 5ρ · ρ dρ = 2π × 5 × [ρ³/3]₀² = 2π × 5 × 8/3 = 83.78 nC."
},
{
"ch": 7,
"t": "num",
"q": "Calculus: A straight wire carrying 10 A runs along the z-axis from z = −2 m to z = 2 m. Use Biot–Savart, H = (I/4π)∫ρ dz/(ρ² + z²)^(3/2), to find |H| at ρ = 1 m.",
"a": 1.423525087,
"tol": 0.007118,
"u": "A/m",
"tolPct": 0.5,
"e": "dH = (I dl × a_R)/(4πR²) gives |H| = (I ρ/4π)∫_(−2)^(2) dz/(ρ² + z²)^(3/2).\nWith ρ = 1: ∫ dz/(1 + z²)^(3/2) = z/√(1 + z²) ⇒ [2/√5 − (−2/√5)] = 1.789.\n|H| = (10/4π)(1)(1.789) = 1.424 A/m.\n(Compare the infinite wire: 10/(2π) = 1.59 A/m.)"
},
{
"ch": 7,
"t": "num",
"q": "Calculus: A long straight wire carries 20 A. Find the magnetic flux per metre of length through the strip between ρ = 0.1 m and ρ = 0.5 m, Ψ/L = ∫B·dρ with B = μ₀I/(2πρ), in μWb/m. (μ₀ = 4π×10⁻⁷)",
"a": 6.43775165,
"tol": 0.03219,
"u": "μWb/m",
"tolPct": 0.5,
"e": "Ψ/L = ∫_(0.1)^(0.5) μ₀I/(2πρ) dρ = (μ₀I/2π) ln(0.5/0.1) = (4π×10⁻⁷ × 20/2π) ln 5\n= 4×10⁻⁶ × 1.609 = 6.438×10^−6 Wb/m = 6.438 μWb/m."
}
];
