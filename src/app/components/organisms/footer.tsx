"use client";

import Image from "next/image";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white mt-20">
      <div className="max-w-7xl mx-auto px-8 py-14">

        {/* TOP AREA */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">

          {/* LOGO + DESCRIPTION */}
          <div className="flex flex-col gap-4 max-w-sm">
            <Image
              src="/logo.png"
              alt="logo"
              width={120}
              height={40}
              className="object-contain"
            />

            <p className="text-gray-600 text-sm leading-relaxed">
              Premium apparel & custom mockups crafted for timeless style and modern simplicity.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-6 mt-2">

              <a href="#" className="opacity-80 hover:opacity-100 transition">
                <FaInstagram size={22} />
              </a>

              <a href="#" className="opacity-80 hover:opacity-100 transition">
                <FaTiktok size={22} />
              </a>

              <a href="#" className="opacity-80 hover:opacity-100 transition">
                <FaYoutube size={22} />
              </a>

            </div>
          </div>

          {/* NAVIGATION */}
          <div className="grid grid-cols-2 gap-16 text-sm">
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold text-gray-900">Menu</h4>
              <a href="#" className="text-gray-600 hover:text-black transition">Home</a>
              <a href="#" className="text-gray-600 hover:text-black transition">Product</a>
              <a href="#" className="text-gray-600 hover:text-black transition">About</a>
              <a href="#" className="text-gray-600 hover:text-black transition">Contact</a>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="font-semibold text-gray-900">Support</h4>
              <a href="#" className="text-gray-600 hover:text-black transition">FAQ</a>
              <a href="#" className="text-gray-600 hover:text-black transition">Shipping</a>
              <a href="#" className="text-gray-600 hover:text-black transition">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-black transition">Terms</a>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="w-full h-px bg-gray-300 my-10" />

        {/* COPYRIGHT */}
        <div className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Luxe Apparel. All rights reserved.
        </div>

      </div>
    </footer>
  );
}