'use client';

import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6 px-8">
      
      {/* LOGO */}
      <div className="relative w-[120px] h-10">
        <Image
          src="/logo.png"
          alt="Luxe Logo"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* NAV LINKS */}
      <div className="flex gap-8 text-gray-700">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="#">Product</a>
        <a href="#">Contact</a>
      </div>

      {/* AUTH LINKS */}
      <div className="flex gap-6 text-sm">
        <a href="#">Login</a>
        <a href="#">Signup</a>
      </div>
    </nav>
  );
}