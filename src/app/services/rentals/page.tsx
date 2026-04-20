"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import AnimatedHero from "@/components/AnimatedHero";
import casket1 from "@/assets/casket1.jpg";
import CategoryFilter from "@/components/CategoryFilter";
import ProductCard from "@/components/ProductCard";
import { rentals } from "@/data/rentals";

const categories = ["All", "Hearses", "Canopies", "Chairs", "Caskets", "Lowering Devices"];

function RentalsContent() {
  const searchParams = useSearchParams();

  const getInitialActive = () => {
    const catParam = searchParams?.get("category");
    if (!catParam) return "All";
    const normalized = catParam.trim().toLowerCase();
    const capitalized = normalized.charAt(0).toUpperCase() + normalized.slice(1);
    return categories.includes(capitalized) ? capitalized : "All";
  };

  const [active, setActive] = useState(getInitialActive);

  const filtered =
    active === "All" ? rentals : rentals.filter((r) => r.category === active.toLowerCase());

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-heading text-3xl font-bold text-primary">
            Funeral Collection
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
              hidePrice={true}
              hideTitle={true}
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
  );
}

export default function RentalsPage() {
  return (
    <>
      <AnimatedHero
        image={casket1.src}
        title="Funeral Services"
        subtitle="Hearses, canopies, venues, chairs, and event equipment — available for rent"
      />
      <Suspense fallback={<div className="py-16 text-center text-text-muted">Loading...</div>}>
        <RentalsContent />
      </Suspense>
    </>
  );
}
