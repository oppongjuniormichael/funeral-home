export interface RentalItem {
  id: string;
  code: string;
  name: string;
  category: "hearses" | "canopies" | "grounds" | "chairs" | "other";
  subCategory?: string;
  price: number;
  priceUnit: string;
  image: string;
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
    image: "https://images.pexels.com/photos/1729993/pexels-photo-1729993.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Traditional black hearse for dignified funeral processions.",
  },
  {
    id: "h2",
    code: "HRS-002",
    name: "Luxury Funeral Vehicle",
    category: "hearses",
    price: 550,
    priceUnit: "per service",
    image: "https://images.pexels.com/photos/4141962/pexels-photo-4141962.jpeg?auto=compress&cs=tinysrgb&w=800",
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
    image: "https://images.pexels.com/photos/872831/pexels-photo-872831.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Standard white canopy tent for graveside services, seats 20.",
  },
  {
    id: "cn2",
    code: "CNP-002",
    name: "Deluxe Canopy (20x20)",
    category: "canopies",
    price: 350,
    priceUnit: "per day",
    image: "https://images.pexels.com/photos/1268877/pexels-photo-1268877.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Large canopy with draped sides, seats 50 guests comfortably.",
  },
  {
    id: "cn3",
    code: "CNP-003",
    name: "Premium Marquee Tent (30x40)",
    category: "canopies",
    price: 800,
    priceUnit: "per day",
    image: "https://images.pexels.com/photos/111362/pexels-photo-111362.jpeg?auto=compress&cs=tinysrgb&w=800",
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
    image: "https://images.pexels.com/photos/10499692/pexels-photo-10499692.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Beautiful landscaped garden for outdoor memorial services.",
  },
  {
    id: "g2",
    code: "GRD-002",
    name: "Indoor Chapel Hall",
    category: "grounds",
    price: 1500,
    priceUnit: "per day",
    image: "https://images.pexels.com/photos/6629774/pexels-photo-6629774.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Elegant indoor chapel with seating for 200 guests.",
  },
  {
    id: "g3",
    code: "GRD-003",
    name: "Reception Hall",
    category: "grounds",
    price: 1000,
    priceUnit: "per day",
    image: "https://images.pexels.com/photos/17606660/pexels-photo-17606660.jpeg?auto=compress&cs=tinysrgb&w=800",
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
    image: "https://images.pexels.com/photos/11450795/pexels-photo-11450795.jpeg?auto=compress&cs=tinysrgb&w=800",
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
    image: "https://images.pexels.com/photos/1339295/pexels-photo-1339295.jpeg?auto=compress&cs=tinysrgb&w=800",
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
    image: "https://images.pexels.com/photos/50675/pexels-photo-50675.jpeg?auto=compress&cs=tinysrgb&w=800",
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
    image: "https://images.pexels.com/photos/8198136/pexels-photo-8198136.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Professional sound system with microphones and speakers.",
  },
  {
    id: "o2",
    code: "OTH-002",
    name: "Flower Arrangement Set",
    category: "other",
    price: 300,
    priceUnit: "per set",
    image: "https://images.pexels.com/photos/886616/pexels-photo-886616.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Complete floral arrangement set for memorial services.",
  },
  {
    id: "o3",
    code: "OTH-003",
    name: "Memorial Photo Display Board",
    category: "other",
    price: 75,
    priceUnit: "per day",
    image: "https://images.pexels.com/photos/8963947/pexels-photo-8963947.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Large standing photo display board for tributes.",
  },
];
