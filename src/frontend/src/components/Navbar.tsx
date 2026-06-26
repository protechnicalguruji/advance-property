import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useSound } from "@/hooks/useSoundEffects";
import { useWishlist } from "@/hooks/useWishlist";
import { Link, useRouterState } from "@tanstack/react-router";
import { Heart, Menu, Volume2, VolumeX, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/properties", label: "Properties" },
  { to: "/commercial", label: "Commercial" },
  { to: "/construction", label: "Construction" },
  { to: "/gallery", label: "Gallery" },
  { to: "/testimonials", label: "Reviews" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count } = useWishlist();
  const { isMuted, toggleMute, playClick, playHover } = useSound();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const prevPathnameRef = useRef(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;
      setMobileOpen(false);
    }
  });

  return (
    <header
      data-ocid="navbar"
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-500"
      style={{
        background: scrolled ? "oklch(0.12 0.005 0 / 0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid oklch(0.22 0.01 0 / 0.6)" : "none",
        boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.4)" : "none",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            onClick={playClick}
            className="flex flex-col leading-tight group"
          >
            <span
              className="font-display font-bold text-base md:text-lg tracking-wide"
              style={{ color: "oklch(0.73 0.15 60)", lineHeight: 1.1 }}
            >
              ADVANCE PROPERTY
            </span>
            <span className="font-display text-xs md:text-sm text-foreground/70 tracking-[0.2em] uppercase">
              Construction
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onMouseEnter={playHover}
                onClick={playClick}
                className="relative px-3 py-2 text-sm font-medium text-foreground/75 hover:text-primary transition-colors duration-200 group"
              >
                {link.label}
                <span
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-4/5 transition-all duration-300 rounded-full"
                  style={{ background: "oklch(0.73 0.15 60)" }}
                />
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                toggleMute();
                playClick();
              }}
              data-ocid="sound-toggle"
              aria-label={isMuted ? "Unmute sounds" : "Mute sounds"}
              className="hidden md:flex w-9 h-9 items-center justify-center rounded-full transition-smooth"
              style={{
                background: isMuted
                  ? "rgba(255,255,255,0.04)"
                  : "rgba(205,155,50,0.12)",
                color: isMuted ? "oklch(0.55 0.01 0)" : "oklch(0.73 0.15 60)",
                border: isMuted
                  ? "1px solid rgba(255,255,255,0.06)"
                  : "1px solid oklch(0.73 0.15 60 / 0.35)",
              }}
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </button>

            <Link
              to="/properties"
              data-ocid="wishlist-nav-btn"
              onClick={playClick}
              className="relative hidden md:flex w-9 h-9 items-center justify-center rounded-full transition-smooth text-muted-foreground hover:text-primary"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              <Heart className="w-4 h-4" />
              {count > 0 && (
                <Badge
                  className="absolute -top-1 -right-1 w-4 h-4 p-0 flex items-center justify-center text-[10px] font-bold border-none"
                  style={{ background: "oklch(0.39 0.27 25)" }}
                >
                  {count}
                </Badge>
              )}
            </Link>

            <Button
              asChild
              size="sm"
              className="hidden md:flex font-semibold text-primary-foreground shadow-gold-glow-sm hover:shadow-gold-glow transition-smooth"
              style={{ background: "oklch(0.73 0.15 60)" }}
              onClick={playClick}
            >
              <a href="tel:+918602640017">Call Now</a>
            </Button>

            <button
              type="button"
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full"
              style={{ background: "rgba(255,255,255,0.05)" }}
              onClick={() => {
                setMobileOpen((o) => !o);
                playClick();
              }}
              aria-label="Toggle menu"
              data-ocid="mobile-menu-btn"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t"
          style={{
            background: "oklch(0.12 0.005 0 / 0.98)",
            borderColor: "oklch(0.22 0.01 0)",
            backdropFilter: "blur(20px)",
          }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={playClick}
                className="px-4 py-3 rounded-lg text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 mt-3 pt-3 border-t border-border/30">
              <Button
                asChild
                size="sm"
                className="flex-1 font-semibold text-primary-foreground"
                style={{ background: "oklch(0.73 0.15 60)" }}
              >
                <a href="tel:+918602640017">Call Now</a>
              </Button>
              <button
                type="button"
                onClick={() => {
                  toggleMute();
                  playClick();
                }}
                className="w-9 h-9 flex items-center justify-center rounded-full text-muted-foreground"
                style={{ background: "rgba(255,255,255,0.05)" }}
                aria-label="Toggle sound"
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4" />
                ) : (
                  <Volume2 className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
