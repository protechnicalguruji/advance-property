import type { Property } from "@/types";
import { createContext, useContext, useEffect, useState } from "react";

interface WishlistContextType {
  wishlist: Property[];
  addToWishlist: (property: Property) => void;
  removeFromWishlist: (propertyId: string) => void;
  isWishlisted: (propertyId: string) => boolean;
  count: number;
}

const WishlistContext = createContext<WishlistContextType | null>(null);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [wishlist, setWishlist] = useState<Property[]>(() => {
    try {
      const stored = localStorage.getItem("apc-wishlist");
      return stored ? (JSON.parse(stored) as Property[]) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("apc-wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (property: Property) => {
    setWishlist((prev) => {
      if (prev.some((p) => p.id === property.id)) return prev;
      return [...prev, property];
    });
  };

  const removeFromWishlist = (propertyId: string) => {
    setWishlist((prev) => prev.filter((p) => p.id !== propertyId));
  };

  const isWishlisted = (propertyId: string) =>
    wishlist.some((p) => p.id === propertyId);

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isWishlisted,
        count: wishlist.length,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used inside WishlistProvider");
  return ctx;
}
