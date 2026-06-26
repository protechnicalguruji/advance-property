import { EMICalculator } from "@/components/EMICalculator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { properties } from "@/data/properties";
import { useSound } from "@/hooks/useSoundEffects";
import { useWishlist } from "@/hooks/useWishlist";
import type { Property } from "@/types";
import {
  Bath,
  BedDouble,
  Calculator,
  Heart,
  MapPin,
  Maximize2,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";
import { useState } from "react";

const MAX_PRICE = 999999999;
const TYPES = ["all", "villa", "residential", "plot"];
const BUDGETS = [
  { label: "Any Budget", min: 0, max: MAX_PRICE },
  { label: "Under ₹50L", min: 0, max: 5000000 },
  { label: "₹50L - ₹1Cr", min: 5000000, max: 10000000 },
  { label: "₹1Cr - ₹2Cr", min: 10000000, max: 20000000 },
  { label: "Above ₹2Cr", min: 20000000, max: MAX_PRICE },
];

function PropertyCard({ property }: { property: Property }) {
  const { isWishlisted, addToWishlist, removeFromWishlist } = useWishlist();
  const { playClick } = useSound();
  const [emiOpen, setEmiOpen] = useState(false);
  const wishlisted = isWishlisted(property.id);

  return (
    <>
      <EMICalculator
        open={emiOpen}
        onClose={() => setEmiOpen(false)}
        defaultPrice={property.price}
      />
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
          <button
            type="button"
            onClick={() => {
              playClick();
              wishlisted
                ? removeFromWishlist(property.id)
                : addToWishlist(property);
            }}
            aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
            data-ocid={`wishlist-btn-${property.id}`}
            className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-smooth"
            style={{
              background: "rgba(0,0,0,0.5)",
              backdropFilter: "blur(8px)",
            }}
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
            <MapPin className="w-3 h-3" /> {property.location}
          </div>
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
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
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              className="flex-1 text-xs"
              onClick={() => {
                setEmiOpen(true);
                playClick();
              }}
              data-ocid={`emi-btn-${property.id}`}
            >
              <Calculator className="w-3 h-3 mr-1" /> EMI
            </Button>
            <Button
              size="sm"
              className="flex-1 text-xs text-primary-foreground"
              style={{ background: "oklch(0.73 0.15 60)" }}
              asChild
              onClick={playClick}
            >
              <a href="tel:+918602640017">Enquire</a>
            </Button>
          </div>
        </div>
      </Card>
    </>
  );
}

export default function Properties() {
  const [typeFilter, setTypeFilter] = useState("all");
  const [budgetFilter, setBudgetFilter] = useState("Any Budget");
  const [sortBy, setSortBy] = useState("default");
  const { playClick } = useSound();
  const { count: wishlistCount } = useWishlist();

  const budget = BUDGETS.find((b) => b.label === budgetFilter) ?? BUDGETS[0];

  const filtered = properties
    .filter(
      (p) =>
        (typeFilter === "all" || p.type === typeFilter) &&
        p.price >= budget.min &&
        p.price <= budget.max,
    )
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "area-asc") return a.area - b.area;
      return 0;
    });

  return (
    <div className="dark pt-20">
      <section className="py-12" style={{ background: "oklch(0.12 0.005 0)" }}>
        <div className="container mx-auto px-4 sm:px-6">
          <div
            className="flex flex-wrap items-end justify-between gap-4"
            data-animate
          >
            <div>
              <p className="text-xs font-display tracking-widest uppercase text-primary mb-2">
                Browse
              </p>
              <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
                Residential Properties
              </h1>
              <p className="text-muted-foreground mt-2">
                {filtered.length} verified properties available
              </p>
            </div>
            {wishlistCount > 0 && (
              <Badge style={{ background: "rgba(139,0,0,0.8)", color: "#fff" }}>
                <Heart className="w-3 h-3 mr-1 fill-white" /> {wishlistCount}{" "}
                Saved
              </Badge>
            )}
          </div>
        </div>
      </section>

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
          <div className="flex flex-wrap items-center gap-3">
            <SlidersHorizontal className="w-4 h-4 text-muted-foreground shrink-0" />
            <div className="flex flex-wrap gap-2">
              {TYPES.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => {
                    setTypeFilter(t);
                    playClick();
                  }}
                  data-ocid={`filter-type-${t}`}
                  className="px-3 py-1.5 rounded-full text-xs font-medium capitalize transition-smooth"
                  style={{
                    background:
                      typeFilter === t
                        ? "oklch(0.73 0.15 60)"
                        : "rgba(255,255,255,0.06)",
                    color:
                      typeFilter === t ? "oklch(0.098 0 0)" : "oklch(0.55 0 0)",
                    border:
                      typeFilter === t
                        ? "1px solid transparent"
                        : "1px solid oklch(0.25 0.01 0)",
                  }}
                >
                  {t === "all" ? "All Types" : t}
                </button>
              ))}
            </div>
            <div className="ml-auto flex items-center gap-2">
              <Select value={budgetFilter} onValueChange={setBudgetFilter}>
                <SelectTrigger
                  className="w-40 h-8 text-xs"
                  data-ocid="filter-budget"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {BUDGETS.map((b) => (
                    <SelectItem key={b.label} value={b.label}>
                      {b.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger
                  className="w-36 h-8 text-xs"
                  data-ocid="filter-sort"
                >
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="area-asc">Area: Low to High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-background min-h-[40vh]">
        <div className="container mx-auto px-4 sm:px-6">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((property, i) => (
                <div
                  key={property.id}
                  data-animate
                  style={{ animationDelay: `${i * 0.07}s` }}
                >
                  <PropertyCard property={property} />
                </div>
              ))}
            </div>
          ) : (
            <div
              className="text-center py-20"
              data-ocid="properties-empty-state"
            >
              <p className="font-display text-xl text-foreground mb-2">
                No properties found
              </p>
              <p className="text-muted-foreground mb-6">
                Try adjusting your filters to see more results.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setTypeFilter("all");
                  setBudgetFilter("Any Budget");
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
