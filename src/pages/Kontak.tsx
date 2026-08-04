import { useState } from "react";
import { OUTLET_ADDRESS, OUTLET_HOURS, WHATSAPP_NUMBER, buildWhatsAppUrl } from "../config";

export default function Kontak() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSend(e: React.FormEvent) {
    e.preventDefault();
    const text = name
      ? `Halo U&MIE! Nama saya ${name}.\n\n${message}`
      : `Halo U&MIE!\n\n${message}`;
    window.open(buildWhatsAppUrl(text), "_blank", "noopener,noreferrer");
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#E8472A] text-xs font-bold uppercase tracking-widest">Kontak</span>
          <h1
            className="text-4xl md:text-5xl font-bold text-[#FFF8F0] mt-3 mb-4"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Hubungi kami
          </h1>
          <p className="text-[#8C7060] text-sm">
            Ada pertanyaan? Saran? Atau sekadar mau bilang makanannya enak? Kami senang mendengarnya!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Info cards */}
          <div className="flex flex-col gap-4">
            {[
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                ),
                title: "Lokasi Kami",
                content: OUTLET_ADDRESS,
                sub: "Klik untuk buka Google Maps",
                href: "https://maps.google.com/?q=-6.2088,106.8456",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                  </svg>
                ),
                title: "Jam Buka",
                content: OUTLET_HOURS,
                sub: "Setiap hari, termasuk hari libur",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                ),
                title: "WhatsApp",
                content: `+${WHATSAPP_NUMBER.replace("62", "62 ")}`,
                sub: "Respon cepat di jam buka",
                href: `https://wa.me/${WHATSAPP_NUMBER}`,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#2B1D0E] border border-[#3d2510] rounded-2xl p-5 flex gap-4 items-start hover:border-[#E8472A]/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#3d2510] flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-[#FFF8F0] font-semibold text-sm">{item.title}</h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#F5A623] text-sm mt-0.5 hover:underline block"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-[#F5A623] text-sm mt-0.5">{item.content}</p>
                  )}
                  {item.sub && <p className="text-[#8C7060] text-xs mt-0.5">{item.sub}</p>}
                </div>
              </div>
            ))}

            {/* Map embed placeholder */}
            <div className="bg-[#2B1D0E] border border-[#3d2510] rounded-2xl overflow-hidden h-48 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-[#2B1D0E]" />
              <div className="relative z-10 text-center">
                <div className="text-3xl mb-2">📍</div>
                <a
                  href="https://maps.google.com/?q=-6.2088,106.8456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F5A623] text-sm font-semibold hover:underline"
                >
                  Buka di Google Maps →
                </a>
                <p className="text-[#8C7060] text-xs mt-1">{OUTLET_ADDRESS}</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div>
            <div className="bg-[#2B1D0E] border border-[#3d2510] rounded-2xl p-6">
              <h2
                className="text-[#FFF8F0] font-bold text-xl mb-1"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Kirim Pesan
              </h2>
              <p className="text-[#8C7060] text-xs mb-6">Pesan akan dikirim via WhatsApp.</p>

              <form onSubmit={handleSend} className="flex flex-col gap-4">
                <div>
                  <label className="block text-[#FFF8F0]/70 text-xs font-semibold mb-1.5 uppercase tracking-wider">
                    Nama (opsional)
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nama kamu"
                    className="w-full bg-[#1A1008] border border-[#3d2510] text-[#FFF8F0] placeholder-[#8C7060] text-sm px-4 py-3 rounded-xl outline-none focus:border-[#E8472A] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[#FFF8F0]/70 text-xs font-semibold mb-1.5 uppercase tracking-wider">
                    Pesan *
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                    placeholder="Tulis pesanmu di sini..."
                    className="w-full bg-[#1A1008] border border-[#3d2510] text-[#FFF8F0] placeholder-[#8C7060] text-sm px-4 py-3 rounded-xl outline-none focus:border-[#E8472A] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#22c55e] text-white font-bold py-3.5 rounded-xl transition-colors text-sm"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Kirim via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
