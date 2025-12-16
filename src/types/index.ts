export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  variants?: {
    name: string;
    price: number;
    inStock: boolean;
  }[];
  inStock: boolean;
  rating?: number;
  priceRange?: string;
  variant?: string;
  quantity?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedVariant?: string;
}

export interface OrderDetails {
  items: CartItem[];
  total: number;
  customerEmail: string;
  customerName: string;
  shippingAddress: string;
  orderDate: string;
}
