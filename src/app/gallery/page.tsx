"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import AnimatedHero from "@/components/AnimatedHero";
import ImageLightbox from "@/components/ImageLightbox";
import ImageCard from "@/components/ImageCard";
import blackHearse2 from "@/assets/black hearse 2.jpg";
import blackHearse from "@/assets/black hearse.jpg";
import canopy2 from "@/assets/canopy 2.jpg";
import canopy from "@/assets/canopy.jpg";
import canopy9 from "@/assets/canopy9.jpg";
import casket2 from "@/assets/casket 2.jpg";
import casket1 from "@/assets/casket1.jpg";
import flowerCanopy from "@/assets/flower canopy.jpg";
import funeralChair111 from "@/assets/funeral-chair111.jpg";
import funeralChair222 from "@/assets/funeral-chair222.jpg";
import funeralChair333 from "@/assets/funeral-chair333.jpg";
import funeralChair444 from "@/assets/funeral-chair444.jpg";
import grounds1 from "@/assets/grounds 1.jpg";
import grounds4 from "@/assets/grounds 4.jpg";
import grounds6 from "@/assets/grounds 6.jpg";
import grounds7 from "@/assets/grounds 7.jpg";
import hearse6 from "@/assets/hearse 6.jpg";
import hearse8 from "@/assets/hearse 8.jpg";
import metalCasket from "@/assets/Metal casket.jpg";
import redHearse from "@/assets/red hearse.jpg";
import richHearse from "@/assets/rich hearse.jpg";
import woodenCasket from "@/assets/wooden casket.jpg";
import dining1 from "@/assets/dining1.jpg";
import dining2 from "@/assets/dining2.jpg";
import dining3 from "@/assets/dining3.jpg";
import dining4 from "@/assets/dining4.jpg";
import dining5 from "@/assets/dining5.jpg";
import dining6 from "@/assets/dining6.jpg";
import livingRoom1 from "@/assets/living-room1.jpg";
import livingRoom2 from "@/assets/living-room2.jpg";
import livingRoom3 from "@/assets/living-room3.jpg";
import livingRoom4 from "@/assets/living-room4.jpg";
import livingRoom5 from "@/assets/living-room5.jpg";
import livingRoom6 from "@/assets/living-room6.jpg";
import nightTable2 from "@/assets/night table 2.jpg";
import nightTable3 from "@/assets/night table 3.jpg";
import nightTables from "@/assets/night tables.jpg";
import officeChairs from "@/assets/office chairs.jpg";
import sofaChairs1 from "@/assets/sofa chairs 1.jpg";
import sofaChairs4 from "@/assets/sofa chairs 4.jpg";
import sofaChairs from "@/assets/sofa chairs.jpg";
import table2 from "@/assets/table2.jpg";
import table3 from "@/assets/table3.jpg";
import table4 from "@/assets/table4.jpg";
import tables1 from "@/assets/tables 1.jpg";

type GalleryPhoto = {
  src: StaticImageData;
  alt: string;
};

const funeralPhotos: GalleryPhoto[] = [
  { src: blackHearse, alt: "Black hearse ready for service" },
  { src: blackHearse2, alt: "Second black hearse at the funeral grounds" },
  { src: redHearse, alt: "Red hearse prepared for procession" },
  { src: richHearse, alt: "Premium hearse vehicle for dignified transport" },
  { src: hearse6, alt: "Hearse lineup for funeral ceremony" },
  { src: hearse8, alt: "Hearse parked at service venue" },
  { src: canopy, alt: "Funeral canopy setup at event site" },
  { src: canopy2, alt: "Additional canopy arrangement for guests" },
  { src: canopy9, alt: "Wide canopy setup for funeral gathering" },
  { src: flowerCanopy, alt: "Flower-decorated canopy for memorial event" },
  { src: funeralChair111, alt: "Funeral chairs arranged in rows" },
  { src: funeralChair222, alt: "Formal seating setup for service" },
  { src: funeralChair333, alt: "Guest chairs prepared before ceremony" },
  { src: funeralChair444, alt: "Large funeral seating arrangement" },
  { src: grounds1, alt: "Memorial grounds area prepared for ceremony" },
  { src: grounds4, alt: "Outdoor funeral grounds view" },
  { src: grounds6, alt: "Grounds with setup for gathering" },
  { src: grounds7, alt: "Expanded view of service grounds" },
  { src: casket1, alt: "Funeral casket display" },
  { src: casket2, alt: "Premium casket option" },
  { src: metalCasket, alt: "Metal casket for memorial service" },
  { src: woodenCasket, alt: "Wooden casket option in showroom" },
];

