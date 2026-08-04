import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import { buildWhatsAppUrl } from "../config";

const heroImg = "https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=1200&h=800&fit=crop&auto=format";

const testimonials = [
  { name: "Rania S.", text: "Mie gorengnya beneran nagih! Bumbu rahasianya kerasa banget, udah jadi langganan tiap malem.", star: 5 },
  { name: "Bimo P.", text: "Ice Caffe Latte-nya enak banget, kopinya berasa tapi ga pahit. Sesuai sama mie gorengnya!", star: 5 },
  { name: "Desi W.", text: "Nasi goreng spesialnya porsinya gedhe, lauknya lengkap. Worth banget harganya!", star: 5 },
];

export default function Beranda() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Makanan lezat U&MIE"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1008] via-[#1A1008]/80 to-[#1A1008]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1008] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 pt-24 pb-16">
          <div className="max-w-xl">
            <span className="inline-block text-[#F5A623] text-xs font-bold uppercase tracking-[0.2em] mb-5 border border-[#F5A623]/30 px-3 py-1 rounded-full">
              🔥 Street Food Premium Jakarta
            </span>
            <h1
              className="text-5xl md:text-7xl font-bold leading-[1.05] text-[#FFF8F0] mb-6"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Gurih,
              <br />
              <span className="text-[#E8472A]">Nikmat,</span>
              <br />
              Buat Kamu.
            </h1>
            <p className="text-[#FFF8F0]/70 text-lg leading-relaxed mb-8">
              Mie goreng, nasi goreng, dan kopi susu terbaik — dimasak dengan bumbu rahasia dan semangat yang ga pernah padam.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/produk"
                className="bg-[#E8472A] hover:bg-[#d13d22] text-white font-bold px-7 py-3.5 rounded-2xl transition-all hover:shadow-[0_8px_30px_rgba(232,71,42,0.4)] text-sm"
              >
                Lihat Menu →
              </Link>
              <a
                href={buildWhatsAppUrl("Halo U&MIE! Saya mau tanya-tanya dulu dong 😊")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#2B1D0E] hover:bg-[#3d2510] border border-[#3d2510] text-[#FFF8F0] font-bold px-7 py-3.5 rounded-2xl transition-colors text-sm"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Tanya via WA
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12">
              {[
                { value: "500+", label: "Pelanggan Setia" },
                { value: "3", label: "Menu Andalan" },
                { value: "4.9★", label: "Rating Rata-rata" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold text-[#F5A623]" style={{ fontFamily: "'Syne', sans-serif" }}>
                    {s.value}
                  </div>
                  <div className="text-[#8C7060] text-xs mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-[#8C7060] text-xs">Scroll</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8C7060" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* Why U&MIE */}
      <section className="py-20 max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="text-[#E8472A] text-xs font-bold uppercase tracking-widest">Kenapa Kami?</span>
          <h2
            className="text-4xl font-bold text-[#FFF8F0] mt-2"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Lebih dari sekedar makan
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "🔥",
              title: "Bumbu Rahasia",
              desc: "Racikan bumbu asli yang sudah kami sempurnakan bertahun-tahun. Sekali coba, pasti ketagihan.",
            },
            {
              icon: "⚡",
              title: "Pesan Cepat via WA",
              desc: "Tinggal klik, pesan langsung ke WhatsApp kami. Ga ribet, ga perlu daftar akun.",
            },
            {
              icon: "❤️",
              title: "Dimasak dengan Cinta",
              desc: "Setiap porsi dimasak fresh, bukan frozen. Kualitas terjaga dari dapur ke meja kamu.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-[#2B1D0E] border border-[#3d2510] rounded-2xl p-6 hover:border-[#E8472A]/40 transition-colors"
            >
              <span className="text-3xl">{item.icon}</span>
              <h3
                className="text-[#FFF8F0] font-bold text-lg mt-3 mb-2"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {item.title}
              </h3>
              <p className="text-[#8C7060] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Menu highlight */}
      <section className="py-20 bg-[#100A04]">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-[#E8472A] text-xs font-bold uppercase tracking-widest">Menu Kami</span>
              <h2
                className="text-4xl font-bold text-[#FFF8F0] mt-2"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Pilihan terbaik hari ini
              </h2>
            </div>
            <Link
              to="/produk"
              className="hidden md:inline-flex text-[#F5A623] text-sm font-semibold hover:underline"
            >
              Lihat semua →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div className="text-center mt-8 md:hidden">
            <Link
              to="/produk"
              className="inline-block text-[#F5A623] text-sm font-semibold hover:underline"
            >
              Lihat semua menu →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="text-[#E8472A] text-xs font-bold uppercase tracking-widest">Kata Mereka</span>
          <h2
            className="text-4xl font-bold text-[#FFF8F0] mt-2"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Pelanggan setia kami
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#2B1D0E] border border-[#3d2510] rounded-2xl p-6"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.star }).map((_, i) => (
                  <span key={i} className="text-[#F5A623] text-sm">★</span>
                ))}
              </div>
              <p className="text-[#FFF8F0]/80 text-sm leading-relaxed mb-4">"{t.text}"</p>
              <span className="text-[#8C7060] text-xs font-semibold">{t.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-[#E8472A] to-[#F5A623] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-white blur-3xl" />
        </div>
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center relative z-10">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Lapar? Pesan sekarang!
          </h2>
          <p className="text-white/80 mb-8 text-sm">
            Pesan langsung via WhatsApp, kami siapkan pesananmu dalam hitungan menit.
          </p>
          <a
            href={buildWhatsAppUrl("Halo U&MIE! Saya mau pesan sekarang 🍜")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#E8472A] font-bold px-8 py-4 rounded-2xl hover:shadow-2xl transition-shadow text-sm"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat WhatsApp Sekarang
          </a>
        </div>
      </section>
    </div>
  );
}
