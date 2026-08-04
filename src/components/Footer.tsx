import { Link } from "react-router-dom";
import { OUTLET_ADDRESS, OUTLET_HOURS, WHATSAPP_NUMBER } from "../config";

export default function Footer() {
  return (
    <footer className="bg-[#100A04] border-t border-[#2B1D0E] mt-auto">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <span
              className="font-display text-3xl font-bold"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              <span className="text-[#F5A623]">U</span>
              <span className="text-[#FFF8F0]">&amp;</span>
              <span className="text-[#E8472A]">MIE</span>
            </span>
            <p className="mt-3 text-[#8C7060] text-sm leading-relaxed">
              Gurih, nikmat, buat kamu. Masak dengan cinta, disajikan dengan semangat.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-[#25D366] text-sm font-semibold hover:underline"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat via WhatsApp
            </a>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[#FFF8F0] font-semibold text-sm uppercase tracking-widest mb-4">
              Navigasi
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                { to: "/", label: "Beranda" },
                { to: "/tentang", label: "Tentang Kami" },
                { to: "/produk", label: "Menu" },
                { to: "/faq", label: "FAQ" },
                { to: "/kontak", label: "Kontak" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-[#8C7060] text-sm hover:text-[#FFF8F0] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-[#FFF8F0] font-semibold text-sm uppercase tracking-widest mb-4">
              Kunjungi Kami
            </h4>
            <div className="flex flex-col gap-3 text-sm text-[#8C7060]">
              <div className="flex items-start gap-2">
                <svg className="shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <span>{OUTLET_ADDRESS}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                </svg>
                <span>{OUTLET_HOURS}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#2B1D0E] flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[#8C7060] text-xs">
            © 2024 U&amp;MIE. Semua hak dilindungi.
          </p>
          <p className="text-[#8C7060] text-xs">
            Dibuat dengan ❤️ di Jakarta
          </p>
        </div>
      </div>
    </footer>
  );
}
