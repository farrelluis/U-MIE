import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById } from "../data/products";
import { useCart } from "../context/CartContext";
import { buildWhatsAppUrl, buildSingleOrderMessage } from "../config";
import Toast from "../components/Toast";

export default function DetailProduk() {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id ?? "");
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [toast, setToast] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen pt-24 flex flex-col items-center justify-center text-center px-4">
        <span className="text-6xl">🍜</span>
        <h2 className="text-2xl font-bold text-[#FFF8F0] mt-4 mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>
          Menu tidak ditemukan
        </h2>
        <p className="text-[#8C7060] text-sm mb-6">Mungkin menu ini sudah habis atau tidak tersedia.</p>
        <Link to="/produk" className="bg-[#E8472A] text-white font-semibold px-6 py-3 rounded-2xl text-sm">
          ← Kembali ke Menu
        </Link>
      </div>
    );
  }

  function handleAdd() {
    for (let i = 0; i < qty; i++) addItem(product!);
    setToast(true);
  }

  const waMsg = buildSingleOrderMessage(product.name, product.price, qty);

  return (
    <>
      <div className="min-h-screen pt-20 pb-20">
        {/* Breadcrumb */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 pt-6 pb-4">
          <div className="flex items-center gap-2 text-xs text-[#8C7060]">
            <Link to="/" className="hover:text-[#FFF8F0] transition-colors">Beranda</Link>
            <span>/</span>
            <Link to="/produk" className="hover:text-[#FFF8F0] transition-colors">Menu</Link>
            <span>/</span>
            <span className="text-[#F5A623]">{product.name}</span>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden bg-[#2B1D0E]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full aspect-square object-cover"
              />
              {product.badge && (
                <span className="absolute top-4 left-4 bg-[#E8472A] text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-xl">
                  {product.badge}
                </span>
              )}
              {product.spiceLevel && (
                <span className="absolute top-4 right-4 bg-[#1A1008]/80 backdrop-blur-sm px-3 py-1.5 rounded-xl text-sm">
                  {"🌶️".repeat(product.spiceLevel)}
                </span>
              )}
            </div>

            {/* Info */}
            <div className="md:sticky md:top-24">
              <span className="text-[#E8472A] text-xs font-bold uppercase tracking-widest">
                {product.category === "food" ? "Makanan" : "Minuman"}
              </span>
              <h1
                className="text-4xl md:text-5xl font-bold text-[#FFF8F0] mt-2 mb-2 leading-tight"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {product.name}
              </h1>
              <p className="text-[#F5A623] text-sm font-semibold mb-4">{product.tagline}</p>

              <p className="text-[#FFF8F0]/70 text-sm leading-relaxed mb-6">
                {product.longDescription}
              </p>

              {/* Price */}
              <div className="bg-[#2B1D0E] border border-[#3d2510] rounded-2xl p-5 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[#8C7060] text-xs">Harga per porsi</span>
                    <div className="text-[#F5A623] text-3xl font-bold mt-0.5" style={{ fontFamily: "'Syne', sans-serif" }}>
                      Rp {product.price.toLocaleString("id-ID")}
                    </div>
                  </div>
                  {/* Qty selector */}
                  <div className="flex items-center gap-3 bg-[#1A1008] border border-[#3d2510] rounded-xl px-2 py-1">
                    <button
                      onClick={() => setQty((q) => Math.max(1, q - 1))}
                      className="w-8 h-8 flex items-center justify-center text-[#FFF8F0] hover:text-[#E8472A] font-bold text-lg transition-colors"
                    >
                      −
                    </button>
                    <span className="w-6 text-center text-[#FFF8F0] font-bold">{qty}</span>
                    <button
                      onClick={() => setQty((q) => q + 1)}
                      className="w-8 h-8 flex items-center justify-center text-[#FFF8F0] hover:text-[#F5A623] font-bold text-lg transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
                {qty > 1 && (
                  <div className="mt-3 pt-3 border-t border-[#3d2510] flex items-center justify-between">
                    <span className="text-[#8C7060] text-xs">Total ({qty} porsi)</span>
                    <span className="text-[#FFF8F0] font-bold">Rp {(product.price * qty).toLocaleString("id-ID")}</span>
                  </div>
                )}
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-3">
                <a
                  href={buildWhatsAppUrl(waMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#22c55e] text-white font-bold py-4 rounded-2xl transition-colors text-sm"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Beli Sekarang via WhatsApp
                </a>
                <button
                  onClick={handleAdd}
                  className="flex items-center justify-center gap-2 bg-[#3d2510] hover:bg-[#E8472A] text-[#FFF8F0] font-bold py-4 rounded-2xl transition-colors border border-[#E8472A]/30 hover:border-[#E8472A] text-sm"
                >
                  + Tambah ke Keranjang
                </button>
              </div>

              <Link
                to="/produk"
                className="block text-center text-[#8C7060] text-xs mt-5 hover:text-[#FFF8F0] transition-colors"
              >
                ← Kembali ke semua menu
              </Link>
            </div>
          </div>
        </div>
      </div>

      {toast && (
        <Toast
          message={`${product.name} x${qty} ditambahkan ke keranjang`}
          onClose={() => setToast(false)}
        />
      )}
    </>
  );
}