const furniturePhotos: GalleryPhoto[] = [
  { src: livingRoom1, alt: "Living room furniture set one" },
  { src: livingRoom2, alt: "Living room furniture set two" },
  { src: livingRoom3, alt: "Modern living room furniture display" },
  { src: livingRoom4, alt: "Comfort living room sofa arrangement" },
  { src: livingRoom5, alt: "Elegant living room furniture layout" },
  { src: livingRoom6, alt: "Complete living room furniture collection" },
  { src: sofaChairs, alt: "Sofa chair collection in showroom" },
  { src: sofaChairs1, alt: "Premium sofa chairs set one" },
  { src: sofaChairs4, alt: "Premium sofa chairs set two" },
  { src: dining1, alt: "Dining table and chairs set one" },
  { src: dining2, alt: "Dining furniture set two" },
  { src: dining3, alt: "Dining furniture set three" },
  { src: dining4, alt: "Dining furniture set four" },
  { src: dining5, alt: "Dining furniture set five" },
  { src: dining6, alt: "Dining furniture set six" },
  { src: officeChairs, alt: "Office chairs display" },
  { src: nightTables, alt: "Night table collection" },
  { src: nightTable2, alt: "Night table style two" },
  { src: nightTable3, alt: "Night table style three" },
  { src: tables1, alt: "Tables collection set one" },
  { src: table2, alt: "Table model two" },
  { src: table3, alt: "Table model three" },
  { src: table4, alt: "Table model four" },
];

export default function GalleryPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [view, setView] = useState<"funeral" | "furniture">("funeral");
  const sizePattern = ["tall", "small", "wide", "small", "tall", "small"] as const;

  return (
    <>
      <AnimatedHero
        image="/images/Whisk_015f7691c9217ed890e4a013a0aeca25eg.png"
        title="Our Gallery"
        subtitle="Explore dedicated funeral and furniture photo collections"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-sm font-medium text-gold tracking-widest uppercase">
              Gallery
            </span>
            <h1 className="mt-3 font-heading text-3xl sm:text-4xl font-bold text-primary">
              Funeral Gallery & Furniture Gallery
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-text-muted">
              Browse our real project photos separated into funeral images and
              furniture images. Click any photo to view it larger.
            </p>
          </motion.div>

          <div className="flex justify-center gap-3 mb-10">
            <button
              type="button"
              aria-pressed={view === "funeral"}
              onClick={() => setView("funeral")}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-gold/50 ${
                view === "funeral"
                  ? "bg-gold text-primary"
                  : "bg-primary/10 text-primary/80 hover:bg-gold/20 hover:text-primary"
              }`}
            >
              Funeral
            </button>
            <button
              type="button"
              aria-pressed={view === "furniture"}
              onClick={() => setView("furniture")}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-gold/50 ${
                view === "furniture"
                  ? "bg-gold text-primary"
                  : "bg-primary/10 text-primary/80 hover:bg-gold/20 hover:text-primary"
              }`}
            >
              Furniture
            </button>
          </div>

          <AnimatePresence mode="wait">
            {view === "funeral" ? (
              <motion.section
                key="funeral"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28 }}
                className="mb-16"
              >
                <h2 className="mb-6 font-heading text-2xl sm:text-3xl font-bold text-primary">
                  Funeral Gallery
                </h2>
                <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
                  {funeralPhotos.map((photo, index) => (
                    <ImageCard
                      key={`funeral-${index}`}
                      src={photo.src}
                      alt={photo.alt}
                      index={index}
                      label="Funeral"
                      onClick={() => setSelectedPhoto(photo)}
                      size={sizePattern[index % sizePattern.length]}
                    />
                  ))}
                </div>
              </motion.section>
            ) : (
              <motion.section
                key="furniture"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28 }}
              >
                <h2 className="mb-6 font-heading text-2xl sm:text-3xl font-bold text-primary">
                  Furniture Gallery
                </h2>
                <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
                  {furniturePhotos.map((photo, index) => (
                    <ImageCard
                      key={`furniture-${index}`}
                      src={photo.src}
                      alt={photo.alt}
                      index={index}
                      label="Furniture"
                      onClick={() => setSelectedPhoto(photo)}
                      size={sizePattern[index % sizePattern.length]}
                    />
                  ))}
                </div>
              </motion.section>
            )}
          </AnimatePresence>
        </div>
      </section>

      {selectedPhoto !== null && (
        <ImageLightbox
          src={selectedPhoto.src}
          alt={selectedPhoto.alt}
          open={selectedPhoto !== null}
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </>
  );
}
