import { useSound } from "@/hooks/useSoundEffects";
import { ChevronUp, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

const WHATSAPP_LINK =
  "https://wa.me/918602640017?text=Hello%20I%20am%20interested%20in%20your%20property%20services";

export function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);
  const { playClick } = useSound();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-center gap-3">
      <button
        type="button"
        onClick={scrollToTop}
        data-ocid="back-to-top-btn"
        aria-label="Back to top"
        className="w-11 h-11 rounded-full flex items-center justify-center transition-smooth hover:scale-110"
        style={{
          background: "rgba(212,175,55,0.15)",
          border: "1px solid rgba(212,175,55,0.4)",
          backdropFilter: "blur(8px)",
          boxShadow: "0 0 16px rgba(212,175,55,0.2)",
          opacity: showTop ? 1 : 0,
          pointerEvents: showTop ? "auto" : "none",
          transform: showTop
            ? "translateY(0) scale(1)"
            : "translateY(16px) scale(0.8)",
          transition: "opacity 0.3s, transform 0.3s",
        }}
      >
        <ChevronUp className="w-5 h-5 text-primary" />
      </button>

      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        data-ocid="whatsapp-btn"
        aria-label="Chat on WhatsApp"
        onClick={playClick}
        className="rounded-full flex items-center justify-center animate-pulse-glow"
        style={{
          width: 52,
          height: 52,
          background: "linear-gradient(135deg, #25D366, #128C7E)",
          boxShadow: "0 4px 20px rgba(37,211,102,0.5)",
        }}
      >
        <MessageCircle className="w-6 h-6 text-white fill-white" />
      </a>
    </div>
  );
}
