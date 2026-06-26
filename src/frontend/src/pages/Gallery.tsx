import { useSound } from "@/hooks/useSoundEffects";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";

const GALLERY_ITEMS = [
  {
    id: "g1",
    image: "/assets/generated/hero-luxury-property.dim_1400x800.jpg",
    title: "Luxury Villa Complex",
    category: "Exterior",
  },
  {
    id: "g2",
    image: "/assets/generated/property-exterior-1.dim_600x450.jpg",
    title: "Premium Apartment Block",
    category: "Exterior",
  },
  {
    id: "g3",
    image: "/assets/generated/property-exterior-2.dim_600x450.jpg",
    title: "Duplex Villa",
    category: "Exterior",
  },
  {
    id: "g4",
    image: "/assets/generated/property-exterior-3.dim_600x450.jpg",
    title: "Penthouse Suite",
    category: "Interior",
  },
  {
    id: "g5",
    image: "/assets/generated/property-interior.dim_800x600.jpg",
    title: "Grand Living Room",
    category: "Interior",
  },
  {
    id: "g6",
    image: "/assets/generated/commercial-hero.dim_1200x700.jpg",
    title: "Corporate Office Tower",
    category: "Commercial",
  },
  {
    id: "g7",
    image: "/assets/generated/commercial-office.dim_600x450.jpg",
    title: "Executive Office Space",
    category: "Commercial",
  },
  {
    id: "g8",
    image: "/assets/generated/commercial-shop.dim_600x450.jpg",
    title: "Premium Retail Shop",
    category: "Commercial",
  },
  {
    id: "g9",
    image: "/assets/generated/construction-hero.dim_1200x700.jpg",
    title: "Under Construction View",
    category: "Construction",
  },
  {
    id: "g10",
    image: "/assets/generated/construction-project.dim_600x450.jpg",
    title: "Project Progress Aerial",
    category: "Construction",
  },
  {
    id: "g11",
    image: "/assets/generated/property-exterior-1.dim_600x450.jpg",
    title: "Garden & Landscaping",
    category: "Exterior",
  },
  {
    id: "g12",
    image: "/assets/generated/property-interior.dim_800x600.jpg",
    title: "Luxury Master Bedroom",
    category: "Interior",
  },
];

const CATEGORIES = [
  "All",
  "Exterior",
  "Interior",
  "Commercial",
  "Construction",
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { playClick } = useSound();

  const filtered =
    activeCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((g) => g.category === activeCategory);

  const lightboxItem = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    playClick();
  };

  const closeLightbox = () => setLightboxIndex(null);

  const goNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filtered.length);
    playClick();
  };

  const goPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
    playClick();
  };

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  });

  return (
    <div className="dark pt-20">
      {/* Header */}
      <section className="py-16" style={{ background: "oklch(0.12 0.005 0)" }}>
        <div
          className="container mx-auto px-4 sm:px-6 text-center"
          data-animate
        >
          <p className="text-xs font-display tracking-widest uppercase text-primary mb-3">
            Portfolio
          </p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-4">
            Our Gallery
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A visual showcase of our premium properties, luxury interiors, and
            construction excellence across Gwalior.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section
        className="py-4 border-b border-border/30"
        style={{
          background: "oklch(0.12 0.005 0)",
          position: "sticky",
          top: "4rem",
          zIndex: 30,
        }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveCategory(cat);
                  setLightboxIndex(null);
                  playClick();
                }}
                data-ocid={`gallery-filter-${cat.toLowerCase()}`}
                className="px-4 py-1.5 rounded-full text-xs font-medium transition-smooth"
                style={{
                  background:
                    activeCategory === cat
                      ? "oklch(0.73 0.15 60)"
                      : "rgba(255,255,255,0.06)",
                  color:
                    activeCategory === cat
                      ? "oklch(0.098 0 0)"
                      : "oklch(0.55 0 0)",
                  border:
                    activeCategory === cat
                      ? "1px solid transparent"
                      : "1px solid oklch(0.25 0.01 0)",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((item, i) => (
              <button
                key={item.id}
                type="button"
                data-animate
                data-cursor="View"
                className="relative overflow-hidden rounded-xl group cursor-pointer break-inside-avoid w-full text-left"
                style={{ animationDelay: `${i * 0.06}s` }}
                onClick={() => openLightbox(i)}
                aria-label={`View ${item.title}`}
                data-ocid={`gallery-item-${item.id}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="font-display font-semibold text-sm text-white">
                    {item.title}
                  </p>
                  <p className="text-xs text-white/60">{item.category}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxItem && lightboxIndex !== null && (
        <dialog
          open
          className="fixed inset-0 z-50 flex items-center justify-center p-4 m-0 w-full h-full max-w-none max-h-none border-none"
          style={{
            background: "rgba(0,0,0,0.92)",
            backdropFilter: "blur(12px)",
          }}
          onClick={closeLightbox}
          onKeyDown={(e) => e.key === "Escape" && closeLightbox()}
          aria-label="Image Lightbox"
          data-ocid="gallery-lightbox"
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
            role="presentation"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute -top-12 right-0 w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-colors"
              style={{ background: "rgba(255,255,255,0.1)" }}
              aria-label="Close lightbox"
              data-ocid="lightbox-close-btn"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 w-11 h-11 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-colors"
              style={{ background: "rgba(255,255,255,0.12)" }}
              aria-label="Previous image"
              data-ocid="lightbox-prev-btn"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 w-11 h-11 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-colors"
              style={{ background: "rgba(255,255,255,0.12)" }}
              aria-label="Next image"
              data-ocid="lightbox-next-btn"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <img
              src={lightboxItem.image}
              alt={lightboxItem.title}
              className="w-full rounded-xl object-cover max-h-[80vh]"
            />
            <div className="mt-3 text-center">
              <p className="font-display font-semibold text-white">
                {lightboxItem.title}
              </p>
              <p className="text-sm text-white/50">
                {lightboxItem.category} &nbsp;·&nbsp; {lightboxIndex + 1} /{" "}
                {filtered.length}
              </p>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
}
