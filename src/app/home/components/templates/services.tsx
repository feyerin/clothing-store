"use client";

import { motion } from "framer-motion";
import {
  Shirt,
  PackageCheck,
  Ruler,
  Palette,
} from "lucide-react";
import Image from "next/image";

export default function ServicesSection() {
  const services = [
    {
      title: "Custom Clothing",
      desc: "Pembuatan pakaian custom dengan kualitas premium & finishing rapi.",
      icon: <Shirt className="w-12 h-12" />,
    },
    {
      title: "Merchandise Production",
      desc: "Produksi merch untuk brand, komunitas, dan event besar.",
      icon: <PackageCheck className="w-12 h-12" />,
    },
    {
      title: "Size Chart Assistance",
      desc: "Panduan ukuran lengkap untuk memastikan fitting yang sempurna.",
      icon: <Ruler className="w-12 h-12" />,
    },
    {
      title: "Color & Material Options",
      desc: "Ratusan pilihan warna & material untuk kebutuhan produksi kamu.",
      icon: <Palette className="w-12 h-12" />,
    },
  ];

  return (
    <section className="w-full py-28 px-6 md:px-6 bg-white">
      
      <div className="max-w-6xl mx-auto text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-6xl font-bold text-gray-900 tracking-tight"
        >
          Our Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto"
        >
          Solusi lengkap untuk kebutuhan pakaian dan merchandise brand kamu.
        </motion.p>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all"
            >
              <div className="text-black mb-6">{item.icon}</div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-500 mt-2 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <section className="relative w-full px-4 sm:px-12 lg:px-36 flex justify-center items-center">
        
        {/* WRAPPER */}
        <div className="relative w-full flex flex-col lg:flex-row rounded-xl overflow-hidden shadow-xl h-auto sm:h-[500px] lg:h-[620px]">
  
          {/* LEFT SIDE */}
          <div className="w-full lg:w-1/2 h-auto lg:h-full bg-[linear-gradient(to_bottom,#DCDCC3,#B7B7AA)] flex flex-col justify-center lg:pl-28 pl-6 py-6 lg:py-0">
            <div className="flex flex-col gap-2 leading-snug">
              <h1 className="text-3xl sm:text-4xl lg:text-[64px] font-extrabold text-white drop-shadow">Polo</h1>
              <h1 className="text-3xl sm:text-4xl lg:text-[64px] font-extrabold text-white drop-shadow">T-shirt</h1>
              <h1 className="text-3xl sm:text-4xl lg:text-[64px] font-extrabold text-white drop-shadow">Mockup</h1>
            </div>
  
            <img
              src="/logo.png"
              alt="mockey logo"
              className="mt-4 sm:mt-6 w-32 sm:w-36 opacity-95"
            />
          </div>
  
          {/* RIGHT SIDE */}
          <div className="relative w-full lg:w-1/2 h-auto lg:h-full bg-white flex items-center justify-center py-6 lg:py-0">
            <Image
              src="/polo.png"
              alt="Polo Back Mockup"
              width={600}
              height={650}
              className="drop-shadow-xl object-contain max-w-full h-auto"
            />
          </div>
  
          {/* VECTOR ARROW */}
          <img
            src="/icon/Vector.svg"
            alt="arrow vector"
            className="absolute left-1/2 -translate-x-1/2 top-80 sm:top-96 lg:top-64 w-[200px] sm:w-[250px] lg:w-[300px] h-auto pointer-events-none select-none"
          />
        </div>
      </section>
    </section>
  );
}