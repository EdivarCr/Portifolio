import { useState, useEffect, useRef, useCallback } from "react";

/**
 * Hook responsável por identificar a seção ativa via IntersectionObserver
 * e coordenar as animações sutis de entrada durante a rolagem.
 */
export function useActiveSection(sections = []) {
  const [activeSectionId, setActiveSectionId] = useState(
    sections[0]?.id || "home"
  );
  const visibilityMapRef = useRef(new Map());

  useEffect(() => {
    if (typeof window === "undefined") return;

    const sectionElements = Array.from(
      document.querySelectorAll("[data-section-id]")
    );

    if (sectionElements.length === 0) return;

    const pickMostVisibleSection = () => {
      const viewportHeight = window.innerHeight || 1;
      const viewportCenter = viewportHeight * 0.45;

      let bestId = null;
      let bestScore = -Infinity;

      sectionElements.forEach((el) => {
        const id = el.getAttribute("data-section-id");
        if (!id) return;

        const rect = el.getBoundingClientRect();
        const visibleTop = Math.max(0, rect.top);
        const visibleBottom = Math.min(viewportHeight, rect.bottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);

        if (visibleHeight <= 0) return;

        const visibleFraction = visibleHeight / viewportHeight;
        const containsFocusLine =
          rect.top <= viewportCenter && rect.bottom >= viewportCenter ? 0.35 : 0;

        const score = visibleFraction + containsFocusLine;

        if (score > bestScore) {
          bestScore = score;
          bestId = id;
        }
      });

      if (bestId) {
        setActiveSectionId((prev) => (prev === bestId ? prev : bestId));
      }
    };

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("data-section-id");
          if (id) {
            visibilityMapRef.current.set(id, entry.intersectionRatio);
          }
        });
        pickMostVisibleSection();
      },
      {
        root: null,
        rootMargin: "-10% 0px -15% 0px",
        threshold: [0, 0.15, 0.3, 0.5, 0.7, 0.9],
      }
    );

    sectionElements.forEach((el) => sectionObserver.observe(el));

    // Revelação progressiva dos elementos com .reveal-up
    const revealElements = Array.from(document.querySelectorAll(".reveal-up"));
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let revealObserver = null;

    if (prefersReducedMotion) {
      revealElements.forEach((el) => el.classList.add("is-visible"));
    } else if (revealElements.length > 0) {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              revealObserver?.unobserve(entry.target);
            }
          });
        },
        {
          root: null,
          rootMargin: "0px 0px -8% 0px",
          threshold: 0.12,
        }
      );

      revealElements.forEach((el) => revealObserver.observe(el));
    }

    const handleResize = () => pickMostVisibleSection();
    window.addEventListener("resize", handleResize, { passive: true });

    // Avaliação inicial
    pickMostVisibleSection();

    return () => {
      sectionObserver.disconnect();
      if (revealObserver) revealObserver.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, [sections]);

  const scrollToSection = useCallback((targetId) => {
    if (typeof document === "undefined") return;
    const element =
      document.querySelector(`[data-section-id="${targetId}"]`) ||
      document.getElementById(targetId);

    if (element) {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      element.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });
    }
  }, []);

  const activeIndex = Math.max(
    0,
    sections.findIndex((s) => s.id === activeSectionId)
  );
  const activeSection = sections[activeIndex] || sections[0] || {
    id: "home",
    theme: "home",
    navGroup: "home",
  };

  return {
    activeSectionId,
    activeIndex,
    activeSection,
    activeTheme: activeSection.theme || "home",
    scrollToSection,
  };
}
