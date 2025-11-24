"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function HeroPremium() {
  const slides = [
    "/hero/hero1.webp",
    "/hero/hero2.webp",
    "/hero/hero3.webp",
    "/hero/hero4.webp",
    "/hero/hero5.webp",
    "/hero/hero6.webp",
  ];

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".hero-next",
          prevEl: ".hero-prev",
        }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
      >
        {slides.map((src, i) => (
          <SwiperSlide key={i}>
            <div className="w-full h-full relative">
              <Image
                src={src}
                alt={`Hero ${i + 1}`}
                fill
                className="object-cover"
                priority={i === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* CUSTOM ARROWS */}
      <button className="hero-prev absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-black/30 backdrop-blur-md w-14 h-14 rounded-full flex items-center justify-center transition hover:bg-black/50">
        {/* LEFT ARROW SVG */}
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <path
            d="M15 6L9 12L15 18"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button className="hero-next absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-black/30 backdrop-blur-md w-14 h-14 rounded-full flex items-center justify-center transition hover:bg-black/50">
        {/* RIGHT ARROW SVG */}
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 6L15 12L9 18"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* BULLETS */}
      <style jsx>{`
        :global(.swiper-pagination) {
          bottom: 32px !important;
        }

        :global(.swiper-pagination-bullet) {
          background: rgba(255, 255, 255, 0.6);
          width: 10px;
          height: 10px;
          opacity: 1;
          transition: all 0.3s ease;
        }

        :global(.swiper-pagination-bullet-active) {
          background: white !important;
          width: 26px !important;
          border-radius: 8px !important;
        }
      `}</style>
    </section>
  );
}