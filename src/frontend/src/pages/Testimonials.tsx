import { Badge } from "@/components/ui/badge";
import { testimonials } from "@/data/properties";
import { useSound } from "@/hooks/useSoundEffects";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const { playClick } = useSound();

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused]);

  const prev = () => {
    playClick();
    setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  };
  const next = () => {
    playClick();
    setActive((a) => (a + 1) % testimonials.length);
  };

  return (
    <div className="dark pt-20">
      {/* Hero */}
      <section className="py-20" style={{ background: "oklch(0.12 0.005 0)" }}>
        <div
          className="container mx-auto px-4 sm:px-6 text-center"
          data-animate
        >
          <p className="text-xs font-display tracking-widest uppercase text-primary mb-3">
            Social Proof
          </p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-4">
            Client Testimonials
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Real experiences from real people. Hear what our clients say about
            working with Advance Property Construction.
          </p>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <div
            className="relative rounded-2xl p-8 sm:p-12 text-center"
            style={{
              background: "oklch(0.15 0.01 0)",
              border: "1px solid rgba(212,175,55,0.2)",
              boxShadow: "0 0 40px rgba(212,175,55,0.08)",
            }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            data-animate
          >
            <Quote className="w-10 h-10 text-primary/40 mx-auto mb-6" />
            <div className="flex gap-1 justify-center mb-4">
              {[1, 2, 3, 4, 5]
                .slice(0, testimonials[active].rating)
                .map((n) => (
                  <Star key={n} className="w-5 h-5 fill-primary text-primary" />
                ))}
            </div>
            <p className="text-lg text-foreground/90 leading-relaxed mb-8 italic">
              "{testimonials[active].content}"
            </p>
            <div className="mb-8">
              <p className="font-display font-bold text-lg text-foreground">
                {testimonials[active].name}
              </p>
              <p className="text-sm text-muted-foreground">
                {testimonials[active].role}
              </p>
              <p className="text-xs text-primary/60 mt-1">
                {testimonials[active].date}
              </p>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-6">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
                data-ocid="testimonial-prev-btn"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-smooth hover:shadow-gold-glow-sm"
                style={{
                  background: "rgba(212,175,55,0.1)",
                  border: "1px solid rgba(212,175,55,0.2)",
                }}
              >
                <ChevronLeft className="w-5 h-5 text-primary" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={testimonials[i].id}
                    type="button"
                    onClick={() => {
                      setActive(i);
                      playClick();
                    }}
                    aria-label={`Go to testimonial ${i + 1}`}
                    data-ocid={`testimonial-dot-${i}`}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === active ? 24 : 8,
                      height: 8,
                      background:
                        i === active ? "oklch(0.73 0.15 60)" : "oklch(0.3 0 0)",
                    }}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                data-ocid="testimonial-next-btn"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-smooth hover:shadow-gold-glow-sm"
                style={{
                  background: "rgba(212,175,55,0.1)",
                  border: "1px solid rgba(212,175,55,0.2)",
                }}
              >
                <ChevronRight className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-16" style={{ background: "oklch(0.12 0.005 0)" }}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12" data-animate>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground">
              All Reviews
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map(
              ({ id, name, role, content, rating, date }, i) => (
                <div
                  key={id}
                  data-animate
                  data-ocid={`testimonial-card-${id}`}
                  className="p-6 rounded-2xl hover-lift"
                  style={{
                    background: "oklch(0.15 0.01 0)",
                    border: "1px solid oklch(0.22 0.01 0)",
                    animationDelay: `${i * 0.08}s`,
                  }}
                >
                  <div className="flex gap-0.5 mb-3">
                    {[1, 2, 3, 4, 5].slice(0, rating).map((n) => (
                      <Star
                        key={n}
                        className="w-4 h-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-4">
                    "{content}"
                  </p>
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="font-display font-semibold text-sm text-foreground">
                        {name}
                      </p>
                      <p className="text-xs text-muted-foreground">{role}</p>
                    </div>
                    <Badge
                      style={{
                        background: "rgba(212,175,55,0.1)",
                        color: "oklch(0.73 0.15 60)",
                        border: "1px solid rgba(212,175,55,0.2)",
                      }}
                      className="text-xs"
                    >
                      {date}
                    </Badge>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Rating Summary */}
      <section className="py-16 bg-background">
        <div
          className="container mx-auto px-4 sm:px-6 max-w-2xl text-center"
          data-animate
        >
          <div
            className="p-10 rounded-2xl"
            style={{
              background: "oklch(0.15 0.01 0)",
              border: "1px solid rgba(212,175,55,0.2)",
            }}
          >
            <p className="font-display font-bold text-6xl text-primary mb-2">
              4.9
            </p>
            <div className="flex justify-center gap-1 mb-3">
              {[1, 2, 3, 4, 5].map((n) => (
                <Star key={n} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              Based on 500+ client reviews across Gwalior and Madhya Pradesh
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { pct: "96%", label: "Recommend Us" },
                { pct: "98%", label: "On-Time Delivery" },
                { pct: "99%", label: "Verified Listings" },
              ].map(({ pct, label }) => (
                <div key={label}>
                  <p className="font-display font-bold text-2xl text-primary">
                    {pct}
                  </p>
                  <p className="text-xs text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
