import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useSound } from "@/hooks/useSoundEffects";
import {
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";

const PHONE = "+91 8602640017";
const PHONE_HREF = "tel:+918602640017";
const WA_HREF =
  "https://wa.me/918602640017?text=Hello%20I%20am%20interested%20in%20your%20property%20services";

type FormErrors = {
  name?: string;
  email?: string;
  phone?: string;
};

function validateForm(form: {
  name: string;
  email: string;
  phone: string;
}): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = "Name is required.";
  if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = "Enter a valid email address.";
  const digits = form.phone.replace(/\D/g, "");
  if (!form.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (digits.length < 10) {
    errors.phone = "Phone must be at least 10 digits.";
  }
  return errors;
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const { playClick } = useSound();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    playClick();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="dark pt-20">
      {/* Hero */}
      <section className="py-16" style={{ background: "oklch(0.12 0.005 0)" }}>
        <div
          className="container mx-auto px-4 sm:px-6 text-center"
          data-animate
        >
          <p className="text-xs font-display tracking-widest uppercase text-primary mb-3">
            Let's Talk
          </p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Whether you're looking to buy, sell, invest, or build — our team is
            here to help. Reach us by phone, WhatsApp, or fill the form below.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14"
            data-animate
          >
            {[
              {
                icon: Phone,
                label: "Call Us",
                value: PHONE,
                href: PHONE_HREF,
                desc: "Mon–Sat, 9 AM – 7 PM",
                color: "rgba(212,175,55,0.1)",
                borderColor: "rgba(212,175,55,0.2)",
              },
              {
                icon: MessageCircle,
                label: "WhatsApp",
                value: "Chat with us",
                href: WA_HREF,
                desc: "Quick response guaranteed",
                color: "rgba(37,211,102,0.1)",
                borderColor: "rgba(37,211,102,0.2)",
              },
              {
                icon: Mail,
                label: "Email",
                value: "info@advanceproperty.in",
                href: "mailto:info@advanceproperty.in",
                desc: "We reply within 24 hours",
                color: "rgba(212,175,55,0.1)",
                borderColor: "rgba(212,175,55,0.2)",
              },
            ].map(
              ({
                icon: Icon,
                label,
                value,
                href,
                desc,
                color,
                borderColor,
              }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  data-ocid={`contact-${label.toLowerCase().replace(" ", "-")}`}
                  className="p-6 rounded-2xl hover-lift flex flex-col items-center text-center transition-smooth group"
                  style={{
                    background: color,
                    border: `1px solid ${borderColor}`,
                  }}
                  onClick={playClick}
                >
                  <Icon className="w-8 h-8 text-primary mb-3" />
                  <p className="font-display font-semibold text-foreground mb-1">
                    {label}
                  </p>
                  <p className="text-sm text-primary font-medium mb-1">
                    {value}
                  </p>
                  <p className="text-xs text-muted-foreground">{desc}</p>
                </a>
              ),
            )}
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Contact Form */}
            <div
              className="p-8 rounded-2xl"
              style={{
                background: "oklch(0.15 0.01 0)",
                border: "1px solid oklch(0.22 0.01 0)",
              }}
              data-animate
            >
              {submitted ? (
                <div className="text-center py-10" data-ocid="contact-success">
                  <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you! Our team will reach out within 24 hours.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: "",
                        phone: "",
                        email: "",
                        interest: "",
                        message: "",
                      });
                      setErrors({});
                    }}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <h2 className="font-display font-bold text-xl text-foreground mb-6">
                    Send Us a Message
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label
                        htmlFor="name"
                        className="text-xs mb-1.5 block text-muted-foreground"
                      >
                        Your Name *
                      </Label>
                      <Input
                        id="name"
                        placeholder="Rajesh Sharma"
                        value={form.name}
                        onChange={(e) => {
                          setForm((f) => ({ ...f, name: e.target.value }));
                          if (errors.name)
                            setErrors((err) => ({ ...err, name: undefined }));
                        }}
                        data-ocid="contact-name-input"
                        aria-invalid={!!errors.name}
                        style={
                          errors.name
                            ? { borderColor: "oklch(0.45 0.18 25)" }
                            : undefined
                        }
                      />
                      {errors.name && (
                        <p
                          className="mt-1 text-xs"
                          style={{ color: "oklch(0.65 0.18 25)" }}
                          data-ocid="contact-name-error"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label
                        htmlFor="phone"
                        className="text-xs mb-1.5 block text-muted-foreground"
                      >
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 8602640017"
                        value={form.phone}
                        onChange={(e) => {
                          setForm((f) => ({ ...f, phone: e.target.value }));
                          if (errors.phone)
                            setErrors((err) => ({ ...err, phone: undefined }));
                        }}
                        data-ocid="contact-phone-input"
                        aria-invalid={!!errors.phone}
                        style={
                          errors.phone
                            ? { borderColor: "oklch(0.45 0.18 25)" }
                            : undefined
                        }
                      />
                      {errors.phone && (
                        <p
                          className="mt-1 text-xs"
                          style={{ color: "oklch(0.65 0.18 25)" }}
                          data-ocid="contact-phone-error"
                        >
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="email"
                      className="text-xs mb-1.5 block text-muted-foreground"
                    >
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="rajesh@example.com"
                      value={form.email}
                      onChange={(e) => {
                        setForm((f) => ({ ...f, email: e.target.value }));
                        if (errors.email)
                          setErrors((err) => ({ ...err, email: undefined }));
                      }}
                      data-ocid="contact-email-input"
                      aria-invalid={!!errors.email}
                      style={
                        errors.email
                          ? { borderColor: "oklch(0.45 0.18 25)" }
                          : undefined
                      }
                    />
                    {errors.email && (
                      <p
                        className="mt-1 text-xs"
                        style={{ color: "oklch(0.65 0.18 25)" }}
                        data-ocid="contact-email-error"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label
                      htmlFor="interest"
                      className="text-xs mb-1.5 block text-muted-foreground"
                    >
                      I'm Interested In
                    </Label>
                    <Select
                      value={form.interest}
                      onValueChange={(v) =>
                        setForm((f) => ({ ...f, interest: v }))
                      }
                    >
                      <SelectTrigger
                        id="interest"
                        data-ocid="contact-interest-select"
                      >
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="buy">Buying a Property</SelectItem>
                        <SelectItem value="sell">Selling a Property</SelectItem>
                        <SelectItem value="commercial">
                          Commercial Property
                        </SelectItem>
                        <SelectItem value="construction">
                          Construction Services
                        </SelectItem>
                        <SelectItem value="invest">
                          Investment Advisory
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label
                      htmlFor="message"
                      className="text-xs mb-1.5 block text-muted-foreground"
                    >
                      Your Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your requirements, budget, preferred location..."
                      rows={4}
                      value={form.message}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, message: e.target.value }))
                      }
                      data-ocid="contact-message-input"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full font-semibold text-primary-foreground shadow-gold-glow"
                    style={{ background: "oklch(0.73 0.15 60)" }}
                    disabled={loading}
                    data-ocid="contact-submit-btn"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" /> Send Message
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Info & Map */}
            <div className="space-y-6" data-animate>
              <div
                className="p-6 rounded-2xl"
                style={{
                  background: "oklch(0.15 0.01 0)",
                  border: "1px solid oklch(0.22 0.01 0)",
                }}
              >
                <h3 className="font-display font-semibold text-lg text-foreground mb-5">
                  Visit Our Office
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm text-foreground">
                        Address
                      </p>
                      <p className="text-sm text-muted-foreground">
                        City Center, Kailash Vihar,
                        <br />
                        Gwalior, Madhya Pradesh — 474001
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm text-foreground">
                        Business Hours
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Monday – Saturday: 9:00 AM – 7:00 PM
                        <br />
                        Sunday: 10:00 AM – 4:00 PM
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm text-foreground">
                        Phone
                      </p>
                      <a
                        href={PHONE_HREF}
                        className="text-sm text-primary hover:underline"
                      >
                        {PHONE}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div
                className="rounded-2xl overflow-hidden"
                style={{ border: "1px solid oklch(0.22 0.01 0)" }}
              >
                <iframe
                  title="Advance Property Construction Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.1!2d78.1695!3d26.2183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c5a7db35c73b%3A0xc23a3040b50f3803!2sGwalior%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1704067200000!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{
                    border: 0,
                    filter: "invert(90%) hue-rotate(180deg) brightness(0.8)",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Quick Action */}
              <div className="grid grid-cols-2 gap-3">
                <Button
                  asChild
                  className="font-semibold text-primary-foreground shadow-gold-glow"
                  style={{ background: "oklch(0.73 0.15 60)" }}
                  onClick={playClick}
                  data-ocid="contact-call-btn"
                >
                  <a href={PHONE_HREF}>
                    <Phone className="w-4 h-4 mr-2" /> Call Now
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="font-semibold"
                  onClick={playClick}
                  data-ocid="contact-whatsapp-btn"
                >
                  <a href={WA_HREF} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
