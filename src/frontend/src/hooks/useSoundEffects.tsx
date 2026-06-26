import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

interface SoundContextType {
  isMuted: boolean;
  toggleMute: () => void;
  playClick: () => void;
  playHover: () => void;
}

const SoundContext = createContext<SoundContextType | null>(null);

const CLICK_SRC = "/assets/sounds/click.wav";
const POOL_SIZE = 4;

function isMobileWidth() {
  return typeof window !== "undefined" && window.innerWidth < 768;
}

function createPool(src: string, volume: number): HTMLAudioElement[] {
  return Array.from({ length: POOL_SIZE }, () => {
    const audio = new Audio(src);
    audio.preload = "auto";
    audio.volume = volume;
    return audio;
  });
}

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [isMuted, setIsMuted] = useState<boolean>(() => {
    const stored = localStorage.getItem("apc-muted");
    if (stored !== null) return stored === "true";
    // default muted on mobile
    return isMobileWidth();
  });

  const isMobile = isMobileWidth();

  // Audio pools — created once on mount
  const clickPoolRef = useRef<HTMLAudioElement[]>([]);
  const hoverPoolRef = useRef<HTMLAudioElement[]>([]);
  const clickIndexRef = useRef(0);
  const hoverIndexRef = useRef(0);

  useEffect(() => {
    // Create pools on mount — HTMLAudioElement play() requires user gesture naturally
    const clickVolume = isMobile ? 0.1 : 0.18;
    clickPoolRef.current = createPool(CLICK_SRC, clickVolume);
    hoverPoolRef.current = createPool(CLICK_SRC, 0.05);

    return () => {
      clickPoolRef.current = [];
      hoverPoolRef.current = [];
    };
  }, [isMobile]);

  const playClick = useCallback(() => {
    if (isMuted) return;
    const pool = clickPoolRef.current;
    if (!pool.length) return;
    const audio = pool[clickIndexRef.current];
    clickIndexRef.current = (clickIndexRef.current + 1) % POOL_SIZE;
    audio.currentTime = 0;
    audio.play().catch(() => {});
  }, [isMuted]);

  const playHover = useCallback(() => {
    // Skip hover sounds on mobile for better UX
    if (isMuted || isMobile) return;
    const pool = hoverPoolRef.current;
    if (!pool.length) return;
    const audio = pool[hoverIndexRef.current];
    hoverIndexRef.current = (hoverIndexRef.current + 1) % POOL_SIZE;
    audio.currentTime = 0;
    audio.play().catch(() => {});
  }, [isMuted, isMobile]);

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => {
      const next = !prev;
      localStorage.setItem("apc-muted", String(next));
      return next;
    });
  }, []);

  return (
    <SoundContext.Provider
      value={{ isMuted, toggleMute, playClick, playHover }}
    >
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  const ctx = useContext(SoundContext);
  if (!ctx) throw new Error("useSound must be inside SoundProvider");
  return ctx;
}
