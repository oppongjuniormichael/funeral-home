
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedHero from "@/components/AnimatedHero";
import CategoryFilter from "@/components/CategoryFilter";
import ProductCard from "@/components/ProductCard";
import sofaHero from "@/assets/sofa chairs.jpg";
import { furniture } from "@/data/furniture";

const categories = ["All", "Tables", "Sofa", "Living Room"];

export default function FurnitureShopPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? furniture
      : active === "Tables"
      ? furniture.filter((f) => f.category === "tables")
      : active === "Sofa"
      ? furniture.filter((f) => f.category === "sofas")
      : active === "Living Room"
      ? furniture.filter((f) => f.category === "living")
      : [];

  return (
    <>
      <AnimatedHero
        image={encodeURI(sofaHero.src)}
        title="Furniture Shop"
        subtitle="Premium caskets, sofas, and memorial furniture — each piece selected with care"
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-heading text-3xl font-bold text-primary">
              Browse Our Collection
            </h2>
            <p className="mt-3 text-text-muted max-w-xl mx-auto">
              Select a category below to filter items. Click any image to view it
              larger, then book your selection via email.
            </p>
          </motion.div>

          <div className="mb-10">
            <CategoryFilter
              categories={categories}
              active={active}
              onChange={setActive}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                code={product.code}
                name={product.name}
                price={product.price}
                image={product.image}
                description={product.description}
                subCategory={product.subCategory}
                type="booking"
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-text-muted py-12">
              No items found in this category.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
