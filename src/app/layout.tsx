import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RequestProvider from "@/context/RequestContext";
import RequestDrawer from "@/components/RequestDrawer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Donkor And Sons Transition Home — Funeral Services, Furniture & Rentals",
  description:
    "Providing compassionate funeral services, premium caskets and furniture, and event rentals with dignity and grace.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <RequestProvider>
          <Navbar />
          <main className="flex-1 pt-20">{children}</main>
          <RequestDrawer />
          <Footer />
        </RequestProvider>
      </body>
    </html>
  );
}
