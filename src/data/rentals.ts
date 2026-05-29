import type { StaticImageData } from "next/image";
import blackHearse from "@/assets/hearse-6.jpg";
import hearse1 from "@/assets/Hearse.jpg";
import hearse2 from "@/assets/Hearse2.jpg";
import tent1 from "@/assets/tent1.jpg";
import tent2 from "@/assets/tent2.jpg";
import grounds1Img from "@/assets/grounds-1.jpg";
import grounds4Img from "@/assets/grounds-4.jpg";
import grounds6Img from "@/assets/grounds-6.jpg";
import grounds7Img from "@/assets/grounds-7.jpg";
import casket1 from "@/assets/casket1.jpg";
import metalCasket from "@/assets/Metal-casket.jpg";
import woodenCasket from "@/assets/wooden-casket.jpg";
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
    | "grounds"
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
    image: blackHearse,
    description: "Traditional black hearse for dignified funeral processions.",
  },
  {
    id: "h2",
    code: "HRS-002",
    name: "Hearse",
    category: "hearses",
    price: 500,
    priceUnit: "per service",
    image: hearse1,
    description: "Dignified funeral hearse for memorial processions.",
  },
  {
    id: "h3",
    code: "HRS-003",
    name: "Hearse",
    category: "hearses",
    price: 500,
    priceUnit: "per service",
    image: hearse2,
    description: "Dignified funeral hearse for memorial processions.",
  },

  // Canopies
  {
    id: "cn1",
    code: "CNP-001",
    name: "White Graveside Tent (10x10)",
    category: "canopies",
    price: 150,
    priceUnit: "per day",
    image: tent1,
    description: "Standard white tent for graveside services, seats 20.",
  },
  {
    id: "cn2",
    code: "CNP-002",
    name: "Premium Marquee Tent (20x20)",
    category: "canopies",
    price: 350,
    priceUnit: "per day",
    image: tent2,
    description: "Large tent with draped sides, seats 50 guests comfortably.",
  },
  // Grounds / Venues
  {
    id: "g1",
    code: "GRD-001",
    name: "Graveside Ceremony Ground",
    category: "grounds",
    price: 1200,
    priceUnit: "per day",
    image: grounds1Img,
    description: "Serene cemetery grounds for graveside funeral ceremonies, accommodating family and clergy.",
  },
  {
    id: "g2",
    code: "GRD-002",
    name: "Funeral Procession Ground",
    category: "grounds",
    price: 1500,
    priceUnit: "per day",
    image: grounds4Img,
    description: "Spacious cemetery grounds for full funeral processions with hearse vehicles and mourning party.",
  },
  {
    id: "g3",
    code: "GRD-003",
    name: "Graveside Service Grounds",
    category: "grounds",
    price: 1000,
    priceUnit: "per day",
    image: grounds6Img,
    description: "Open cemetery grounds for graveside services with seating arrangements for family members.",
  },
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
    name: "Outdoor Funeral Tent",
    category: "other",
    price: 200,
    priceUnit: "per day",
    image: tent1,
    description: "Sturdy outdoor tent for funeral gatherings — provides shade and shelter for mourners.",
  },
  {
    id: "o2",
    code: "OTH-002",
    name: "Sunset Memorial Service",
    category: "other",
    price: 300,
    priceUnit: "per service",
    image: grounds7Img,
    description: "Beautifully arranged outdoor sunset memorial service around an open casket with floral decor.",
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
