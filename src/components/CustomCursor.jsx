import { useEffect, useRef, useState } from "react";

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input, textarea, select, [data-cursor-hover]';

function getCanUseCustomCursor() {
  if (typeof window === "undefined") return false;
  const hasFinePointer = window.matchMedia(
    "(pointer: fine) and (hover: hover)"
  ).matches;
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  return hasFinePointer && !prefersReducedMotion;
}

function CustomCursor({ activeTheme = "home", colorMode = "light" }) {
  const cursorRef = useRef(null);
  const [enabled, setEnabled] = useState(getCanUseCustomCursor);
  const isDarkSurface = colorMode === "dark" || activeTheme === "contact";

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const pointerQuery = window.matchMedia("(pointer: fine) and (hover: hover)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleMediaChange = () => {
      setEnabled(pointerQuery.matches && !motionQuery.matches);
    };

    pointerQuery.addEventListener("change", handleMediaChange);
    motionQuery.addEventListener("change", handleMediaChange);

    return () => {
      pointerQuery.removeEventListener("change", handleMediaChange);
      motionQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return undefined;

    const cursorEl = cursorRef.current;
    if (!cursorEl) return undefined;

    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;
    let currentScale = 1;
    let targetScale = 1;
    let isVisible = false;
    let rafId = null;

    const renderLoop = () => {
      // Interpolação linear suave (lerp)
      currentX += (targetX - currentX) * 0.22;
      currentY += (targetY - currentY) * 0.22;
      currentScale += (targetScale - currentScale) * 0.2;

      cursorEl.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(
        2
      )}px, 0) translate(-50%, -50%) scale(${currentScale.toFixed(3)})`;

      rafId = window.requestAnimationFrame(renderLoop);
    };

    const handlePointerMove = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;

      if (!isVisible) {
        currentX = targetX;
        currentY = targetY;
        isVisible = true;
        cursorEl.style.opacity = "1";
      }

      const interactiveTarget =
        event.target instanceof Element
          ? event.target.closest(INTERACTIVE_SELECTOR)
          : null;

      if (interactiveTarget) {
        targetScale = 2.1;
        cursorEl.setAttribute("data-hovering", "true");
      } else {
        targetScale = 1;
        cursorEl.removeAttribute("data-hovering");
      }
    };

    const handlePointerLeave = () => {
      isVisible = false;
      cursorEl.style.opacity = "0";
    };

    const handlePointerDown = () => {
      targetScale = 0.85;
    };

    const handlePointerUp = () => {
      targetScale = cursorEl.hasAttribute("data-hovering") ? 2.1 : 1;
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });

    rafId = window.requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      style={{ opacity: 0 }}
      className={`fixed top-0 left-0 z-50 w-5 h-5 rounded-full pointer-events-none transition-[background-color,opacity,border-color] duration-300 ${
        isDarkSurface
          ? "bg-[#F7F7F7]/85 data-[hovering=true]:bg-[#8B9AFF]/25 data-[hovering=true]:border data-[hovering=true]:border-[#8B9AFF]/70"
          : "bg-[#171717]/80 data-[hovering=true]:bg-[#5757B8]/20 data-[hovering=true]:border data-[hovering=true]:border-[#5757B8]/60"
      }`}
    />
  );
}

export default CustomCursor;
