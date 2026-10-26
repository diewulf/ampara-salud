"use client";

import { useEffect } from "react";

export default function HomeEnhancements() {
  useEffect(() => {
    const hero = document.querySelector(".hero");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let heroVisible = true;
    const updateMotion = () => {
      hero.classList.toggle("motion-enabled", !reducedMotion.matches);
      hero.classList.toggle("motion-paused", !heroVisible || document.hidden);
    };
    const observer = "IntersectionObserver" in window
      ? new IntersectionObserver(([entry]) => { heroVisible = entry.isIntersecting; updateMotion(); })
      : null;
    observer?.observe(hero);
    reducedMotion.addEventListener("change", updateMotion);
    document.addEventListener("visibilitychange", updateMotion);
    updateMotion();

    const track = document.getElementById("reviews-track");
    const cards = [...track.querySelectorAll(".review-card")];
    let direction = 1;
    const advance = () => {
      if (reducedMotion.matches || cards.length < 2) return;
      const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      const step = cards[0].getBoundingClientRect().width + gap;
      const visible = Math.max(1, Math.round((track.clientWidth + gap) / step));
      const last = Math.max(0, cards.length - visible);
      if (!last) return;
      const index = Math.min(last, Math.max(0, Math.round(track.scrollLeft / step)));
      if (index >= last) direction = -1;
      else if (index <= 0) direction = 1;
      track.scrollTo({ left: (index + direction) * step, behavior: "smooth" });
    };
    const firstAdvance = window.setTimeout(advance, 1800);
    const interval = window.setInterval(advance, 5400);

    return () => {
      observer?.disconnect();
      reducedMotion.removeEventListener("change", updateMotion);
      document.removeEventListener("visibilitychange", updateMotion);
      window.clearTimeout(firstAdvance);
      window.clearInterval(interval);
    };
  }, []);
  return null;
}
