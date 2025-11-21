"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import HorizontalSlider from "../organisms/horizontalSlider";

export default function HeroSection() {
  const [hovered, setHovered] = useState(false);

  const products = [
    { img: "/totebag/hoodie.webp", name: "Premium Hoodie", price: "$49" },
    { img: "/totebag/tshirt.jpg", name: "Classic Polo", price: "$39" },
    { img: "/totebag/totebag.webp", name: "Crewneck Sweatshirt", price: "$45" },
        { img: "/totebag/totebag.webp", name: "Crewneck Sweatshirt", price: "$45" },
    { img: "/totebag/totebag.webp", name: "Crewneck Sweatshirt", price: "$45" },
    { img: "/totebag/totebag.webp", name: "Crewneck Sweatshirt", price: "$45" },
    { img: "/totebag/totebag.webp", name: "Crewneck Sweatshirt", price: "$45" },

  ];

  const scatter = [
    { x: -160, y: -100, rotate: -14 },
    { x: 170, y: -60, rotate: 10 },
    { x: -120, y: 140, rotate: 15 },
  ];

  return (
    <section className="relative w-full flex flex-col items-center justify-start overflow-hidden py-20">
      {/* BG */}
      <div className="absolute inset-0  -z-20" />

      {/* TEXT */}
      <div className="relative max-w-[1200px] w-full px-10 flex flex-col items-center text-center z-10">
        <h1 className="text-6xl font-bold text-gray-900 tracking-tight">
          Elevate Your <span className="text-gray-500">Everyday Style</span>
        </h1>

        <p className="text-lg text-gray-600 mt-4 max-w-[680px]">
          Premium essentials crafted for comfort, detail, and timeless simplicity.
        </p>

        <button className="mt-8 px-8 py-4 bg-black text-white rounded-xl text-sm font-semibold hover:bg-gray-900 transition">
          SHOP COLLECTION
        </button>

        {/* STACKED CARDS */}
        <div
          className="relative mt-16 w-[560px] h-80 flex items-center justify-center cursor-pointer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* BACK */}
          <motion.div
            initial={{ x: 0, y: 0, rotate: -6 }}
            animate={hovered ? scatter[0] : { x: 0, y: 0, rotate: -6 }}
            transition={{ type: "spring", stiffness: 150, damping: 18 }}
            className="absolute w-full h-full bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <Image
              src="/totebag/tshirt.jpg"
              alt="Product Layer 1"
              width={560}
              height={320}
              className="object-contain"
            />
          </motion.div>

          {/* MID */}
          <motion.div
            initial={{ x: 0, y: 0, rotate: 3 }}
            animate={hovered ? scatter[1] : { x: 0, y: 0, rotate: 3 }}
            transition={{ type: "spring", stiffness: 150, damping: 18 }}
            className="absolute w-full h-full bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <Image
              src="/totebag/totebag.webp"
              alt="Product Layer 2"
              width={560}
              height={320}
              className="object-contain"
            />
          </motion.div>

          {/* TOP */}
          <motion.div
            initial={{ x: 0, y: 0, rotate: 0 }}
            animate={hovered ? scatter[2] : { x: 0, y: 0, rotate: 0 }}
            transition={{ type: "spring", stiffness: 150, damping: 18 }}
            className="absolute w-full h-full bg-white rounded-3xl shadow-2xl overflow-hidden z-10"
          >
            <Image
              src="/totebag/hoodie.webp"
              alt="Product Layer 3"
              width={560}
              height={320}
              className="object-contain"
            />

            <div className="absolute text-white bottom-4 left-6">
              <h3 className="text-xl font-semibold">Premium Hoodie</h3>
              <p className="text-sm">New Arrival</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* DRAG SCROLL SLIDER */}
      <motion.div
        className="relative w-full mt-40 flex items-center justify-center"
      >
        <HorizontalSlider products={products} />
      </motion.div>
    </section>
  );
}
