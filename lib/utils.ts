// src/lib/utils.ts
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number, currency = '₹'): string {
  return `${currency}${price.toLocaleString('en-IN')}`;
}

export function generateWhatsAppLink(
  phoneNumber: string,
  productName?: string
): string {
  const cleanNumber = phoneNumber.replace(/[^0-9]/g, '');
  let message = 'Hello! I\'m interested in your crochet products.';
  
  if (productName) {
    message = `Hello! I'm interested in: ${productName}`;
  }
  
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim();
}

export function calculateDiscount(
  originalPrice: number,
  discountedPrice: number
): number {
  if (discountedPrice >= originalPrice) return 0;
  return Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);
}

export function formatDate(date: string | Date): string {
  const d = new Date(date);
  return d.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function isValidImageUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(parsed.pathname.toLowerCase());
  } catch {
    return false;
  }
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}