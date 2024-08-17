"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

const brands = [
  "/img/brands/logo1.jpg",
  "/img/brands/logo2.jpg",
  "/img/brands/logo3.jpg",
  "/img/brands/logo4.jpg",
  "/img/brands/logo5.jpg",
];

const BrandShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollInterval: NodeJS.Timeout;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth
        ) {
          container.scrollLeft = 0; // Reset to start for infinite scroll
        } else {
          container.scrollLeft += 1; // Scroll horizontally
        }
      }, 15); // Adjust speed if needed
    };

    startAutoScroll();

    return () => {
      clearInterval(scrollInterval); // Clean up interval on unmount
    };
  }, []);

  return (
    <div className="relative cont-block overflow-hidden whitespace-nowrap py-2">
      <div
        ref={containerRef}
        className="flex space-x-4 overflow-auto no-scrollbar whitespace-nowrap"
      >
        {brands.concat(brands).map((brand, index) => (
          <div
            key={index}
            className="flex items-center flex-shrink-0 px-4 py-2 bg-white rounded-md"
          >
            <Image src={brand} width={200} height={60} alt="brand_image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandShowcase;
