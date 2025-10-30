// app/categories/[slug]/page.tsx
import { fetchCategory, fetchProducts } from '@/lib/api';
import Image from 'next/image';
import Link from 'next/link';
import '../../girly-pages.css';
import WhatsAppFloat from '../../whatsapp-float';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = await fetchCategory(slug);
  return {
    title: `${category.name} | DRISHYAA`,
    description: `Browse our ${category.name} collection`,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = await fetchCategory(slug);
  const products = await fetchProducts({ category: category._id });

  return (
    <div className="girly-page">
      <WhatsAppFloat />

      {/* Category Header */}
      <section className="page-hero">
        <div className="hero-decoration">
          <span className="deco-flower">🌸</span>
          <span className="deco-flower">🌺</span>
        </div>
        <div className="container">
          <Link href="/" className="back-link">
            ← Back to Home
          </Link>
          <h1 className="page-title">{category.name}</h1>
          {category.description && (
            <p className="page-subtitle">{category.description}</p>
          )}
          <div className="products-count">
            {products.length} {products.length === 1 ? 'item' : 'items'} in this collection
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-section">
        <div className="container">
          {products.length === 0 ? (
            <div className="empty-state">
              <span className="empty-icon">🌷</span>
              <h2>No Items Yet</h2>
              <p>Beautiful {category.name.toLowerCase()} coming soon!</p>
              <Link href="/products" className="empty-btn">
                Browse All Products
              </Link>
            </div>
          ) : (
            <div className="products-grid">
              {products.map((product, index) => {
                const imageUrl = product.images?.[0]?.url;
                const effectivePrice = product.price?.discounted || product.price?.original || 0;
                const hasDiscount = product.price?.discounted && product.price.discounted < product.price.original;

                return (
                  <Link
                    key={product._id}
                    href={`/products/${product._id}`}
                    className="product-card"
                    style={{ animationDelay: `${(index % 12) * 0.05}s` }}
                  >
                    <div className="product-image">
                      {imageUrl ? (
                        <Image
                          src={imageUrl}
                          alt={product.name}
                          fill
                          className="prod-img"
                        />
                      ) : (
                        <div className="product-placeholder">
                          <span>🌺</span>
                        </div>
                      )}
                      {hasDiscount && product.price.discounted && (
                        <span className="discount-badge">
                          {Math.round(((product.price.original - product.price.discounted) / product.price.original) * 100)}% OFF
                        </span>
                      )}
                    </div>
                    <div className="product-info">
                      <h3 className="product-name">{product.name}</h3>
                      <p className="product-desc">{product.description?.substring(0, 80)}...</p>
                      <div className="product-price">
                        <span className="price-current">₹{effectivePrice}</span>
                        {hasDiscount && (
                          <span className="price-original">₹{product.price.original}</span>
                        )}
                      </div>
                      <button className="product-btn">
                        <span>View Details</span>
                        <span>💖</span>
                      </button>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="girly-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h3 className="footer-brand">DRISHYAA</h3>
              <p className="footer-desc">Handmade with love in India 💖</p>
            </div>
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/products">Products</Link></li>
                <li><Link href="/categories">Categories</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Support</h4>
              <ul>
                <li><Link href="/terms">Terms & Conditions</Link></li>
                <li><Link href="/shipping">Shipping Info</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 DRISHYAA. Made with 💖</p>
          </div>
        </div>
      </footer>
    </div>
  );
}