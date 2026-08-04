import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

type Filter = "all" | "food" | "drink";

export default function Produk() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = filter === "all" ? products : products.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#E8472A] text-xs font-bold uppercase tracking-widest">Menu</span>
          <h1
            className="text-4xl md:text-5xl font-bold text-[#FFF8F0] mt-3 mb-4"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Pilihan menu kami
          </h1>
          <p className="text-[#8C7060] max-w-md mx-auto text-sm">
            Semua dimasak fresh setiap hari. Pilih favoritmu dan pesan langsung via WhatsApp!
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex justify-center gap-2 mb-10">
          {(["all", "food", "drink"] as Filter[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                filter === f
                  ? "bg-[#E8472A] text-white shadow-[0_4px_20px_rgba(232,71,42,0.3)]"
                  : "bg-[#2B1D0E] text-[#8C7060] border border-[#3d2510] hover:text-[#FFF8F0]"
              }`}
            >
              {f === "all" ? "Semua" : f === "food" ? "🍜 Makanan" : "☕ Minuman"}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-[#8C7060]">
            <span className="text-4xl">😕</span>
            <p className="mt-4 text-sm">Tidak ada menu di kategori ini.</p>
          </div>
        )}
      </div>
    </div>
  );
}
