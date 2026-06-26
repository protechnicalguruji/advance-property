import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { commercialProperties } from "@/data/properties";
import { useSound } from "@/hooks/useSoundEffects";
import {
  Building2,
  Layers,
  MapPin,
  Maximize2,
  ShieldCheck,
  Store,
  Warehouse,
} from "lucide-react";
import { useState } from "react";

const TYPE_ICONS = {
  shop: Store,
  office: Building2,
  warehouse: Warehouse,
  showroom: Layers,
};

const TYPE_LABELS = {
  shop: "Retail Shop",
  office: "Office Space",
  warehouse: "Warehouse",
  showroom: "Showroom",
};

export default function Commercial() {
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const { playClick } = useSound();

  const filtered =
    typeFilter === "all"
      ? commercialProperties
      : commercialProperties.filter((p) => p.type === typeFilter);

  return (
    <div className="dark pt-20">
      {/* Hero */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `url('/assets/generated/commercial-hero.dim_1200x700.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "rgba(10,10,10,0.82)" }}
        />
        <div
          className="container mx-auto px-4 sm:px-6 relative z-10 text-center"
          data-animate
        >
          <p className="text-xs font-display tracking-widest uppercase text-primary mb-3">
            Invest Smart
          </p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            Commercial Properties
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
            Premium shops, offices, showrooms, and warehouses in Gwalior's most
            strategic commercial zones. Verified listings, high ROI guaranteed.
          </p>
        </div>
      </section>

      {/* Type Filters */}
      <section
        className="py-6 border-b border-border/30"
        style={{ background: "oklch(0.12 0.005 0)" }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {(["all", "shop", "office", "showroom", "warehouse"] as const).map(
              (t) => {
                const Icon = t !== "all" ? TYPE_ICONS[t] : Building2;
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => {
                      setTypeFilter(t);
                      playClick();
                    }}
                    data-ocid={`comm-filter-${t}`}
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium capitalize transition-smooth"
                    style={{
                      background:
                        typeFilter === t
                          ? "oklch(0.73 0.15 60)"
                          : "rgba(255,255,255,0.06)",
                      color:
                        typeFilter === t
                          ? "oklch(0.098 0 0)"
                          : "oklch(0.55 0 0)",
                      border:
                        typeFilter === t
                          ? "1px solid transparent"
                          : "1px solid oklch(0.25 0.01 0)",
                    }}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {t === "all" ? "All Types" : TYPE_LABELS[t]}
                  </button>
                );
              },
            )}
          </div>
        </div>
      </section>

      {/* Properties */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((property, i) => {
              const Icon = TYPE_ICONS[property.type] ?? Building2;
              return (
                <Card
                  key={property.id}
                  data-animate
                  data-ocid={`commercial-card-${property.id}`}
                  className="overflow-hidden group hover-lift border-border/30"
                  style={{
                    background: "oklch(0.15 0.01 0)",
                    animationDelay: `${i * 0.08}s`,
                  }}
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
                        style={{
                          background: "rgba(212,175,55,0.9)",
                          color: "#0a0a0a",
                        }}
                      >
                        <ShieldCheck className="w-3 h-3 mr-1" /> Verified
                      </Badge>
                    )}
                    <div className="absolute top-3 right-3">
                      <Badge
                        className="text-xs"
                        style={{
                          background: "rgba(10,10,10,0.8)",
                          color: "oklch(0.73 0.15 60)",
                          border: "1px solid rgba(212,175,55,0.3)",
                        }}
                      >
                        <Icon className="w-3 h-3 mr-1" />
                        {TYPE_LABELS[property.type]}
                      </Badge>
                    </div>
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
                      <MapPin className="w-3 h-3" /> {property.location}
                    </div>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Maximize2 className="w-3.5 h-3.5" />
                        {property.area} {property.areaUnit}
                      </span>
                      {property.floor !== undefined && (
                        <span>
                          Floor {property.floor === 0 ? "G" : property.floor}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {property.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 rounded-full"
                          style={{
                            background: "rgba(212,175,55,0.08)",
                            color: "oklch(0.73 0.15 60)",
                            border: "1px solid rgba(212,175,55,0.15)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button
                      size="sm"
                      className="w-full text-xs text-primary-foreground"
                      style={{ background: "oklch(0.73 0.15 60)" }}
                      asChild
                      onClick={playClick}
                    >
                      <a href="tel:+918602640017">Get Details</a>
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div
              className="text-center py-20"
              data-ocid="commercial-empty-state"
            >
              <p className="font-display text-xl text-foreground mb-2">
                No listings in this category
              </p>
              <p className="text-muted-foreground mb-6">
                Check back soon or contact us for off-market listings.
              </p>
              <Button variant="outline" asChild>
                <a href="tel:+918602640017">Call for Listings</a>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16" style={{ background: "oklch(0.12 0.005 0)" }}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10" data-animate>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground">
              Why Commercial in Gwalior?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: "Strategic Location",
                desc: "Gwalior is the commercial hub of Madhya Pradesh with excellent national highway connectivity.",
              },
              {
                title: "Growing Economy",
                desc: "Rapid industrial expansion with new IT parks, malls, and business centers being developed.",
              },
              {
                title: "High ROI Potential",
                desc: "Commercial yields in Gwalior range 6-9% p.a. — significantly above national averages.",
              },
            ].map(({ title, desc }, i) => (
              <div
                key={title}
                data-animate
                className="p-6 rounded-2xl text-center"
                style={{
                  background: "oklch(0.15 0.01 0)",
                  border: "1px solid oklch(0.22 0.01 0)",
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                <h3 className="font-display font-semibold text-lg text-primary mb-2">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
