"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProductCard from "../molecules/productCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HorizontalSliderProps {
  products: { img: string; name: string; price: string }[];
}

export default function HorizontalSlider({ products }: HorizontalSliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const onScroll = () => {
      const cardWidth = container.firstElementChild?.clientWidth || 0;
      const gap = parseInt(getComputedStyle(container).gap) || 20;
      const scrollLeft = container.scrollLeft;
      const index = Math.round(scrollLeft / (cardWidth + gap));
      setCurrentIndex(index);
    };

    container.addEventListener("scroll", onScroll);
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = container.firstElementChild?.clientWidth || 0;
    const gap = parseInt(getComputedStyle(container).gap) || 20;
    const containerWidth = container.offsetWidth;

    const scrollLeft = index * (cardWidth + gap) - containerWidth / 2 + cardWidth / 2;

    container.scrollTo({
      left: scrollLeft,
      behavior: "smooth",
    });
    setCurrentIndex(index);
  };

  const prev = () => scrollToIndex(Math.max(currentIndex - 1, 0));
  const next = () => scrollToIndex(Math.min(currentIndex + 1, products.length - 1));

  return (
    <div className="w-full flex flex-col lg:flex-row px-6 lg:px-20 gap-8">
      {/* LEFT TEXT */}
      <div className="w-full lg:w-2/5 flex flex-col justify-center max-w-md">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          Elevate Your <span className="text-gray-500">Everyday Style</span>
        </h1>
        <p className="mt-4 text-base lg:text-lg text-gray-600">
          Premium essentials crafted for comfort, detail, and timeless simplicity.
        </p>
      </div>

      {/* RIGHT SLIDER */}
      <div className="w-full lg:w-3/5 relative flex flex-col">
        {/* SCROLLABLE */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 py-8 scroll-smooth scrollbar-none snap-x snap-mandatory"
        >
          {products.map((p, i) => (
            <motion.div
              key={i}
              className="shrink-0 snap-center min-w-[300px] lg:min-w-[320px]"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 160, damping: 15 }}
            >
              <ProductCard product={p} scale={1} z={40 - i * 10} />
            </motion.div>
          ))}
        </div>

        {/* ARROWS */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-white rounded-full shadow hover:bg-gray-100"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-white rounded-full shadow hover:bg-gray-100"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}