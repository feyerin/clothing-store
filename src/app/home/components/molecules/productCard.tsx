"use client";

import Image from "next/image";

type Product = {
  img: string;
  name: string;
  price: string;
};

interface ProductCardProps {
  product: Product;
  scale?: number;
  z?: number;
}

export default function ProductCard({ product, scale = 1, z = 1 }: ProductCardProps) {
  return (
    <div
      className="bg-white rounded-3xl shadow-md flex flex-col items-center overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2"
      style={{
        width: "320px",
        height: "400px",
        scale: scale,
        zIndex: z,
      }}
    >
      {/* IMAGE */}
      <div className="relative w-full h-64">
        <Image
          src={product.img}
          alt={product.name}
          fill
          className="object-contain rounded-t-3xl"
        />
      </div>

      {/* TEXT */}
      <div className="flex flex-col items-center mt-4 px-4">
        <h3 className="text-lg font-semibold text-gray-900 text-center">
          {product.name}
        </h3>
        <p className="text-gray-500 mt-1 text-center">{product.price}</p>
      </div>

      {/* CTA / Badge (optional) */}
      <div className="mt-auto mb-4 px-4">
        <span className="bg-black text-white text-sm px-3 py-1 rounded-full">
          New
        </span>
      </div>
    </div>
  );
}