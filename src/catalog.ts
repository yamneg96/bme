import {
  Activity,
  BookOpen,
  Calculator,
  Stethoscope,
  Telescope,
  Zap,
  type LucideIcon,
} from "lucide-react"

/** One page a student can open: an exam, revision notes or solved problems. */
export type Item = {
  id: string
  kind: "exam" | "notes" | "problems"
  title: string
  blurb: string
  href: string
  badge?: string
  group?: string
}

/** A lecture deck (Med): its own notes section and its own exam chapter. */
export type Deck = {
  id: string
  group: string
  title: string
  blurb: string
  notesHref: string
  examHref: string
  diagramsHref?: string
}

export type Category = {
  id: string
  name: string
  tagline: string
  blurb: string
  icon: LucideIcon
  accent: string
  groups?: { id: string; name: string }[]
  items: Item[]
  decks?: Deck[]
}

const practice = "mode=practice&marking=instant"

export const MED_GROUPS = [
  { id: "micro", name: "Microbiology & Infection" },
  { id: "path", name: "Pathology" },
  { id: "phys", name: "Physiology" },
]

const microDecks: [string, string, string][] = [
  ["Introduction to Microbiology (2026 lecture 1)", "Scope of microbiology, history, classification and bacterial structure.", "micro-1"],
  ["General Microbiology: slides 1–33", "Branches, cell types compared, history and Koch's postulates.", "micro-2"],
  ["General Microbiology: slides 34–82", "Classification, growth requirements and curve, oxygen needs and genetics.", "micro-3"],
  ["Microbial growth, survival & death", "The four phases of the growth curve, death and generation time.", "micro-4"],
  ["Cultivation of microorganisms & normal flora", "Nutrition, culture media, temperature and oxygen classes, normal flora.", "micro-5"],
  ["Overview of virology", "Virus structure, Baltimore classification, replication, immunity and antivirals.", "micro-6"],
  ["Principles of infection prevention", "Chain of infection, standard and transmission-based precautions, AMR.", "micro-7"],
  ["Sterilization & disinfection", "Autoclave, hot-air oven, radiation, filtration and chemical agents.", "micro-8"],
  ["Overview of parasitology", "Protozoa, helminths, hosts, vectors, transmission and life cycles.", "micro-9"],
  ["Overview of mycology", "Fungal structure, spores, mycoses, virulence and host defence.", "micro-10"],
]
const pathDecks: [string, string, string][] = [
  ["Healing and repair", "Regeneration, fibrosis, wound healing and its complications.", "path-1"],
  ["Neoplasia", "Tumour nomenclature, biology, carcinogenesis and spread.", "path-2"],
  ["Hypersensitivity", "Types I–IV hypersensitivity reactions and examples.", "path-3"],
  ["Genetic disorders", "Mendelian, chromosomal and multifactorial disorders.", "path-4"],
  ["Pediatric diseases", "Common diseases of infancy and childhood.", "path-5"],
]

// decks that have diagram questions (on the separate diagrams page)
const DIAGRAM_DECKS = new Set(["micro-3", "micro-4", "micro-5", "micro-6", "micro-7", "micro-10", "path-2", "path-3", "path-4", "phys-1"])

const deck = (group: string, page: string, [title, blurb, id]: [string, string, string], n: number): Deck => ({
  id,
  group,
  title,
  blurb,
  notesHref: `/med-quiz/${page}-notes.html#${id}`,
  examHref: `/med-quiz/${page}.html?ch=${n}&${practice}`,
  diagramsHref: DIAGRAM_DECKS.has(id) ? `/med-quiz/${page}-diagrams.html?ch=${n}&${practice}` : undefined,
})

