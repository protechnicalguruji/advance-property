import { CustomCursor } from "@/components/CustomCursor";
import { FloatingButtons } from "@/components/FloatingButtons";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Outlet, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

export function Layout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const prevPathnameRef = useRef(pathname);

  useScrollAnimation();

  // Trigger page fade transition on route change
  useEffect(() => {
    if (prevPathnameRef.current === pathname) return;
    prevPathnameRef.current = pathname;

    const main = document.getElementById("main-content");
    if (!main) return;
    main.style.opacity = "0";
    main.style.filter = "blur(4px)";
    const timer = setTimeout(() => {
      main.style.transition = "opacity 0.4s ease, filter 0.4s ease";
      main.style.opacity = "1";
      main.style.filter = "blur(0px)";
    }, 50);
    return () => clearTimeout(timer);
  });

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ cursor: "none" }}>
      <CustomCursor />
      <Navbar />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
