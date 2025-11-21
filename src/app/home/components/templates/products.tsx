'use client';

import { useState } from "react";
import Image from "next/image";

const imageMap: Record<string, string> = {
  yellow: "/jacket/3.png",
  blue: "/jacket/1.png",
  purple: "/jacket/2.png",
  gray: "/jacket/jacket-gray.png",
};

const bgColorMap: Record<string, string> = {
  yellow: "bg-yellow-200",
  blue: "bg-blue-200",
  purple: "bg-purple-200",
  gray: "bg-gray-200",
};

export default function ProductSection() {
  const [color, setColor] = useState<string>("yellow");

  return (
    <section className="relative flex flex-col lg:flex-row my-10 w-full px-4 lg:px-8 gap-8">

      {/* Background Circle */}
      <div
        className={`absolute -top-[200px] lg:-top-[300px] left-0 lg:-left-[150px] w-[400px] sm:w-[500px] lg:w-[626px] h-[400px] sm:h-[500px] lg:h-[626px] rounded-full -z-10 ${bgColorMap[color]}`}
      />

      {/* LEFT SIDE */}
      <div className="flex-1 flex flex-col justify-center gap-3 items-start">
        {/* Main Product Image */}
        <div className="w-full sm:w-[600px] lg:w-[750px] h-[250px] sm:h-[300px] lg:h-[350px] relative">
          <Image
            src={imageMap[color]}
            alt="Jacket"
            fill
            className="object-contain"
          />
        </div>

        {/* Color Selector */}
        <div className="flex gap-4 items-center mt-2">
          {Object.keys(imageMap).map((c) => (
            <button
              key={c}
              onClick={() => setColor(c)}
              className={`
                w-6 h-6 rounded-full border-2 border-white shadow-md
                ${c === "yellow"
                  ? "bg-yellow-500"
                  : c === "blue"
                  ? "bg-blue-500"
                  : c === "purple"
                  ? "bg-purple-500"
                  : "bg-gray-500"
                }
              `}
            />
          ))}
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-3xl font-semibold mt-4">Premium Fleece Hoodie</h1>
        <p className="text-gray-600 text-sm sm:text-base">
          Premium hoodies designed for everyday comfort and effortless style.
        </p>

        <button className="px-6 py-3 bg-green-800 text-white rounded-md w-fit mt-2 text-sm sm:text-base">
          BUY NOW
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 pl-0 lg:pl-16 flex flex-col items-center lg:items-start">

        {/* Gradient Border Style */}
        <style jsx>{`
          .gradient-border {
            position: relative;
            border-radius: 9999px;
          }
          .gradient-border::before {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: 9999px;
            padding: 1px;
            background: linear-gradient(
              to right,
              rgba(0, 0, 0, 0.18),
              rgba(0, 0, 0, 0.08),
              rgba(0, 0, 0, 0)
            );
            -webkit-mask:
              linear-gradient(#fff 0 0) content-box,
              linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            pointer-events: none;
          }
        `}</style>

        {/* Category Selector */}
        <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 mb-6 bg-gray-300 rounded-full py-2 sm:py-3 px-4 sm:px-6 max-w-full">
          <button className="px-4 sm:px-6 py-2 rounded-full bg-white text-sm sm:text-base font-semibold">UNISEX</button>
          <button className="px-4 sm:px-6 py-2 rounded-full text-gray-700 text-sm sm:text-base font-medium">MEN</button>
          <button className="px-4 sm:px-6 py-2 rounded-full text-gray-700 text-sm sm:text-base font-medium">WOMEN</button>
        </div>

        {/* Product Type List */}
        <div className="flex flex-col gap-3 sm:gap-4 w-full">
          {[
            { name: "T-Shirt", icon: "/icon/tshirt.png" },
            { name: "Jacket", icon: "/icon/jacket.png" },
            { name: "Crewneck", icon: "/icon/crewneck.png" },
            { name: "Sweatshirt", icon: "/icon/sweatshirt.png" },
            { name: "Long Sleeve Tee", icon: "/icon/long sleeve.png" },
          ].map((item, i) => (
            <div
              key={i}
              className="gradient-border flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-2 sm:py-3 w-full"
            >
              <Image
                src={item.icon}
                alt={item.name}
                width={35}
                height={35}
              />
              <span className="text-sm sm:text-base">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}