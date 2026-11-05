import { useCallback, useEffect, useMemo, useState } from "react"
import {
  ArrowLeft,
  ArrowRight,
  ClipboardList,
  FileText,
  GraduationCap,
  Moon,
  NotebookPen,
  Shapes,
  Sparkles,
  Sun,
  type LucideIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useTheme } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { CATEGORIES, type Category, type Deck, type Item } from "@/catalog"

const KIND: Record<Item["kind"], { label: string; icon: LucideIcon }> = {
  exam: { label: "Exam", icon: GraduationCap },
  notes: { label: "Notes", icon: NotebookPen },
  problems: { label: "Solved problems", icon: ClipboardList },
}

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

/** Category + group selection lives in the URL (?c=med&g=micro) so Back/Forward work. */
function useRoute() {
  const read = () => {
    const p = new URLSearchParams(window.location.search)
    return { c: p.get("c"), g: p.get("g") ?? "all" }
  }
  const [route, setRoute] = useState(read)
  useEffect(() => {
    const onPop = () => setRoute(read())
    window.addEventListener("popstate", onPop)
    return () => window.removeEventListener("popstate", onPop)
  }, [])
  const go = useCallback((c: string | null, g = "all", replace = false) => {
    const qs = new URLSearchParams()
    if (c) qs.set("c", c)
    if (c && g !== "all") qs.set("g", g)
    const url = window.location.pathname + (qs.toString() ? `?${qs}` : "")
    if (replace) window.history.replaceState(null, "", url)
    else window.history.pushState(null, "", url)
    setRoute({ c, g })
    window.scrollTo({ top: 0 })
  }, [])
  return { route, go }
}

const prefetch = (href: string) => {
  const url = href.split("#")[0]
  if (document.head.querySelector(`link[rel="prefetch"][href="${url}"]`)) return
  const l = document.createElement("link")
  l.rel = "prefetch"
  l.href = url
  document.head.appendChild(l)
}

function badges(c: Category): string[] {
  const plural = (n: number, w: string) => `${n} ${w}${n === 1 ? "" : "s"}`
  const out: string[] = []
  const exams = c.items.filter((i) => i.kind === "exam").length
  const notes = c.items.filter((i) => i.kind === "notes").length
  const extra = c.items.filter((i) => i.kind === "problems").length
  if (c.decks?.length) out.push(plural(c.decks.length, "lecture deck"))
  else {
    out.push(plural(exams, "exam"))
    if (notes) out.push(plural(notes, "notes set").replace("notes sets", "notes sets"))
    if (extra) out.push("solved problems")
  }
  return out
}

export function App() {
  const { route, go } = useRoute()
  const [leaving, setLeaving] = useState(false)
  const category = useMemo(() => CATEGORIES.find((c) => c.id === route.c) ?? null, [route.c])

  // Back from an exam page can restore this page from the bfcache in its "leaving" state.
  useEffect(() => {
    const reset = () => setLeaving(false)
    window.addEventListener("pageshow", reset)
    return () => window.removeEventListener("pageshow", reset)
  }, [])

  // Unknown ?c= falls back to the landing page.
  useEffect(() => {
    if (route.c && !category) go(null, "all", true)
  }, [route.c, category, go])

  const open = (href: string) => {
    if (leaving) return
    setLeaving(true)
    setTimeout(() => window.location.assign(href), 400)
  }

  const link: LinkFn = (href: string) => ({
    href,
    onPointerEnter: () => prefetch(href),
    onFocus: () => prefetch(href),
    onClick: (e: React.MouseEvent) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey) return
      e.preventDefault()
      open(href)
    },
  })

  return (
    <div className="relative isolate min-h-svh overflow-hidden bg-background">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="grid-bg absolute inset-0" />
        <div className="blob absolute -top-32 -left-24 size-[28rem] rounded-full bg-indigo-500/30 blur-3xl" />
        <div className="blob absolute top-1/3 -right-32 size-[30rem] rounded-full bg-teal-500/25 blur-3xl" style={{ animationDelay: "-6s" }} />
        <div className="blob absolute -bottom-40 left-1/4 size-[26rem] rounded-full bg-amber-500/20 blur-3xl" style={{ animationDelay: "-12s" }} />
      </div>

      <ThemeToggle />

      <main className={cn("mx-auto min-h-svh max-w-5xl px-4 py-16", leaving && "leaving")}>
        {category ? (
          <CategoryView category={category} group={route.g} go={go} link={link} />
        ) : (
          <Landing go={go} />
        )}
      </main>
    </div>
  )
}

