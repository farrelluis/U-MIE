import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

const navLinks = [
  { to: "/", label: "Beranda" },
  { to: "/tentang", label: "Tentang" },
  { to: "/produk", label: "Produk" },
  { to: "/faq", label: "FAQ" },
  { to: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const { totalItems } = useCart();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#1A1008]/90 backdrop-blur-md border-b border-[#3d2510]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span
              className="font-display text-2xl font-bold tracking-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              <span className="text-[#F5A623]">U</span>
              <span className="text-[#FFF8F0]">&amp;</span>
              <span className="text-[#E8472A]">MIE</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`text-sm font-semibold transition-colors ${
                    location.pathname === link.to
                      ? "text-[#F5A623]"
                      : "text-[#FFF8F0]/70 hover:text-[#FFF8F0]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <Link
              to="/keranjang"
              className="relative flex items-center justify-center w-10 h-10 rounded-full border border-[#3d2510] hover:border-[#E8472A] transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFF8F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#E8472A] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems > 9 ? "9+" : totalItems}
                </span>
              )}
            </Link>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-0.5 bg-[#FFF8F0] transition-all duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-5 h-0.5 bg-[#FFF8F0] transition-all duration-200 ${open ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-[#FFF8F0] transition-all duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
        <div
          className={`absolute top-0 right-0 h-full w-64 bg-[#2B1D0E] border-l border-[#3d2510] flex flex-col transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="h-16 flex items-center px-6 border-b border-[#3d2510]">
            <span className="font-display text-xl font-bold" style={{ fontFamily: "'Syne', sans-serif" }}>
              <span className="text-[#F5A623]">U</span>
              <span className="text-[#FFF8F0]">&amp;</span>
              <span className="text-[#E8472A]">MIE</span>
            </span>
          </div>
          <ul className="flex flex-col gap-1 p-4 flex-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    location.pathname === link.to
                      ? "bg-[#E8472A]/15 text-[#F5A623]"
                      : "text-[#FFF8F0]/70 hover:bg-[#3d2510] hover:text-[#FFF8F0]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-4">
              <Link
                to="/keranjang"
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-[#FFF8F0]/70 hover:bg-[#3d2510] hover:text-[#FFF8F0] transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
                Keranjang
                {totalItems > 0 && (
                  <span className="ml-auto bg-[#E8472A] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                    {totalItems}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
