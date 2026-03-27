"use client";

interface CategoryFilterProps {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
}

export default function CategoryFilter({ categories, active, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
            active === cat
              ? "bg-primary text-white shadow-md"
              : "bg-accent/40 text-text-muted hover:bg-accent/70 hover:text-primary"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
