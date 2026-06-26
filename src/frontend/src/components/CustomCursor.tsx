import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const posRef = useRef({ x: -100, y: -100 });
  const trailPosRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number>(0);
  const [label, setLabel] = useState("");

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    const onDown = () => setIsClicking(true);
    const onUp = () => setIsClicking(false);

    const onEnterInteractive = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      setIsHovering(true);
      const cursorLabel = target.getAttribute("data-cursor");
      setLabel(cursorLabel ?? "");
    };

    const onLeaveInteractive = () => {
      setIsHovering(false);
      setLabel("");
    };

    const interactiveSelector =
      "a, button, [role='button'], input, select, textarea, [data-hoverable]";

    const attachListeners = () => {
      for (const el of document.querySelectorAll<HTMLElement>(
        interactiveSelector,
      )) {
        el.addEventListener("mouseenter", onEnterInteractive);
        el.addEventListener("mouseleave", onLeaveInteractive);
      }
    };

    attachListeners();

    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);

    const animate = () => {
      const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
      trailPosRef.current.x = lerp(
        trailPosRef.current.x,
        posRef.current.x,
        0.12,
      );
      trailPosRef.current.y = lerp(
        trailPosRef.current.y,
        posRef.current.y,
        0.12,
      );

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${posRef.current.x}px, ${posRef.current.y}px)`;
      }
      if (trailRef.current) {
        trailRef.current.style.transform = `translate(${trailPosRef.current.x}px, ${trailPosRef.current.y}px)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      <div
        ref={trailRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2"
        style={{
          width: isHovering ? 56 : 40,
          height: isHovering ? 56 : 40,
          borderRadius: "50%",
          border: "1.5px solid rgba(212,175,55,0.35)",
          background: isHovering ? "rgba(212,175,55,0.08)" : "transparent",
          boxShadow: isHovering ? "0 0 24px rgba(212,175,55,0.25)" : "none",
          transition:
            "width 0.25s ease, height 0.25s ease, background 0.25s, box-shadow 0.25s",
        }}
      />
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
        style={{
          width: isClicking ? 6 : 10,
          height: isClicking ? 6 : 10,
          borderRadius: "50%",
          background: "rgba(212,175,55,0.9)",
          boxShadow: "0 0 8px rgba(212,175,55,0.8)",
          transition: "width 0.15s, height 0.15s",
        }}
      >
        {label && (
          <span
            className="absolute top-5 left-5 text-xs font-display font-semibold whitespace-nowrap px-2 py-0.5 rounded"
            style={{ background: "rgba(212,175,55,0.9)", color: "#0a0a0a" }}
          >
            {label}
          </span>
        )}
      </div>
    </>
  );
}
