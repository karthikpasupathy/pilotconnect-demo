import {
  ArrowUp,
  BrushCleaning,
  Search,
  Sparkles,
  Target,
  type LucideIcon,
} from "lucide-react";
import { HeroCopySwitcher } from "@/components/hero-copy-switcher";

type ProcessIconType = "cleanup" | "enrichment" | "layers" | "scoring";

const metrics = [
  { value: "Hidden", label: "revenue already exists inside most CRMs" },
  { value: "Messy", label: "data makes good reps work like researchers" },
  { value: "Fixable", label: "systems beat one-time cleanup every time" },
];

const process = [
  {
    id: "cleanup",
    icon: "cleanup" as ProcessIconType,
    title: "Diagnose the mess",
    body: "We start with the real question: where is your team losing time, missing context, or routing the wrong leads?",
  },
  {
    id: "enrichment",
    icon: "enrichment" as ProcessIconType,
    title: "Clean and enrich",
    body: "We fix duplicates, stale contacts, broken associations, and missing fields so the CRM becomes usable again.",
  },
  {
    id: "layers",
    icon: "layers" as ProcessIconType,
    title: "Add buying context",
    body: "We bring the research your reps already do into the system itself: contacts, accounts, signals, and useful context.",
  },
  {
    id: "scoring",
    icon: "scoring" as ProcessIconType,
    title: "Build the operating layer",
    body: "We turn cleanup into an ongoing system with scoring, prioritization, and refresh rules that match how your team sells.",
  },
];

const processIcons: Record<ProcessIconType, LucideIcon> = {
  cleanup: BrushCleaning,
  enrichment: Sparkles,
  layers: Search,
  scoring: Target,
};

const offerings = [
  "CRM cleanup and deduplication",
  "Account and contact enrichment",
  "Lead scoring and prioritization",
  "Dormant pipeline reactivation",
  "Field mapping and data structure",
  "Ongoing refresh systems",
];

const stack = [
  "Clay",
  "HubSpot",
  "Instantly",
  "LinkedIn",
  "OpenAI",
  "RB2B",
  "Octave",
  "LeadMagic",
];

const useCases = [
  {
    title: "Your reps are wasting time on bad data",
    body: "If account executives are researching every call from scratch, chasing stale contacts, or working low-fit leads, the CRM is costing revenue instead of supporting it.",
  },
  {
    title: "Your CRM cannot be trusted",
    body: "Duplicates, broken ownership, missing fields, and outdated records make reporting weaker and execution slower across sales, marketing, and RevOps.",
  },
  {
    title: "You already have pipeline hiding in the database",
    body: "The opportunity is often not more lead volume. It is better enrichment, better prioritization, and a cleaner system for acting on the demand you already have.",
  },
];

