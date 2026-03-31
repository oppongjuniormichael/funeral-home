import type { StaticImageData } from "next/image";
import tables1 from "@/assets/tables 1.jpg";
import table2 from "@/assets/table2.jpg";
import table3 from "@/assets/table3.jpg";
import table4 from "@/assets/table4.jpg";
// No 'dining' assets found in the project — alias dining imports
import dining1 from "@/assets/dining1.jpg";
import dining2 from "@/assets/dining2.jpg";
import dining3 from "@/assets/dining3.jpg";
import dining4 from "@/assets/dining4.jpg";
import dining5 from "@/assets/dining5.jpg";
import dining6 from "@/assets/dining6.jpg";
import chair1 from "@/assets/chair 1.jpg";
import chair3 from "@/assets/chair 3.jpg";
import officeChairs from "@/assets/office chairs.jpg";
import sofaChairs from "@/assets/sofa chairs.jpg";
import sofaChairs4 from "@/assets/sofa chairs 4.jpg";
import sofaChairs1 from "@/assets/sofa chairs 1.jpg";
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
  {
    id: "t1",
    code: "TBL-001",
    name: "Round Guest Table",
    category: "tables",
    price: 45,
    image: dining1,
    description: "Elegant round table for guest book signing and keepsakes.",
  },
  {
    id: "t2",
    code: "TBL-002",
    name: "Rectangular Dining Table",
    category: "tables",
    price: 120,
    image: dining2,
    description: "Solid wood rectangular dining table, seats up to 8 guests.",
  },
  {
    id: "t3",
    code: "TBL-003",
    name: "Live-edge Console Table",
    category: "tables",
    price: 95,
    image: dining3,
    description: "Live-edge console table with a natural finish — great for displays.",
  },
  {
    id: "t4",
    code: "TBL-004",
    name: "Rectangular Occasional Table",
    category: "tables",
    price: 110,
    image: dining4,
    description: "Versatile rectangular occasional table for service displays and refreshments.",
  },
  {
    id: "t5",
    code: "TBL-005",
    name: "Nightstand-style Table",
    category: "tables",
    price: 65,
    image: dining5,
    description: "Compact nightstand-style table suitable for small displays.",
  },
  {
    id: "t6",
    code: "TBL-006",
    name: "Solid Wood Dining Table",
    category: "tables",
    price: 150,
    image: dining6,
    description: "Sturdy solid wood dining table for larger receptions.",
  },

  {
    id: "c1",
    code: "CH-001",
    name: "Gold Chiavari Chair",
    category: "sofas",
    subCategory: "Chiavari",
    price: 8,
    image: sofaChairs4,
    description: "Classic gold chiavari chair with cushion pad.",
  },



  {
    id: "c2",
    code: "CH-002",
    name: "White Folding Chair",
    category: "sofas",
    subCategory: "Folding",
    price: 3,
    image: sofaChairs,
    description: "Sturdy white folding chair, ideal for outdoor memorial services.",
  },
  
  {
    id: "c4",
    code: "CH-004",
    name: "Sofa-style Seating",
    category: "sofas",
    subCategory: "Sofa",
    price: 60,
    image: sofaChairs1,
    description: "Sofa chairs for lounges and VIP seating.",
  },
  // Living room collection
  {
    id: "l1",
    code: "LR-001",
    name: "Three-Seater Sofa",
    category: "living",
    subCategory: "Sofa",
    price: 250,
    image: livingRoom1,
    description: "Comfortable three-seater sofa for lounge areas.",
  },
  {
    id: "l2",
    code: "LR-002",
    name: "Accent Armchair",
    category: "living",
    subCategory: "Chair",
    price: 85,
    image: livingRoom2,
    description: "Stylish accent armchair for reception and lounge corners.",
  },
  {
    id: "l3",
    code: "LR-003",
    name: "Coffee Table",
    category: "living",
    subCategory: "Table",
    price: 70,
    image: livingRoom3,
    description: "Low coffee table ideal for magazines and floral displays.",
  },
  {
    id: "l4",
    code: "LR-004",
    name: "Loveseat",
    category: "living",
    subCategory: "Sofa",
    price: 180,
    image: livingRoom4,
    description: "Cozy loveseat for intimate seating arrangements.",
  },
  {
    id: "l5",
    code: "LR-005",
    name: "TV Console / Media Unit",
    category: "living",
    subCategory: "Unit",
    price: 140,
    image: livingRoom5,
    description: "Sleek media console to hold memorial displays or AV equipment.",
  },
  {
    id: "l6",
    code: "LR-006",
    name: "Recliner Armchair",
    category: "living",
    subCategory: "Chair",
    price: 130,
    image: livingRoom6,
    description: "Comfortable recliner armchair for private family seating.",
  },
];
