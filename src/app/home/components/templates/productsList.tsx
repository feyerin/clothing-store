type Category = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

const categories: Category[] = [
  {
    id: 1,
    title: "T-SHIRTS",
    description:
      "Terbuat dari material berkualitas sehingga awet dan nyaman saat dipakai. Pilihan yang tepat untuk segala macam aktivitas harian anda.",
    imageUrl: "/categories/tshirt.webp",
  },
  {
    id: 2,
    title: "LONGSLEEVE",
    description:
      "Bergaya kasual kini semakin terlihat modis dengan pilihan koleksi kaos Polo dari Cititex. Hadirkan kenyamanan di setiap penampilan casual dengan balutan bahan berkualitas.",
    imageUrl: "/categories/longsleeve.webp",
  },
  {
    id: 3,
    title: "HOODIE",
    description:
      "Pilihan koleksi jaket siap menyempurnakan tampilan anda setiap saat. Terbuat dari bahan fleece yang comfy dan cocok dipakai untuk segala kondisi.",
    imageUrl: "/categories/hoodie.webp",
  },
  {
    id: 4,
    title: "PRINTED SHIRTS",
    description:
      "Realisasikan idemu menjadi kaos favoritmu. Dengan mesin terbaik dan SDM yang sangat berpengalaman sehingga memberikan hasil cetak yang berkualitas tinggi.",
    imageUrl: "/categories/printed.webp",
  },
];

export default function ShopCategories() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        {/* Header with lines */}
        <div className="flex items-center justify-center mb-10">
          <div className="flex-1 border-t border-gray-300 mr-6" />
          <h2 className="text-2xl md:text-3xl font-extrabold text-center tracking-tight">Shop Our Top Categories</h2>
          <div className="flex-1 border-t border-gray-300 ml-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <article key={cat.id} className="flex flex-col items-center text-center">
              <div className="w-full h-[460px] md:h-[520px] lg:h-[520px] overflow-hidden rounded-sm shadow-sm">
                <img
                  src={cat.imageUrl}
                  alt={cat.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                />
              </div>

              <h3 className="mt-6 text-lg md:text-xl lg:text-2xl font-extrabold tracking-wider">
                {cat.title}
              </h3>

              <p className="mt-4 max-w-[320px] text-sm md:text-base leading-relaxed text-gray-700">
                {cat.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
