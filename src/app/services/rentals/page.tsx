"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedHero from "@/components/AnimatedHero";
import CategoryFilter from "@/components/CategoryFilter";
import ProductCard from "@/components/ProductCard";
import { rentals } from "@/data/rentals";

const categories = ["All", "Hearses", "Canopies", "Grounds", "Chairs", "Caskets"];

export default function RentalsPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? rentals
      : active === "Chairs"
      ? [] // Chairs button present but fetching disabled for now
      : rentals.filter((r) => r.category === active.toLowerCase());

  return (
    <>
      <AnimatedHero
        image="https://images.pexels.com/photos/872831/pexels-photo-872831.jpeg?auto=compress&cs=tinysrgb&w=1600"
        title="Rental Shop"
        subtitle="Hearses, canopies, venues, chairs, and event equipment — available for rent"
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
              Rental Collection
            </h2>
            <p className="mt-3 text-text-muted max-w-xl mx-auto">
              Browse our rental items by category. Each item has a unique code —
              select your quantity and request a rental via email.
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
            {filtered.map((item) => (
              <ProductCard
                key={item.id}
                code={item.code}
                name={item.name}
                price={item.price}
                priceUnit={item.priceUnit}
                image={item.image}
                description={item.description}
                subCategory={item.subCategory}
                type="rental"
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-text-muted py-12">
              No rental items found in this category.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
