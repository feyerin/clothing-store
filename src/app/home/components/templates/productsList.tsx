"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductSlider() {
  const products = [
    {
      name: "Totebag",
      price: "$45",
      subtitle: "Minimalist everyday fit",
      img: "/totebag/totebag.webp",
    },
    {
      name: "Premium Hoodie",
      price: "$49",
      subtitle: "Ultra-soft fleece material",
      img: "/products/hoodie.png",
    },
    {
      name: "T-Shirt",
      price: "$39",
      subtitle: "Breathable cotton comfort",
      img: "/products/polo.png",
    },
    {
      name: "Crewneck",
      price: "$45",
      subtitle: "Minimalist everyday fit",
      img: "/products/crewneck.png",
    },
  ];

  const [index, setIndex] = useState(0);

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-12 flex flex-col items-center">

      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 text-center">
        Featured <span className="text-gray-500">Collection</span>
      </h2>
      <p className="text-gray-600 mt-2 text-center text-sm sm:text-lg">
        Discover your style with our newest drops
      </p>

      {/* Slider Wrapper */}
      <div className="relative w-full sm:w-[90vw] lg:w-[60vw] h-auto sm:h-[420px] lg:h-[480px] mt-8 rounded-2xl overflow-hidden shadow-2xl bg-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="absolute inset-0 flex flex-col lg:flex-row"
          >
            {/* LEFT CONTENT */}
            <div className="w-full lg:w-1/2 bg-linear-to-b from-gray-200 to-gray-400 flex flex-col justify-center p-6 sm:p-10">
              <h3 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-white drop-shadow">
                {products[index].name}
              </h3>

              <p className="text-sm sm:text-lg text-white mt-2 sm:mt-3 opacity-90">
                {products[index].subtitle}
              </p>

              <p className="text-2xl sm:text-3xl lg:text-3xl font-semibold mt-4 sm:mt-6 text-white">
                {products[index].price}
              </p>

              <button className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-black text-white rounded-md w-fit text-sm sm:text-base">
                Buy Now
              </button>
            </div>

            {/* RIGHT IMAGE */}
            <div className="w-full lg:w-1/2 flex items-center justify-center bg-white p-4 sm:p-6">
              <div className="relative w-full h-[250px] sm:h-[350px] lg:h-full">
                <Image
                  src={products[index].img}
                  alt={products[index].name}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Dots */}
      <div className="flex gap-2 sm:gap-3 mt-4 sm:mt-6">
        {products.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 sm:h-3 rounded-full transition-all ${
              i === index ? "bg-black w-5 sm:w-6" : "bg-gray-400 w-2 sm:w-3"
            }`}
          />
        ))}
      </div>
    </section>
  );
}