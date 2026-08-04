import { useState } from "react";

const faqs = [
  {
    q: "Bagaimana cara memesan?",
    a: "Sangat mudah! Pilih menu yang kamu inginkan di halaman Produk, lalu klik tombol 'Beli Sekarang' untuk langsung pesan via WhatsApp, atau 'Tambah ke Keranjang' jika mau pesan beberapa item sekaligus. Setelah checkout, kami akan segera mengkonfirmasi pesananmu.",
  },
  {
    q: "Berapa lama waktu persiapan pesanan?",
    a: "Semua menu kami dimasak fresh saat pesanan masuk. Waktu persiapan berkisar 10-20 menit tergantung antrian. Kami akan update kamu via WhatsApp ya!",
  },
  {
    q: "Apakah ada layanan pengiriman?",
    a: "Saat ini kami melayani ambil di tempat (dine-in & take away). Untuk delivery, kamu bisa hubungi kami via WhatsApp dan kami akan bantu koordinasikan dengan jasa ojek online.",
  },
  {
    q: "Bisa minta level kepedasan?",
    a: "Tentu! Saat chat via WhatsApp, kamu bisa request level pedas: tidak pedas, sedang, atau ekstra pedas. Kami siap sesuaikan.",
  },
  {
    q: "Apakah ada paket bundling?",
    a: "Saat ini belum ada paket bundling resmi, tapi kamu bisa pesan kombinasi menu sesuai keinginan. Cek di keranjang untuk menghitung total sebelum checkout.",
  },
  {
    q: "Jam operasional kapan saja?",
    a: "Kami buka setiap hari pukul 10.00 hingga 22.00 WIB. Di luar jam itu, kamu bisa kirim pesan WA dan kami akan balas ketika toko buka.",
  },
  {
    q: "Metode pembayaran apa saja yang diterima?",
    a: "Kami menerima pembayaran tunai, transfer bank, GoPay, OVO, Dana, dan QRIS. Tanyakan detail ke kami via WhatsApp saat checkout.",
  },
  {
    q: "Apakah bisa pre-order untuk acara?",
    a: "Bisa banget! Untuk catering atau pre-order dalam jumlah besar, silakan hubungi kami minimal H-1. Kami siap membantu untuk acara arisan, kantor, hingga gathering keluarga.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-2xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#E8472A] text-xs font-bold uppercase tracking-widest">FAQ</span>
          <h1
            className="text-4xl md:text-5xl font-bold text-[#FFF8F0] mt-3 mb-4"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Pertanyaan yang sering ditanya
          </h1>
          <p className="text-[#8C7060] text-sm">
            Tidak menemukan jawaban? Langsung tanya kami via WhatsApp!
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-[#2B1D0E] border rounded-2xl overflow-hidden transition-colors ${
                open === i ? "border-[#E8472A]/40" : "border-[#3d2510]"
              }`}
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-[#FFF8F0] font-semibold text-sm">{faq.q}</span>
                <span
                  className={`text-[#E8472A] shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  open === i ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-5 pb-5 text-[#8C7060] text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 bg-[#2B1D0E] border border-[#3d2510] rounded-2xl p-6 text-center">
          <p className="text-[#FFF8F0]/80 text-sm mb-4">Masih punya pertanyaan lain?</p>
          <a
            href="https://wa.me/6289519274431?text=Halo U%26MIE! Saya mau tanya sesuatu 😊"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#22c55e] text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat WhatsApp Sekarang
          </a>
        </div>
      </div>
    </div>
  );
}