export const CATEGORIES: Category[] = [
  {
    id: "economics",
    name: "Economics",
    tagline: "Introduction to Economics",
    blurb: "Demand and supply, consumer behaviour, production and cost, market structure and macroeconomics.",
    icon: BookOpen,
    accent: "from-teal-500 to-emerald-500",
    items: [
      { id: "econ-1-3", kind: "exam", title: "Chapters 1–3 exam", blurb: "Basics, demand & supply, consumer behaviour.", href: "/economics-quiz/home.html", badge: "Warm-up" },
      { id: "econ-all", kind: "exam", title: "Full exam · all 6 chapters", blurb: "The whole module, timed at 1:30 per question by default.", href: "/economics-quiz/all.html", badge: "Full paper" },
    ],
  },
  {
    id: "optics",
    name: "Optics",
    tagline: "Basic Optics",
    blurb: "Light as a wave and a photon, the photoelectric effect, reflection, refraction and prisms.",
    icon: Telescope,
    accent: "from-amber-500 to-orange-500",
    items: [
      { id: "optics-30", kind: "exam", title: "Slides 1–30 exam", blurb: "35 questions on the first part of the slides.", href: "/optics-quiz/index.html", badge: "Warm-up" },
      { id: "optics-all", kind: "exam", title: "Full exam · slides 1–100", blurb: "111 questions covering every slide.", href: "/optics-quiz/all.html", badge: "Full paper" },
    ],
  },
  {
    id: "emd",
    name: "Electromagnetics",
    tagline: "Elements of Electromagnetics (EMD)",
    blurb: "Vector analysis, electro- and magnetostatics, waves, transmission lines, waveguides and antennas.",
    icon: Zap,
    accent: "from-yellow-500 to-amber-500",
    items: [
      { id: "emd-1-8", kind: "exam", title: "Chapters 1–8 exam", blurb: "Vectors, electrostatics and magnetostatics with worked workouts.", href: "/emd-quiz/home.html", badge: "Workouts" },
      { id: "emd-all", kind: "exam", title: "Full exam · all 15 chapters", blurb: "Adds Maxwell, waves, transmission lines, waveguides and antennas.", href: "/emd-quiz/all.html", badge: "Full paper" },
      { id: "emd-s7", kind: "exam", title: "Sadiku 7th edition questions", blurb: "Review questions with the book's answers, problems and calculus workouts.", href: "/emd-quiz/sadiku7.html", badge: "New book" },
      { id: "emd-learn", kind: "notes", title: "Revise: worked examples", blurb: "24 topics with key formulas and 53 worked examples.", href: "/emd-quiz/learn.html", badge: "Notes" },
    ],
  },
  {
    id: "computational",
    name: "Computational Methods",
    tagline: "Numerical methods for engineers",
    blurb: "Numerical analysis, error analysis, Taylor series, finite differences and root finding.",
    icon: Calculator,
    accent: "from-fuchsia-500 to-purple-500",
    items: [
      { id: "comp-1-2", kind: "exam", title: "Chapters 1–2 exam", blurb: "Numerical analysis, errors, Taylor series and finite differences.", href: "/computational-quiz/home.html", badge: "Workouts" },
      { id: "comp-all", kind: "exam", title: "Full exam · with root finding", blurb: "Adds bisection, false position and Newton–Raphson.", href: "/computational-quiz/all.html", badge: "Full paper" },
      { id: "comp-stud", kind: "notes", title: "Study route: guide, notes & revision", blurb: "19 topics step by step, summary notes, flashcards and the best free videos and books.", href: "/compute-stud/", badge: "Study guide" },
      { id: "comp-learn", kind: "notes", title: "Revise: worked examples", blurb: "11 topics with key formulas and 22 worked examples.", href: "/computational-quiz/learn.html", badge: "Notes" },
    ],
  },
  {
    id: "biomechanics",
    name: "Biomechanics",
    tagline: "Fundamentals of Biomechanics",
    blurb: "Forces, moments and equilibrium, then the statics of the elbow, shoulder, neck, spine, hip, knee and ankle.",
    icon: Activity,
    accent: "from-red-500 to-orange-500",
    items: [
      { id: "bio-5", kind: "exam", title: "Chapter 5 · applications of statics", blurb: "The joints, matching the course slides, with worked problems and diagrams.", href: "/biomechanics-quiz/home.html", badge: "Workouts" },
      { id: "bio-all", kind: "exam", title: "Full exam · chapters 1–5", blurb: "Units, forces, moments and equilibrium, then the joints.", href: "/biomechanics-quiz/all.html", badge: "Full paper" },
      { id: "bio-learn", kind: "notes", title: "Revise: worked examples", blurb: "20 topics with key formulas and 37 worked examples.", href: "/biomechanics-quiz/learn.html", badge: "Notes" },
      { id: "bio-problems", kind: "problems", title: "Book problems solved", blurb: "63 textbook and slide problems with diagrams and step-by-step solutions.", href: "/biomechanics-quiz/problems.html", badge: "Repeated questions" },
    ],
  },
  {
    id: "med",
    name: "Med",
    tagline: "Medical sciences lecture decks",
    blurb: "Microbiology and infection control, pathology and physiology — an exam and short notes for every lecture deck.",
    icon: Stethoscope,
    accent: "from-sky-500 to-blue-600",
    groups: MED_GROUPS,
    items: [
      { id: "med-micro-exam", kind: "exam", group: "micro", title: "Microbiology & Infection · full exam", blurb: "All ten microbiology decks in one exam.", href: `/med-quiz/micro.html?${practice}`, badge: "Full paper" },
      { id: "med-micro-notes", kind: "notes", group: "micro", title: "Microbiology & Infection · notes", blurb: "Short notes for every microbiology deck.", href: "/med-quiz/micro-notes.html", badge: "Notes" },
      { id: "med-micro-diagrams", kind: "exam", group: "micro", title: "Microbiology & Infection · diagram questions", blurb: "28 questions on growth curves, virus structure, oxygen tubes, shapes and more.", href: `/med-quiz/micro-diagrams.html?${practice}`, badge: "Diagrams" },
      { id: "med-path-exam", kind: "exam", group: "path", title: "Pathology · full exam", blurb: "Healing, neoplasia, hypersensitivity, genetic and pediatric diseases.", href: `/med-quiz/pathology.html?${practice}`, badge: "Full paper" },
      { id: "med-path-notes", kind: "notes", group: "path", title: "Pathology · notes", blurb: "Short notes for every pathology deck.", href: "/med-quiz/pathology-notes.html", badge: "Notes" },
      { id: "med-path-diagrams", kind: "exam", group: "path", title: "Pathology · diagram questions", blurb: "14 questions on the cell cycle, pedigrees and hypersensitivity types.", href: `/med-quiz/pathology-diagrams.html?${practice}`, badge: "Diagrams" },
      { id: "med-phys-exam", kind: "exam", group: "phys", title: "Circulatory system · exam", blurb: "Blood, heart, vessels, fetal circulation and lymphatics.", href: `/med-quiz/physiology.html?${practice}`, badge: "Full paper" },
      { id: "med-phys-notes", kind: "notes", group: "phys", title: "Circulatory system · notes", blurb: "Short notes on the circulatory system.", href: "/med-quiz/physiology-notes.html", badge: "Notes" },
      { id: "med-phys-diagrams", kind: "exam", group: "phys", title: "Circulatory system · diagram questions", blurb: "19 questions on heart chambers and valves, fetal circulation, vessel walls and capillaries.", href: `/med-quiz/physiology-diagrams.html?${practice}`, badge: "Diagrams" },
    ],
    decks: [
      ...microDecks.map((d, i) => deck("micro", "micro", d, i + 1)),
      ...pathDecks.map((d, i) => deck("path", "pathology", d, i + 1)),
      deck("phys", "physiology", ["The circulatory system", "Blood, heart, vessels, major arteries and veins, fetal circulation, lymphatics.", "phys-1"], 1),
    ],
  },
]

