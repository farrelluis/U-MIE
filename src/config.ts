export const WHATSAPP_NUMBER = "6281234567890";
export const OUTLET_ADDRESS = "Jl. Kuliner Raya No. 88, Jakarta Selatan";
export const OUTLET_HOURS = "10.00 – 22.00 WIB";
export const OUTLET_MAPS_URL = "https://maps.google.com/?q=-6.2088,106.8456";

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildSingleOrderMessage(name: string, price: number, qty: number = 1): string {
  return `Halo U&MIE! Saya mau pesan:\n- ${name} x${qty}\nTotal: Rp ${(price * qty).toLocaleString("id-ID")}\n\nMohon konfirmasi pesanannya ya 🙏`;
}

export function buildCartOrderMessage(
  items: Array<{ name: string; price: number; qty: number }>
): string {
  const lines = items.map((i) => `- ${i.name} x${i.qty} = Rp ${(i.price * i.qty).toLocaleString("id-ID")}`).join("\n");
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  return `Halo U&MIE! Saya mau pesan:\n${lines}\n\nTotal: Rp ${total.toLocaleString("id-ID")}\nMohon konfirmasi pesanannya ya 🙏`;
}
