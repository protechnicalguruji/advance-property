import { Button } from "@/components/ui/button";
import { useSound } from "@/hooks/useSoundEffects";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  HardHat,
  Layers,
  Lightbulb,
  Phone,
  Ruler,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const PHASES = [
  {
    phase: "01",
    title: "Design & Planning",
    desc: "Architectural design, structural engineering, BOQ estimation, and permit approvals.",
    icon: Ruler,
  },
  {
    phase: "02",
    title: "Foundation & Structure",
    desc: "Site preparation, foundation laying, RCC framing with premium grade materials.",
    icon: Layers,
  },
  {
    phase: "03",
    title: "Masonry & Roofing",
    desc: "Brick masonry, slab casting, waterproofing, and roof finishing.",
    icon: HardHat,
  },
  {
    phase: "04",
    title: "MEP Installation",
    desc: "Electrical wiring, plumbing systems, HVAC, and fire safety installations.",
    icon: Lightbulb,
  },
  {
    phase: "05",
    title: "Interior Finishing",
    desc: "Flooring, plastering, painting, woodwork, false ceilings, and fixtures.",
    icon: Wrench,
  },
  {
    phase: "06",
    title: "Quality Handover",
    desc: "Final inspection, snag resolution, documentation, and key handover.",
    icon: ShieldCheck,
  },
];

const PROJECTS = [
  {
    title: "Luxury Villa Complex — Kailash Vihar",
    area: "12,000 sq.ft",
    type: "Residential",
    year: "2024",
    image: "/assets/generated/property-exterior-2.dim_600x450.jpg",
  },
  {
    title: "Corporate Office Block — City Center",
    area: "8,500 sq.ft",
    type: "Commercial",
    year: "2023",
    image: "/assets/generated/commercial-office.dim_600x450.jpg",
  },
  {
    title: "Premium Apartments — Thatipur",
    area: "35,000 sq.ft",
    type: "Residential",
    year: "2023",
    image: "/assets/generated/property-exterior-1.dim_600x450.jpg",
  },
  {
    title: "Retail Plaza — Morar Market",
    area: "6,200 sq.ft",
    type: "Commercial",
    year: "2022",
    image: "/assets/generated/commercial-shop.dim_600x450.jpg",
  },
  {
    title: "Independent Bungalow — Phool Bagh",
    area: "5,500 sq.ft",
    type: "Residential",
    year: "2022",
    image: "/assets/generated/property-exterior-3.dim_600x450.jpg",
  },
  {
    title: "Industrial Warehouse — IICA",
    area: "22,000 sq.ft",
    type: "Industrial",
    year: "2021",
    image: "/assets/generated/construction-project.dim_600x450.jpg",
  },
];

export default function Construction() {
  const { playClick } = useSound();

  return (
    <div className="dark pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/assets/generated/construction-hero.dim_1200x700.jpg')`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(10,10,10,0.82)" }}
        />
        <div
          className="container mx-auto px-4 sm:px-6 relative z-10"
          data-animate
        >
          <div className="max-w-2xl">
            <p className="text-xs font-display tracking-widest uppercase text-primary mb-3">
              Build Premium
            </p>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-6 leading-tight">
              End-to-End Construction Services
            </h1>
            <p className="text-white/70 leading-relaxed mb-8 text-lg">
              From architectural vision to final handover — we build luxury
              homes and commercial spaces with unmatched precision, premium
              materials, and complete transparency in costing.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="font-semibold text-primary-foreground shadow-gold-glow px-8"
                style={{ background: "oklch(0.73 0.15 60)" }}
                asChild
                onClick={playClick}
              >
                <Link to="/contact">
                  Get Quote <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
                asChild
                onClick={playClick}
              >
                <a href="tel:+918602640017">
                  <Phone className="w-4 h-4 mr-2" /> Call Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4" data-animate>
            {[
              { num: "50+", label: "Projects Completed" },
              { num: "8 Yrs", label: "Construction Experience" },
              { num: "100%", label: "On-Time Delivery" },
              { num: "Zero", label: "Quality Compromises" },
            ].map(({ num, label }) => (
              <div
                key={label}
                className="p-5 rounded-xl text-center"
                style={{
                  background: "oklch(0.15 0.01 0)",
                  border: "1px solid oklch(0.22 0.01 0)",
                }}
              >
                <p className="font-display font-bold text-2xl text-primary mb-1">
                  {num}
                </p>
                <p className="text-xs text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Process */}
      <section className="py-20" style={{ background: "oklch(0.12 0.005 0)" }}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-14" data-animate>
            <p className="text-xs font-display tracking-widest uppercase text-primary mb-2">
              Our Approach
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
              6-Phase Build Process
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PHASES.map(({ phase, title, desc, icon: Icon }, i) => (
              <div
                key={phase}
                data-animate
                className="p-6 rounded-2xl group hover-lift"
                style={{
                  background: "oklch(0.15 0.01 0)",
                  border: "1px solid oklch(0.22 0.01 0)",
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:shadow-gold-glow transition-smooth"
                    style={{
                      background: "rgba(212,175,55,0.1)",
                      border: "1px solid rgba(212,175,55,0.2)",
                    }}
                  >
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span
                    className="font-display font-bold text-3xl"
                    style={{ color: "rgba(212,175,55,0.15)" }}
                  >
                    {phase}
                  </span>
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

      {/* Project Showcase */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-14" data-animate>
            <p className="text-xs font-display tracking-widest uppercase text-primary mb-2">
              Portfolio
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
              Our Projects
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map(({ title, area, type, year, image }, i) => (
              <div
                key={title}
                data-animate
                className="rounded-2xl overflow-hidden group hover-lift"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="text-xs px-2 py-0.5 rounded-full font-medium"
                        style={{
                          background: "rgba(212,175,55,0.85)",
                          color: "#0a0a0a",
                        }}
                      >
                        {type}
                      </span>
                      <span className="text-xs text-white/60">{year}</span>
                    </div>
                    <h3 className="font-display font-semibold text-sm text-white line-clamp-2">
                      {title}
                    </h3>
                    <p className="text-xs text-white/60 mt-1">{area}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16" style={{ background: "oklch(0.12 0.005 0)" }}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center" data-animate>
            <div>
              <p className="text-xs font-display tracking-widest uppercase text-primary mb-3">
                Premium Package
              </p>
              <h2 className="font-display font-bold text-3xl text-foreground mb-4">
                Everything Included
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our turnkey construction service includes everything from design
                to decoration — no surprise charges, no shortcuts.
              </p>
              <ul className="space-y-2.5">
                {[
                  "Complete architectural design & 3D visualization",
                  "Structural engineering & safety certification",
                  "Premium grade cement, steel & materials",
                  "Electrical, plumbing & HVAC installation",
                  "Italian or Indian marble flooring",
                  "Custom woodwork, kitchens & wardrobes",
                  "Exterior painting & landscaping",
                  "5-year post-construction warranty",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                className="mt-8 font-semibold text-primary-foreground shadow-gold-glow"
                style={{ background: "oklch(0.73 0.15 60)" }}
                asChild
                onClick={playClick}
              >
                <Link to="/contact">
                  Get Free Estimate <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
            <img
              src="/assets/generated/construction-project.dim_600x450.jpg"
              alt="Construction Project"
              className="w-full rounded-2xl object-cover shadow-elevation-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
