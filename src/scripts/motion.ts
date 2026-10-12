import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

declare global {
  interface Window {
    __atelierMotionReady?: boolean;
  }
}

function init(): void {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) {
    window.__atelierMotionReady = true;
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis({ duration: 1.05, smoothWheel: true });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  const reveal = document.querySelectorAll<HTMLElement>("[data-reveal]");
  const stagger = document.querySelectorAll<HTMLElement>("[data-reveal-stagger]");

  const staggerChildren = new Set<Element>();
  stagger.forEach((group) => {
    Array.from(group.children).forEach((child) => staggerChildren.add(child));
  });

  reveal.forEach((el) => {
    if (staggerChildren.has(el)) return;
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 88%" },
    });
  });

  stagger.forEach((group) => {
    gsap.to(Array.from(group.children), {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.07,
      scrollTrigger: { trigger: group, start: "top 85%" },
    });
  });

  const heroLine = document.querySelector<HTMLElement>("[data-hero-line]");
  if (heroLine) {
    gsap.fromTo(
      heroLine,
      { yPercent: 110 },
      { yPercent: 0, duration: 1.1, ease: "power4.out", delay: 0.1 },
    );
  }

  const drift = document.querySelector<HTMLElement>(".hero__drift");
  if (drift) {
    gsap.to(drift, {
      yPercent: -12,
      ease: "none",
      scrollTrigger: {
        trigger: drift,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }

  const mm = gsap.matchMedia();

  mm.add("(min-width: 761px)", () => {
    const diagram = document.querySelector<HTMLElement>("[data-diagram]");
    if (!diagram) return;
    const fill = diagram.querySelector<HTMLElement>("[data-rail-fill]");
    const routes = Array.from(diagram.querySelectorAll<HTMLElement>("[data-route]"));

    const trigger = ScrollTrigger.create({
      trigger: diagram,
      start: "top 65%",
      end: () => "+=" + diagram.offsetHeight * 0.9,
      pin: true,
      scrub: true,
      onUpdate: (self) => {
        const active = Math.floor(self.progress * routes.length);
        routes.forEach((route, i) => {
          route.toggleAttribute("data-route-active", i <= active);
        });
        if (fill) fill.style.transform = `scaleY(${self.progress})`;
      },
    });

    return () => trigger.kill();
  });

  mm.add("(max-width: 760px)", () => {
    const diagram = document.querySelector<HTMLElement>("[data-diagram]");
    if (!diagram) return;
    diagram.querySelectorAll<HTMLElement>("[data-route]").forEach((route) => {
      route.setAttribute("data-route-active", "");
    });
    const fill = diagram.querySelector<HTMLElement>("[data-rail-fill]");
    if (fill) fill.style.transform = "scaleY(1)";
  });

  const nav = document.querySelector<HTMLElement>("[data-nav]");
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle("is-scrolled", window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  window.__atelierMotionReady = true;
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
