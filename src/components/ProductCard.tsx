"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Eye, Minus, Plus } from "lucide-react";
import type { StaticImageData } from "next/image";
import { useRequest } from "@/context/RequestContext";
import ImageLightbox from "./ImageLightbox";

interface ProductCardProps {
  code: string;
  name: string;
  price: number;
  priceUnit?: string;
  image: string | StaticImageData;
  description: string;
  subCategory?: string;
  type: "booking" | "rental";
  hideTitleAndPrice?: boolean;
  hidePrice?: boolean;
  hideTitle?: boolean;
}

export default function ProductCard({
  code,
  name,
  price,
  priceUnit,
  image,
  description,
  subCategory,
  type,
  hideTitleAndPrice = false,
  hidePrice = false,
  hideTitle = false,
}: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // single-item mailto removed — cart-based flow preferred

  const { addItem, items, updateQuantity } = useRequest();

  // Keep local quantity in sync with global request when item exists there
  useEffect(() => {
    const existing = items.find((i) => i.code === code);
    if (existing && existing.quantity !== quantity) {
      setQuantity(existing.quantity);
    }
    if (!existing && quantity !== 1) {
      // if item removed from request, reset local quantity to 1
      setQuantity(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, code]);

  const handleAddToRequest = () => {
    const exists = items.find((i) => i.code === code);
    if (exists) {
      // set quantity to current selected (don't double-add)
      updateQuantity(code, quantity);
    } else {
      addItem({ code, name, price, priceUnit, image, type }, quantity);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.4 }}
        className="group rounded-2xl border border-accent/40 bg-surface overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
      >
        {/* Image */}
        <div className="relative aspect-4/3 overflow-hidden cursor-pointer" onClick={() => setLightboxOpen(true)}>
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-full p-3">
              <Eye size={20} className="text-primary" />
            </div>
          </div>
          {subCategory && !(hideTitle || hideTitleAndPrice) && (
            <span className="absolute top-3 left-3 rounded-full bg-primary/80 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              {subCategory}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-start justify-between gap-2">
            <div>
              {!(hideTitle || hideTitleAndPrice) ? (
                <>
                  <h3 className="font-heading text-lg font-semibold text-primary leading-snug">
                    {name}
                  </h3>
                  <span className="mt-1 inline-block rounded bg-accent/40 px-2 py-0.5 text-xs font-mono text-text-muted">
                    {code}
                  </span>
                </>
              ) : (
                // Titles hidden: show only the product code
                <>
                  <span className="mt-1 inline-block rounded bg-accent/40 px-2 py-0.5 text-xs font-mono text-text-muted">
                    {code}
                  </span>
                </>
              )}

            </div>

            {/* Prices are intentionally hidden across the UI */}
          </div>

          <p className={hideTitleAndPrice ? "mt-3 text-sm text-text-muted leading-relaxed" : "mt-3 text-sm text-text-muted leading-relaxed line-clamp-2"}>
            {description}
          </p>

          {/* Quantity + Book */}
            <div className="mt-5 flex items-center gap-3">
            <div className="flex items-center rounded-lg border border-accent/60">
              <button
                onClick={() => {
                  const newQ = Math.max(1, quantity - 1);
                  setQuantity(newQ);
                  // if item already in request, update global quantity too
                  const exists = items.find((i) => i.code === code);
                  if (exists) updateQuantity(code, newQ);
                }}
                className="px-2.5 py-2 text-text-muted hover:text-primary transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus size={14} />
              </button>
              <span className="min-w-8 text-center text-sm font-medium">{quantity}</span>
              <button
                onClick={() => {
                  const newQ = quantity + 1;
                  setQuantity(newQ);
                  const exists = items.find((i) => i.code === code);
                  if (exists) updateQuantity(code, newQ);
                }}
                className="px-2.5 py-2 text-text-muted hover:text-primary transition-colors"
                aria-label="Increase quantity"
              >
                <Plus size={14} />
              </button>
            </div>
            <div className="flex-1" />

            <button
              onClick={handleAddToRequest}
              className="rounded-lg border border-accent/60 px-4 py-2 text-sm font-semibold text-primary hover:bg-accent/10"
            >
              <Plus size={14} className="inline-block mr-2" />
              Add to Cart
            </button>
          </div>
        </div>
      </motion.div>

      <ImageLightbox
        src={image}
        alt={name}
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}
