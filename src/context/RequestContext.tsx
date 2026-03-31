"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import type { StaticImageData } from "next/image";

export type RequestItem = {
  code: string;
  name: string;
  price: number;
  priceUnit?: string;
  image?: string | StaticImageData;
  quantity: number;
  type: "booking" | "rental";
};

type RequestContextValue = {
  items: RequestItem[];
  addItem: (item: Omit<RequestItem, "quantity">, qty?: number) => void;
  removeItem: (code: string) => void;
  updateQuantity: (code: string, qty: number) => void;
  clear: () => void;
  // Drawer controls
  drawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
};

const RequestContext = createContext<RequestContextValue | undefined>(undefined);

const STORAGE_KEY = "donkor_request_items";

export function RequestProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<RequestItem[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch (e) {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      // ignore
    }
  }, [items]);

  const addItem = (item: Omit<RequestItem, "quantity">, qty = 1) => {
    setItems((prev) => {
      // Create a new array combining previous items and the new one,
      // then reduce to a deduplicated list by code summing quantities.
      const incoming: RequestItem = { ...item, quantity: qty } as RequestItem;
      const combined = [...prev, incoming];
      const deduped: RequestItem[] = [];
      for (const it of combined) {
        const found = deduped.find((d) => d.code === it.code);
        if (found) {
          found.quantity = found.quantity + it.quantity;
        } else {
          deduped.push({ ...it });
        }
      }
      return deduped;
    });
  };

  const removeItem = (code: string) => setItems((prev) => prev.filter((i) => i.code !== code));

  const updateQuantity = (code: string, qty: number) =>
    setItems((prev) => prev.map((i) => (i.code === code ? { ...i, quantity: Math.max(1, qty) } : i)));

  const clear = () => setItems([]);

  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <RequestContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, clear, drawerOpen, openDrawer, closeDrawer }}
    >
      {children}
    </RequestContext.Provider>
  );
}

export function useRequest() {
  const ctx = useContext(RequestContext);
  if (!ctx) throw new Error("useRequest must be used within a RequestProvider");
  return ctx;
}

export default RequestProvider;
