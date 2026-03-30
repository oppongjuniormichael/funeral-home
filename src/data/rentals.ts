import type { StaticImageData } from "next/image";
import blackHearse from "@/assets/black hearse.jpg";
import blackHearse2 from "@/assets/black hearse 2.jpg";
import redHearse from "@/assets/red hearse.jpg";
import richHearse from "@/assets/rich hearse.jpg";
import canopy from "@/assets/canopy.jpg";
import canopy2 from "@/assets/canopy 2.jpg";
import flowerCanopy from "@/assets/flower canopy.jpg";
import grounds1Img from "@/assets/grounds 1.jpg";
import casket1 from "@/assets/casket1.jpg";
import casket2 from "@/assets/casket 2.jpg";
import metalCasket from "@/assets/Metal casket.jpg";
import woodenCasket from "@/assets/wooden casket.jpg";

export interface RentalItem {
  id: string;
  code: string;
  name: string;
  category: "hearses" | "canopies" | "grounds" | "chairs" | "other" | "caskets";
  subCategory?: string;
  price: number;
  priceUnit: string;
  image: string | StaticImageData;
  description: string;
}

export const rentals: RentalItem[] = [
  // Hearses
  {
    id: "h1",
    code: "HRS-001",
    name: "Classic Black Hearse",
    category: "hearses",
    price: 500,
    priceUnit: "per service",
    image: blackHearse,
    description: "Traditional black hearse for dignified funeral processions.",
  },
  {
    id: "h2",
    code: "HRS-002",
    name: "Luxury Funeral Vehicle",
    category: "hearses",
    price: 550,
    priceUnit: "per service",
    image: redHearse,
    description: "Elegant luxury vehicle for memorial services and processions.",
  },

  {
    id: "h3",
    code: "HRS-002",
    name: "Luxury Funeral Vehicle",
    category: "hearses",
    price: 550,
    priceUnit: "per service",
    image: richHearse,
    description: "Elegant luxury vehicle for memorial services and processions.",
  },

  // Canopies
  {
    id: "cn1",
    code: "CNP-001",
    name: "White Graveside Canopy (10x10)",
    category: "canopies",
    price: 150,
    priceUnit: "per day",
    image: canopy,
    description: "Standard white canopy tent for graveside services, seats 20.",
  },
  {
    id: "cn2",
    code: "CNP-002",
    name: "Deluxe Canopy (20x20)",
    category: "canopies",
    price: 350,
    priceUnit: "per day",
    image: canopy2,
    description: "Large canopy with draped sides, seats 50 guests comfortably.",
  },
  {
    id: "cn3",
    code: "CNP-003",
    name: "Premium Marquee Tent (30x40)",
    category: "canopies",
    price: 800,
    priceUnit: "per day",
    image: flowerCanopy,
    description: "Grand marquee tent for large memorial gatherings and receptions.",
  },
  // Grounds / Venues
  {
    id: "g1",
    code: "GRD-001",
    name: "Memorial Garden",
    category: "grounds",
    price: 1200,
    priceUnit: "per day",
    image: grounds1Img,
    description: "Beautiful landscaped garden for outdoor memorial services.",
  },
  {
    id: "g2",
    code: "GRD-002",
    name: "Indoor Chapel Hall",
    category: "grounds",
    price: 1500,
    priceUnit: "per day",
    image: woodenCasket,
    description: "Elegant indoor chapel with seating for 200 guests.",
  },
  {
    id: "g3",
    code: "GRD-003",
    name: "Reception Hall",
    category: "grounds",
    price: 1000,
    priceUnit: "per day",
    image: grounds1Img,
    description: "Spacious reception hall for after-service gatherings and meals.",
  },
  // Rental Chairs
  {
    id: "rc1",
    code: "RCH-A01",
    name: "Gold Chiavari Chair (Rental)",
    category: "chairs",
    subCategory: "Chiavari",
    price: 8,
    priceUnit: "per chair/day",
    image: casket1,
    description: "Gold chiavari chair rental with cushion included.",
  },
  {
    id: "rc2",
    code: "RCH-B01",
    name: "White Folding Chair (Rental)",
    category: "chairs",
    subCategory: "Folding",
    price: 3,
    priceUnit: "per chair/day",
    image: casket1,
    description: "White resin folding chair rental for events.",
  },
  {
    id: "rc3",
    code: "RCH-C01",
    name: "Banquet Chair (Rental)",
    category: "chairs",
    subCategory: "Banquet",
    price: 6,
    priceUnit: "per chair/day",
    image: casket1,
    description: "Padded banquet chair rental with covers.",
  },
  // Other
  {
    id: "o1",
    code: "OTH-001",
    name: "PA Sound System",
    category: "other",
    price: 200,
    priceUnit: "per day",
    image: flowerCanopy,
    description: "Professional sound system with microphones and speakers.",
  },
  {
    id: "o2",
    code: "OTH-002",
    name: "Flower Arrangement Set",
    category: "other",
    price: 300,
    priceUnit: "per set",
    image: casket1,
    description: "Complete floral arrangement set for memorial services.",
  },
  {
    id: "o3",
    code: "OTH-003",
    name: "Memorial Photo Display Board",
    category: "other",
    price: 75,
    priceUnit: "per day",
    image: casket2,
    description: "Large standing photo display board for tributes.",
  },
  // Caskets (local assets)
  {
    id: "cs1",
    code: "CSK-101",
    name: "Royal Oak Casket",
    category: "caskets",
    price: 2500,
    priceUnit: "each",
    image: casket1,
    description: "Premium solid oak casket with satin interior lining and brass hardware.",
  },
  {
    id: "cs2",
    code: "CSK-102",
    name: "Mahogany Casket",
    category: "caskets",
    price: 3200,
    priceUnit: "each",
    image: woodenCasket,
    description: "Hand-finished mahogany casket with velvet interior and classic hardware.",
  },
  {
    id: "cs3",
    code: "CSK-103",
    name: "Metal Heritage Casket",
    category: "caskets",
    price: 4500,
    priceUnit: "each",
    image: metalCasket,
    description: "Durable metal casket with polished finish and comfortable interior.",
  },
];
