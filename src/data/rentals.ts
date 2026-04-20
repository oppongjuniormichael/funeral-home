import type { StaticImageData } from "next/image";
import hearse1 from "@/assets/hearse1.jpeg";
import hearse2 from "@/assets/hearse2.jpeg";
import hearse3 from "@/assets/hearse3.jpg";
import canopy1 from "@/assets/canopy1.png";
import canopy2 from "@/assets/canopy2.jpeg";
import canopy3 from "@/assets/canopy3.jpeg";
import casket1 from "@/assets/casket1.jpg";
import casket2 from "@/assets/casket 2.jpg";
import metalCasket from "@/assets/Metal casket.jpg";
import woodenCasket from "@/assets/wooden casket.jpg";
import chair111 from "@/assets/funeral-chair111.jpg";
import chair222 from "@/assets/funeral-chair222.jpg";
import chair333 from "@/assets/funeral-chair333.jpg";
import chair444 from "@/assets/funeral-chair444.jpg";
import casketLower1 from "@/assets/casket-lowering-device1.jpg";
import casketLower2 from "@/assets/casket-lowering-device2.jpg";
import casketLower3 from "@/assets/casket-lowering-device3.jpg";

export interface RentalItem {
  id: string;
  code: string;
  name: string;
  category:
    | "hearses"
    | "canopies"
    | "chairs"
    | "other"
    | "caskets"
    | "lowering devices";
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
    image: hearse1,
    description: "Traditional black hearse for dignified funeral processions.",
  },
  {
    id: "h2",
    code: "HRS-002",
    name: "Luxury Funeral Vehicle",
    category: "hearses",
    price: 550,
    priceUnit: "per service",
    image: hearse2,
    description: "Elegant luxury vehicle for memorial services and processions.",
  },

  {
    id: "h3",
    code: "HRS-003",
    name: "Luxury Funeral Vehicle",
    category: "hearses",
    price: 550,
    priceUnit: "per service",
    image: hearse3,
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
    image: canopy1,
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
    image: canopy3,
    description: "Grand marquee tent for large memorial gatherings and receptions.",
  },
  // Grounds / Venues: removed per request
  // Rental Chairs (funeral chair assets mapped to chair codes 111-444)
  {
    id: "ch111",
    code: "111",
    name: "Funeral Chair Model 111",
    category: "chairs",
    subCategory: "Funeral",
    price: 5,
    priceUnit: "per chair/day",
    image: chair111,
    description: "Comfortable funeral chair model 111 — durable and dignified.",
  },
  {
    id: "ch222",
    code: "222",
    name: "Funeral Chair Model 222",
    category: "chairs",
    subCategory: "Funeral",
    price: 6,
    priceUnit: "per chair/day",
    image: chair222,
    description: "Elegant funeral chair model 222 with padded seating.",
  },
  {
    id: "ch333",
    code: "333",
    name: "Funeral Chair Model 333",
    category: "chairs",
    subCategory: "Funeral",
    price: 7,
    priceUnit: "per chair/day",
    image: chair333,
    description: "Sturdy banquet-style funeral chair model 333.",
  },
  {
    id: "ch444",
    code: "444",
    name: "Funeral Chair Model 444",
    category: "chairs",
    subCategory: "Funeral",
    price: 8,
    priceUnit: "per chair/day",
    image: chair444,
    description: "Premium funeral chair model 444 with decorative finish.",
  },
  // Casket lowering devices
  {
    id: "ld1",
    code: "LDV-001",
    name: "Casket Lowering Device 1",
    category: "lowering devices",
    subCategory: "Lowering Device",
    price: 0,
    priceUnit: "",
    image: casketLower1,
    description: "Manual casket lowering device — compact and reliable.",
  },
  {
    id: "ld2",
    code: "LDV-002",
    name: "Casket Lowering Device 2",
    category: "lowering devices",
    subCategory: "Lowering Device",
    price: 0,
    priceUnit: "",
    image: casketLower2,
    description: "Hydraulic lowering device for smooth and controlled descent.",
  },
  {
    id: "ld3",
    code: "LDV-003",
    name: "Casket Lowering Device 3",
    category: "lowering devices",
    subCategory: "Lowering Device",
    price: 0,
    priceUnit: "",
    image: casketLower3,
    description: "Heavy-duty lowering equipment for larger caskets.",
  },
  // Other
  {
    id: "o1",
    code: "OTH-001",
    name: "PA Sound System",
    category: "other",
    price: 200,
    priceUnit: "per day",
    image: canopy3,
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