const faqs = [
  {
    question: "What problem does this solve?",
    answer:
      "Pilot Connect fixes the GTM engineering problem underneath pipeline inefficiency: stale CRM data, missing context, weak prioritization, and too much manual research before reps can act.",
  },
  {
    question: "Who is this best for?",
    answer:
      "B2B teams with an existing CRM, active pipeline, and enough lead volume that bad data is starting to waste rep time or blur decision-making.",
  },
  {
    question: "Why not just buy more leads?",
    answer:
      "Because more volume does not fix broken systems. If the current CRM is messy, adding more records often increases waste. The higher-leverage move is making the existing system usable first.",
  },
  {
    question: "Do you replace our CRM or sales process?",
    answer:
      "No. Pilot Connect strengthens the data and operating layer behind the tools your team already uses, so sales, marketing, and RevOps can perform better inside the current stack.",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <section className="mx-auto min-h-screen max-w-[1440px] px-5 pb-16 pt-5 sm:px-8 lg:px-12">
        <header className="sticky top-4 z-30 mx-auto flex max-w-7xl items-center justify-between rounded-full border border-[rgba(20,110,245,0.1)] bg-[rgba(255,255,255,0.86)] px-4 py-3 shadow-[0_10px_28px_rgba(15,23,42,0.05)] backdrop-blur-xl sm:px-6">
          <a href="#top" className="group flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[rgba(20,110,245,0.14)] bg-[linear-gradient(135deg,#146ef5,#60a5fa)] text-sm font-bold text-white shadow-[0_16px_36px_rgba(20,110,245,0.25)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:rotate-3">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-white"
              >
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5Z" />
              </svg>
            </div>
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--muted)]">
                Pilot Connect
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-[var(--muted)] lg:flex">
            <a className="transition hover:text-slate-950" href="#services">
              Solutions
            </a>
            <a className="transition hover:text-slate-950" href="#process">
              Approach
            </a>
            <a className="transition hover:text-slate-950" href="#proof">
              Problem
            </a>
            <a className="transition hover:text-slate-950" href="#use-cases">
              When to Choose
            </a>
          </nav>

          <a
            href="#contact"
            className="hidden rounded-full border border-[rgba(20,110,245,0.14)] bg-[linear-gradient(135deg,#146ef5,#60a5fa)] px-4 py-2 text-sm font-medium !text-white transition hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(20,110,245,0.24)] sm:inline-flex"
          >
            Get a free sample
          </a>
        </header>

        <div
          id="top"
          className="relative mx-auto mt-8 max-w-7xl overflow-hidden rounded-[2rem] border border-[rgba(20,110,245,0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.985),rgba(247,251,255,0.97))] px-6 py-10 shadow-[0_28px_90px_rgba(15,23,42,0.07)] sm:px-10 sm:py-14 lg:px-14 lg:py-18"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(96,165,250,0.18),transparent_24%),radial-gradient(circle_at_18%_22%,rgba(20,110,245,0.08),transparent_22%),radial-gradient(circle_at_82%_18%,rgba(96,165,250,0.08),transparent_22%)]" />
          <div className="pointer-events-none absolute inset-x-[14%] top-28 h-40 rounded-full bg-[radial-gradient(circle,rgba(96,165,250,0.14),transparent_68%)] blur-3xl" />
          <div className="pointer-events-none absolute -left-16 top-24 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(96,165,250,0.1),transparent_68%)] blur-3xl" />
          <div className="pointer-events-none absolute -right-12 bottom-10 h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(20,110,245,0.08),transparent_68%)] blur-3xl" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,transparent,rgba(20,110,245,0.035))]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 bg-[linear-gradient(90deg,transparent,rgba(20,110,245,0.025))] lg:block" />
          <div className="pointer-events-none absolute inset-[18px] rounded-[1.7rem] border border-white/70" />

          <div className="relative flex flex-col items-center text-center">
            <div className="mt-8 flex w-full justify-center">
              <HeroCopySwitcher />
            </div>
          </div>
        </div>
      </section>

      <section id="proof" className="mx-auto max-w-7xl px-5 py-6 sm:px-8 lg:px-12">
        <div className="rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(246,250,255,0.96))] px-8 py-10 shadow-[0_16px_40px_rgba(15,23,42,0.05)] sm:px-10">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
              Why it matters
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-[1.04] tracking-[-0.025em] text-[#152033] sm:text-5xl">
              The GTM engineering problem is rarely lead volume.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              It is usually bad structure, stale data, and unclear
              prioritization. When reps work around the CRM instead of through
              it, every team gets slower. The same CRM creating the drag often
              holds the clearest path to fixing it.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3 md:gap-8">
            {metrics.map((metric, index) => (
              <div key={metric.label} className="relative px-2 py-2">
                {index !== 0 ? (
                  <div className="absolute left-0 top-0 hidden h-full w-px md:block">
                    <div className="absolute left-1/2 top-1/2 h-20 w-px -translate-x-1/2 -translate-y-1/2 bg-[linear-gradient(180deg,transparent,rgba(20,110,245,0.18),transparent)]" />
                  </div>
                ) : null}
                <p className="font-serif text-5xl tracking-[-0.06em] text-[var(--accent)] sm:text-6xl">
                  {metric.value}
                </p>
                <p className="mt-4 max-w-xs text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="services"
        className="mx-auto max-w-7xl px-5 py-18 sm:px-8 lg:px-12"
      >
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
            Solutions
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.04] tracking-[-0.025em] text-[#152033] sm:text-6xl">
            How Pilot Connect solves it
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            Pilot Connect cleans the CRM, enriches the right records, and makes
            the data easier to act on. From cleanup and enrichment to scoring
            and refresh systems, each engagement is designed to help revenue
            teams work from a cleaner, more usable source of truth.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {offerings.map((item, index) => (
            <article
              key={item}
              className="group relative overflow-hidden rounded-[1.75rem] border border-[var(--line)] bg-[var(--panel)] p-6 shadow-[0_14px_34px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1.5 hover:border-[rgba(20,110,245,0.24)] hover:bg-white"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(20,110,245,0.45),transparent)] opacity-0 transition group-hover:opacity-100" />
              <p className="text-sm text-[var(--accent)]">0{index + 1}</p>
              <h3 className="mt-3 text-2xl font-medium text-slate-900">{item}</h3>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                Built for B2B teams that already have leads and tools, but need
                cleaner execution, stronger context, and clearer next actions
                inside the CRM.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="process"
        className="mx-auto max-w-7xl px-5 py-18 sm:px-8 lg:px-12"
      >
        <div>
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
              Approach
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-[1.04] tracking-[-0.025em] text-[#152033] sm:text-6xl">
              We do not start with tools. We start with the bottleneck behind
              your revenue motion.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[var(--muted)]">
              The transcript made one thing clear: the best positioning is
              consultative. We diagnose the real friction first, then build the
              cleanup and enrichment system around it.
            </p>
          </div>

          <div className="mt-10 grid gap-4 xl:grid-cols-4">
            {process.map((step, index) => (
              <article
                key={step.id}
                className="group relative overflow-hidden rounded-[1.75rem] border border-[rgba(20,110,245,0.12)] bg-[linear-gradient(180deg,rgba(246,250,255,0.98),rgba(255,255,255,0.99)_32%,rgba(255,255,255,0.99))] p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1.5 hover:border-[rgba(20,110,245,0.24)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_14%,rgba(96,165,250,0.05),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.24),transparent_20%)]" />
                <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(20,110,245,0.4),transparent)] opacity-0 transition group-hover:opacity-100" />
                <div className="relative flex items-center justify-between">
                  <span className="rounded-full border border-[rgba(20,110,245,0.14)] bg-[rgba(20,110,245,0.08)] px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-[var(--accent)] shadow-[0_0_18px_rgba(20,110,245,0.08)]">
                    Step {index + 1}
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--line)] bg-[linear-gradient(135deg,#146ef5,#60a5fa)] text-white shadow-[0_10px_30px_rgba(20,110,245,0.18)]">
                    <ProcessIcon type={step.icon} />
                  </div>
                </div>
                <h3 className="relative mt-6 text-2xl font-medium text-slate-900">
                  {step.title}
                </h3>
                <p className="relative mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
                  {step.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-18 sm:px-8 lg:px-12">
        <div className="rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(246,250,255,0.96))] px-8 py-10 shadow-[0_16px_40px_rgba(15,23,42,0.05)] sm:px-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
                Trusted tools
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-[1.04] tracking-[-0.025em] text-[#152033] sm:text-5xl">
                Built inside the stack your team already relies on.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-[var(--muted)]">
              The work is not about replacing your systems. It is about making
              the current stack more useful for the people carrying quota and
              the teams supporting them.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {stack.map((item) => (
              <div
                key={item}
                className="rounded-full border border-[rgba(20,110,245,0.16)] bg-white px-4 py-3 text-sm uppercase tracking-[0.22em] text-slate-700 shadow-[0_6px_18px_rgba(15,23,42,0.04)] transition hover:-translate-y-0.5 hover:border-[rgba(20,110,245,0.3)] hover:bg-white"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="use-cases"
        className="mx-auto max-w-7xl px-5 py-18 sm:px-8 lg:px-12"
      >
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
            When to choose Pilot Connect
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.04] tracking-[-0.025em] text-[#152033] sm:text-6xl">
            Pilot Connect is for teams that already feel the drag of messy CRM
            data.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            When data quality starts slowing down revenue, the symptoms show up
            everywhere: weaker prioritization, slower reps, noisier reporting,
            and pipeline that never gets worked properly.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {useCases.map((item) => (
            <article
              key={item.title}
              className="flex h-full flex-col rounded-[1.75rem] border border-[var(--line)] bg-[var(--panel)] p-7 shadow-[0_14px_36px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1.5 hover:border-[rgba(20,110,245,0.24)] hover:bg-white"
            >
              <h3 className="min-h-[5.5rem] font-serif text-3xl leading-[1.06] tracking-[-0.02em] text-[#152033]">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-18 sm:px-8 lg:px-12">
        <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
              FAQ
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-[1.04] tracking-[-0.025em] text-[#152033] sm:text-5xl">
              Questions teams ask before they invest in backend GTM work.
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-[1.5rem] border border-[var(--line)] bg-[var(--panel)] px-6 py-5 shadow-[0_10px_26px_rgba(15,23,42,0.04)] transition duration-300 open:border-[rgba(20,110,245,0.24)] open:bg-white"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-xl font-medium text-slate-900">
                  <span className="text-slate-900">{faq.question}</span>
                  <span className="text-2xl leading-none text-[var(--accent)] transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 pr-8 text-sm leading-7 text-[var(--muted)]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-7xl px-5 pb-10 pt-10 sm:px-8 lg:px-12"
      >
        <div className="relative overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(246,250,255,0.96))] px-8 py-12 shadow-[0_16px_40px_rgba(15,23,42,0.05)] sm:px-10 sm:py-14">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(96,165,250,0.08),transparent_45%,rgba(255,255,255,0.55))]" />
          <div className="pointer-events-none absolute -right-20 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(96,165,250,0.16),transparent_65%)] blur-2xl" />
          <div className="pointer-events-none absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_15%_20%,rgba(20,110,245,0.08),transparent_30%)]" />
          <div className="relative flex flex-col items-center text-center">
          <h2 className="relative max-w-4xl font-serif text-4xl leading-[1.04] tracking-[-0.025em] text-[#152033] sm:text-6xl">
            If your team is already feeling the cost of messy CRM data, this is
            the work to do next.
          </h2>
          <p className="relative mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Clean the system, enrich what matters, and give the team a better
            way to focus.
          </p>
          <div className="relative mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:hello@pilotconnect.co"
              className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#146ef5,#60a5fa)] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(20,110,245,0.28)]"
            >
              hello@pilotconnect.co
            </a>
            <a
              href="#top"
              className="inline-flex items-center justify-center rounded-full border border-[rgba(20,110,245,0.14)] bg-white/75 px-6 py-3.5 text-sm font-medium text-slate-700 transition hover:-translate-y-1 hover:bg-white"
            >
              Back to top
            </a>
          </div>
          </div>
        </div>
      </section>

      <div className="hidden justify-end pr-4 pb-6 lg:flex">
        <a
          href="#top"
          aria-label="Back to top"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(20,110,245,0.14)] bg-[linear-gradient(135deg,#146ef5,#60a5fa)] text-white shadow-[0_16px_40px_rgba(20,110,245,0.22)] transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(20,110,245,0.28)]"
        >
          <ArrowUp aria-hidden="true" className="h-5 w-5 text-white" strokeWidth={2.2} />
        </a>
      </div>

      <footer className="mx-auto max-w-7xl px-5 pb-12 sm:px-8 lg:px-12">
        <div className="rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,251,255,0.94))] px-8 py-8 shadow-[0_16px_40px_rgba(15,23,42,0.04)] sm:px-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-md">
              <a href="#top" className="group inline-flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[rgba(20,110,245,0.14)] bg-[linear-gradient(135deg,#146ef5,#60a5fa)] text-sm font-bold text-white shadow-[0_16px_36px_rgba(20,110,245,0.2)] transition-transform duration-300 group-hover:-translate-y-0.5">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-white"
                  >
                    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5Z" />
                  </svg>
                </div>
                <span className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--muted)]">
                  Pilot Connect
                </span>
              </a>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                A boutique agency for CRM cleanup, enrichment,
                <br className="hidden sm:block" /> and revenue systems for B2B teams.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
                  Navigate
                </p>
                <div className="mt-4 flex flex-col gap-3 text-sm text-[var(--muted)]">
                  <a className="transition hover:text-slate-950" href="#proof">
                    Why it matters
                  </a>
                  <a className="transition hover:text-slate-950" href="#services">
                    Solutions
                  </a>
                  <a className="transition hover:text-slate-950" href="#process">
                    Approach
                  </a>
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
                  Explore
                </p>
                <div className="mt-4 flex flex-col gap-3 text-sm text-[var(--muted)]">
                  <a className="transition hover:text-slate-950" href="#use-cases">
                    When to choose
                  </a>
                  <a className="transition hover:text-slate-950" href="#contact">
                    Contact
                  </a>
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
                  Contact
                </p>
                <div className="mt-4 flex flex-col gap-3 text-sm text-[var(--muted)]">
                  <a
                    className="transition hover:text-slate-950"
                    href="mailto:hello@pilotconnect.co"
                  >
                    hello@pilotconnect.co
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-[var(--line)] pt-6 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Pilot Connect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function ProcessIcon({
  type,
}: {
  type: ProcessIconType;
}) {
  const Icon = processIcons[type];
  return <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={2.1} />;
}
