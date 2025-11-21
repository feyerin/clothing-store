'use client';

import Image from "next/image";

export default function MockupSection() {
  return (
    <section className="relative w-full py-12 sm:py-20 lg:py-24 px-4 sm:px-12 lg:px-36 flex justify-center items-center">
      
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
  );
}