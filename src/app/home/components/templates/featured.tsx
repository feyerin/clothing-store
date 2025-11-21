"use client";

import Image from "next/image";

export default function HighlightedFeature() {
  return (
    <section className="relative w-full py-32 flex flex-col items-center text-center px-6">
      
      {/* Apple-like subtle fade background */}
      <div className="absolute inset-0 bg-linear-to-b from-gray-50 to-white pointer-events-none" />

      {/* BADGE */}
      <div className="relative z-10 px-4 py-1 text-xs font-medium bg-black text-white rounded-full tracking-wide">
        NEW FEATURE
      </div>

      {/* TITLE */}
      <h1 className="relative z-10 text-5xl md:text-6xl font-semibold mt-6 text-gray-900 tracking-tight">
        Ultra-Soft Fabric Technology
      </h1>

      {/* SUBTITLE */}
      <p className="relative z-10 text-gray-600 text-lg max-w-xl mt-4 leading-relaxed">
        Experience comfort engineered with precision — breathable, lightweight, 
        and designed for everyday performance.
      </p>

      {/* FEATURE IMAGE */}
      <div className="relative mt-14 w-full max-w-4xl">
        <div className="relative w-full h-[420px] rounded-3xl overflow-hidden">
          <Image
            src="/fabric.avif"
            alt="feature"
            fill
            className="rounded-2xl"
          />
        </div>
      </div>

    </section>
  );
}