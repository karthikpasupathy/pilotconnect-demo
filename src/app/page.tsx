import { BrushCleaning, Search, Sparkles, Target, type LucideIcon } from "lucide-react";
import { DashboardPreview } from "@/components/dashboard-preview";

type ProcessIconType = "cleanup" | "enrichment" | "layers" | "scoring";

const metrics = [
  { value: "2M+", label: "records cleaned, enriched, and scored" },
  { value: "40+", label: "CRM projects shipped across B2B teams" },
  { value: "7 days", label: "to first delivery for most engagements" },
];

const process = [
  {
    id: "cleanup",
    icon: "cleanup" as ProcessIconType,
    title: "CRM Cleanup",
    body: "We find and fix every duplicate, junk record, and orphaned contact.",
  },
  {
    id: "enrichment",
    icon: "enrichment" as ProcessIconType,
    title: "Enrichment",
    body: "We fill every gap using 50+ data providers. Emails, LinkedIn URLs, firmographics. All verified. All done.",
  },
  {
    id: "layers",
    icon: "layers" as ProcessIconType,
    title: "Data Layers",
    body: "Custom data points your team used to Google manually. Hiring signals, funding rounds, pricing tiers.",
  },
  {
    id: "scoring",
    icon: "scoring" as ProcessIconType,
    title: "Lead Scoring",
    body: "Every contact gets an ICP score and a summary in plain English. Your team knows exactly who to call first.",
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
  "Lead enrichment waterfall",
  "Lead scoring and prioritization",
  "Dormant database reactivation",
  "RevOps-ready field architecture",
  "Outbound list preparation",
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

const testimonials = [
  {
    quote:
      "The output was clean, the process was straightforward, and our reps finally trusted what was inside the CRM.",
    name: "Naveen Prabhu",
    role: "Co-Founder, GetReplies",
  },
  {
    quote:
      "Wrong numbers, departed contacts, stale records. Pilot Connect cleaned the database fast enough that the difference was immediate.",
    name: "Priyank Shah",
    role: "Global CXO & Board Advisor",
  },
  {
    quote:
      "The biggest win was speed. Research that used to happen before every call was already there, accurate and usable.",
    name: "Priya M.",
    role: "Head of Revenue Operations, SaaS Startup",
  },
];

const faqs = [
  {
    question: "Who is this for?",
    answer:
      "B2B teams sitting on a CRM full of aging contacts, patchy enrichment, or no clear way to prioritize who matters next.",
  },
  {
    question: "How quickly can you start?",
    answer:
      "The current offer promises first delivery in as little as 7 days, which is the timeline this redesign reinforces.",
  },
  {
    question: "Do you replace our CRM?",
    answer:
      "No. Pilot Connect improves the data layer inside the systems your team already uses so sales and ops move faster.",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <section className="mx-auto min-h-screen max-w-[1440px] px-5 pb-16 pt-5 sm:px-8 lg:px-12">
        <header className="sticky top-4 z-30 mx-auto flex max-w-7xl items-center justify-between rounded-full border border-[var(--line)] bg-[rgba(10,10,10,0.72)] px-4 py-3 backdrop-blur-xl sm:px-6">
          <a href="#top" className="group flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--line)] bg-[linear-gradient(135deg,#ffcf70,#ff9f1c)] text-sm font-bold text-[#1b1204] shadow-[0_10px_30px_rgba(255,159,28,0.35)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:rotate-3">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-[#1b1204]"
              >
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5Z" />
              </svg>
            </div>
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--muted)]">
                Pilot Connect
              </div>
              <div className="text-sm text-white/80">
                Revenue data, rebuilt for action
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-[var(--muted)] lg:flex">
            <a className="transition hover:text-white" href="#services">
              Services
            </a>
            <a className="transition hover:text-white" href="#process">
              Process
            </a>
            <a className="transition hover:text-white" href="#proof">
              Proof
            </a>
            <a className="transition hover:text-white" href="#founder">
              Founder
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-full border border-[rgba(255,199,92,0.35)] bg-[linear-gradient(135deg,#ffd27d,#ff9f1c)] px-4 py-2 text-sm font-medium text-black transition hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(255,159,28,0.28)]"
            style={{ color: "#120d05" }}
          >
            Start a free sample
          </a>
        </header>

        <div
          id="top"
          className="relative mx-auto mt-8 grid max-w-7xl gap-10 overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] px-6 py-10 shadow-[0_30px_120px_rgba(0,0,0,0.45)] sm:px-10 sm:py-14 lg:grid-cols-[1.15fr_0.85fr] lg:px-14 lg:py-18"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,199,92,0.22),transparent_26%),radial-gradient(circle_at_80%_25%,rgba(255,159,28,0.16),transparent_22%)]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.03))] lg:block" />

          <div className="relative">
            <div className="inline-flex items-center gap-3 rounded-full border border-[rgba(255,199,92,0.24)] bg-[rgba(255,199,92,0.08)] px-4 py-2 text-xs uppercase tracking-[0.28em] text-[#ffd98d]">
              CRM Cleanup, Enrichment & Lead Scoring
            </div>

            <h1 className="mt-8 max-w-4xl font-serif text-5xl leading-[0.95] tracking-[-0.05em] text-[#fff7e8] sm:text-6xl lg:text-8xl">
              Your CRM is full of revenue.{" "}
              <span className="italic text-[#ffc75c]">
                You just can&apos;t see it yet.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              Pilot Connect cleans, enriches, and scores dormant B2B data so
              your team knows exactly who to contact, why now, and what is
              worth pursuing first.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#ffd27d,#ff9f1c)] px-6 py-3.5 text-sm font-semibold text-black transition hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(255,159,28,0.4)]"
                style={{ color: "#120d05" }}
              >
                Book a strategy call
                <span
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  style={{ color: "#120d05" }}
                >
                  →
                </span>
              </a>
              <a
                href="#process"
                className="inline-flex items-center justify-center rounded-full border border-[var(--line)] bg-white/3 px-6 py-3.5 text-sm font-medium text-white/88 transition hover:-translate-y-1 hover:border-[rgba(255,199,92,0.32)] hover:bg-white/6"
              >
                See how the system works
              </a>
            </div>

          </div>

          <div className="relative flex items-start lg:pt-8">
            <DashboardPreview />
          </div>
        </div>
      </section>

      <section id="proof" className="mx-auto max-w-7xl px-5 py-6 sm:px-8 lg:px-12">
        <div className="grid gap-px overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--line)] md:grid-cols-3">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="bg-[var(--panel-strong)] px-8 py-10 transition duration-300 hover:bg-[rgba(25,25,25,0.96)]"
            >
              <p className="font-serif text-5xl tracking-[-0.06em] text-[#ffd27d] sm:text-6xl">
                {metric.value}
              </p>
              <p className="mt-4 max-w-xs text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="services"
        className="mx-auto max-w-7xl px-5 py-18 sm:px-8 lg:px-12"
      >
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[#ffd98d]">
            Services
          </p>
          <h2 className="mt-4 font-serif text-4xl tracking-[-0.05em] text-[#fff7e8] sm:text-6xl">
            A premium data layer for teams that want cleaner pipeline, not more
            dashboards.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            We clean CRM chaos, enrich every account with real buying context,
            and score your database so revenue teams can focus on the
            opportunities most likely to move.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {offerings.map((item, index) => (
            <article
              key={item}
              className="group relative overflow-hidden rounded-[1.75rem] border border-[var(--line)] bg-[var(--panel)] p-6 transition duration-300 hover:-translate-y-1.5 hover:border-[rgba(255,199,92,0.35)] hover:bg-[rgba(18,18,18,0.94)]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,199,92,0.6),transparent)] opacity-0 transition group-hover:opacity-100" />
              <p className="text-sm text-[#ffd27d]">0{index + 1}</p>
              <h3 className="mt-3 text-2xl font-medium text-white">{item}</h3>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                Structured for B2B revenue teams that need fewer guesses, better
                prioritization, and cleaner execution inside the CRM they
                already run.
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
            <p className="text-xs uppercase tracking-[0.3em] text-[#ffd98d]">
              Process
            </p>
            <h2 className="mt-4 font-serif text-4xl tracking-[-0.05em] text-[#fff7e8] sm:text-6xl">
              The workflow feels bespoke, but it is built to move fast.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[var(--muted)]">
              Instead of generic &ldquo;we do data&rdquo; language, this section
              shows a clear transformation path from messy CRM to ranked
              pipeline.
            </p>
          </div>

          <div className="mt-10 grid gap-4 xl:grid-cols-4">
            {process.map((step, index) => (
              <article
                key={step.id}
                className="group relative overflow-hidden rounded-[1.75rem] border border-[rgba(255,199,92,0.16)] bg-[linear-gradient(180deg,rgba(255,214,137,0.09),rgba(255,168,66,0.045)_18%,rgba(17,14,10,0.96)_55%,rgba(8,8,8,0.98))] p-6 transition duration-300 hover:-translate-y-1.5 hover:border-[rgba(255,199,92,0.32)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_14%,rgba(255,215,140,0.14),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.035),transparent_24%)]" />
                <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,199,92,0.55),transparent)] opacity-0 transition group-hover:opacity-100" />
                <div className="relative flex items-center justify-between">
                  <span className="rounded-full border border-emerald-400/24 bg-emerald-400/10 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-[#b8ff72] shadow-[0_0_18px_rgba(74,222,128,0.08)]">
                    Step {index + 1}
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--line)] bg-[linear-gradient(135deg,#ffcf70,#ff9f1c)] text-[#1b1204] shadow-[0_10px_30px_rgba(255,159,28,0.18)]">
                    <ProcessIcon type={step.icon} />
                  </div>
                </div>
                <h3 className="relative mt-6 text-2xl font-medium text-white">
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
        <div className="rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(135deg,rgba(255,199,92,0.08),rgba(255,159,28,0.04),rgba(255,255,255,0.02))] p-8 sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#ffd98d]">
                Trusted tools
              </p>
              <h2 className="mt-4 font-serif text-4xl tracking-[-0.05em] text-[#fff7e8] sm:text-5xl">
                Built for modern GTM stacks, not against them.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-[var(--muted)]">
              The live site already names the ecosystem. Here it becomes part of
              the visual identity instead of looking like an afterthought.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {stack.map((item) => (
              <div
                key={item}
                className="rounded-full border border-[rgba(255,199,92,0.22)] bg-[rgba(10,10,10,0.44)] px-4 py-3 text-sm uppercase tracking-[0.22em] text-[#fff1cf] transition hover:-translate-y-0.5 hover:border-[rgba(255,199,92,0.4)] hover:bg-[rgba(17,17,17,0.7)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-18 sm:px-8 lg:px-12">
        <div className="grid gap-4 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.name}
              className="rounded-[1.75rem] border border-[var(--line)] bg-[var(--panel)] p-7 transition duration-300 hover:-translate-y-1.5 hover:border-[rgba(255,199,92,0.35)]"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-[#ffd98d]">
                ★★★★★
              </p>
              <p className="mt-5 font-serif text-2xl leading-9 tracking-[-0.03em] text-[#fff7e8]">
                “{testimonial.quote}”
              </p>
              <footer className="mt-8 border-t border-[var(--line)] pt-5">
                <p className="text-sm font-medium text-white">
                  {testimonial.name}
                </p>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  {testimonial.role}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section
        id="founder"
        className="mx-auto max-w-7xl px-5 py-18 sm:px-8 lg:px-12"
      >
        <div className="grid gap-6 rounded-[2rem] border border-[var(--line)] bg-[var(--panel-strong)] p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div className="rounded-[1.75rem] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,199,92,0.1),rgba(255,255,255,0.02))] p-7">
            <div className="flex h-24 w-24 items-center justify-center rounded-[1.75rem] border border-[rgba(255,199,92,0.22)] bg-[linear-gradient(135deg,#ffd27d,#ff9f1c)] font-serif text-4xl text-[#1c1306]">
              BJ
            </div>
            <p className="mt-6 text-xs uppercase tracking-[0.3em] text-[#ffd98d]">
              Founder
            </p>
            <h2 className="mt-3 text-3xl font-medium text-white">
              Bhushan Jaisingh
            </h2>
            <p className="mt-2 text-[var(--muted)]">
              14+ years in B2B sales, marketing, and revenue operations.
            </p>
            <p className="mt-6 text-sm leading-7 text-[var(--muted)]">
              The live site highlights founder-led trust, a prior $4M annual
              scale story, and hands-on CRM experience. That remains central
              here, but presented with more confidence and less clutter.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--panel)] p-6">
              <p className="font-serif text-5xl text-[#ffd27d]">14+</p>
              <p className="mt-3 text-sm uppercase tracking-[0.22em] text-[var(--muted)]">
                Years across B2B growth systems
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--panel)] p-6">
              <p className="font-serif text-5xl text-[#ffd27d]">$4M</p>
              <p className="mt-3 text-sm uppercase tracking-[0.22em] text-[var(--muted)]">
                Previous business scaled annually before exit
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--panel)] p-6">
              <p className="font-serif text-5xl text-[#ffd27d]">50+</p>
              <p className="mt-3 text-sm uppercase tracking-[0.22em] text-[var(--muted)]">
                Data providers across the enrichment waterfall
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--panel)] p-6">
              <p className="font-serif text-5xl text-[#ffd27d]">Hands-on</p>
              <p className="mt-3 text-sm uppercase tracking-[0.22em] text-[var(--muted)]">
                Founder-led execution, not outsourced mystery work
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-18 sm:px-8 lg:px-12">
        <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#ffd98d]">
              FAQ
            </p>
            <h2 className="mt-4 font-serif text-4xl tracking-[-0.05em] text-[#fff7e8] sm:text-5xl">
              Questions buyers ask before they trust the data.
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--panel)] p-6"
              >
                <h3 className="text-xl font-medium text-white">
                  {faq.question}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-7xl px-5 pb-20 pt-10 sm:px-8 lg:px-12"
      >
        <div className="relative overflow-hidden rounded-[2.25rem] border border-[rgba(255,199,92,0.24)] bg-[linear-gradient(135deg,rgba(255,199,92,0.18),rgba(255,159,28,0.12),rgba(12,10,7,0.96)_58%,rgba(5,5,5,0.98))] px-8 py-12 sm:px-12 sm:py-14">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,214,137,0.12),transparent_45%,rgba(255,255,255,0.03))]" />
          <div className="pointer-events-none absolute -right-20 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,210,125,0.28),transparent_65%)] blur-2xl" />
          <div className="pointer-events-none absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_15%_20%,rgba(255,215,140,0.14),transparent_30%)]" />
          <p className="relative text-xs uppercase tracking-[0.3em] text-[#fff1cf]">
            Start here
          </p>
          <h2 className="relative mt-4 max-w-4xl font-serif text-4xl tracking-[-0.05em] text-[#fff7e8] sm:text-6xl">
            Your CRM will not fix itself. Pilot Connect can.
          </h2>
          <p className="relative mt-5 max-w-2xl text-base leading-8 text-[#f3dfb5]/78 sm:text-lg">
            This version is ready for Vercel or Netlify and gives your friend a
            much stronger foundation to extend with booking, case studies, and
            real brand assets.
          </p>
          <div className="relative mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:hello@pilotconnect.co"
              className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#ffd27d,#ff9f1c)] px-6 py-3.5 text-sm font-semibold text-black transition hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(255,159,28,0.35)]"
              style={{ color: "#120d05" }}
            >
              hello@pilotconnect.co
            </a>
            <a
              href="#top"
              className="inline-flex items-center justify-center rounded-full border border-[rgba(255,241,207,0.22)] bg-white/4 px-6 py-3.5 text-sm font-medium text-[#fff1cf] transition hover:-translate-y-1 hover:bg-white/10"
            >
              Back to top
            </a>
          </div>
        </div>
      </section>
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
