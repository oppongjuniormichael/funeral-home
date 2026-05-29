import type { StaticImageData } from "next/image";
import dining1 from "@/assets/dining1.jpg";
import dining2 from "@/assets/dining2.jpg";
import dining3 from "@/assets/dining3.jpg";
import dining4 from "@/assets/dining4.jpg";
import dining5 from "@/assets/dining5.jpg";
import dining6 from "@/assets/dining6.jpg";
import sofaChairs from "@/assets/sofa-chairs.jpg";
import sofaChairs4 from "@/assets/sofa-chairs-4.jpg";
import sofaChairs1 from "@/assets/sofa-chairs-1.jpg";
import eggChair from "@/assets/eggchair.png";
import livingRoom1 from "@/assets/living-room1.jpg";
import livingRoom2 from "@/assets/living-room2.jpg";
import livingRoom3 from "@/assets/living-room3.jpg";
import livingRoom4 from "@/assets/living-room4.jpg";
import livingRoom5 from "@/assets/living-room5.jpg";
import livingRoom6 from "@/assets/living-room6.jpg";

export interface FurnitureItem {
  id: string;
  code: string;
  name: string;
  category: "tables" | "sofas" | "living";
  subCategory?: string;
  price: number;
  image: string | StaticImageData;
  description: string;
}

export const furniture: FurnitureItem[] = [
  // Tables
  {
    id: "t1",
    code: "TBL-001",
    name: "Square Counter-Height Dining Set",
    category: "tables",
    price: 45,
    image: dining1,
    description: "Square counter-height table with 8 matching lattice-back chairs — perfect for large dining gatherings.",
  },
  {
    id: "t2",
    code: "TBL-002",
    name: "Rectangular Dining Table & Chair Set",
    category: "tables",
    price: 120,
    image: dining2,
    description: "Dark wood rectangular dining table with 6 high-back upholstered chairs — ideal for family meals.",
  },
  {
    id: "t3",
    code: "TBL-003",
    name: "White Compact Dining Set",
    category: "tables",
    price: 95,
    image: dining3,
    description: "Clean white dining table with 4 blue-cushion chairs — a modern set suited for smaller dining spaces.",
  },
  {
    id: "t4",
    code: "TBL-004",
    name: "Oval Mahogany Dining Set",
    category: "tables",
    price: 110,
    image: dining4,
    description: "Elegant oval mahogany table with 6 red velvet high-back chairs — a classic statement piece.",
  },
  {
    id: "t5",
    code: "TBL-005",
    name: "Round Dining Set with Upholstered Chairs",
    category: "tables",
    price: 65,
    image: dining5,
    description: "Round solid wood dining table with 6 cushioned chairs — timeless and versatile for any dining room.",
  },
  {
    id: "t6",
    code: "TBL-006",
    name: "Light Wood Dining Table & Chair Set",
    category: "tables",
    price: 150,
    image: dining6,
    description: "Light wood rectangular table paired with 4 grey upholstered chairs — a clean, contemporary dining set.",
  },

  // Sofas / Chairs
  {
    id: "c1",
    code: "CH-001",
    name: "Modern Grey 2-Seater Sofa",
    category: "sofas",
    subCategory: "Sofa",
    price: 60,
    image: sofaChairs,
    description: "Sleek modern grey fabric sofa with metal legs and a teal accent cushion — great for lounges and reception areas.",
  },
  {
    id: "c2",
    code: "CH-002",
    name: "Classic Tufted Armchair Collection",
    category: "sofas",
    subCategory: "Armchair",
    price: 85,
    image: sofaChairs4,
    description: "Set of classic tufted wingback and accent armchairs in warm neutral tones — ideal for elegant reception rooms.",
  },
  {
    id: "c3",
    code: "CH-003",
    name: "Brown Leather Armchair Set",
    category: "sofas",
    subCategory: "Armchair",
    price: 110,
    image: sofaChairs1,
    description: "Three premium brown leather armchairs with nail-head trim and rolled arms — luxurious and durable seating.",
  },

  {
    id: "c4",
    code: "CH-004",
    name: "Hanging Egg Chair",
    category: "sofas",
    subCategory: "Armchair",
    price: 95,
    image: eggChair,
    description: "White wicker hanging egg chair with soft cushion on a freestanding stand — a stylish statement piece for patios, lounges, or reception areas.",
  },

  // Living Room Sets
  {
    id: "l1",
    code: "LR-001",
    name: "Black Leather Sofa Set with Ottomans",
    category: "living",
    subCategory: "Sofa Set",
    price: 250,
    image: livingRoom1,
    description: "Complete black leather sofa set — 3-seater, 2-seater, armchair, glass coffee table, and two ottomans.",
  },
  {
    id: "l2",
    code: "LR-002",
    name: "Black Leather Executive Lounge Set",
    category: "living",
    subCategory: "Sofa Set",
    price: 300,
    image: livingRoom2,
    description: "Black leather 3-seater sofa with matching single-seater chairs and glass coffee table — suited for executive lounges.",
  },
  {
    id: "l3",
    code: "LR-003",
    name: "Beige Fabric Sofa & Armchair Set",
    category: "living",
    subCategory: "Sofa Set",
    price: 280,
    image: livingRoom3,
    description: "Full beige fabric lounge set with 3-seater sofa, two armchairs, and a glass-top coffee table — cosy and spacious.",
  },
  {
    id: "l4",
    code: "LR-004",
    name: "Blue Tufted Single-Seater Sofa Chairs",
    category: "living",
    subCategory: "Armchair",
    price: 70,
    image: livingRoom4,
    description: "Set of four blue tufted single-seater sofa chairs — compact, sturdy, and stylish for waiting or lounge areas.",
  },
  {
    id: "l5",
    code: "LR-005",
    name: "Black Leather Office Sofa Set",
    category: "living",
    subCategory: "Sofa Set",
    price: 320,
    image: livingRoom5,
    description: "Black leather 3-seater sofa with two single-seater chairs and a wooden coffee table — professional office or VIP lounge.",
  },
  {
    id: "l6",
    code: "LR-006",
    name: "Two-Tone Fabric Sofa Set",
    category: "living",
    subCategory: "Sofa Set",
    price: 260,
    image: livingRoom6,
    description: "Modern two-tone beige and brown fabric sofa set with matching armchairs and a glass-top coffee table.",
  },
];
