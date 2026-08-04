import type { Product } from "../types";

export const products: Product[] = [
  {
    id: "mie-goreng-spesial",
    name: "Mie Goreng Spesial",
    tagline: "Bumbu rahasia turun-temurun",
    description: "Mie goreng dengan bumbu rahasia khas U&MIE, topping telur, ayam suwir, dan kerupuk renyah.",
    longDescription:
      "Mie Goreng Spesial U&MIE dimasak dengan wok hei tinggi menggunakan bumbu racikan asli yang telah kami sempurnakan selama bertahun-tahun. Dipadu dengan ayam suwir berbumbu, telur dadar iris, bakso slice, daun bawang segar, dan kerupuk renyah. Satu porsi yang bikin kamu mau nambah terus.",
    price: 25000,
    image:
      "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=800&h=800&fit=crop&auto=format",
    badge: "Best Seller",
    category: "food",
    spiceLevel: 2,
  },
  {
    id: "ice-caffe-latte",
    name: "Ice Caffe Latte",
    tagline: "Kopi susu segar, biji pilihan lokal",
    description: "Espresso double shot dengan susu segar, es batu besar, dan sentuhan gula aren lembut.",
    longDescription:
      "Ice Caffe Latte kami menggunakan biji kopi Arabika lokal pilihan yang di-roast medium untuk profil rasa seimbang antara keasaman buah dan body yang kuat. Diseduh sebagai double espresso, dikombinasikan dengan fresh milk berkualitas tinggi dan es batu besar agar tidak cepat mencair. Sedikit sentuhan gula aren Jawa untuk manis alami yang khas.",
    price: 20000,
    image:
      "https://images.unsplash.com/photo-1759912256095-72174d9e88d7?w=800&h=800&fit=crop&auto=format",
    badge: "Favorit",
    category: "drink",
  },
  {
    id: "nasi-goreng-spesial",
    name: "Nasi Goreng Spesial",
    tagline: "Nasi premium, lauk berlimpah",
    description: "Nasi goreng dengan bumbu spesial, telur mata sapi, ayam, acar, dan kerupuk udang.",
    longDescription:
      "Nasi Goreng Spesial U&MIE menggunakan nasi pulen yang dimasak dengan api besar dan bumbu rempah pilihan yang memberikan warna coklat kemerahan khas. Disajikan lengkap dengan telur mata sapi setengah matang, ayam goreng suwir, acar timun-wortel segar, emping goreng, dan kerupuk udang besar. Komplit, lezat, dan mengenyangkan.",
    price: 28000,
    image:
      "https://images.unsplash.com/photo-1626266799523-941311ea2273?w=800&h=800&fit=crop&auto=format",
    category: "food",
    spiceLevel: 1,
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
