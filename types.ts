
export interface PriceHistory {
  date: string;
  price: number;
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  priceHistory: PriceHistory[];
  reviews: Review[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
  image?: string;
  groundingLinks?: { title: string; url: string }[];
  suggestedProductId?: number;
}

export interface UserPreferences {
  priceRange?: { min?: number; max?: number };
  brands?: string[];
  features?: string[];
}

export interface ShippingInfo {
  name: string;
  address: string;
  city: string;
  state: string;
  pinCode: string;
}

export type OrderStatus = 'Processing' | 'Shipped' | 'Delivered' | 'Canceled';

export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  total: number;
  shippingInfo: ShippingInfo;
  status: OrderStatus;
  cancellationReason?: string;
}
