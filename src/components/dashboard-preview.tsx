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
      color: index === 1 ? "#d9ff9a" : "#b8ff72",
      sizePx,
      haloPx,
      coreOpacity: 0.28 + Math.random() * 0.22,
    };
  });
}

const outcomes = [
  "Duplicate records removed",
  "Missing emails and numbers found",
  "High-intent leads surfaced",
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
                    <div className="relative h-18 w-18 overflow-hidden rounded-full border border-emerald-400/18 bg-[radial-gradient(circle,rgba(16,33,22,0.92)_0%,rgba(6,13,9,0.96)_72%)] shadow-[inset_0_0_28px_rgba(74,222,128,0.08)]">
                      <div className="absolute inset-2 rounded-full border border-emerald-400/10" />
                      <div className="absolute inset-[0.95rem] rounded-full border border-emerald-400/14" />
                      <div className="absolute inset-[1.45rem] rounded-full border border-emerald-400/18" />
                      <div className="radar-pulse absolute inset-0 rounded-full border border-emerald-300/14" />
                      <div className="radar-pulse absolute inset-4 rounded-full border border-emerald-300/10 [animation-delay:400ms]" />
                      <div className="radar-sweep absolute left-1/2 top-1/2 h-[140%] w-[140%] origin-center">
                        <div className="absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-y-full rounded-tr-full bg-[conic-gradient(from_180deg_at_0%_100%,rgba(190,255,137,0.34),rgba(74,222,128,0.14),rgba(74,222,128,0.02),transparent_62%)] blur-[5px]" />
                        <div className="absolute left-1/2 top-1/2 h-1/2 w-[2px] -translate-x-1/2 -translate-y-full bg-[linear-gradient(180deg,rgba(190,255,137,0),rgba(190,255,137,0.95))] shadow-[0_0_14px_rgba(74,222,128,0.45)]" />
                        <div className="absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-y-full rounded-tr-full bg-[conic-gradient(from_180deg_at_0%_100%,rgba(190,255,137,0.22),rgba(74,222,128,0.05),transparent_56%)]" />
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
                      <div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b8ff72] shadow-[0_0_16px_rgba(74,222,128,0.55)]" />
                    </div>
                  </div>
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/8">
                    <div className="h-full w-[72%] rounded-full bg-[linear-gradient(90deg,#7dff9b,#22c55e)]" />
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