function Landing({ go }: { go: (c: string | null, g?: string) => void }) {
  return (
    <div className="flex min-h-[calc(100svh-8rem)] flex-col justify-center">
      <header className="text-center">
        <p className="fade-up mx-auto inline-flex items-center gap-2 rounded-full border bg-background/60 px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground uppercase backdrop-blur" style={{ animationDelay: "0.05s" }}>
          <Sparkles className="size-3.5" /> Study hub
        </p>
        <h1 className="fade-up mt-5 text-4xl font-bold tracking-tight sm:text-6xl" style={{ animationDelay: "0.15s" }}>
          What are you{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-teal-500 to-amber-500 bg-clip-text text-transparent">
            studying today?
          </span>
        </h1>
        <p className="fade-up mx-auto mt-4 max-w-xl text-muted-foreground" style={{ animationDelay: "0.25s" }}>
          Choose a subject. You&apos;ll see its exams and short notes. Your progress is saved in this browser.
        </p>
      </header>

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map((c, i) => {
          const Icon = c.icon
          const tags = badges(c)
          return (
            <li key={c.id} className="fade-up" style={{ animationDelay: `${0.35 + i * 0.08}s` }}>
              <a
                href={`?c=${c.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  go(c.id)
                }}
                className="group block h-full rounded-2xl outline-none focus-visible:ring-3 focus-visible:ring-ring/60"
              >
                <Card className="relative h-full gap-3 overflow-hidden bg-card/70 p-6 backdrop-blur transition duration-300 group-hover:-translate-y-1.5 group-hover:shadow-xl group-active:scale-[0.98]">
                  <div aria-hidden className={cn("absolute inset-x-0 top-0 h-1 bg-gradient-to-r opacity-80 transition-all duration-300 group-hover:h-1.5", c.accent)} />
                  <span className={cn("inline-flex size-11 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6", c.accent)}>
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <h2 className="text-xl font-semibold">{c.name}</h2>
                    <p className="mt-0.5 text-xs font-medium tracking-wide text-muted-foreground uppercase">{c.tagline}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{c.blurb}</p>
                  </div>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="flex gap-1.5 text-xs">
                      {tags.map((t) => (
                        <span key={t} className="rounded-full border px-2.5 py-0.5 font-medium text-muted-foreground">{t}</span>
                      ))}
                    </span>
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </div>
                </Card>
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

type LinkProps = {
  href: string
  onPointerEnter: () => void
  onFocus: () => void
  onClick: (e: React.MouseEvent) => void
}
type LinkFn = (href: string) => LinkProps

function CategoryView({
  category,
  group,
  go,
  link,
}: {
  category: Category
  group: string
  go: (c: string | null, g?: string) => void
  link: LinkFn
}) {
  const Icon = category.icon
  const items = category.items.filter((i) => group === "all" || !i.group || i.group === group)
  const exams = items.filter((i) => i.kind === "exam")
  const notes = items.filter((i) => i.kind !== "exam")
  const decks = (category.decks ?? []).filter((d) => group === "all" || d.group === group)
  const groupName = (id: string) => category.groups?.find((g) => g.id === id)?.name ?? id

  return (
    <div>
      <button
        type="button"
        onClick={() => go(null)}
        className="fade-up inline-flex items-center gap-1.5 rounded-full border bg-background/60 px-3 py-1.5 text-sm font-medium backdrop-blur transition hover:bg-accent"
      >
        <ArrowLeft className="size-4" /> All subjects
      </button>

      <header className="fade-up mt-6 flex flex-wrap items-center gap-4" style={{ animationDelay: "0.08s" }}>
        <span className={cn("inline-flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg", category.accent)}>
          <Icon className="size-7" />
        </span>
        <div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">{category.name}</h1>
          <p className="mt-1 max-w-2xl text-muted-foreground">{category.blurb}</p>
        </div>
      </header>

      {category.groups && (
        <div className="fade-up mt-8 flex flex-wrap items-center gap-2" style={{ animationDelay: "0.14s" }} role="group" aria-label="Filter by topic">
          {[{ id: "all", name: "All topics" }, ...category.groups].map((g) => (
            <button
              key={g.id}
              type="button"
              onClick={() => go(category.id, g.id)}
              aria-pressed={group === g.id}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm font-medium transition",
                group === g.id ? "border-transparent bg-primary text-primary-foreground shadow" : "bg-background/60 hover:bg-accent"
              )}
            >
              {g.name}
            </button>
          ))}
        </div>
      )}

      <Section title="Exams" icon={GraduationCap} delay={0.2}>
        {exams.map((it, i) => (
          <ItemCard key={it.id} item={it} link={link} delay={0.24 + i * 0.06} accent={category.accent} />
        ))}
      </Section>

      {notes.length > 0 && (
        <Section title="Notes & worked examples" icon={FileText} delay={0.3}>
          {notes.map((it, i) => (
            <ItemCard key={it.id} item={it} link={link} delay={0.34 + i * 0.06} accent={category.accent} />
          ))}
        </Section>
      )}

      {decks.length > 0 && (
        <section className="fade-up mt-12" style={{ animationDelay: "0.4s" }}>
          <h2 className="flex items-center gap-2 text-xl font-semibold"><NotebookPen className="size-5" /> Lecture decks</h2>
          <p className="mt-1 text-sm text-muted-foreground">Open a deck&apos;s short notes, or practise just that deck.</p>
          {(group === "all" ? category.groups ?? [] : (category.groups ?? []).filter((g) => g.id === group)).map((g) => {
            const list = decks.filter((d) => d.group === g.id)
            if (!list.length) return null
            return (
              <div key={g.id} className="mt-6">
                <h3 className="mb-2 text-sm font-semibold tracking-wide text-muted-foreground uppercase">{groupName(g.id)}</h3>
                <ul className="grid gap-2">
                  {list.map((d) => (
                    <DeckRow key={d.id} deck={d} link={link} />
                  ))}
                </ul>
              </div>
            )
          })}
        </section>
      )}
    </div>
  )
}

function Section({ title, icon: Icon, delay, children }: { title: string; icon: LucideIcon; delay: number; children: React.ReactNode }) {
  return (
    <section className="fade-up mt-10" style={{ animationDelay: `${delay}s` }}>
      <h2 className="flex items-center gap-2 text-xl font-semibold"><Icon className="size-5" /> {title}</h2>
      <ul className="mt-4 grid gap-4 sm:grid-cols-2">{children}</ul>
    </section>
  )
}

function ItemCard({ item, link, delay, accent }: { item: Item; link: LinkFn; delay: number; accent: string }) {
  const K = KIND[item.kind]
  return (
    <li className="fade-up" style={{ animationDelay: `${delay}s` }}>
      <a {...link(item.href)} className="group block h-full rounded-2xl outline-none focus-visible:ring-3 focus-visible:ring-ring/60">
        <Card className="relative h-full gap-2 overflow-hidden bg-card/70 p-5 backdrop-blur transition duration-300 group-hover:-translate-y-1 group-hover:shadow-lg group-active:scale-[0.98]">
          <div aria-hidden className={cn("absolute inset-x-0 top-0 h-1 bg-gradient-to-r opacity-80", accent)} />
          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wide text-muted-foreground uppercase">
              <K.icon className="size-3.5" /> {K.label}
            </span>
            {item.badge && <span className="rounded-full border px-2.5 py-0.5 text-xs font-medium text-muted-foreground">{item.badge}</span>}
          </div>
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-sm text-muted-foreground">{item.blurb}</p>
          <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium">
            Open <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </span>
        </Card>
      </a>
    </li>
  )
}

function DeckRow({ deck, link }: { deck: Deck; link: LinkFn }) {
  return (
    <li className="flex flex-wrap items-center gap-3 rounded-xl border bg-card/70 px-4 py-3 backdrop-blur">
      <div className="min-w-0 flex-1">
        <p className="font-medium">{deck.title}</p>
        <p className="text-xs text-muted-foreground">{deck.blurb}</p>
      </div>
      <div className="flex gap-2">
        <a {...link(deck.notesHref)} className="inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm font-medium transition hover:bg-accent">
          <NotebookPen className="size-3.5" /> Notes
        </a>
        {deck.diagramsHref && (
          <a {...link(deck.diagramsHref)} className="inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm font-medium transition hover:bg-accent">
            <Shapes className="size-3.5" /> Diagrams
          </a>
        )}
        <a {...link(deck.examHref)} className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground transition hover:opacity-90">
          <GraduationCap className="size-3.5" /> Exam
        </a>
      </div>
    </li>
  )
}

export default App
