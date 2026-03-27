export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const faqs: FaqItem[] = [
  // General
  {
    category: "General",
    question: "What services does Donkor And Sons offer?",
    answer:
      "We offer comprehensive funeral and memorial services including funeral planning, furniture sales (caskets, chairs, and accessories), event venue and equipment rentals, and full-service memorial event coordination.",
  },
  {
    category: "General",
    question: "What are your operating hours?",
    answer:
      "We are open Monday through Friday from 8:00 AM to 6:00 PM, and Saturday from 9:00 AM to 4:00 PM. We are available 24/7 for emergency services. Sunday visits are available by appointment only.",
  },
  {
    category: "General",
    question: "How do I get started with planning a service?",
    answer:
      "You can reach us by phone, email, or through our contact form. A dedicated coordinator will guide you through every step of the planning process with compassion and care.",
  },
  // Furniture
  {
    category: "Furniture",
    question: "Can I view caskets and furniture in person before purchasing?",
    answer:
      "Absolutely. We encourage families to visit our showroom to view our full range of caskets, chairs, and furniture. Please call ahead to schedule a viewing appointment.",
  },
  {
    category: "Furniture",
    question: "How does the ordering process work for furniture items?",
    answer:
      "Each item has a unique product code. Simply select your desired items and quantities, then click 'Book via Email' to send us your order. Our team will confirm availability and provide delivery details within 24 hours.",
  },
  {
    category: "Furniture",
    question: "Do you offer delivery for purchased items?",
    answer:
      "Yes, we offer local delivery for all furniture purchases. Delivery fees vary based on distance and order size. Contact us for a delivery quote.",
  },
  // Rentals
  {
    category: "Rentals",
    question: "What is the rental process for chairs and canopies?",
    answer:
      "Browse our rental catalog, select items by their rental code, choose your quantity, and submit a rental request via email. We handle delivery, setup, and pickup. A 50% deposit is required to confirm your booking.",
  },
  {
    category: "Rentals",
    question: "How far in advance should I book rental items?",
    answer:
      "We recommend booking at least 5-7 days in advance for standard rentals. For large events (100+ guests) or peak periods, we suggest 2-3 weeks advance notice to ensure availability.",
  },
  {
    category: "Rentals",
    question: "Can I rent your event grounds for non-funeral events?",
    answer:
      "Yes, our Memorial Garden, Chapel Hall, and Reception Hall are available for various events including celebrations of life, anniversaries, and community gatherings. Contact us for availability.",
  },
  // Events
  {
    category: "Events",
    question: "What is the capacity of your event venues?",
    answer:
      "Our Memorial Garden accommodates up to 150 guests outdoors, the Indoor Chapel Hall seats 200, and the Reception Hall holds up to 180 guests. Custom arrangements can be made for larger gatherings.",
  },
  {
    category: "Events",
    question: "Do you provide catering services?",
    answer:
      "While we do not provide catering directly, we have partnerships with trusted local caterers and can coordinate catering services as part of your event planning package.",
  },
  // Payments
  {
    category: "Payments",
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, bank transfers, mobile money, and major credit/debit cards. Payment plans are available for larger purchases — please discuss options with our team.",
  },
  {
    category: "Payments",
    question: "Is there a cancellation or refund policy?",
    answer:
      "Cancellations made 48+ hours before the scheduled date receive a full refund of the deposit. Cancellations within 48 hours are subject to a 25% cancellation fee. Non-refundable items will be clearly marked at the time of purchase.",
  },
];
