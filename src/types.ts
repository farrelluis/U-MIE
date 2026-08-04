export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  price: number;
  image: string;
  badge?: string;
  category: "food" | "drink";
  spiceLevel?: 1 | 2 | 3;
}

export interface CartItem {
  product: Product;
  qty: number;
}
