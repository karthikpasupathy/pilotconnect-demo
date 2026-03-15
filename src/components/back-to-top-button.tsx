"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const trigger = document.getElementById("proof");

      if (!trigger) {
        setVisible(false);
        return;
      }

      const triggerBottom =
        trigger.offsetTop + trigger.offsetHeight - window.innerHeight * 0.2;

      setVisible(window.scrollY > triggerBottom);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="#"
      aria-label="Back to top"
      className={`fixed bottom-6 right-4 z-40 hidden h-12 w-12 items-center justify-center rounded-full border border-[rgba(20,110,245,0.14)] bg-[linear-gradient(135deg,#146ef5,#60a5fa)] text-white shadow-[0_16px_40px_rgba(20,110,245,0.22)] transition-all duration-300 lg:inline-flex ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-2 opacity-0"
      }`}
    >
      <ArrowUp aria-hidden="true" className="h-5 w-5 text-white" strokeWidth={2.2} />
    </a>
  );
}
