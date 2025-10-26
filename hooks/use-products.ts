// src/hooks/use-products.ts
'use client';

import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { API_CONFIG } from '@/lib/constants';
import type { Product } from '@/types';

interface ProductsResponse {
  success: boolean;
  data: Product[];
  pagination?: {
    page: number;
    limit: number;
    totalPages: number;
    totalProducts: number;
  };
}

interface ProductFilters {
  category?: string;
  featured?: boolean;
  search?: string;
  minPrice?: number;
  maxPrice?: number;
}

export function useProducts(filters?: ProductFilters) {
  const queryParams = new URLSearchParams();
  
  if (filters?.category) queryParams.append('category', filters.category);
  if (filters?.featured) queryParams.append('featured', 'true');
  if (filters?.search) queryParams.append('search', filters.search);
  if (filters?.minPrice) queryParams.append('minPrice', filters.minPrice.toString());
  if (filters?.maxPrice) queryParams.append('maxPrice', filters.maxPrice.toString());

  return useQuery<Product[]>({
    queryKey: ['products', filters],
    queryFn: async () => {
      const url = `${API_CONFIG.baseUrl}${API_CONFIG.endpoints.products}${
        queryParams.toString() ? `?${queryParams.toString()}` : ''
      }`;
      const res = await fetch(url);
      if (!res.ok) throw new Error('Failed to fetch products');
      const data: ProductsResponse = await res.json();
      return data.data;
    },
    staleTime: 1000 * 60, // 1 minute
  });
}

export function useProduct(id: string) {
  return useQuery<Product>({
    queryKey: ['product', id],
    queryFn: async () => {
      const res = await fetch(
        `${API_CONFIG.baseUrl}${API_CONFIG.endpoints.products}/${id}`
      );
      if (!res.ok) throw new Error('Failed to fetch product');
      const data = await res.json();
      return data.data;
    },
    enabled: !!id,
    staleTime: 1000 * 60, // 1 minute
  });
}

export function useFeaturedProducts() {
  return useQuery<Product[]>({
    queryKey: ['featured-products'],
    queryFn: async () => {
      const res = await fetch(
        `${API_CONFIG.baseUrl}${API_CONFIG.endpoints.featuredProducts}`
      );
      if (!res.ok) throw new Error('Failed to fetch featured products');
      const data: ProductsResponse = await res.json();
      return data.data;
    },
    staleTime: 1000 * 60 * 2, // 2 minutes
  });
}

export function useInfiniteProducts(filters?: ProductFilters) {
  const queryParams = new URLSearchParams();
  
  if (filters?.category) queryParams.append('category', filters.category);
  if (filters?.featured) queryParams.append('featured', 'true');
  if (filters?.search) queryParams.append('search', filters.search);

  return useInfiniteQuery({
    queryKey: ['products', 'infinite', filters],
    queryFn: async ({ pageParam = 1 }) => {
      queryParams.set('page', pageParam.toString());
      queryParams.set('limit', '12');
      
      const url = `${API_CONFIG.baseUrl}${API_CONFIG.endpoints.products}?${queryParams.toString()}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error('Failed to fetch products');
      return res.json() as Promise<ProductsResponse>;
    },
    getNextPageParam: (lastPage) => {
      if (!lastPage.pagination) return undefined;
      const { page, totalPages } = lastPage.pagination;
      return page < totalPages ? page + 1 : undefined;
    },
    initialPageParam: 1,
  });
}