// src/app/categories/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Categories | Crochet Store',
  description: 'Browse all crochet product categories',
};

async function getCategories() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`, {
    next: { tags: ['categories'], revalidate: 300 },
  });
  
  if (!res.ok) throw new Error('Failed to fetch categories');
  const data = await res.json();
  return data.data;
}

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Explore Categories
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our handcrafted crochet collections
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category: any) => (
            <Link
              key={category._id}
              href={`/categories/${category.slug}`}
              className="group"
            >
              <Card className="overflow-hidden border-2 hover:border-primary transition-all hover:shadow-lg">
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={category.image.url}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <h3 className="font-heading text-white text-lg font-semibold">
                        {category.name}
                      </h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}