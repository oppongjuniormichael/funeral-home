"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Eye, Mail, Minus, Plus } from "lucide-react";
import { buildMailtoLink, formatPrice, ADMIN_EMAIL } from "@/lib/utils";
import ImageLightbox from "./ImageLightbox";

interface ProductCardProps {
  code: string;
  name: string;
  price: number;
  priceUnit?: string;
  image: string;
  description: string;
  subCategory?: string;
  type: "booking" | "rental";
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
}: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const mailtoHref = buildMailtoLink({
    to: ADMIN_EMAIL,
    itemCode: code,
    itemName: name,
    quantity,
    type,
  });

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
        <div className="relative aspect-[4/3] overflow-hidden cursor-pointer" onClick={() => setLightboxOpen(true)}>
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
          {subCategory && (
            <span className="absolute top-3 left-3 rounded-full bg-primary/80 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              {subCategory}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-heading text-lg font-semibold text-primary leading-snug">
                {name}
              </h3>
              <span className="mt-1 inline-block rounded bg-accent/40 px-2 py-0.5 text-xs font-mono text-text-muted">
                {code}
              </span>
            </div>
            <div className="text-right shrink-0">
              <span className="text-xl font-bold text-gold">
                {formatPrice(price)}
              </span>
              {priceUnit && (
                <span className="block text-xs text-text-muted">{priceUnit}</span>
              )}
            </div>
          </div>

          <p className="mt-3 text-sm text-text-muted leading-relaxed line-clamp-2">
            {description}
          </p>

          {/* Quantity + Book */}
          <div className="mt-5 flex items-center gap-3">
            <div className="flex items-center rounded-lg border border-accent/60">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-2.5 py-2 text-text-muted hover:text-primary transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus size={14} />
              </button>
              <span className="min-w-[2rem] text-center text-sm font-medium">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-2.5 py-2 text-text-muted hover:text-primary transition-colors"
                aria-label="Increase quantity"
              >
                <Plus size={14} />
              </button>
            </div>
            <a
              href={mailtoHref}
              className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-gold px-4 py-2.5 text-sm font-semibold text-primary hover:bg-gold/90 transition-colors"
            >
              <Mail size={14} />
              {type === "booking" ? "Book via Email" : "Rent via Email"}
            </a>
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
