import { useRouterState } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

export function useScrollAnimation() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const prevPathRef = useRef<string | null>(null);

  useEffect(() => {
    const currentPath = pathname;
    if (prevPathRef.current === currentPath) return;
    prevPathRef.current = currentPath;

    // Small delay to let the new page render its [data-animate] elements
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-in");
              observer.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
      );

      const elements = document.querySelectorAll("[data-animate]");
      for (const el of elements) {
        observer.observe(el);
      }

      return () => observer.disconnect();
    }, 50);

    return () => clearTimeout(timer);
  });
}

export function useElementAnimation<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("animate-in");
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
