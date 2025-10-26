// src/lib/api.ts
import { API_CONFIG } from './constants';
import type { Product, Category } from '@/types';

interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

class ApiClient {
  private baseUrl: string;

  constructor() {
    this.baseUrl = API_CONFIG.baseUrl;
  }

  private async request<T>(
    endpoint: string,
    options?: RequestInit
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    
    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({
          message: 'An error occurred',
        }));
        throw new Error(error.message || `HTTP ${response.status}`);
      }

      return response.json();
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('An unexpected error occurred');
    }
  }

  // Categories
  async getCategories(): Promise<Category[]> {
    const response = await this.request<ApiResponse<Category[]>>(
      API_CONFIG.endpoints.categories
    );
    return response.data;
  }

  async getCategory(slug: string): Promise<Category> {
    const response = await this.request<ApiResponse<Category>>(
      `/category/${slug}`
    );
    return response.data;
  }

  // Products
  async getProducts(params?: {
    category?: string;
    featured?: boolean;
    search?: string;
    page?: number;
    limit?: number;
  }): Promise<Product[]> {
    const queryParams = new URLSearchParams();
    
    if (params?.category) queryParams.append('category', params.category);
    if (params?.featured) queryParams.append('featured', 'true');
    if (params?.search) queryParams.append('search', params.search);
    if (params?.page) queryParams.append('page', params.page.toString());
    if (params?.limit) queryParams.append('limit', params.limit.toString());

    const endpoint = `${API_CONFIG.endpoints.products}${
      queryParams.toString() ? `?${queryParams.toString()}` : ''
    }`;

    const response = await this.request<ApiResponse<Product[]>>(endpoint);
    return response.data;
  }

  async getProduct(id: string): Promise<Product> {
    const response = await this.request<ApiResponse<Product>>(
      `/product/${id}`
    );
    return response.data;
  }

  async getFeaturedProducts(): Promise<Product[]> {
    return this.getProducts({ featured: true });
  }

  async getProductsByCategory(categorySlug: string): Promise<Product[]> {
    return this.getProducts({ category: categorySlug });
  }

  async searchProducts(query: string): Promise<Product[]> {
    return this.getProducts({ search: query });
  }
}

// Export singleton instance
export const api = new ApiClient();

// Export helper functions for server components
export async function fetchCategories() {
  return api.getCategories();
}

export async function fetchCategory(slug: string) {
  return api.getCategory(slug);
}

export async function fetchProducts(params?: Parameters<typeof api.getProducts>[0]) {
  return api.getProducts(params);
}

export async function fetchProduct(id: string) {
  return api.getProduct(id);
}

export async function fetchFeaturedProducts() {
  return api.getFeaturedProducts();
}