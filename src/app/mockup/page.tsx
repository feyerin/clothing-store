"use client";

import { useState } from "react";

export default function TshirtDesigner() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setImageUrl(url);
  }

  return (
    <div className="min-h-screen flex flex-col items-center p-6 gap-6">
      <h1 className="text-2xl font-semibold">Custom T-Shirt Designer</h1>

      {/* Upload Area */}
      <div>
        <input
          type="file"
          accept="image/*"
          onChange={handleUpload}
          className="block text-sm"
        />
      </div>

      {/* T-Shirt Preview */}
      <div className="relative w-72">
        {/* Kaos (bisa diganti mockup png transparan) */}
        <img
          src="/tshirt_mockup.png"
          alt="T-Shirt"
          className="w-full pointer-events-none select-none"
        />

        {/* Gambar yang di-upload */}
        {imageUrl && (
          <img
            src={imageUrl}
            alt="User Upload"
            className="absolute top-24 left-1/2 -translate-x-1/2 w-32 object-contain"
          />
        )}
      </div>
    </div>
  );
}