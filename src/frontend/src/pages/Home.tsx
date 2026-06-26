import { EMICalculator } from "@/components/EMICalculator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { properties, testimonials } from "@/data/properties";
import { useSound } from "@/hooks/useSoundEffects";
import { useWishlist } from "@/hooks/useWishlist";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Bath,
  BedDouble,
  Calculator,
  ChevronRight,
  Heart,
  MapPin,
  Maximize2,
  MessageCircle,
  Phone,
  ShieldCheck,
  TrendingUp,
  Zap,
} from "lucide-react";
import { useState } from "react";

const WHY_CHOOSE = [
  {
    icon: ShieldCheck,
    title: "Verified Properties",
    desc: "Every listing is personally verified by our experts for authenticity and clear title.",
  },
  {
    icon: TrendingUp,
    title: "Transparent Pricing",
    desc: "No hidden charges. What you see is exactly what you pay — guaranteed.",
  },
  {
    icon: Zap,
    title: "Fast Deals",
    desc: "From property search to possession — we close deals in record time.",
  },
  {
    icon: Award,
    title: "8+ Years Experience",
    desc: "A decade of trust in Gwalior's real estate market with 500+ happy clients.",
  },
];

function PropertyCard({ property }: { property: (typeof properties)[0] }) {
  const { isWishlisted, addToWishlist, removeFromWishlist } = useWishlist();
  const { playClick } = useSound();
  const wishlisted = isWishlisted(property.id);

  return (
    <Card
      data-ocid={`property-card-${property.id}`}
      className="overflow-hidden group hover-lift border-border/30"
      style={{ background: "oklch(0.15 0.01 0)" }}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        {property.isVerified && (
          <Badge
            className="absolute top-3 left-3 text-xs"
            style={{ background: "rgba(212,175,55,0.9)", color: "#0a0a0a" }}
          >
            <ShieldCheck className="w-3 h-3 mr-1" /> Verified
          </Badge>
        )}
        {property.isFeatured && (
          <Badge
            className="absolute top-3 right-12 text-xs"
            style={{ background: "rgba(139,0,0,0.85)", color: "#fff" }}
          >
            Featured
          </Badge>
        )}
        <button
          type="button"
          onClick={() => {
            playClick();
            wishlisted
              ? removeFromWishlist(property.id)
              : addToWishlist(property);
          }}
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-smooth"
          style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)" }}
        >
          <Heart
            className={`w-4 h-4 ${wishlisted ? "fill-primary text-primary" : "text-white"}`}
          />
        </button>
        <div className="absolute bottom-3 left-3">
          <p className="text-xl font-display font-bold text-white">
            {property.priceLabel}
          </p>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-display font-semibold text-sm mb-1 line-clamp-2 text-foreground">
          {property.title}
        </h3>
        <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
          <MapPin className="w-3 h-3" />
          {property.location}
        </div>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          {property.bedrooms && (
            <span className="flex items-center gap-1">
              <BedDouble className="w-3.5 h-3.5" />
              {property.bedrooms} Beds
            </span>
          )}
          {property.bathrooms && (
            <span className="flex items-center gap-1">
              <Bath className="w-3.5 h-3.5" />
              {property.bathrooms} Baths
            </span>
          )}
          <span className="flex items-center gap-1">
            <Maximize2 className="w-3.5 h-3.5" />
            {property.area} {property.areaUnit}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default function Home() {
  const [emiOpen, setEmiOpen] = useState(false);
  const { playClick } = useSound();
  const featured = properties.filter((p) => p.isFeatured);

  return (
    <div className="dark">
      <EMICalculator open={emiOpen} onClose={() => setEmiOpen(false)} />

      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ paddingTop: "5rem" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/assets/generated/hero-luxury-property.dim_1400x800.jpg')`,
            transform: "scale(1.05)",
            animation: "heroZoom 20s ease-in-out infinite alternate",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.65) 50%, rgba(10,10,10,0.8) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 20% 50%, rgba(212,175,55,0.08) 0%, transparent 60%)",
          }}
        />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <p
              className="text-xs sm:text-sm font-display tracking-[0.35em] uppercase mb-4 animate-fade-in"
              style={{ color: "oklch(0.73 0.15 60)" }}
            >
              Gwalior's Premier Real Estate
            </p>
            <h1
              className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl text-white mb-4 leading-tight animate-slide-up"
              style={{ textShadow: "0 4px 32px rgba(0,0,0,0.8)" }}
            >
              Luxury Properties
              <br />
              <span style={{ color: "oklch(0.73 0.15 60)" }}>in Gwalior</span>
            </h1>
            <p
              className="text-lg sm:text-xl text-white/75 mb-8 animate-slide-up font-light"
              style={{ animationDelay: "0.1s" }}
            >
              Fast Property Deals Guaranteed — Verified, Transparent, Trusted.
            </p>

            <div
              className="flex flex-wrap items-center justify-center gap-4 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Button
                asChild
                size="lg"
                data-ocid="hero-view-properties-btn"
                className="font-semibold text-primary-foreground px-8 shadow-gold-glow hover:shadow-gold-glow animate-pulse-glow"
                style={{ background: "oklch(0.73 0.15 60)" }}
                onClick={playClick}
              >
                <Link to="/properties">
                  View Properties <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                data-ocid="hero-book-visit-btn"
                className="font-semibold px-8 border-white/30 text-white hover:bg-white/10"
                asChild
                onClick={playClick}
              >
                <a href="tel:+918602640017">
                  <Phone className="w-4 h-4 mr-2" /> Book Site Visit
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              {[
                { num: "500+", label: "Happy Clients" },
                { num: "8+", label: "Years Experience" },
                { num: "₹200Cr+", label: "Deals Closed" },
                { num: "100%", label: "Verified Listings" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl p-4 text-center"
                  style={{
                    background: "rgba(212,175,55,0.08)",
                    border: "1px solid rgba(212,175,55,0.15)",
                  }}
                >
                  <p className="font-display font-bold text-2xl text-primary">
                    {stat.num}
                  </p>
                  <p className="text-xs text-white/60 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-float">
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-primary/60 to-transparent" />
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-12" data-animate>
            <div>
              <p className="text-xs font-display tracking-widest uppercase text-primary mb-2">
                Featured
              </p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
                Premium Listings
              </h2>
            </div>
            <Link
              to="/properties"
              className="hidden sm:flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((property, i) => (
              <div
                key={property.id}
                data-animate
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <PropertyCard property={property} />
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline" onClick={playClick}>
              <Link to="/properties">
                View All Properties <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20" style={{ background: "oklch(0.12 0.005 0)" }}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-14" data-animate>
            <p className="text-xs font-display tracking-widest uppercase text-primary mb-2">
              Our Promise
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
              Why Choose Us?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                data-animate
                className="p-6 rounded-2xl hover-lift group"
                style={{
                  background: "oklch(0.15 0.01 0)",
                  border: "1px solid oklch(0.22 0.01 0)",
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:shadow-gold-glow transition-smooth"
                  style={{
                    background: "rgba(212,175,55,0.1)",
                    border: "1px solid rgba(212,175,55,0.2)",
                  }}
                >
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-14" data-animate>
            <p className="text-xs font-display tracking-widest uppercase text-primary mb-2">
              What We Do
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
              Our Services
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Property Buying & Selling",
                desc: "Residential & commercial properties with full legal assistance and fast closings.",
                to: "/services",
                img: "/assets/generated/property-exterior-1.dim_600x450.jpg",
              },
              {
                title: "Construction Services",
                desc: "End-to-end construction from foundation to finishing with premium materials.",
                to: "/construction",
                img: "/assets/generated/construction-hero.dim_1200x700.jpg",
              },
              {
                title: "Commercial Real Estate",
                desc: "Shops, offices, warehouses, and showrooms in prime Gwalior locations.",
                to: "/commercial",
                img: "/assets/generated/commercial-hero.dim_1200x700.jpg",
              },
            ].map(({ title, desc, to, img }, i) => (
              <Link
                key={title}
                to={to}
                data-animate
                data-cursor="View"
                className="relative overflow-hidden rounded-2xl group hover-lift block"
                style={{ animationDelay: `${i * 0.1}s` }}
                onClick={playClick}
              >
                <img
                  src={img}
                  alt={title}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-display font-bold text-lg text-white mb-1">
                    {title}
                  </h3>
                  <p className="text-sm text-white/70 mb-3">{desc}</p>
                  <span className="inline-flex items-center gap-1 text-xs text-primary font-semibold">
                    Learn More <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20" style={{ background: "oklch(0.12 0.005 0)" }}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-12" data-animate>
            <div>
              <p className="text-xs font-display tracking-widest uppercase text-primary mb-2">
                Client Love
              </p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
                What They Say
              </h2>
            </div>
            <Link
              to="/testimonials"
              className="hidden sm:flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all"
            >
              All Reviews <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t, i) => (
              <div
                key={t.id}
                data-animate
                className="p-6 rounded-2xl"
                style={{
                  background: "oklch(0.15 0.01 0)",
                  border: "1px solid oklch(0.22 0.01 0)",
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                <div className="flex gap-0.5 mb-3">
                  {"★"
                    .repeat(t.rating)
                    .split("")
                    .map((s, j) => (
                      <span
                        key={`star-${t.id}-${j}`}
                        className="text-primary text-sm"
                      >
                        {s}
                      </span>
                    ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                  "{t.content}"
                </p>
                <div>
                  <p className="font-display font-semibold text-sm text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.098 0 0) 0%, oklch(0.15 0.005 0) 100%)",
          borderTop: "1px solid oklch(0.22 0.01 0 / 0.5)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 100%, rgba(212,175,55,0.07) 0%, transparent 70%)",
          }}
        />
        <div
          className="container mx-auto px-4 sm:px-6 text-center relative z-10"
          data-animate
        >
          <p className="text-xs font-display tracking-widest uppercase text-primary mb-3">
            Get Started Today
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-foreground mb-4">
            Find Your Perfect Property
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
            Whether you're buying, selling, or investing — our experts are ready
            to guide you every step of the way.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              className="font-semibold text-primary-foreground px-8 shadow-gold-glow hover:shadow-gold-glow"
              style={{ background: "oklch(0.73 0.15 60)" }}
              onClick={() => {
                setEmiOpen(true);
                playClick();
              }}
              data-ocid="home-emi-btn"
            >
              <Calculator className="w-4 h-4 mr-2" /> EMI Calculator
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-semibold px-8"
              asChild
              onClick={playClick}
            >
              <a
                href="https://wa.me/918602640017?text=Hello%20I%20am%20interested%20in%20your%20property%20services"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes heroZoom {
          from { transform: scale(1.0); }
          to { transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
}
