import { Button } from "@/components/ui/button";
import { useSound } from "@/hooks/useSoundEffects";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building,
  CheckCircle2,
  Handshake,
  HardHat,
  Home,
} from "lucide-react";

const SERVICES = [
  {
    icon: Home,
    title: "Property Buying & Selling",
    desc: "Whether you're a first-time buyer or a seasoned investor, we offer end-to-end support for residential and commercial property transactions.",
    features: [
      "Market value assessment",
      "Legal due diligence",
      "Negotiation expertise",
      "Paperwork & registration",
      "Post-sale support",
    ],
    image: "/assets/generated/property-exterior-1.dim_600x450.jpg",
    link: "/properties",
  },
  {
    icon: Building,
    title: "Commercial Property Deals",
    desc: "Access Gwalior's finest commercial spaces — offices, shops, showrooms, and warehouses in strategic locations for maximum ROI.",
    features: [
      "Prime location scouting",
      "Commercial lease assistance",
      "Zoning compliance check",
      "ROI analysis",
      "Business setup advisory",
    ],
    image: "/assets/generated/commercial-office.dim_600x450.jpg",
    link: "/commercial",
  },
  {
    icon: HardHat,
    title: "Construction Services",
    desc: "From blueprint to beautiful home — we deliver premium construction with transparent timelines, quality materials, and skilled craftsmanship.",
    features: [
      "Architectural design",
      "Structural engineering",
      "Interior finishing",
      "Electrical & plumbing",
      "Quality inspections",
    ],
    image: "/assets/generated/construction-hero.dim_1200x700.jpg",
    link: "/construction",
  },
  {
    icon: Handshake,
    title: "Brokerage Services",
    desc: "Our expert brokers connect buyers and sellers efficiently. Maximum exposure for sellers, best deals for buyers — with zero hassle.",
    features: [
      "Verified buyer/seller matching",
      "360° property marketing",
      "Virtual property tours",
      "Price benchmarking",
      "Close in 2-4 weeks",
    ],
    image: "/assets/generated/property-exterior-2.dim_600x450.jpg",
    link: "/contact",
  },
];

export default function Services() {
  const { playClick } = useSound();

  return (
    <div className="dark pt-20">
      {/* Hero */}
      <section className="py-20" style={{ background: "oklch(0.12 0.005 0)" }}>
        <div
          className="container mx-auto px-4 sm:px-6 text-center"
          data-animate
        >
          <p className="text-xs font-display tracking-widest uppercase text-primary mb-3">
            What We Offer
          </p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-6">
            Comprehensive Real Estate Services
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            From finding your dream home to building it from scratch — Advance
            Property Construction offers a full spectrum of real estate and
            construction services across Gwalior.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 space-y-20">
          {SERVICES.map(
            ({ icon: Icon, title, desc, features, image, link }, i) => (
              <div
                key={title}
                data-animate
                className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{
                        background: "rgba(212,175,55,0.1)",
                        border: "1px solid rgba(212,175,55,0.25)",
                      }}
                    >
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-xs font-display tracking-widest uppercase text-primary">
                      Service {String(i + 1).padStart(2, "0")}
                    </p>
                  </div>
                  <h2 className="font-display font-bold text-3xl text-foreground mb-4">
                    {title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {desc}
                  </p>
                  <ul className="space-y-2 mb-8">
                    {features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2.5 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className="font-semibold text-primary-foreground shadow-gold-glow"
                    style={{ background: "oklch(0.73 0.15 60)" }}
                    onClick={playClick}
                  >
                    <Link to={link}>
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>

                <div
                  className={`rounded-2xl overflow-hidden shadow-elevation-lg ${i % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <img
                    src={image}
                    alt={title}
                    className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            ),
          )}
        </div>
      </section>

      {/* Process */}
      <section className="py-20" style={{ background: "oklch(0.12 0.005 0)" }}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-14" data-animate>
            <p className="text-xs font-display tracking-widest uppercase text-primary mb-2">
              How It Works
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
              Our Simple Process
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Consultation",
                desc: "Share your requirements with our expert advisors — in person, by phone, or via WhatsApp.",
              },
              {
                step: "02",
                title: "Property Match",
                desc: "We curate a shortlist of verified properties that match your budget and preferences.",
              },
              {
                step: "03",
                title: "Site Visit",
                desc: "Visit shortlisted properties personally with our guided tour assistance.",
              },
              {
                step: "04",
                title: "Deal Closure",
                desc: "We handle all paperwork, negotiations, and legal formalities for a smooth closing.",
              },
            ].map(({ step, title, desc }, i) => (
              <div
                key={step}
                data-animate
                className="relative p-6 rounded-2xl"
                style={{
                  background: "oklch(0.15 0.01 0)",
                  border: "1px solid oklch(0.22 0.01 0)",
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                <span
                  className="font-display font-bold text-5xl"
                  style={{ color: "rgba(212,175,55,0.1)" }}
                >
                  {step}
                </span>
                <h3 className="font-display font-semibold text-lg text-foreground mt-2 mb-2">
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

      {/* CTA */}
      <section className="py-16 bg-background">
        <div
          className="container mx-auto px-4 sm:px-6 text-center"
          data-animate
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            Let our experts guide you to your perfect property. Book a free
            consultation today.
          </p>
          <Button
            asChild
            size="lg"
            className="font-semibold text-primary-foreground shadow-gold-glow px-10"
            style={{ background: "oklch(0.73 0.15 60)" }}
            onClick={playClick}
          >
            <Link to="/contact">
              Book Free Consultation <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
