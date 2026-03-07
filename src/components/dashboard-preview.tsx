"use client";

import { useEffect, useState } from "react";

function useCountUp(target: number, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let frame = 0;
    let animationFrame = 0;
    const totalFrames = Math.max(1, Math.round(duration / 16));

    const tick = () => {
      frame += 1;
      const progress = Math.min(frame / totalFrames, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(tick);
      }
    };

    animationFrame = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [duration, target]);

  return value;
}

const outcomes = [
  "Duplicate records removed",
  "Missing emails and numbers found",
  "High-intent leads surfaced",
];

export function DashboardPreview() {
  const dormantAccounts = useCountUp(428, 1500);
  const contactHealth = useCountUp(63, 1700);

  return (
    <div className="w-full rounded-[2rem] border border-[rgba(255,199,92,0.18)] bg-[rgba(13,13,13,0.84)] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:p-6">
      <div className="border-b border-[var(--line)] pb-4">
        <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
          Pipeline recovery dashboard
        </p>
      </div>

      <div className="mt-5 grid gap-4">
        <div className="rounded-[1.5rem] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,199,92,0.08),rgba(255,255,255,0.02))] p-5 transition duration-300 hover:-translate-y-1 hover:border-[rgba(255,199,92,0.36)]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
                Dormant accounts re-ranked
              </p>
              <p className="mt-2 text-4xl font-semibold text-[#fff4d8]">
                {dormantAccounts}
              </p>
            </div>
            <div className="h-18 w-18 rounded-full bg-[radial-gradient(circle,#ffd27d_0%,#ff9f1c_55%,rgba(255,159,28,0.08)_56%)] opacity-90" />
          </div>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/8">
            <div className="h-full w-[72%] rounded-full bg-[linear-gradient(90deg,#ffd27d,#ff9f1c)]" />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--panel)] p-5 transition duration-300 hover:-translate-y-1 hover:border-[rgba(255,199,92,0.36)]">
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
              Contact health
            </p>
            <p className="mt-3 text-3xl font-semibold text-white">
              +{contactHealth}%
            </p>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              Better verified coverage across key buying committee roles.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--panel)] p-5 transition duration-300 hover:-translate-y-1 hover:border-[rgba(255,199,92,0.36)]">
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
              Rep focus
            </p>
            <p className="mt-3 text-3xl font-semibold text-white">3x faster</p>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              Less pre-call research and cleaner routing for outbound.
            </p>
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--panel)] p-5">
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {outcomes.map((item) => (
              <div
                key={item}
                className="inline-flex items-center gap-3 text-sm text-[#e9dfca]"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-[-4px] rounded-full bg-emerald-400/42 blur-[5px]" />
                  <span className="absolute inset-[-1px] rounded-full bg-emerald-300/68 blur-[1.5px]" />
                  <span className="relative h-2 w-2 rounded-full bg-[#b8ff72]" />
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
