import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { PRODUCTS, type Product } from "../data/catalog";

type ShortlistContextType = {
  ids: string[];
  products: Product[];
  count: number;
  isOpen: boolean;
  lastAdded: string | null;
  toggle: (id: string) => void;
  add: (id: string) => void;
  remove: (id: string) => void;
  clear: () => void;
  has: (id: string) => boolean;
  setOpen: (open: boolean) => void;
};

const ShortlistContext = createContext<ShortlistContextType | null>(null);

const KEY = "osb-shortlist-v1";

export function ShortlistProvider({ children }: { children: React.ReactNode }) {
  const [ids, setIds] = useState<string[]>(() => {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });
  const [isOpen, setOpen] = useState(false);
  const [lastAdded, setLastAdded] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(ids));
    } catch {}
  }, [ids]);

  const value = useMemo<ShortlistContextType>(() => {
    const products = ids
      .map((id) => PRODUCTS.find((p) => p.id === id))
      .filter((p): p is Product => Boolean(p));
    return {
      ids,
      products,
      count: ids.length,
      isOpen,
      lastAdded,
      toggle: (id: string) =>
        setIds((prev) => {
          if (prev.includes(id)) return prev.filter((x) => x !== id);
          setLastAdded(id);
          setTimeout(() => setLastAdded(null), 2500);
          return [...prev, id];
        }),
      add: (id: string) =>
        setIds((prev) => {
          if (prev.includes(id)) return prev;
          setLastAdded(id);
          setTimeout(() => setLastAdded(null), 2500);
          return [...prev, id];
        }),
      remove: (id: string) => setIds((prev) => prev.filter((x) => x !== id)),
      clear: () => setIds([]),
      has: (id: string) => ids.includes(id),
      setOpen,
    };
  }, [ids, isOpen, lastAdded]);

  return <ShortlistContext.Provider value={value}>{children}</ShortlistContext.Provider>;
}

export function useShortlist() {
  const ctx = useContext(ShortlistContext);
  if (!ctx) throw new Error("useShortlist must be used within ShortlistProvider");
  return ctx;
}
