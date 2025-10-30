// app/products/page.tsx (Redesigned with proper header)
import { fetchProducts } from '@/lib/api';
import Image from 'next/image';
import Link from 'next/link';
import '../girly-pages.css';
import WhatsAppFloat from '../whatsapp-float';

export const metadata = {
  title: 'All Products | DRISHYAA',
  description: 'Browse our complete collection of handmade crochet items',
};

export default async function ProductsPage() {
  const products = await fetchProducts();

  return (
    <div className="girly-page">
      <WhatsAppFloat />

      {/* Page Header with Logo & Nav */}
      <section className="page-header">
        <div className="hero-decoration">
          <span className="deco-flower">🌸</span>
          <span className="deco-flower">🌺</span>
          <span className="deco-flower">🌼</span>
        </div>
        <div className="container">
          {/* Header with Logo on Left */}
          <div className="header-content">
            <Link href="/" className="header-logo-section">
              <Image
                src="/logo-crochet.png"
                alt="DRISHYAA"
                width={80}
                height={80}
                className="page-logo-img"
              />
              <div className="header-brand-text">
                <h1 className="header-brand-name">DRISHYAA</h1>
                <p className="header-brand-tagline">Handmade with Love</p>
              </div>
            </Link>

            <nav className="header-nav">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/products" className="nav-link">Products</Link>
              <Link href="/categories" className="nav-link">Categories</Link>
              <Link href="/about" className="nav-link">About</Link>
              <Link href="/contact" className="nav-link">Contact</Link>
            </nav>

            <button className="mobile-menu-btn">☰</button>
          </div>

          {/* Page Title Section */}
          <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
            <h2 className="page-title">Our Collection</h2>
            <p className="page-subtitle">
              Handcrafted treasures made with love
            </p>
            <div className="products-count">
              {products.length} beautiful {products.length === 1 ? 'item' : 'items'}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-section">
        <div className="container">
          {products.length === 0 ? (
            <div className="empty-state">
              <span className="empty-icon">🌷</span>
              <h2>No Products Yet</h2>
              <p>Beautiful items coming soon!</p>
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
                      {product.isFeatured && (
                        <span className="featured-badge">⭐ Featured</span>
                      )}
                    </div>
                    <div className="product-info">
                      <span className="product-category">{product.category?.name}</span>
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
              <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="footer-branding">
                  <div className="footer-logo">
                    <Image
                      src="/logo-crochet.png"
                      alt="DRISHYAA"
                      width={70}
                      height={70}
                      className="footer-logo-img"
                    />
                  </div>
                  <div className="footer-brand-text">
                    <h3>DRISHYAA</h3>
                    <p>Handmade with Love</p>
                  </div>
                </div>
              </Link>
              <p className="footer-desc">Crafted with care in India 💖</p>
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