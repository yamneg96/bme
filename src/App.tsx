import { useState } from "react"
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Moon,
  Sparkles,
  Sun,
  Telescope,
  type LucideIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useTheme } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

type Exam = {
  id: string
  subject: string
  title: string
  blurb: string
  href: string
  badge: string
  icon: LucideIcon
  accent: string
}

const EXAMS: Exam[] = [
  {
    id: "economics-1-3",
    subject: "Introduction to Economics",
    title: "Chapters 1–3",
    blurb: "Basics, demand & supply, consumer behaviour.",
    href: "/economics-quiz/home.html",
    badge: "Warm-up",
    icon: BookOpen,
    accent: "from-teal-500 to-emerald-500",
  },
  {
    id: "economics-all",
    subject: "Introduction to Economics",
    title: "Full exam · all 6 chapters",
    blurb: "The whole module, timed at 1:30 per question by default.",
    href: "/economics-quiz/all.html",
    badge: "Full paper",
    icon: GraduationCap,
    accent: "from-indigo-500 to-violet-500",
  },
  {
    id: "optics-1-30",
    subject: "Basic Optics",
    title: "Slides 1–30",
    blurb: "35 questions on the first part of the slides.",
    href: "/optics-quiz/index.html",
    badge: "Warm-up",
    icon: Telescope,
    accent: "from-amber-500 to-orange-500",
  },
  {
    id: "optics-all",
    subject: "Basic Optics",
    title: "Full exam · slides 1–100",
    blurb: "111 questions covering every slide.",
    href: "/optics-quiz/all.html",
    badge: "Full paper",
    icon: Sparkles,
    accent: "from-rose-500 to-pink-500",
  },
]

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const dark =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  return (
    <Button
      variant="outline"
      size="icon"
      aria-label="Toggle light / dark theme"
      onClick={() => setTheme(dark ? "light" : "dark")}
      className="absolute top-4 right-4 z-20 rounded-full backdrop-blur"
    >
      {dark ? <Sun /> : <Moon />}
    </Button>
  )
}

export function App() {
  const [chosen, setChosen] = useState<string | null>(null)

  const open = (exam: Exam) => {
    if (chosen) return
    setChosen(exam.id)
    // let the exit animation play, then go to the exam's own URL
    setTimeout(() => window.location.assign(exam.href), 450)
  }

  return (
    <div className="relative isolate min-h-svh overflow-hidden bg-background">
      {/* animated background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="grid-bg absolute inset-0" />
        <div className="blob absolute -top-32 -left-24 size-[28rem] rounded-full bg-indigo-500/30 blur-3xl" />
        <div
          className="blob absolute top-1/3 -right-32 size-[30rem] rounded-full bg-teal-500/25 blur-3xl"
          style={{ animationDelay: "-6s" }}
        />
        <div
          className="blob absolute -bottom-40 left-1/4 size-[26rem] rounded-full bg-amber-500/20 blur-3xl"
          style={{ animationDelay: "-12s" }}
        />
      </div>

      <ThemeToggle />

      <main
        className={cn(
          "mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-4 py-16",
          chosen && "leaving"
        )}
      >
        <header className="text-center">
          <p
            className="fade-up mx-auto inline-flex items-center gap-2 rounded-full border bg-background/60 px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground uppercase backdrop-blur"
            style={{ animationDelay: "0.05s" }}
          >
            <Sparkles className="size-3.5" /> Exam practice hub
          </p>
          <h1
            className="fade-up mt-5 text-4xl font-bold tracking-tight sm:text-6xl"
            style={{ animationDelay: "0.15s" }}
          >
            Which exam are you{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-teal-500 to-amber-500 bg-clip-text text-transparent">
              working on today?
            </span>
          </h1>
          <p
            className="fade-up mx-auto mt-4 max-w-xl text-muted-foreground"
            style={{ animationDelay: "0.25s" }}
          >
            Pick a paper below and you&apos;ll go straight to it. Your progress
            is saved in this browser.
          </p>
        </header>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {EXAMS.map((exam, i) => {
            const Icon = exam.icon
            const active = chosen === exam.id
            return (
              <li
                key={exam.id}
                className="fade-up"
                style={{ animationDelay: `${0.35 + i * 0.1}s` }}
              >
                <a
                  href={exam.href}
                  onClick={(e) => {
                    e.preventDefault()
                    open(exam)
                  }}
                  className="group block h-full rounded-2xl outline-none focus-visible:ring-3 focus-visible:ring-ring/60"
                >
                  <Card
                    className={cn(
                      "relative h-full gap-3 overflow-hidden bg-card/70 p-6 backdrop-blur transition duration-300",
                      "group-hover:-translate-y-1.5 group-hover:shadow-xl group-active:scale-[0.98]",
                      active && "scale-105 ring-2 ring-primary"
                    )}
                  >
                    <div
                      aria-hidden
                      className={cn(
                        "absolute inset-x-0 top-0 h-1 bg-gradient-to-r opacity-80 transition-all duration-300 group-hover:h-1.5",
                        exam.accent
                      )}
                    />
                    <div className="flex items-start justify-between">
                      <span
                        className={cn(
                          "inline-flex size-11 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6",
                          exam.accent
                        )}
                      >
                        <Icon className="size-5" />
                      </span>
                      <span className="rounded-full border px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                        {exam.badge}
                      </span>
                    </div>
                    <div>
                      <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                        {exam.subject}
                      </p>
                      <h2 className="mt-1 text-xl font-semibold">
                        {exam.title}
                      </h2>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {exam.blurb}
                      </p>
                    </div>
                    <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium">
                      {active ? "Opening…" : "Start this exam"}
                      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </span>
                  </Card>
                </a>
              </li>
            )
          })}
        </ul>
      </main>
    </div>
  )
}

export default App
