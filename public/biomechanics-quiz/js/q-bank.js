/* Biomechanics (Özkaya et al., Fundamentals of Biomechanics, ch. 1-5; ch. 5 = applications of statics). Every workout answer is computed in code. */
window.QB = [
{
"ch": 1,
"t": "mc",
"q": "Statics is the branch of mechanics that studies:",
"o": [
"forces on rigid bodies at rest or moving with a constant velocity",
"bodies in accelerated motion",
"the geometry of motion without any reference to forces",
"only the deformation of bodies"
],
"e": "Statics deals with rigid bodies in equilibrium (at rest or moving with constant velocity). Dynamics deals with bodies in motion; kinematics is the geometry of motion; deformable-body mechanics studies internal effects of loads."
},
{
"ch": 1,
"t": "mc",
"q": "Kinematics is the branch of dynamics that deals with:",
"o": [
"the geometry and time-dependent aspects of motion without considering the forces that cause it",
"the effect of forces and masses on motion",
"forces on bodies at rest",
"the internal stresses in a body"
],
"e": "Kinematics describes motion (position, velocity, acceleration). Kinetics adds forces and masses to explain the motion."
},
{
"ch": 1,
"t": "mc",
"q": "The primary (basic) dimensions used in Newtonian mechanics are:",
"o": [
"length (L), time (T) and mass (M)",
"force, length and time",
"force, mass and velocity",
"length, area and volume"
],
"e": "L, T and M are the primary dimensions; all others are secondary (derived): force [M·L/T²], moment [M·L²/T²], pressure [M/(L·T²)]."
},
{
"ch": 1,
"t": "mc",
"q": "In SI units, one newton (N) is equal to:",
"o": [
"1 kg·m/s²",
"1 kg·m/s",
"1 kg·m²/s²",
"1 g·cm/s"
],
"e": "Force = mass × acceleration, so 1 N = 1 kg × 1 m/s². (1 kg·m²/s² is a joule or N·m, the unit of moment/work.)"
},
{
"ch": 1,
"t": "mc",
"q": "Which of the following is a vector quantity?",
"o": [
"Acceleration",
"Mass",
"Work",
"Temperature"
],
"e": "Vectors have magnitude and direction: force, velocity, acceleration. Mass, temperature, work and energy are scalars."
},
{
"ch": 1,
"t": "mc",
"q": "The dimension of the moment (torque) of a force is:",
"o": [
"M·L²/T²",
"M·L/T²",
"M/(L·T²)",
"M·L²/T³"
],
"e": "Moment = force × distance = [M·L/T²]·[L] = M·L²/T² (unit N·m). M/(L·T²) is pressure; M·L²/T³ is power."
},
{
"ch": 1,
"t": "tf",
"q": "If the net force acting on a body is zero, then no forces are acting on the body.",
"a": false,
"e": "A zero net force only means the forces cancel (for example two equal and opposite forces on a rigid body). Newton's first law: the body then stays at rest or moves with constant velocity — it is in equilibrium."
},
{
"ch": 1,
"t": "tf",
"q": "Newton's third law states that for every action there is an equal and opposite reaction.",
"a": true,
"e": "True: the forces two bodies exert on each other are equal in magnitude, opposite in direction and collinear. This is why joint reaction forces and ground reaction forces can be analysed with free-body diagrams."
},
{
"ch": 1,
"t": "tf",
"q": "In biomechanics, the first step of the generalized problem-solving procedure is to select the system of interest.",
"a": true,
"e": "True. The procedure: select the system, postulate its characteristics, simplify with stated assumptions, form an analogy between the body segment and a mechanical model, apply the principles of mechanics, and interpret the results."
},
{
"ch": 1,
"t": "num",
"q": "Find the weight, in newtons, of a 60 kg person. (g = 9.8 m/s²)",
"a": 588.0,
"tol": 2.94,
"u": "N",
"tolPct": 0.5,
"e": "W = m g = 60 kg × 9.8 m/s² = 588 N. (The kilogram is a unit of mass; weight is a force.)"
},
{
"ch": 1,
"t": "num",
"q": "Convert a force of 150 lbf to newtons. (1 lbf = 4.448 N)",
"a": 667.2,
"tol": 3.336,
"u": "N",
"tolPct": 0.5,
"e": "150 lbf × 4.448 N/lbf = 667.2 N."
},
{
"ch": 1,
"t": "num",
"q": "A person is 5 ft 10 in tall. Express the height in metres. (1 in = 2.54 cm)",
"a": 1.778,
"tol": 0.00889,
"u": "m",
"tolPct": 0.5,
"e": "5 ft 10 in = 70 in. 70 × 2.54 cm = 177.8 cm = 1.778 m."
},
{
"ch": 1,
"t": "num",
"q": "Convert a pressure of 2 psi to pascals. (1 psi = 6895 Pa)",
"a": 13790.0,
"tol": 68.95,
"u": "Pa",
"tolPct": 0.5,
"e": "2 psi × 6895 Pa/psi = 1.379e+04 Pa ≈ 13.8 kPa."
},
{
"ch": 1,
"t": "num",
"q": "Convert a moment of 100 N·m to lbf·ft. (1 N·m = 0.7376 lbf·ft)",
"a": 73.76,
"tol": 0.3688,
"u": "lbf·ft",
"tolPct": 0.5,
"e": "100 N·m × 0.7376 lbf·ft/(N·m) = 73.76 lbf·ft."
},
{
"ch": 2,
"t": "mc",
"q": "A system of forces whose lines of action all pass through a common point is called:",
"o": [
"a concurrent force system",
"a parallel force system",
"a collinear force system",
"a couple"
],
"e": "Concurrent forces intersect at one point. Collinear forces share one line of action; parallel forces have parallel lines of action; a couple is a pair of equal, opposite, parallel forces."
},
{
"ch": 2,
"t": "mc",
"q": "A force that tends to elongate (pull apart) the body it acts on is called:",
"o": [
"a tensile force",
"a compressive force",
"a shear force only",
"a gravitational force only"
],
"e": "Tension elongates, compression shortens. A muscle can only produce a tensile force — it can pull but never push."
},
{
"ch": 2,
"t": "mc",
"q": "The pressure that a force F distributed uniformly over an area A produces is:",
"o": [
"P = F/A, with unit N/m² = Pa",
"P = F × A",
"P = A/F",
"P = F/A with unit N·m"
],
"e": "Pressure is force per unit area (normal force over area); 1 Pa = 1 N/m²."
},
{
"ch": 2,
"t": "tf",
"q": "The maximum static friction force is f_max = μ_s N, where N is the normal force between the surfaces.",
"a": true,
"e": "True. Friction acts tangent to the surfaces opposing impending (static) or actual (kinetic, f = μ_k N) sliding; μ_s is usually larger than μ_k."
},
{
"ch": 2,
"t": "num",
"q": "Two workers push a block with equal forces of 200 N, one toward the north and the other toward the east. Find the magnitude of the net force on the block.",
"a": 282.8427125,
"tol": 1.414,
"u": "N",
"tolPct": 0.5,
"e": "The forces are perpendicular, so |F_R| = √(200² + 200²) = 282.8 N, directed northeast (45° between the two pushes)."
},
{
"ch": 2,
"t": "num",
"q": "Force F₁ = 15 N acts at 30° and F₂ = 10 N at 135°, both measured from the positive x axis in the xy-plane. Find the magnitude of the resultant force.",
"a": 15.72750096,
"tol": 0.07864,
"u": "N",
"tolPct": 0.5,
"e": "F₁ = (15 cos 30°, 15 sin 30°) = (12.99, 7.5) N;  F₂ = (10 cos 135°, 10 sin 135°) = (−7.071, 7.071) N.\nF_R = F₁ + F₂ = (5.919, 14.57) N ⇒ |F_R| = 15.73 N, at 67.89° from +x.\n(The book's Problem 2.3 uses the same forces and gives F_R = 5.9i + 14.6j, 15.7 N.)"
},
{
"ch": 2,
"t": "num",
"q": "A force of 250 N is applied at 35° above the horizontal. Find its vertical scalar component.",
"a": 143.3941091,
"tol": 0.717,
"u": "N",
"tolPct": 0.5,
"e": "F_y = F sin θ = 250 sin 35° = 143.4 N (and F_x = F cos 35° = 204.8 N)."
},
{
"ch": 2,
"t": "num",
"q": "A 2 kg book measuring 20 cm × 30 cm lies flat on a table. Find the average pressure it exerts on the table. (g = 9.8 m/s²)",
"a": 326.6666667,
"tol": 1.633,
"u": "Pa",
"tolPct": 0.5,
"e": "P = W/A = (2 × 9.8)/(0.20 × 0.30) = 19.6/0.06 = 326.7 Pa (book answer 327 Pa ✓)."
},
{
"ch": 2,
"t": "num",
"q": "A stack of three identical 10 kg boxes sits on a table; each box has a bottom area of 40 cm × 50 cm. Find the average pressure on the table. (g = 9.8 m/s²)",
"a": 1470.0,
"tol": 7.35,
"u": "Pa",
"tolPct": 0.5,
"e": "Total weight = 3 × 10 × 9.8 = 294 N; the stack rests on one box bottom, A = 0.4 × 0.5 = 0.2 m².\nP = 294/0.2 = 1470 Pa (book: 1470 Pa ✓)."
},
{
"ch": 2,
"t": "num",
"q": "A 35 kg sphere sits on top of a square-based pyramid that weighs 650 N and has a base side of 0.7 m. Find the average pressure on the floor. (g = 9.8 m/s²)",
"a": 2026.530612,
"tol": 10.13,
"u": "Pa",
"tolPct": 0.5,
"e": "Total load = 35(9.8) + 650 = 343 + 650 = 993 N; base area = 0.7² = 0.49 m².\nP = 993/0.49 = 2027 Pa (book: 2026.5 Pa ✓)."
},
{
"ch": 2,
"t": "num",
"q": "A 50 kg cylindrical barrel rests on a pallet and exerts a pressure of 260 Pa. Find the radius of the barrel base in metres. (g = 9.8 m/s²)",
"a": 0.7745267643,
"tol": 0.003873,
"u": "m",
"tolPct": 0.5,
"e": "A = W/P = (50 × 9.8)/260 = 1.885 m². A = πr² ⇒ r = √(A/π) = 0.7745 m (book: 0.77 m ✓)."
},
{
"ch": 2,
"t": "num",
"q": "A 400 N block rests on a horizontal floor; the coefficient of static friction is 0.3. What minimum horizontal force is needed to start it moving?",
"a": 120.0,
"tol": 0.6,
"u": "N",
"tolPct": 0.5,
"e": "N = W = 400 N, so f_max = μ_s N = 0.3 × 400 = 120 N. The push must slightly exceed this value."
},
{
"ch": 2,
"t": "num",
"q": "A block slides at constant velocity under a horizontal force of 280 N; the coefficient of kinetic friction is 0.35. Find the mass of the block. (g = 9.8 m/s²)",
"a": 81.63265306,
"tol": 0.4082,
"u": "kg",
"tolPct": 0.5,
"e": "Constant velocity ⇒ F = f = μ_k N = μ_k m g. m = 280/(0.35 × 9.8) = 81.63 kg (book: 81.6 kg ✓)."
},
{
"ch": 2,
"t": "num",
"q": "A person pushes a 50 kg file cabinet across a floor with a horizontal force of 74 N (constant speed). Find the coefficient of friction. (g = 9.8 m/s²)",
"a": 0.1510204082,
"tol": 0.00151,
"u": "",
"tolPct": 1,
"e": "μ = F/N = 74/(50 × 9.8) = 74/490 = 0.151 (book: 0.15 ✓)."
},
{
"ch": 2,
"t": "num",
"q": "A 500 N box is pushed up a 25° incline by a force parallel to the slope. The coefficient of friction is 0.4. Find the friction force on the box.",
"a": 181.2615574,
"tol": 0.9063,
"u": "N",
"tolPct": 0.5,
"e": "Normal force N = W cos θ = 500 cos 25° = 453.2 N. f = μN = 0.4 × 453.2 = 181.3 N (book: 181.3 N ✓)."
},
{
"ch": 2,
"t": "num",
"q": "A block just begins to slide when a plate is tilted to 20° above the horizontal. Find the coefficient of static friction between the block and plate.",
"a": 0.3639702343,
"tol": 0.00364,
"u": "",
"tolPct": 1,
"e": "At the point of sliding W sin θ = μ_s W cos θ ⇒ μ_s = tan θ = tan 20° = 0.364. (This is the simple tilting-plate method for μ_s in the book.)"
},
{
"ch": 3,
"t": "mc",
"q": "The magnitude of the moment of a force about a point is:",
"o": [
"the force times the perpendicular distance from the point to the line of action of the force",
"the force times the distance along the line of action",
"the force divided by the distance",
"the force times the angle"
],
"e": "M = F·d where d is the moment arm (shortest, perpendicular distance). Direction follows the right-hand rule; unit N·m."
},
{
"ch": 3,
"t": "tf",
"q": "A couple consists of two equal, opposite and parallel forces whose lines of action differ, and its moment is the same about every point.",
"a": true,
"e": "True: the net force of a couple is zero, and its moment M = F·d (d = distance between the forces) is a free vector — independent of the reference point."
},
{
"ch": 3,
"t": "tf",
"q": "Translating a force to a different point without changing its direction requires adding a couple-moment equal to the moment of the original force about the new point.",
"a": true,
"e": "True: F at A is equivalent to F at O plus a couple M = r_OA × F."
},
{
"ch": 3,
"t": "num",
"q": "A worker tightens a bolt with a wrench whose handle is 25 cm long; the recommended torque is 80 N·m. Find the force needed on the handle, perpendicular to the wrench.",
"a": 320.0,
"tol": 1.6,
"u": "N",
"tolPct": 0.5,
"e": "M = F d ⇒ F = M/d = 80/0.25 = 320 N (book: 320 N ✓)."
},
{
"ch": 3,
"t": "num",
"q": "With the same torque of 80 N·m, what force is needed if the wrench handle is lengthened to 50 cm?",
"a": 160.0,
"tol": 0.8,
"u": "N",
"tolPct": 0.5,
"e": "F = 80/0.50 = 160 N — doubling the lever arm halves the required force."
},
{
"ch": 3,
"t": "num",
"q": "A couple of moment 100 N·m is applied about the long axis of a wrench through two handles, each at r = 25 cm from the axis. Find the force exerted on each handle.",
"a": 200.0,
"tol": 1.0,
"u": "N",
"tolPct": 0.5,
"e": "The two forces are 2r = 0.5 m apart, so M_c = F(2r) ⇒ F = 100/0.5 = 200 N (book: 200 N ✓)."
},
{
"ch": 3,
"t": "num",
"q": "A forearm weighing 20 N has its centre of gravity 15 cm from the elbow; a 100 N load is held 35 cm from the elbow. Both act vertically. Find the net moment of the two weights about the elbow, in N·m.",
"a": 38.0,
"tol": 0.19,
"u": "N·m",
"tolPct": 0.5,
"e": "Both weights tend to rotate the forearm the same way (clockwise): M = 20(0.15) + 100(0.35) = 3 + 35 = 38 N·m.\n(The biceps must supply a counter-moment of the same size.)"
},
{
"ch": 3,
"t": "num",
"q": "A uniform 3 m diving board of mass 40 kg is fixed at one end O; a 60 kg diver stands at the free end. Find the net moment about O of the diver's and the board's weights, in N·m. (g = 9.8 m/s²)",
"a": 2352.0,
"tol": 11.76,
"u": "N·m",
"tolPct": 0.5,
"e": "Diver: 60(9.8)(3) = 1764 N·m. Board (weight at its midpoint): 40(9.8)(1.5) = 588 N·m.\nM_O = 2352 N·m (same sense), which the support at O must resist."
},
{
"ch": 3,
"t": "num",
"q": "The position vector from O to the point of application is r = (0.4, 0.3, 0) m and the force is F = (0, −80, 0) N. Find the z-component of the moment M = r × F, in N·m (positive = counter-clockwise).",
"a": -32.0,
"tol": 0.32,
"u": "N·m",
"e": "M_z = r_x F_y − r_y F_x = (0.4)(−80) − (0.3)(0) = −32 N·m (clockwise)."
},
{
"ch": 3,
"t": "num",
"q": "r = (0.2, 0, 0.5) m and F = (10, 20, 0) N. Find the magnitude of the moment vector M = r × F.",
"a": 11.87434209,
"tol": 0.05937,
"u": "N·m",
"tolPct": 0.5,
"e": "M = (r_yF_z − r_zF_y, r_zF_x − r_xF_z, r_xF_y − r_yF_x) = (0 − 10, 5 − 0, 4 − 0) = (−10, 5, 4) N·m.\n|M| = √(100 + 25 + 16) = 11.87 N·m."
},
{
"ch": 3,
"t": "num",
"q": "In an arm-curl exercise a 150 N weight is held 35 cm from the elbow and the 20 N forearm has its centre of gravity 15 cm from the elbow. Find the net moment about the elbow when the forearm makes 30° with the horizontal, M = (W₁c + W₂b) cos θ.",
"a": 48.06440991,
"tol": 0.2403,
"u": "N·m",
"tolPct": 0.5,
"e": "At 0° the moment is 150(0.35) + 20(0.15) = 55.5 N·m. The moment arms shrink with cos θ: at 30°, M = 55.5 × cos 30° = 48.06 N·m. At 60° it is only 27.75 N·m — exercises are hardest with the forearm horizontal."
},
{
"ch": 4,
"t": "mc",
"q": "For a body in static equilibrium in a plane, the conditions are:",
"o": [
"ΣF_x = 0, ΣF_y = 0 and ΣM = 0 about any point",
"ΣF = 0 only",
"ΣM = 0 only",
"ΣF_x = 0 and ΣF_y = 0 only"
],
"e": "Translational equilibrium (net force zero) and rotational equilibrium (net moment zero) must both hold — three scalar equations in two dimensions."
},
{
"ch": 4,
"t": "mc",
"q": "The reaction at a fixed (built-in) support of a beam in a plane consists of:",
"o": [
"two force components and a moment",
"one force perpendicular to the beam",
"two force components only",
"a moment only"
],
"e": "A built-in end prevents translation and rotation: R_x, R_y and a moment M. A roller gives one force normal to the surface; a hinge gives two force components."
},
{
"ch": 4,
"t": "mc",
"q": "A body acted on by exactly three non-parallel coplanar forces in equilibrium must have forces that are:",
"o": [
"concurrent (lines of action meet at a point)",
"collinear",
"parallel",
"equal in magnitude"
],
"e": "Three non-parallel coplanar forces in equilibrium must be concurrent — otherwise they would produce a net moment. This is the basis of the head–neck, hip and ankle models in Chapter 5."
},
{
"ch": 4,
"t": "tf",
"q": "A body moving in a straight line at constant velocity is in equilibrium.",
"a": true,
"e": "True: zero acceleration means zero net force and zero net moment — static equilibrium covers rest and constant-velocity motion."
},
{
"ch": 4,
"t": "num",
"q": "A 4 m uniform beam weighing 400 N rests on supports at its two ends A and B. A 700 N person stands 1 m from A. Find the reaction at B.",
"a": 375.0,
"tol": 1.875,
"u": "N",
"tolPct": 0.5,
"e": "ΣM_A = 0: R_B(4) − 700(1) − 400(2) = 0 ⇒ R_B = (700 + 800)/4 = 375 N.\nΣF_y = 0: R_A = 700 + 400 − 375 = 725 N."
},
{
"ch": 4,
"t": "num",
"q": "A uniform horizontal beam of weight 400 N is hinged to a wall at A and held by a cable attached at its midpoint C and to the wall at 68° to the horizontal. Find the cable tension.",
"a": 431.4138971,
"tol": 2.157,
"u": "N",
"tolPct": 0.5,
"e": "ΣM_A = 0: (T sin 68°)(l/2) − W(l/2) = 0 ⇒ T = W/sin 68° = 400/0.9272 = 431.4 N.\nHinge: R_Ax = T cos 68° = 161.6 N, R_Ay = 0 (book: T = 431 N, R_Ax = 162 N ✓)."
},
{
"ch": 4,
"t": "num",
"q": "A uniform 2 m cantilever beam weighing 40 N is fixed at A. A force P = 80 N acts at the free end at 63° to the horizontal (downward). Find the fixing moment at A, in N·m.",
"a": 182.5610439,
"tol": 0.9128,
"u": "N·m",
"tolPct": 0.5,
"e": "R_Ax = P cos 63° = 36.32 N; R_Ay = P sin 63° + W = 111.3 N.\nM_A = (P sin 63°)(2) + W(1) = 142.6 + 40 = 182.6 N·m (book: 182.6 N·m ✓)."
},
{
"ch": 4,
"t": "num",
"q": "A person lifts a 50 kg block with a cable–pulley arrangement in which the load is supported by three cable segments. Find the force the person must apply on the cable. (g = 9.8 m/s²)",
"a": 163.3333333,
"tol": 0.8167,
"u": "N",
"tolPct": 0.5,
"e": "With n segments supporting the load, T = W/n. W = 50 × 9.8 = 490 N, n = 3 ⇒ T = 163.3 N (book: 163.3 N ✓)."
},
{
"ch": 4,
"t": "num",
"q": "In a pulley arrangement where T = W/4, a person pulls with 65 N. Find the mass of the load. (g = 9.8 m/s²)",
"a": 26.53061224,
"tol": 0.1327,
"u": "kg",
"tolPct": 0.5,
"e": "W = 4T = 4 × 65 = 260 N ⇒ m = W/g = 260/9.8 = 26.53 kg (book: 26.5 kg ✓)."
},
{
"ch": 4,
"t": "num",
"q": "A person pulls a 50 kg block along a floor with a rope at 15° above the horizontal with a force of 156 N (block just sliding). Find the coefficient of friction. (g = 9.8 m/s²)",
"a": 0.3351341391,
"tol": 0.003351,
"u": "",
"tolPct": 1,
"e": "Vertical: N + P sin 15° = W ⇒ N = 490 − 156 sin 15° = 449.6 N.\nHorizontal: P cos 15° = μN ⇒ μ = 150.7/449.6 = 0.3351 (book: 0.34 ✓)."
},
{
"ch": 4,
"t": "num",
"q": "A leg in a cast (weight 180 N) rests on a bed with μ = 0.45. A traction cable at 35° above the horizontal pulls the leg. Find the tension that just balances friction at the cast.",
"a": 75.19066119,
"tol": 0.7519,
"u": "N",
"tolPct": 1,
"e": "N = W − T sin 35°, and T cos 35° = μN ⇒ T(cos 35° + μ sin 35°) = μW.\nT = 0.45(180)/(0.8192 + 0.45 × 0.5736) = 81/1.077 = 75.19 N (book: 75 N ✓)."
},
{
"ch": 4,
"t": "num",
"q": "What minimum force parallel to a 25° incline is needed to push a 500 N box up it at steady speed when μ = 0.4?",
"a": 392.5706883,
"tol": 1.963,
"u": "N",
"tolPct": 0.5,
"e": "P = W sin θ + μ W cos θ = 500 sin 25° + 0.4 × 500 cos 25° = 211.3 + 181.3 = 392.6 N."
},
{
"ch": 4,
"t": "num",
"q": "A 6 m uniform diving board of weight 200 N is hinged at A and rests on a roller at D, 4 m from A. An 80 kg diver stands at the free end B (6 m from A). Find the roller reaction R_D. (g = 9.8 m/s²)",
"a": 1326.0,
"tol": 6.63,
"u": "N",
"tolPct": 0.5,
"e": "ΣM_A = 0: R_D(4) − (80 × 9.8)(6) − 200(3) = 0 ⇒ R_D = (4704 + 600)/4 = 1326 N (upward).\nΣF_y = 0: R_A = −342 N, i.e. 342 N downward at the hinge."
},
{
"ch": 4,
"t": "num",
"q": "Three parts of a body have masses 10 kg, 20 kg and 5 kg with centres of gravity at x = 0.2 m, 0.5 m and 1.2 m. Find the x-coordinate of the combined centre of gravity.",
"a": 0.5142857143,
"tol": 0.002571,
"u": "m",
"tolPct": 0.5,
"e": "x_cg = Σ m_i x_i / Σ m_i = (10(0.2) + 20(0.5) + 5(1.2))/35 = (2 + 10 + 6)/35 = 0.5143 m."
},
{
"ch": 5,
"t": "mc",
"q": "Joints that allow no relative motion of the bones (for example the sutures of the skull) are called:",
"o": [
"synarthrodial joints",
"amphiarthrodial joints",
"diarthrodial joints",
"ball-and-socket joints"
],
"e": "Synarthrodial = immovable; amphiarthrodial = slight motion (between vertebrae, with an intervening cartilage/ligament); diarthrodial (synovial) = freely movable and mechanically the most significant."
},
{
"ch": 5,
"t": "mc",
"q": "Which of the following is a feature of a diarthrodial (synovial) joint?",
"o": [
"an articular cavity, a ligamentous capsule, synovial membrane and synovial fluid",
"a solid bone-to-bone fusion",
"no articular cartilage",
"a single ligament and no cavity"
],
"e": "Diarthrodial joints have an articular cavity enclosed by a ligamentous capsule lined by synovial membrane that holds synovial fluid; the bone ends are covered by articular cartilage."
},
{
"ch": 5,
"t": "mc",
"q": "The main functions of synovial fluid are to:",
"o": [
"lubricate the joint, reduce friction and wear, and nourish the articular cartilage",
"generate muscle force",
"stiffen the joint capsule",
"attach muscle to bone"
],
"e": "Synovial fluid is a viscous lubricant that reduces friction and wear and nourishes articular cartilage. Articular cartilage distributes loads and absorbs shock."
},
{
"ch": 5,
"t": "mc",
"q": "The elbow and the ankle are examples of which type of diarthrodial joint?",
"o": [
"hinge joints",
"ball-and-socket joints",
"pivot joints",
"saddle joints"
],
"e": "Hinge (ginglymus) joints allow motion in one plane: elbow (humeroulnar) and ankle. Shoulder and hip are ball-and-socket; the proximal radioulnar joint is a pivot; the thumb carpometacarpal is a saddle joint."
},
{
"ch": 5,
"t": "mc",
"q": "Compared with the elbow, the shoulder (glenohumeral) joint has:",
"o": [
"greater mobility (triaxial motion) but lower stability and more risk of dislocation",
"lower mobility and higher stability",
"the same mobility but fewer muscles",
"only uniaxial motion"
],
"e": "The ball-and-socket shoulder with its shallow glenoid fossa moves in all three planes but is easily dislocated; the uniaxial elbow is more stable and less prone to such injuries."
},
{
"ch": 5,
"t": "mc",
"q": "A skeletal muscle can:",
"o": [
"only pull (generate tension); it cannot push",
"push and pull",
"only push",
"generate compression only"
],
"e": "The result of a muscle contraction is always tension. Muscles are modelled as cables acting along their lines of pull."
},
{
"ch": 5,
"t": "mc",
"q": "A contraction in which the muscle length decreases (for example the biceps during forearm flexion) is called:",
"o": [
"a concentric contraction",
"an eccentric contraction",
"a static (isometric) contraction",
"a passive contraction"
],
"e": "Concentric: muscle shortens and produces movement. Eccentric: muscle lengthens while controlling movement (biceps while extending the forearm). Static/isometric: no change in length — tension balances applied forces."
},
{
"ch": 5,
"t": "tf",
"q": "In an isometric (static) contraction the muscle length does not change, and the muscle tension balances external loads such as gravity.",
"a": true,
"e": "True: a muscle that contracts without segmental motion balances the effect of applied forces — exactly the situation analysed with the equilibrium equations in this chapter."
},
{
"ch": 5,
"t": "mc",
"q": "A muscle that opposes the action of another muscle is called:",
"o": [
"an antagonist",
"an agonist",
"a synergist",
"a fixator"
],
"e": "Agonist: produces the movement through its own contraction. Antagonist: opposes it. Synergist (synergic muscle): assists the agonist."
},
{
"ch": 5,
"t": "mc",
"q": "Which of the following is NOT one of the basic assumptions made when applying statics to joints in Chapter 5?",
"o": [
"dynamic effects (accelerations) are included in the analysis",
"frictional forces at the joints are negligible",
"the locations of muscle attachments are known",
"only two-dimensional problems are considered"
],
"e": "The assumptions: joint axes, muscle attachments and lines of action are known; segment weights and centres of gravity are known; friction at the joints is negligible; dynamic aspects are ignored; the problem is two-dimensional."
},
{
"ch": 5,
"t": "mc",
"q": "The unknowns in static analyses of the musculoskeletal system are usually:",
"o": [
"the muscle tensions and the joint reaction forces",
"the segment weights",
"the muscle attachment points",
"the joint axes of rotation"
],
"e": "Weights, centres of gravity, attachments and lines of action are taken as known from anthropometric data; the muscle force(s) and joint reaction force are solved for."
},
{
"ch": 5,
"t": "mc",
"q": "When several muscles act at a joint, the problem is statically indeterminate because:",
"o": [
"there are more unknown muscle forces than equilibrium equations",
"the weights are unknown",
"friction is large",
"the joint has no axis of rotation"
],
"e": "For the three-flexor elbow the unknowns F_M1, F_M2, F_M3, F_J and its direction exceed the three equations. One reduces the problem using muscle cross-sectional areas, EMG signals or optimisation."
},
{
"ch": 5,
"t": "mc",
"q": "The angle of pull of a muscle is the angle between:",
"o": [
"the line of action of the muscle force and the long axis of the bone on which it acts",
"the muscle and the horizontal",
"the two bones forming the joint",
"the muscle force and the joint reaction force"
],
"e": "The component of the muscle force perpendicular to the bone, F_M sin θ, rotates the segment; the component along the bone, F_M cos θ, stabilises (compresses) the joint or, past a certain angle, tends to dislocate it."
},
{
"ch": 5,
"t": "tf",
"q": "At an angle of pull of 90° the muscle force is entirely a rotational component and none is 'wasted' compressing the joint.",
"a": true,
"e": "True: the rotational component is F_M sin θ and the stabilising component is F_M cos θ; at θ = 90° the stabilising component vanishes."
},
{
"ch": 5,
"t": "mc",
"q": "In the model of the elbow in Example 5.1 (forearm flexed to a right angle, biceps pulling vertically), the forces form:",
"o": [
"a parallel force system",
"a concurrent force system",
"a collinear force system",
"a couple only"
],
"e": "The muscle force, the weights and the joint reaction force are all vertical, so the joint reaction force must also be vertical."
},
{
"ch": 5,
"t": "mc",
"q": "In Example 5.3 (head and neck) the muscle force, the weight of the head and the joint reaction force form a concurrent system because:",
"o": [
"three non-parallel forces in equilibrium must meet at a common point",
"all three forces are vertical",
"the moment of each force about the joint is zero",
"friction is large"
],
"e": "For a body acted on by three non-parallel coplanar forces in equilibrium, the lines of action intersect at one point, which gives the direction of the unknown joint force."
},
{
"ch": 5,
"t": "mc",
"q": "The patella improves the function of the knee because it:",
"o": [
"increases the moment arm (mechanical advantage) of the quadriceps force",
"reduces the weight of the leg",
"stiffens the hamstrings",
"stops all knee rotation"
],
"e": "The patella 'floats' in the quadriceps tendon and moves the line of pull away from the joint axis, increasing the lever arm of the quadriceps."
},
{
"ch": 5,
"t": "mc",
"q": "The most common ankle injury is:",
"o": [
"the inversion sprain",
"a fracture of the femur",
"a dislocation of the patella",
"rupture of the supraspinatus"
],
"e": "Inversion sprain: body weight is forcefully transmitted to the ankle while the foot is inverted (sole facing inward)."
},
{
"ch": 5,
"t": "num",
"q": "Example 5.1 (elbow): the forearm is flexed at 90° and the biceps pulls vertically. a = 4 cm (biceps attachment), b = 15 cm (forearm centre of gravity), c = 35 cm (hand load), forearm weight W = 20 N and held load W₀ = 80 N. Find the biceps force F_M.",
"a": 775.0,
"tol": 3.875,
"u": "N",
"tolPct": 0.5,
"e": "ΣM_O = 0 (parallel force system): a F_M − b W − c W₀ = 0 ⇒ F_M = (bW + cW₀)/a = (0.15·20 + 0.35·80)/0.04 = (3 + 28)/0.04 = 775 N."
},
{
"ch": 5,
"t": "num",
"q": "For the same arm (F_M = 775 N, W = 20 N, W₀ = 80 N) find the magnitude of the joint reaction force at the elbow.",
"a": 675.0,
"tol": 3.375,
"u": "N",
"tolPct": 0.5,
"e": "ΣF_y = 0: F_M − W − W₀ − F_J = 0 ⇒ F_J = 775 − 20 − 80 = 675 N (directed downward on the ulna).\nThe biceps force is about 9.688 times the held weight — the short moment arm a is a mechanical disadvantage."
},
{
"ch": 5,
"t": "num",
"q": "Problem 5.1 (elbow): a = 4.5 cm, b = 16.5 cm, c = 37 cm, forearm weight 83 N and biceps force 780 N (forearm at 90°). Find the weight W₀ of the object held in the hand.",
"a": 57.85135135,
"tol": 0.5785,
"u": "N",
"tolPct": 1,
"e": "a F_M = bW + cW₀ ⇒ W₀ = (a F_M − bW)/c = (0.045·780 − 0.165·83)/0.37 = (35.1 − 13.70)/0.37 = 57.85 N (book: 57.8 N ✓)."
},
{
"ch": 5,
"t": "num",
"q": "Using the same data as Problem 5.1 (a = 4.5, b = 16.5, c = 37 cm; W = 83 N; F_M = 780 N; W₀ = 57.8 N), find the elbow joint reaction force F_J.",
"a": 639.2,
"tol": 3.196,
"u": "N",
"tolPct": 0.5,
"e": "F_J = F_M − W − W₀ = 780 − 83 − 57.8 = 639.2 N (book: 639.2 N ✓)."
},
{
"ch": 5,
"t": "num",
"q": "If the biceps attachment in Example 5.1 is 5 cm from the elbow (a = 5 cm) instead of 4 cm, with the same loads (W = 20 N, W₀ = 80 N, b = 15 cm, c = 35 cm), find the new biceps force.",
"a": 620.0,
"tol": 3.1,
"u": "N",
"tolPct": 0.5,
"e": "F_M = (bW + cW₀)/a = 31/0.05 = 620 N — a 20 % longer lever arm cuts the muscle force by 20 % (775 → 620 N), but it also reduces the range and speed of hand motion."
},
{
"ch": 5,
"t": "num",
"q": "Elbow flexed at 90° with a = 5 cm, b = 14 cm, c = 32 cm, forearm weight 18 N and a 60 N load. Find the ratio F_M/W₀ (muscle force divided by the held load).",
"a": 7.24,
"tol": 0.0724,
"u": "",
"tolPct": 1,
"e": "F_M = (bW + cW₀)/a = (0.14·18 + 0.32·60)/0.05 = (2.52 + 19.2)/0.05 = 434.4 N ⇒ F_M/W₀ = 7.24: the muscle must pull several times harder than the load because its lever arm is short."
},
{
"ch": 5,
"t": "num",
"q": "A muscle exerts a force of 500 N on a bone with an angle of pull of 30°. Find the rotational (normal) component F_Mn = F_M sin θ.",
"a": 250.0,
"tol": 1.25,
"u": "N",
"tolPct": 0.5,
"e": "F_Mn = 500 sin 30° = 250 N rotates the segment; the stabilising (tangential) component F_Mt = 500 cos 30° = 433 N compresses the joint."
},
{
"ch": 5,
"t": "num",
"q": "At what angle of pull (degrees) does the rotational component equal 80 % of the muscle force (F_M sin θ = 0.8 F_M)?",
"a": 53.13010235,
"tol": 0.2657,
"u": "°",
"tolPct": 0.5,
"e": "sin θ = 0.8 ⇒ θ = 53.13°. The stabilising component is then F_M cos θ = 0.6 F_M."
},
{
"ch": 5,
"t": "num",
"q": "Three-muscle elbow (statically indeterminate): the biceps, brachialis and brachioradialis have moment arms a₁ = 4 cm, a₂ = 3.5 cm, a₃ = 6 cm, with muscle forces proportional to cross-sectional area: F_M2 = 0.8 F_M1 and F_M3 = 0.5 F_M1. With b = 15 cm, c = 35 cm, W = 20 N, W₀ = 80 N (parallel vertical forces), find F_M1.",
"a": 316.3265306,
"tol": 1.582,
"u": "N",
"tolPct": 0.5,
"e": "Moment equation: a₁F_M1 + a₂F_M2 + a₃F_M3 = bW + cW₀ = 31 N·m.\nSubstitute F_M2 = k₂₁F_M1, F_M3 = k₃₁F_M1: F_M1 (a₁ + a₂k₂₁ + a₃k₃₁) = 31 ⇒ F_M1 = 31/(0.04 + 0.028 + 0.030) = 31/0.098 = 316.3 N.\nThen F_M2 = 253.1 N and F_M3 = 158.2 N."
},
{
"ch": 5,
"t": "num",
"q": "Example 5.2 (shoulder): the arm is abducted to the horizontal holding a dumbbell. a = 15 cm (deltoid attachment), b = 30 cm (arm centre of gravity), c = 60 cm (dumbbell), W = 40 N (arm), W₀ = 60 N (dumbbell), and the deltoid line of pull makes α = 15° with the horizontal. Find the vertical component F_My of the deltoid force.",
"a": 320.0,
"tol": 1.6,
"u": "N",
"tolPct": 0.5,
"e": "ΣM_O = 0: a F_My = bW + cW₀ ⇒ F_My = (0.30·40 + 0.60·60)/0.15 = (12 + 36)/0.15 = 320 N."
},
{
"ch": 5,
"t": "num",
"q": "For the same shoulder (F_My = 320 N, α = 15°) find the total deltoid force F_M.",
"a": 1236.385058,
"tol": 6.182,
"u": "N",
"tolPct": 0.5,
"e": "F_M = F_My/sin α = 320/sin 15° = 320/0.2588 = 1236 N (book: 1236 N ✓)."
},
{
"ch": 5,
"t": "num",
"q": "Continuing Example 5.2: find the magnitude of the shoulder joint reaction force F_J (F_Jx = F_Mx = 1194 N, F_Jy = F_My − W − W₀ = 220 N).",
"a": 1214.35086,
"tol": 6.072,
"u": "N",
"tolPct": 0.5,
"e": "F_J = √(F_Jx² + F_Jy²) = √(1194² + 220²) = 1214 N, directed at θ = tan⁻¹(220/1194) = 10.44° to the horizontal (book: 1214 N, 10° ✓)."
},
{
"ch": 5,
"t": "num",
"q": "In Example 5.2 the horizontal component F_Mx of the deltoid force is the stabilising component and F_My is the rotational component. Find the ratio F_Mx/F_My.",
"a": 3.732050808,
"tol": 0.03732,
"u": "",
"tolPct": 1,
"e": "F_Mx/F_My = cot α = 1/tan 15° = 3.732 — about four times larger: the abducted arm is a position that needs a large stabilising force to hold the humeral head in the shallow glenoid."
},
{
"ch": 5,
"t": "num",
"q": "Same shoulder geometry as Example 5.2 but without the dumbbell (W₀ = 0, W = 40 N). Find the deltoid force F_M.",
"a": 309.0962644,
"tol": 1.545,
"u": "N",
"tolPct": 0.5,
"e": "F_My = bW/a = 0.30·40/0.15 = 80 N ⇒ F_M = 80/sin 15° = 309.1 N. The dumbbell raises the deltoid force from 309.1 N to 1236 N."
},
{
"ch": 5,
"t": "num",
"q": "Example 5.3 (head and neck): the 50 N head is held by the neck extensors (line of pull at α = 30° to the horizontal) with the atlantooccipital joint reaction at φ = 60° to the horizontal. Find the neck muscle force F_M = W/(cos α tan φ − sin α).",
"a": 50.0,
"tol": 0.25,
"u": "N",
"tolPct": 0.5,
"e": "Concurrent system: F_Jx = F_Mx and F_Jy = W − … leads to F_M(cos α tan φ − sin α) = W.\nF_M = 50/(cos 30°·tan 60° − sin 30°) = 50/(0.866 × 1.732 − 0.5) = 50/1.0 = 50 N."
},
{
"ch": 5,
"t": "num",
"q": "For the same head position (F_M = 50 N, α = 30°, φ = 60°) find the joint reaction force F_J = F_M cos α / cos φ.",
"a": 86.60254038,
"tol": 0.433,
"u": "N",
"tolPct": 0.5,
"e": "F_J = 50 cos 30°/cos 60° = 86.6 N (book: ≈ 86 N ✓). Its components are F_Jx = 43.3 N and F_Jy = W + F_My = 50 + 25 = 75 N."
},
{
"ch": 5,
"t": "num",
"q": "A 50 N head is held with neck-muscle line of pull α = 40° and joint reaction direction φ = 70°, both from the horizontal. Find the neck muscle force.",
"a": 34.20201433,
"tol": 0.171,
"u": "N",
"tolPct": 0.5,
"e": "F_M = W/(cos α tan φ − sin α) = 50/(0.7660 × 2.7475 − 0.6428) = 50/1.462 = 34.2 N.\nThe joint force is F_J = F_M cos α/cos φ = 76.6 N."
},
{
"ch": 5,
"t": "num",
"q": "A neck extensor force of 40 N supports a head when its line of pull makes 25° and the joint reaction 55° with the horizontal. Find the weight of the head.",
"a": 34.86893591,
"tol": 0.1743,
"u": "N",
"tolPct": 0.5,
"e": "W = F_M(cos α tan φ − sin α) = 40(0.9063 × 1.4281 − 0.4226) = 40 × 0.8717 = 34.87 N."
},
{
"ch": 5,
"t": "num",
"q": "Example 5.4 (weight lifter): trunk bent 45° from vertical, lifting a weight equal to body weight (W₀ = W). Lever arms (fractions of height h): a = 0.02h (erector spinae), b = 0.08h (legs + pelvis), c = 0.12h (ground reaction); leg weight W₁ = 0.4W. Find the erector spinae force F_M in multiples of the body weight W: F_M = [c(W + W₀) − bW₁]/a.",
"a": 10.4,
"tol": 0.052,
"u": "× W",
"tolPct": 0.5,
"e": "F_M = [0.12h(2W) − 0.08h(0.4W)]/(0.02h) = (0.24 − 0.032)W/0.02 = 10.4 W — more than ten times body weight!"
},
{
"ch": 5,
"t": "num",
"q": "For the same lifter (F_M = 10.4 W at 45° to the vertical; W₀ = W; W₁ = 0.4 W) find the compressive force F_J on the sacrum/L5 junction in multiples of W (F_Jx = F_M sin 45°, F_Jy = F_M cos 45° + W + W₀ − W₁).",
"a": 11.5867387,
"tol": 0.1159,
"u": "× W",
"tolPct": 1,
"e": "F_Jx = 7.354 W; F_Jy = 7.354 + 1 + 1 − 0.4 = 8.954 W.\nF_J = √(7.354² + 8.954²) = 11.59 W — about 12 times body weight (book: 11.7 W ✓)."
},
{
"ch": 5,
"t": "num",
"q": "Problem 5.4 (weight lifter): a = 3.6 cm, b = 14.6 cm, c = 22 cm; back-muscle force F_M = 6856 N at 43° to the vertical; barbell W₀ = 637 N; lower-body weight W₁ = 333 N. Find the weight W of the athlete using c(W + W₀) = aF_M + bW₁.",
"a": 705.8818182,
"tol": 3.529,
"u": "N",
"tolPct": 0.5,
"e": "ΣM_O = 0: c(W + W₀) = aF_M + bW₁ ⇒ W + W₀ = (0.036 × 6856 + 0.146 × 333)/0.22 = (246.8 + 48.6)/0.22 = 1343 N.\nW = 1343 − 637 = 705.9 N (book: 705.9 N ✓)."
},
{
"ch": 5,
"t": "num",
"q": "Same athlete (W = 705.9 N, W₀ = 637 N, W₁ = 333 N, F_M = 6856 N at 43° to the vertical): find the magnitude of the joint reaction force F_J at the sacrum–L5 junction.",
"a": 7625.746999,
"tol": 38.13,
"u": "N",
"tolPct": 0.5,
"e": "F_Jx = F_M sin 43° = 4676 N; F_Jy = F_M cos 43° + W + W₀ − W₁ = 5014 + 705.9 + 637 − 333 = 6024 N.\nF_J = √(F_Jx² + F_Jy²) = 7626 N (book: 7625.8 N ✓)."
},
{
"ch": 5,
"t": "num",
"q": "For that athlete the line of action of F_J makes an angle with the horizontal. Find it in degrees (θ = tan⁻¹(F_Jy/F_Jx), F_Jx = 4675.9 N, F_Jy = 6024.1 N).",
"a": 52.18186791,
"tol": 0.5218,
"u": "°",
"tolPct": 1,
"e": "θ = tan⁻¹(6024/4676) = 52.18° (book: 52° ✓)."
},
{
"ch": 5,
"t": "num",
"q": "The same trunk-bent lifter (45°, a = 0.02h, b = 0.08h, c = 0.12h, W₁ = 0.4W) lifts NOTHING (W₀ = 0). Find the erector spinae force in multiples of W.",
"a": 4.4,
"tol": 0.022,
"u": "× W",
"tolPct": 0.5,
"e": "F_M = [c W − b W₁]/a = (0.12 − 0.032)W/0.02 = 4.4 W. Holding a weight equal to body weight raises the force from 4.4 W to 10.4 W."
},
{
"ch": 5,
"t": "num",
"q": "Single-leg stance (hip, Solution 2): the free-body diagram of the upper body (weight W₂ = 0.83 W, including the other leg) is acted on by the abductor muscle force F_M (line of action θ = 70° to the horizontal) and the hip joint force F_J (φ = 74.8°). Concurrent forces give F_M = W₂ cos φ/sin(φ − θ). Find F_M in multiples of body weight W.",
"a": 2.600652809,
"tol": 0.02601,
"u": "× W",
"tolPct": 1,
"e": "F_M = 0.83 cos 74.8°/sin(74.8° − 70°) = 0.83 × 0.2618/0.08368 = 2.601 W (book: 2.6 W ✓)."
},
{
"ch": 5,
"t": "num",
"q": "For the same single-leg stance find the hip joint reaction force F_J = W₂ cos θ/sin(φ − θ) in multiples of body weight W.",
"a": 3.392495643,
"tol": 0.03392,
"u": "× W",
"tolPct": 1,
"e": "F_J = 0.83 cos 70°/sin 4.8° = 0.83 × 0.3420/0.08368 = 3.392 W (book: 3.4 W ✓). Standing on one leg loads the hip with more than three times body weight."
},
{
"ch": 5,
"t": "num",
"q": "If, instead, the abductor line of action is θ = 75° and the joint force acts at φ = 80° (W₂ = 0.83 W), find the hip joint force F_J in multiples of W.",
"a": 2.46478087,
"tol": 0.02465,
"u": "× W",
"tolPct": 1,
"e": "sin(φ − θ) = sin 5° = 0.08716. F_J = 0.83 cos 75°/0.08716 = 2.465 W, and F_M = 0.83 cos 80°/0.08716 = 1.654 W."
},
{
"ch": 5,
"t": "tf",
"q": "Carrying a load in the hand during single-leg stance increases both the hip abductor force and the hip joint reaction force.",
"a": true,
"e": "True: the extra load adds both a downward force and a moment about the hip, so the abductors must pull harder and the compressive force on the femoral head grows (a cane on the opposite side reduces it)."
},
{
"ch": 5,
"t": "num",
"q": "Knee with a weight boot (lower-leg extension): a = 12 cm (patellar-tendon attachment), b = 22 cm (leg centre of gravity), c = 50 cm (boot), W₁ = 150 N, W₀ = 100 N. The tibia makes β = 20° with the horizontal and the patellar tendon makes α = 30° with the tibia. Find the quadriceps force F_M = (bW₁ + cW₀)cos β/(a sin α).",
"a": 1299.908125,
"tol": 6.5,
"u": "N",
"tolPct": 0.5,
"e": "ΣM_O = 0: a F_M sin α = (bW₁ + cW₀) cos β (the weights' moment arms shrink by cos β).\nF_M = (0.22·150 + 0.50·100)(cos 20°)/(0.12 sin 30°) = 83 × 0.9397/0.06 = 1300 N."
},
{
"ch": 5,
"t": "num",
"q": "Continuing the knee problem (F_M = 1300 N at α + β = 50° to the horizontal, W₁ + W₀ = 250 N): find the magnitude of the tibiofemoral joint reaction F_J.",
"a": 1119.985463,
"tol": 11.2,
"u": "N",
"tolPct": 1,
"e": "F_Mx = F_M cos 50° = 835.6 N, F_My = F_M sin 50° = 995.8 N.\nF_Jx = −F_Mx = −835.6 N; F_Jy = W₁ + W₀ − F_My = 250 − 995.8 = −745.8 N.\nF_J = √(F_Jx² + F_Jy²) = 1120 N, directed at 41.75° to the horizontal."
},
{
"ch": 5,
"t": "num",
"q": "Patellofemoral joint: the tension in the patellar tendon and in the quadriceps tendon is the same, F_M = 1300 N. The patellar tendon pulls 20° below and the quadriceps tendon 40° above the horizontal, both toward the back of the knee. Find the compressive force F_P on the patella.",
"a": 2251.66605,
"tol": 11.26,
"u": "N",
"tolPct": 0.5,
"e": "The two equal forces are 20° + 40° = 60° apart, so their resultant has magnitude 2F_M cos(60°/2) = 2 × 1300 × cos 30° = 2252 N.\n(Components: F_Px = F_M(cos 20° + cos 40°) = 2217 N, F_Py = F_M(sin 40° − sin 20°) = 391 N; F_P = √(F_Px² + F_Py²).)"
},
{
"ch": 5,
"t": "num",
"q": "Example 5.7 (standing on tiptoe on one foot): the Achilles tendon force makes α = 45° and the ankle joint force φ = 60° with the horizontal; the ground reaction equals body weight W. Find the Achilles tendon force F_M = W cos φ/sin(φ − α) in multiples of W.",
"a": 1.931851653,
"tol": 0.01932,
"u": "× W",
"tolPct": 1,
"e": "Concurrent system (foot weight ignored): F_M = W cos 60°/sin 15° = 0.5/0.2588 = 1.932 W (book: 1.93 W ✓)."
},
{
"ch": 5,
"t": "num",
"q": "For the same foot (α = 45°, φ = 60°) find the ankle joint reaction force F_J = W cos α/sin(φ − α) in multiples of W.",
"a": 2.732050808,
"tol": 0.02732,
"u": "× W",
"tolPct": 1,
"e": "F_J = W cos 45°/sin 15° = 0.7071/0.2588 = 2.732 W (book: 2.73 W ✓) — standing on tiptoe loads the ankle with almost three body weights."
},
{
"ch": 5,
"t": "num",
"q": "Problem 5.7 (tiptoe): Achilles force F_M = 1275.4 N at α = 49°, ankle reaction at φ = 65° to the horizontal. Find the person's weight W (W = F_M sin(φ − α)/cos φ).",
"a": 831.8331587,
"tol": 4.159,
"u": "N",
"tolPct": 0.5,
"e": "W = F_M sin(65° − 49°)/cos 65° = 1275.4 × 0.2756/0.4226 = 831.8 N (book: 831.8 N ✓)."
},
{
"ch": 5,
"t": "num",
"q": "For that person (W = 831.8 N, α = 49°, φ = 65°) find the ankle joint reaction force F_J.",
"a": 1979.890036,
"tol": 9.899,
"u": "N",
"tolPct": 0.5,
"e": "F_J = W cos α/sin(φ − α) = 831.8 × 0.6561/0.2756 = 1980 N (book: 1980.3 N ✓)."
},
{
"ch": 5,
"t": "num",
"q": "A 700 N person stands on tiptoe on one foot. The Achilles tendon pulls at 50° and the ankle joint reaction acts at 65° to the horizontal. Find the Achilles tendon force.",
"a": 1143.010102,
"tol": 5.715,
"u": "N",
"tolPct": 0.5,
"e": "F_M = W cos φ/sin(φ − α) = 700 × 0.4226/sin 15° = 295.8/0.2588 = 1143 N (about 1.633 × body weight); F_J = 1738 N."
},
{
"ch": 5,
"t": "mc",
"q": "Kinesiology is best defined as:",
"o": [
"the scientific study of human motion",
"the study of bone chemistry",
"the design of prosthetics only",
"the study of blood flow"
],
"e": "Kinesis = movement, logos = study. It splits into anatomical kinesiology and mechanical kinesiology (biomechanics)."
},
{
"ch": 5,
"t": "mc",
"q": "Biomechanics is:",
"o": [
"the application of mechanical principles to living structures at rest and in movement",
"the study of mechanics of non-living materials only",
"a branch of chemistry",
"the study of anatomy only"
],
"e": "Bios = life, mechanics = effect of forces on bodies in static and dynamic situations: biomechanics applies it to humans and animals."
},
{
"ch": 5,
"t": "mc",
"q": "In the classification of mechanics, statics and dynamics belong to the mechanics of:",
"o": [
"rigid bodies",
"deformable bodies",
"fluids",
"viscoelastic bodies"
],
"e": "Rigid-body mechanics = statics + dynamics (kinematics, kinetics). Deformable-body mechanics: elasticity, plasticity, viscoelasticity. Fluid mechanics: liquids and gases."
},
{
"ch": 5,
"t": "mc",
"q": "The sagittal plane divides the body into:",
"o": [
"left and right sections",
"anterior and posterior sections",
"upper and lower sections",
"medial and lateral thirds"
],
"e": "Sagittal: left/right. Coronal (frontal): anterior/posterior. Transverse: superior/inferior (upper/lower)."
},
{
"ch": 5,
"t": "mc",
"q": "Flexion and extension of a joint occur in the sagittal plane about which axis?",
"o": [
"the mediolateral axis",
"the anteroposterior axis",
"the longitudinal axis",
"the vertical axis of the head only"
],
"e": "Sagittal-plane rotations (flexion–extension) are about the mediolateral axis; frontal-plane rotations (abduction–adduction) about the anteroposterior axis; transverse-plane rotations about the longitudinal axis."
},
{
"ch": 5,
"t": "mc",
"q": "The term 'proximal' describes a position that is:",
"o": [
"closer to the trunk",
"farther from the trunk",
"toward the back",
"toward the surface of the body"
],
"e": "Proximal = closer to the trunk; distal = farther from it. Medial = toward the midline; lateral = away from it; anterior (ventral) = front; posterior (dorsal) = back."
},
{
"ch": 5,
"t": "mc",
"q": "Flexion is a movement that:",
"o": [
"decreases the angle between two body parts",
"increases the angle between two body parts",
"moves a part away from the midline",
"rotates a part about its long axis"
],
"e": "Flexion decreases and extension increases the joint angle; abduction moves a part away from the midline and adduction toward it."
},
{
"ch": 5,
"t": "mc",
"q": "Moving a part so that its end follows a circular path (describing a cone in space) is called:",
"o": [
"circumduction",
"rotation",
"protraction",
"elevation"
],
"e": "Circumduction combines flexion, abduction, extension and adduction in sequence. Rotation is about the longitudinal axis of the bone."
},
{
"ch": 5,
"t": "mc",
"q": "Turning the hand so that the palm faces upward (anteriorly) is called:",
"o": [
"supination",
"pronation",
"dorsiflexion",
"eversion"
],
"e": "Supination: palm up; pronation: palm down. Dorsiflexion/plantar flexion are ankle movements; inversion/eversion turn the sole medially/laterally."
},
{
"ch": 5,
"t": "mc",
"q": "Dorsiflexion is the movement of the ankle in which:",
"o": [
"the top of the foot moves closer to the shin",
"the foot points the toes away from the shin",
"the sole faces medially",
"the sole faces laterally"
],
"e": "Dorsiflexion brings the dorsum of the foot toward the shin; plantar flexion points the toes (gastrocnemius and soleus act via the Achilles tendon)."
},
{
"ch": 5,
"t": "mc",
"q": "Structurally, joints are classified as:",
"o": [
"fibrous, cartilaginous and synovial",
"synarthrosis, amphiarthrosis and diarthrosis",
"hinge, pivot and saddle",
"uniaxial, biaxial and triaxial"
],
"e": "Structural classification (by connecting tissue): fibrous, cartilaginous, synovial. Functional classification (by degree of movement): synarthrosis, amphiarthrosis, diarthrosis."
},
{
"ch": 5,
"t": "mc",
"q": "Amphiarthrosis (slightly movable) joints are:",
"o": [
"cartilaginous joints, such as those between vertebrae",
"fibrous joints with no movement at all",
"synovial ball-and-socket joints",
"joints with a fluid-filled cavity"
],
"e": "Amphiarthroses attenuate forces and allow slight motion; synarthroses (fibrous, e.g. skull sutures) allow almost none; diarthroses (synovial) are freely movable."
},
{
"ch": 5,
"t": "mc",
"q": "Which synovial joint type is triaxial?",
"o": [
"ball-and-socket (shoulder and hip)",
"hinge (elbow)",
"pivot (atlas–axis)",
"saddle (first carpometacarpal)"
],
"e": "Ball-and-socket joints move about three axes. Hinge and pivot joints are monoaxial; ellipsoidal (radiocarpal) and saddle joints are biaxial."
},
{
"ch": 5,
"t": "mc",
"q": "The atlas–axis joint and the proximal radioulnar joint are examples of:",
"o": [
"pivot joints (monoaxial rotation)",
"hinge joints",
"ball-and-socket joints",
"gliding joints"
],
"e": "Pivot joints permit rotation about one axis (neck rotation and forearm pronation–supination)."
},
{
"ch": 5,
"t": "mc",
"q": "In free-body diagrams a hinge (pin) connection such as the elbow supplies unknowns that are:",
"o": [
"the magnitude and direction of the force (two force components)",
"only a force magnitude",
"a force and a moment",
"only a moment"
],
"e": "Roller/frictionless contact and two-force members: one force magnitude. Hinge: two components. Fixed/built-in support: two components and a moment. Cable or muscle: tension magnitude only."
},
{
"ch": 5,
"t": "mc",
"q": "Which statement about Newton's second law is correct?",
"o": [
"F = ma: the acceleration is in the direction of the net force and inversely proportional to mass",
"a body at rest needs a net force to stay at rest",
"forces always come in unequal pairs",
"mass is a vector"
],
"e": "Net force = mass × acceleration (F and a are vectors; mass is a scalar measure of inertia)."
},
{
"ch": 5,
"t": "mc",
"q": "The primary abductor muscles of the shoulder are:",
"o": [
"the middle deltoid and the supraspinatus",
"the latissimus dorsi and teres major",
"the pectoralis major (sternal) and coracobrachialis",
"the biceps and triceps"
],
"e": "Abductors: middle deltoid, supraspinatus. Adductors: pectoralis major (sternal), latissimus dorsi, teres major. Flexors include the anterior deltoid and coracobrachialis."
},
{
"ch": 5,
"t": "mc",
"q": "The biceps brachii is a powerful elbow flexor, especially in the supinated position, and the strongest elbow flexor is the:",
"o": [
"brachialis",
"triceps brachii",
"anconeus",
"pronator quadratus"
],
"e": "The brachialis flexes the elbow regardless of forearm orientation. The triceps brachii is the main extensor; the pronator quadratus and supinator move the forearm."
},
{
"ch": 5,
"t": "mc",
"q": "How many vertebrae are in the cervical, thoracic and lumbar regions respectively?",
"o": [
"7, 12 and 5",
"12, 7 and 5",
"5, 12 and 7",
"7, 5 and 12"
],
"e": "C1–C7, T1–T12, L1–L5 (24 movable vertebrae), then the sacrum (five fused vertebrae) and coccyx."
},
{
"ch": 5,
"t": "mc",
"q": "The normal curves of the spine are:",
"o": [
"cervical lordotic, thoracic kyphotic, lumbar lordotic, sacral kyphotic",
"all kyphotic",
"all lordotic",
"cervical kyphotic, thoracic lordotic"
],
"e": "Lordosis = inward (anterior convex) curve in the neck and lower back; kyphosis = outward curve in the upper back and pelvic (sacral) area."
},
{
"ch": 5,
"t": "mc",
"q": "Scoliosis is:",
"o": [
"an abnormal lateral curvature of the spine accompanied by twisting",
"an excessive posterior curvature of the thoracic spine",
"an excessive anterior curvature of the lumbar spine",
"a fracture of the sacrum"
],
"e": "Kyphosis = excessive thoracic (posterior) curvature (e.g. osteoporosis); lordosis (swayback) = excessive lumbar curvature."
},
{
"ch": 5,
"t": "tf",
"q": "Loads that contribute to spinal compression include body weight, tension in the spinal ligaments and muscles, intra-abdominal pressure and any applied external loads.",
"a": true,
"e": "True. This is why holding a load far from the trunk (a long moment arm) increases the erector-spinae tension and the compression of the lumbar discs enormously."
},
{
"ch": 5,
"t": "mc",
"q": "The primary hip abductors are:",
"o": [
"the gluteus medius and gluteus minimus",
"the adductor longus and gracilis",
"the biceps femoris and semitendinosus",
"the iliacus and psoas major"
],
"e": "Abductors: gluteus medius, minimus. Adductors: adductor longus/brevis/magnus, gracilis. Extensors: gluteus maximus and hamstrings. Flexors: iliacus, psoas major, pectineus, rectus femoris, sartorius, tensor fascia latae."
},
{
"ch": 5,
"t": "mc",
"q": "The hip bone (os coxae) is formed by the fusion of:",
"o": [
"the ilium, ischium and pubis",
"the sacrum, coccyx and femur",
"the ilium and sacrum only",
"the pubis and femur"
],
"e": "The ilium, ischium and pubis join to form the acetabulum, the deep socket for the femoral head."
},
{
"ch": 5,
"t": "mc",
"q": "The quadriceps group consists of:",
"o": [
"rectus femoris, vastus lateralis, vastus medialis and vastus intermedius",
"biceps femoris, semitendinosus and semimembranosus",
"gastrocnemius and soleus",
"gluteus maximus, medius and minimus"
],
"e": "The three-muscle hamstring group (biceps femoris, semitendinosus, semimembranosus) flexes the knee; the four-muscle quadriceps extends it."
},
{
"ch": 5,
"t": "tf",
"q": "A patellectomy (removal of the patella) decreases the knee extension force by about 30 %.",
"a": true,
"e": "True (slide): the patella increases the extension lever arm of the quadriceps; without it the extension force drops by roughly 30 %."
},
{
"ch": 5,
"t": "mc",
"q": "'Jumper's knee' refers to:",
"o": [
"tendinitis of the patellar tendon",
"a tear of the anterior cruciate ligament",
"osteoarthritis of the hip",
"a meniscus tear only"
],
"e": "Overuse of the patellar tendon in jumping sports strains and inflames it. Chondromalacia patellae is softening of the cartilage under the kneecap."
},
{
"ch": 5,
"t": "mc",
"q": "Which knee ligament is more easily injured by a blow to the outer side of the knee?",
"o": [
"the medial collateral ligament",
"the lateral collateral ligament",
"the patellar ligament",
"the Achilles tendon"
],
"e": "A blow to the lateral side stretches and tears the ligament on the inner (medial) side — frequent in football and hockey."
},
{
"ch": 5,
"t": "mc",
"q": "The most important plantar flexors of the ankle are:",
"o": [
"the gastrocnemius and soleus, acting through the Achilles tendon",
"the tibialis anterior and extensor digitorum longus",
"the peroneus tertius only",
"the quadriceps"
],
"e": "Gastrocnemius and soleus (posterior compartment) attach to the calcaneus via the Achilles tendon. Tibialis anterior and the long extensors are dorsiflexors."
},
{
"ch": 5,
"t": "num",
"q": "Slide example (elbow): a 15 N forearm and hand are held horizontal. The muscle (biceps and brachioradialis) has a moment arm of 5 cm and the forearm/hand weight a moment arm of 15 cm about the elbow. Find the muscle force F_m.",
"a": 45.0,
"tol": 0.225,
"u": "N",
"tolPct": 0.5,
"e": "ΣM_O = 0: F_m (0.05) = 15 (0.15) ⇒ F_m = 45 N — three times the weight, because the weight's lever arm is three times the muscle's."
},
{
"ch": 5,
"t": "num",
"q": "For the same arm (F_m = 45 N up, weight 15 N down) find the magnitude of the elbow joint reaction force.",
"a": 30.0,
"tol": 0.15,
"u": "N",
"tolPct": 0.5,
"e": "ΣF_y = 0: F_m − W − R = 0 ⇒ R = 45 − 15 = 30 N (directed downward on the forearm)."
},
{
"ch": 5,
"t": "num",
"q": "Slide example 3: a 5.0 kg ball is held in the hand with the arm horizontal. The biceps (vertical line of pull) attaches 5.0 cm from the elbow; the 2.0 kg forearm and hand have their centre of gravity 15 cm from the elbow and the ball is 35 cm from the elbow. Find the biceps force. (g = 9.8 m/s²)",
"a": 401.8,
"tol": 2.009,
"u": "N",
"tolPct": 0.5,
"e": "ΣM_elbow = 0: F(0.05) = 2.0(9.8)(0.15) + 5.0(9.8)(0.35) = 2.94 + 17.15 = 20.09 N·m ⇒ F = 401.8 N (about 400 N — roughly 6 times the 68.6 N of the combined weights).\nIf the forearm is raised to 45° with the muscle still vertical, every moment arm (including the muscle's 5 cm) is multiplied by cos 45°, so the biceps force is unchanged: 401.8 N."
},
{
"ch": 5,
"t": "num",
"q": "Slide example (shoulder): with the arm straight out horizontally, the upper arm (20 N) has its centre of gravity 15 cm from the shoulder joint and the forearm/hand (15 N) has its centre of gravity 30 cm from the joint. Find the moment of the arm weights about the shoulder, in N·m.",
"a": 7.5,
"tol": 0.0375,
"u": "N·m",
"tolPct": 0.5,
"e": "M = 20(0.15) + 15(0.30) = 3 + 4.5 = 7.5 N·m (the deltoid and supraspinatus must supply an equal counter-moment)."
},
{
"ch": 5,
"t": "num",
"q": "Slide example (spine, lifting): about the L5–S1 joint centre the weights act at horizontal distances of 10 cm (trunk, 328 N), 20 cm (arms, 81 N), 25 cm (head, 58 N) and 40 cm (box, 111 N). Find the erector spinae tension if its moment arm is 6 cm.",
"a": 1798.333333,
"tol": 8.992,
"u": "N",
"tolPct": 0.5,
"e": "Moment of the weights: 328(0.10) + 81(0.20) + 58(0.25) + 111(0.40) = 32.8 + 16.2 + 14.5 + 44.4 = 107.9 N·m.\nT = 107.9/0.06 = 1798 N — about 1800 N for a 111 N box: lumbar muscle forces are many times the load handled."
},
{
"ch": 5,
"t": "num",
"q": "Slide example (spine): a man holds W₁ = 10 N. His upper-body weight W = 500 N acts at c = 8 cm and W₁ at b = 30 cm from the centre of rotation; the muscle moment arm is a = 5 cm. Find the muscle tension.",
"a": 860.0,
"tol": 4.3,
"u": "N",
"tolPct": 0.5,
"e": "a T = W c + W₁ b ⇒ T = (500 × 0.08 + 10 × 0.30)/0.05 = (40 + 3)/0.05 = 860 N."
},
{
"ch": 5,
"t": "num",
"q": "For the same man the muscle tension (860 N) and the joint compressive force are parallel and act along the spine, at θ = 30° from the vertical. Find the compressive force on the joint: F_J = T + (W + W₁) cos θ.",
"a": 1301.672956,
"tol": 6.508,
"u": "N",
"tolPct": 0.5,
"e": "The components of the weights along the spine are (W + W₁)cos θ = 510 cos 30° = 441.7 N, which add to the muscle tension:\nF_J = 860 + 441.7 = 1302 N. The perpendicular (shear) component is (W + W₁)sin 30° = 255 N."
},
{
"ch": 5,
"t": "num",
"q": "Slide/textbook example (knee, weight boot): a = 12 cm, b = 22 cm, c = 50 cm, W₁ = 150 N, W₀ = 100 N; the quadriceps force makes α = 15° with the tibia and the tibia makes β = 45° with the horizontal. Using F_M = (bW₁ + cW₀)cos β/(a sin α), find F_M.",
"a": 1889.668475,
"tol": 18.9,
"u": "N",
"tolPct": 1,
"e": "ΣM_O = 0: F_M a sin α = (bW₁ + cW₀) cos β = 83 × 0.7071 = 58.69 N·m ⇒ F_M = 58.69/(0.12 × 0.2588) = 1890 N.\n(The textbook prints 1956 N for this example, about 3.5 % higher; applying its own equilibrium equation to the stated data gives 1890 N, so use the equation rather than the printed figure.)"
},
{
"ch": 5,
"t": "num",
"q": "Continuing the knee example (F_M ≈ 1890 N at α + β = 60° to the horizontal; leg + boot weight 250 N): find the magnitude of the tibiofemoral joint reaction force F_J.",
"a": 1677.82493,
"tol": 25.17,
"u": "N",
"tolPct": 1.5,
"e": "F_Mx = F_M cos 60° = 944.8 N, F_My = F_M sin 60° = 1637 N.\nF_Jx = −944.8 N, F_Jy = W₁ + W₀ − F_My = 250 − 1637 = −1387 N ⇒ F_J = 1678 N, at 55.73° to the horizontal (book: ≈ 1744 N, 56°)."
},
{
"ch": 5,
"t": "num",
"q": "Slide/textbook example (hip, single-leg stance, free-body diagram of the leg): a = 0.05h, b = 0.20h, c = 0.52h, α = 45°, β = 80°, θ = 70°, W₁ = 0.17W. Using F_M = [(cW + bW₁)cos β − a(W + W₁)cos α]/[a sin(θ − α)], find F_M in multiples of the body weight W.",
"a": 2.595029543,
"tol": 0.02595,
"u": "× W",
"tolPct": 1,
"e": "Numerator: (0.52 + 0.20 × 0.17) cos 80° − 0.05(1.17) cos 45° = 0.554 × 0.1736 − 0.0414 = 0.05484.\nDenominator: 0.05 sin 25° = 0.02113. F_M = 2.595 W (book: 2.6 W ✓)."
},
{
"ch": 5,
"t": "num",
"q": "For the same single-leg stance (F_M = 2.6 W at θ = 70°; leg weight W₁ = 0.17 W; ground reaction W) find the hip joint reaction force F_J in multiples of W (F_Jx = F_M cos θ, F_Jy = F_M sin θ + W − W₁).",
"a": 3.386892132,
"tol": 0.03387,
"u": "× W",
"tolPct": 1,
"e": "F_Jx = 0.8876 W; F_Jy = 2.439 + 1 − 0.17 = 3.269 W.\nF_J = 3.387 W at 74.81° to the horizontal (book: 3.4 W, 74.8° ✓)."
}
];
