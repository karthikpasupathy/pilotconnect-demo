"use client";

import { useState } from "react";

type AudienceKey = "sales" | "revops";

const audienceOptions: { key: AudienceKey; label: string }[] = [
  { key: "sales", label: "Sales Leaders" },
  { key: "revops", label: "RevOps Leaders" },
];

const audienceCopy: Record<
  AudienceKey,
  {
    headline: string;
    accent: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
  }
> = {
  sales: {
    headline: "Turn messy CRM data into more revenue.",
    accent: "Faster.",
    body:
      "We clean and enrich your CRM, surface the best accounts to work, and build scoring and refresh systems so reps spend less time guessing and more time creating pipeline.",
    primaryCta: "Book a discovery call",
    secondaryCta: "See the problem we solve",
  },
  revops: {
    headline: "Fix the CRM issues slowing revenue down.",
    accent: "Systematically.",
    body:
      "Pilot Connect helps RevOps teams clean structure, enrich the right records, and build reliable scoring and refresh systems that improve reporting, routing, and rep execution.",
    primaryCta: "Book a RevOps call",
    secondaryCta: "See how the system works",
  },
};

export function HeroCopySwitcher() {
  const [audience, setAudience] = useState<AudienceKey>("sales");
  const copy = audienceCopy[audience];

  return (
    <div className="flex w-full max-w-5xl flex-col items-center text-center">
      <div className="inline-flex w-fit flex-wrap items-center gap-2 rounded-full border border-[rgba(20,110,245,0.14)] bg-white/88 p-1 shadow-[0_12px_30px_rgba(15,23,42,0.05)] backdrop-blur-md">
        {audienceOptions.map((option) => {
          const active = option.key === audience;

          return (
            <button
              key={option.key}
              type="button"
              onClick={() => setAudience(option.key)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                active
                  ? "bg-[linear-gradient(135deg,#146ef5,#60a5fa)] text-white shadow-[0_10px_24px_rgba(20,110,245,0.22)]"
                  : "text-slate-600 hover:bg-[rgba(20,110,245,0.06)] hover:text-slate-900"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      <h1 className="mt-8 max-w-4xl font-serif text-5xl leading-[1.05] tracking-[-0.018em] text-[#152033] sm:text-[4rem] lg:max-w-[22ch] lg:text-[5.1rem]">
        {copy.headline}{" "}
        <span className="bg-[linear-gradient(135deg,#146ef5,#60a5fa)] bg-clip-text italic text-transparent">
          {copy.accent}
        </span>
      </h1>

      <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg lg:max-w-[50rem]">
        {copy.body}
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#146ef5,#60a5fa)] px-6 py-3.5 text-sm font-semibold !text-white transition hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(20,110,245,0.28)]"
        >
          {copy.primaryCta}
        </a>
        <a
          href={audience === "sales" ? "#proof" : "#process"}
          className="inline-flex items-center justify-center rounded-full border border-[var(--line)] bg-white/70 px-6 py-3.5 text-sm font-medium text-slate-700 transition hover:-translate-y-1 hover:border-[rgba(20,110,245,0.24)] hover:bg-white"
        >
          {copy.secondaryCta}
        </a>
      </div>
    </div>
  );
}
