import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useSound } from "@/hooks/useSoundEffects";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Building,
  Heart,
  Phone,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

const MILESTONES = [
  {
    year: "2016",
    event: "Founded in Gwalior with a vision to transform real estate.",
  },
  {
    year: "2018",
    event: "Crossed ₹50 Crore in successful property transactions.",
  },
  {
    year: "2020",
    event: "Launched dedicated construction division for luxury builds.",
  },
  {
    year: "2022",
    event: "Reached 300+ satisfied clients milestone in Madhya Pradesh.",
  },
  {
    year: "2024",
    event: "Expanded commercial portfolio with 50+ verified listings.",
  },
  {
    year: "2025",
    event: "Named among top 5 real estate firms in Gwalior region.",
  },
];

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    desc: "We never compromise on honesty. Every deal is fully transparent with no hidden charges.",
  },
  {
    icon: Heart,
    title: "Client First",
    desc: "Your satisfaction is our success. We go above and beyond for every client.",
  },
  {
    icon: Target,
    title: "Excellence",
    desc: "Premium service, premium properties. We set the standard for luxury real estate.",
  },
  {
    icon: Users,
    title: "Community",
    desc: "We're invested in the growth and development of Gwalior as a city.",
  },
];

export default function About() {
  const { playClick } = useSound();

  return (
    <div className="dark pt-20">
      {/* Hero */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: "oklch(0.12 0.005 0)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 70% 50%, rgba(212,175,55,0.06) 0%, transparent 60%)",
          }}
        />
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-animate>
              <Badge
                className="mb-4 text-xs"
                style={{
                  background: "rgba(212,175,55,0.15)",
                  color: "oklch(0.73 0.15 60)",
                  border: "1px solid rgba(212,175,55,0.3)",
                }}
              >
                Est. 2016 · Gwalior
              </Badge>
              <h1 className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-6 leading-tight">
                Gwalior's Most
                <br />
                <span style={{ color: "oklch(0.73 0.15 60)" }}>
                  Trusted Partners
                </span>
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                For over 8 years, Advance Property Construction has been the
                cornerstone of premium real estate in Gwalior. We combine local
                expertise with global luxury standards to deliver unmatched
                property experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Founded on the principles of transparency, integrity, and
                excellence — we've helped 500+ families and businesses find
                their perfect spaces. From luxury residences in Kailash Vihar to
                prime commercial spaces in City Center, we are Gwalior's
                definitive real estate authority.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  className="font-semibold text-primary-foreground shadow-gold-glow"
                  style={{ background: "oklch(0.73 0.15 60)" }}
                  onClick={playClick}
                >
                  <Link to="/contact">
                    Contact Us <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" asChild onClick={playClick}>
                  <a href="tel:+918602640017">
                    <Phone className="w-4 h-4 mr-2" /> Call Now
                  </a>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4" data-animate>
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/assets/generated/property-exterior-1.dim_600x450.jpg"
                  alt="Property"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden mt-8">
                <img
                  src="/assets/generated/property-interior.dim_800x600.jpg"
                  alt="Interior"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden -mt-4">
                <img
                  src="/assets/generated/construction-hero.dim_1200x700.jpg"
                  alt="Construction"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden mt-4">
                <img
                  src="/assets/generated/commercial-office.dim_600x450.jpg"
                  alt="Commercial"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6" data-animate>
            {[
              { icon: Award, num: "8+", label: "Years of Excellence" },
              { icon: Users, num: "500+", label: "Happy Clients" },
              { icon: Building, num: "1000+", label: "Properties Listed" },
              { icon: ShieldCheck, num: "₹200Cr+", label: "Deals Closed" },
            ].map(({ icon: Icon, num, label }) => (
              <div
                key={label}
                className="text-center p-6 rounded-2xl"
                style={{
                  background: "oklch(0.15 0.01 0)",
                  border: "1px solid oklch(0.22 0.01 0)",
                }}
              >
                <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-display font-bold text-3xl text-primary mb-1">
                  {num}
                </p>
                <p className="text-sm text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20" style={{ background: "oklch(0.12 0.005 0)" }}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-14" data-animate>
            <p className="text-xs font-display tracking-widest uppercase text-primary mb-2">
              Our DNA
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                data-animate
                className="p-6 rounded-2xl hover-lift"
                style={{
                  background: "oklch(0.15 0.01 0)",
                  border: "1px solid oklch(0.22 0.01 0)",
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
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

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <div className="text-center mb-14" data-animate>
            <p className="text-xs font-display tracking-widest uppercase text-primary mb-2">
              Our Journey
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
              A Decade of Trust
            </h2>
          </div>
          <div className="relative">
            <div
              className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px"
              style={{ background: "oklch(0.73 0.15 60 / 0.2)" }}
            />
            <div className="space-y-10">
              {MILESTONES.map(({ year, event }, i) => (
                <div
                  key={year}
                  data-animate
                  className={`flex items-center gap-6 sm:gap-0 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div
                    className={`hidden sm:block sm:w-1/2 ${i % 2 === 0 ? "text-right pr-10" : "text-left pl-10"}`}
                  >
                    <div
                      className="p-4 rounded-xl inline-block"
                      style={{
                        background: "oklch(0.15 0.01 0)",
                        border: "1px solid oklch(0.22 0.01 0)",
                      }}
                    >
                      <p className="font-display font-bold text-primary text-lg">
                        {year}
                      </p>
                      <p className="text-sm text-muted-foreground">{event}</p>
                    </div>
                  </div>
                  <div
                    className="relative flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center z-10 sm:absolute sm:left-1/2 sm:-translate-x-1/2"
                    style={{
                      background: "oklch(0.73 0.15 60 / 0.2)",
                      border: "2px solid oklch(0.73 0.15 60 / 0.6)",
                    }}
                  >
                    <span className="font-display font-bold text-xs text-primary">
                      {year.slice(2)}
                    </span>
                  </div>
                  <div className="sm:hidden">
                    <p className="font-display font-bold text-primary">
                      {year}
                    </p>
                    <p className="text-sm text-muted-foreground">{event}</p>
                  </div>
                  <div className="hidden sm:block sm:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: "oklch(0.12 0.005 0)" }}>
        <div
          className="container mx-auto px-4 sm:px-6 text-center"
          data-animate
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            Experience the Advance Property difference — trusted, professional,
            and always on your side.
          </p>
          <Button
            asChild
            size="lg"
            className="font-semibold text-primary-foreground shadow-gold-glow px-10"
            style={{ background: "oklch(0.73 0.15 60)" }}
            onClick={playClick}
          >
            <Link to="/contact">
              Get in Touch <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
