// src/lib/constants.ts

export const SITE_CONFIG = {
  name: 'Crochet Store',
  description: 'Handmade crochet products crafted with love',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  defaultWhatsApp: process.env.NEXT_PUBLIC_DEFAULT_WHATSAPP || '+919876543210',
};

export const API_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api',
  endpoints: {
    categories: '/categories',
    products: '/products',
    featuredProducts: '/products?featured=true',
    upload: '/upload',
  },
};

export const CACHE_CONFIG = {
  categories: {
    tags: ['categories'],
    revalidate: 300, // 5 minutes
  },
  products: {
    tags: ['products'],
    revalidate: 60, // 1 minute
  },
  featuredProducts: {
    tags: ['featured-products'],
    revalidate: 120, // 2 minutes
  },
  product: (id: string) => ({
    tags: [`product-${id}`],
    revalidate: 60, // 1 minute
  }),
};

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Categories', href: '/categories' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/drishyaa.co',
};

export const FOOTER_LINKS = {
  shop: [
    { label: 'All Products', href: '/products' },
    { label: 'Categories', href: '/categories' },
    { label: 'Featured', href: '/products?featured=true' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'FAQ', href: '/faq' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Shipping Policy', href: '/shipping' },
  ],
};

export const CURRENCY = {
  code: 'INR',
  symbol: '₹',
  locale: 'en-IN',
};