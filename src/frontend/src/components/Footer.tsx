import { Link } from "@tanstack/react-router";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/properties", label: "Properties" },
  { to: "/commercial", label: "Commercial" },
  { to: "/construction", label: "Construction" },
];

const moreLinks = [
  { to: "/gallery", label: "Gallery" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
];

const PHONE = "+91 8602640017";
const PHONE_HREF = "tel:+918602640017";
const WA_HREF =
  "https://wa.me/918602640017?text=Hello%20I%20am%20interested%20in%20your%20property%20services";

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.hostname)
      : "";

  return (
    <footer
      style={{
        background: "oklch(0.09 0.005 0)",
        borderTop: "1px solid oklch(0.22 0.01 0 / 0.6)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <p
                className="font-display font-bold text-xl tracking-wide"
                style={{ color: "oklch(0.73 0.15 60)" }}
              >
                ADVANCE PROPERTY
              </p>
              <p className="font-display text-xs tracking-[0.25em] uppercase text-foreground/60">
                Construction
              </p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Gwalior's most trusted real estate partner with 8+ years of
              excellence. Verified properties, transparent pricing, and fast
              deals guaranteed.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary transition-smooth"
                style={{
                  background: "rgba(212,175,55,0.08)",
                  border: "1px solid rgba(212,175,55,0.15)",
                }}
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary transition-smooth"
                style={{
                  background: "rgba(212,175,55,0.08)",
                  border: "1px solid rgba(212,175,55,0.15)",
                }}
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full flex items-center justify-center text-muted-foreground hover:text-green-400 transition-smooth"
                style={{
                  background: "rgba(37,211,102,0.08)",
                  border: "1px solid rgba(37,211,102,0.2)",
                }}
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-sm tracking-widest uppercase text-primary mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="font-display font-semibold text-sm tracking-widest uppercase text-primary mb-4">
              Explore
            </h4>
            <ul className="space-y-2">
              {moreLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-sm tracking-widest uppercase text-primary mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">
                  City Center, Kailash Vihar,
                  <br />
                  Gwalior, Madhya Pradesh, India
                </span>
              </li>
              <li>
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  {PHONE}
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@advanceproperty.in"
                  className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  info@advanceproperty.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t"
        style={{ borderColor: "oklch(0.22 0.01 0 / 0.5)" }}
      >
        <div className="container mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>
            © {year} Advance Property Construction. All rights reserved.
          </span>
          <span>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary/70 hover:text-primary transition-colors"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
