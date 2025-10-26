// src/hooks/use-categories.ts
'use client';

import { useQuery } from '@tanstack/react-query';
import { API_CONFIG } from '@/lib/constants';
import type { Category } from '@/types';

interface CategoriesResponse {
  success: boolean;
  data: Category[];
}

export function useCategories() {
  return useQuery<Category[]>({
    queryKey: ['categories'],
    queryFn: async () => {
      const res = await fetch(
        `${API_CONFIG.baseUrl}${API_CONFIG.endpoints.categories}`
      );
      if (!res.ok) throw new Error('Failed to fetch categories');
      const data: CategoriesResponse = await res.json();
      return data.data;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

export function useCategory(slug: string) {
  return useQuery<Category>({
    queryKey: ['category', slug],
    queryFn: async () => {
      const res = await fetch(
        `${API_CONFIG.baseUrl}${API_CONFIG.endpoints.categories}/${slug}`
      );
      if (!res.ok) throw new Error('Failed to fetch category');
      const data = await res.json();
      return data.data;
    },
    enabled: !!slug,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}