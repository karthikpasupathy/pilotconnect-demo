"use client";

import { useEffect, useState } from "react";

type RadarBlip = {
  id: string;
  x: number;
  y: number;
  delayMs: number;
  durationMs: number;
  color: string;
  sizePx: number;
  haloPx: number;
  coreOpacity: number;
};

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

function createRadarBlips(count = 3): RadarBlip[] {
  return Array.from({ length: count }, (_, index) => {
    const angle = Math.random() * Math.PI * 2;
    const distance = 8 + Math.random() * 20;
    const x = 50 + Math.cos(angle) * distance;
    const y = 50 + Math.sin(angle) * distance;
    const sizePx = 2.5 + Math.random() * 1.5;
    const haloPx = 4 + Math.random() * 2.5;

    return {
      id: `${Date.now()}-${index}-${Math.random().toString(36).slice(2, 7)}`,
      x,
      y,
      delayMs: Math.round(Math.random() * 1400),
      durationMs: 2200 + Math.round(Math.random() * 1800),
      color: index === 1 ? "#93c5fd" : "#60a5fa",
      sizePx,
      haloPx,
      coreOpacity: 0.28 + Math.random() * 0.22,
    };
  });
}

const outcomes = [
  "Duplicates and stale records removed",
  "Missing context filled where reps need it",
  "Priority accounts surfaced faster",
];

export function DashboardPreview() {
  const dormantAccounts = useCountUp(428, 1500);
  const contactHealth = useCountUp(63, 1700);
  const [radarBlips, setRadarBlips] = useState<RadarBlip[]>(() =>
    createRadarBlips(4),
  );

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRadarBlips(createRadarBlips(3 + Math.floor(Math.random() * 2)));
    }, 2400);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="w-full rounded-[2rem] border border-[rgba(20,110,245,0.16)] bg-[rgba(255,255,255,0.97)] p-5 shadow-[0_18px_48px_rgba(15,23,42,0.06),inset_0_1px_0_rgba(255,255,255,0.88)] backdrop-blur-xl sm:p-6">
      <div className="border-b border-[var(--line)] pb-4">
        <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
          GTM systems preview
        </p>
      </div>

      <div className="mt-5 grid gap-4">
                <div className="rounded-[1.5rem] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(147,197,253,0.12),rgba(255,255,255,1))] p-5 transition duration-300 hover:-translate-y-1 hover:border-[rgba(20,110,245,0.28)]">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
                        Accounts re-prioritized
                      </p>
                      <p className="mt-2 text-4xl font-semibold text-slate-900">
                        {dormantAccounts}
                      </p>
                    </div>
                    <div className="relative h-18 w-18 overflow-hidden rounded-full border border-blue-400/18 bg-[radial-gradient(circle,rgba(232,244,255,0.96)_0%,rgba(214,233,255,0.98)_72%)] shadow-[inset_0_0_28px_rgba(20,110,245,0.08)]">
                      <div className="absolute inset-2 rounded-full border border-blue-400/10" />
                      <div className="absolute inset-[0.95rem] rounded-full border border-blue-400/14" />
                      <div className="absolute inset-[1.45rem] rounded-full border border-blue-400/18" />
                      <div className="radar-pulse absolute inset-0 rounded-full border border-blue-300/14" />
                      <div className="radar-pulse absolute inset-4 rounded-full border border-blue-300/10 [animation-delay:400ms]" />
                      <div className="radar-sweep absolute left-1/2 top-1/2 h-[140%] w-[140%] origin-center">
                        <div className="absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-y-full rounded-tr-full bg-[conic-gradient(from_180deg_at_0%_100%,rgba(96,165,250,0.38),rgba(20,110,245,0.16),rgba(20,110,245,0.02),transparent_62%)] blur-[5px]" />
                        <div className="absolute left-1/2 top-1/2 h-1/2 w-[2px] -translate-x-1/2 -translate-y-full bg-[linear-gradient(180deg,rgba(96,165,250,0),rgba(20,110,245,0.95))] shadow-[0_0_14px_rgba(20,110,245,0.35)]" />
                        <div className="absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-y-full rounded-tr-full bg-[conic-gradient(from_180deg_at_0%_100%,rgba(96,165,250,0.22),rgba(20,110,245,0.05),transparent_56%)]" />
                      </div>
                      {radarBlips.map((blip) => (
                        <div
                          key={blip.id}
                          className="radar-blip absolute rounded-full"
                          style={{
                            left: `${blip.x}%`,
                            top: `${blip.y}%`,
                            backgroundColor: blip.color,
                            width: `${blip.sizePx}px`,
                            height: `${blip.sizePx}px`,
                            marginLeft: `${-blip.sizePx / 2}px`,
                            marginTop: `${-blip.sizePx / 2}px`,
                            opacity: blip.coreOpacity,
                            animationDelay: `${blip.delayMs}ms`,
                            animationDuration: `${blip.durationMs}ms`,
                          }}
                        >
                          <span
                            className="absolute rounded-full blur-[6px]"
                            style={{
                              inset: `${-blip.haloPx}px`,
                              backgroundColor: `${blip.color}24`,
                            }}
                          />
                          <span
                            className="absolute rounded-full blur-[2px]"
                            style={{
                              inset: `${-(blip.haloPx * 0.45)}px`,
                              backgroundColor: `${blip.color}1f`,
                            }}
                          />
                        </div>
                      ))}
                      <div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#146ef5] shadow-[0_0_16px_rgba(20,110,245,0.45)]" />
                    </div>
                  </div>
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-blue-100">
                    <div className="h-full w-[72%] rounded-full bg-[linear-gradient(90deg,#146ef5,#60a5fa)]" />
                  </div>
                </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--panel)] p-5 transition duration-300 hover:-translate-y-1 hover:border-[rgba(20,110,245,0.28)]">
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
              Contact health
            </p>
            <p className="mt-3 text-3xl font-semibold text-slate-900">
              +{contactHealth}%
            </p>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              Better usable coverage across the contacts that matter.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--panel)] p-5 transition duration-300 hover:-translate-y-1 hover:border-[rgba(20,110,245,0.28)]">
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
              Rep efficiency
            </p>
            <p className="mt-3 text-3xl font-semibold text-slate-900">3x faster</p>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              Less manual research and clearer prioritization before outreach.
            </p>
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--panel)] p-5">
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {outcomes.map((item) => (
              <div
                key={item}
                className="inline-flex items-center gap-3 text-sm text-slate-700"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-[-4px] rounded-full bg-blue-400/32 blur-[5px]" />
                  <span className="absolute inset-[-1px] rounded-full bg-blue-300/60 blur-[1.5px]" />
                  <span className="relative h-2 w-2 rounded-full bg-[#146ef5]" />
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
