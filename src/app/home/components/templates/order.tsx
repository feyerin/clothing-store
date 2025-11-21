'use client';

import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function OrderCTASectionApple() {
  const wa =
    "https://wa.me/6280000000000?text=Halo!%20Saya%20ingin%20order%20produk.";

  return (
    <section className="w-full py-28 px-4 sm:px-8 lg:px-12 flex justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Text */}
        <div>
          <h2 className="text-5xl font-bold text-gray-900 leading-tight">
            Order Custom Apparel  
            <span className="block text-gray-500">with Fast Response</span>
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            Hubungi kami untuk detail produk, custom desain, atau harga grosir.
          </p>

          <a
            href={wa}
            target="_blank"
            className="inline-flex items-center mt-8 px-10 py-4 bg-[#25D366] text-white rounded-xl hover:bg-[#1ebe5d] font-semibold transition-colors"
          >
            <FaWhatsapp className="mr-3 text-xl" />
            Order via WhatsApp
          </a>
        </div>

        {/* Product Mockup Image */}
        <div className="relative w-full h-[300px] sm:h-[500px] lg:h-[500px]">
          <Image
            src="/graphics/whatsappCTA.jpg"
            alt="Mockup"
            fill
            className="drop-shadow-xl rounded-4xl"
          />
        </div>

      </div>
    </section>
  );
}