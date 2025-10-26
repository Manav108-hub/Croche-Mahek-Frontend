// src/types/index.ts

export interface Category {
  _id: string;
  name: string;
  description?: string;
  slug: string;
  image: {
    url: string;
    public_id: string;
  };
  isActive: boolean;
  sortOrder: number;
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  category: {
    _id: string;
    name: string;
    slug: string;
  };
  price: {
    original: number;
    discounted?: number;
  };
  images: Array<{
    url: string;
    public_id: string;
    alt?: string;
  }>;
  variants: Array<{
    type: string;
    name: string;
    value: string;
    available: boolean;
    stock: number;
  }>;
  specifications: Record<string, string>;
  tags: string[];
  sku: string;
  isActive: boolean;
  isFeatured: boolean;
  whatsappNumber: string;
  whatsappLink?: string;
  views: number;
  discountPercentage?: number;
  effectivePrice?: number;
  createdAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  count?: number;
  total?: number;
  page?: number;
  pages?: number;
}