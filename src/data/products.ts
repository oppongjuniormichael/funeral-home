export interface Product {
  id: string;
  code: string;
  name: string;
  category: "caskets" | "chairs" | "furniture";
  subCategory?: string;
  price: number;
  image: string;
  description: string;
}

export const products: Product[] = [
  // Caskets
  {
    id: "c1",
    code: "CSK-001",
    name: "Royal Oak Casket",
    category: "caskets",
    price: 2500,
    image: "https://images.pexels.com/photos/7317943/pexels-photo-7317943.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Premium solid oak casket with satin interior lining and brass hardware.",
  },
  {
    id: "c2",
    code: "CSK-002",
    name: "Mahogany Elegance Casket",
    category: "caskets",
    price: 3200,
    image: "https://images.pexels.com/photos/10485372/pexels-photo-10485372.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Hand-finished mahogany casket with velvet interior and gold-plated handles.",
  },
  {
    id: "c3",
    code: "CSK-003",
    name: "Serenity White Casket",
    category: "caskets",
    price: 1800,
    image: "https://images.pexels.com/photos/10485632/pexels-photo-10485632.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Elegant white casket with crepe interior, suitable for peaceful farewells.",
  },
  {
    id: "c4",
    code: "CSK-004",
    name: "Bronze Heritage Casket",
    category: "caskets",
    price: 4500,
    image: "https://images.pexels.com/photos/13564653/pexels-photo-13564653.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Premium bronze-finished steel casket with memory foam mattress lining.",
  },
  // Chairs
  {
    id: "ch1",
    code: "CHR-A01",
    name: "Gold Chiavari Chair",
    category: "chairs",
    subCategory: "Chiavari",
    price: 45,
    image: "https://images.pexels.com/photos/11450795/pexels-photo-11450795.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Classic gold chiavari chair with cushion pad, perfect for ceremonies.",
  },
  {
    id: "ch2",
    code: "CHR-B01",
    name: "White Folding Chair",
    category: "chairs",
    subCategory: "Folding",
    price: 15,
    image: "https://images.pexels.com/photos/1339295/pexels-photo-1339295.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Sturdy white resin folding chair, ideal for outdoor memorial services.",
  },
  {
    id: "ch3",
    code: "CHR-C01",
    name: "Black Banquet Chair",
    category: "chairs",
    subCategory: "Banquet",
    price: 35,
    image: "https://images.pexels.com/photos/50675/pexels-photo-50675.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Elegant black padded banquet chair with steel frame.",
  },
  {
    id: "ch4",
    code: "CHR-D01",
    name: "Wooden Cross-back Chair",
    category: "chairs",
    subCategory: "Cross-back",
    price: 55,
    image: "https://images.pexels.com/photos/3835638/pexels-photo-3835638.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Rustic wooden cross-back chair for elegant indoor services.",
  },
  {
    id: "ch5",
    code: "CHR-E01",
    name: "Plastic Event Chair",
    category: "chairs",
    subCategory: "Plastic",
    price: 10,
    image: "https://images.pexels.com/photos/776808/pexels-photo-776808.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Durable plastic event chair available in bulk for large gatherings.",
  },
  // Other Furniture
  {
    id: "f1",
    code: "FRN-001",
    name: "Memorial Display Stand",
    category: "furniture",
    price: 120,
    image: "https://images.pexels.com/photos/10499692/pexels-photo-10499692.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Wooden display stand for floral tributes and memorial photos.",
  },
  {
    id: "f2",
    code: "FRN-002",
    name: "Guest Book Table",
    category: "furniture",
    price: 85,
    image: "https://images.pexels.com/photos/1114425/pexels-photo-1114425.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Elegant round table for guest book signing and keepsakes.",
  },
  {
    id: "f3",
    code: "FRN-003",
    name: "Tribute Candelabra",
    category: "furniture",
    price: 150,
    image: "https://images.pexels.com/photos/4491272/pexels-photo-4491272.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Tall standing candelabra for memorial ceremonies.",
  },
];
