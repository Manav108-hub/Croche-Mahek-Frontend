// app/products/page.tsx - FULL CODE WITH WORKING MOBILE MENU
'use client';

import { useEffect, useState } from 'react';
import { fetchProducts } from '@/lib/api';
import Image from 'next/image';
import Link from 'next/link';
import '../girly-pages.css';
import WhatsAppFloat from '../whatsapp-float';

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, []);

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

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
            <Link href="/" className="header-logo-section" onClick={handleLinkClick}>
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

            <nav className={`header-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
              <Link href="/" className="nav-link" onClick={handleLinkClick}>Home</Link>
              <Link href="/products" className="nav-link" onClick={handleLinkClick}>Products</Link>
              <Link href="/categories" className="nav-link" onClick={handleLinkClick}>Categories</Link>
              <Link href="/about" className="nav-link" onClick={handleLinkClick}>About</Link>
              <Link href="/contact" className="nav-link" onClick={handleLinkClick}>Contact</Link>
            </nav>

            <button 
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
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
          {loading ? (
            <div className="empty-state">
              <span className="empty-icon">⏳</span>
              <h2>Loading...</h2>
              <p>Fetching beautiful items for you!</p>
            </div>
          ) : products.length === 0 ? (
            <div className="empty-state">
              <span className="empty-icon">🌷</span>
              <h2>No Products Yet</h2>
              <p>Beautiful items coming soon!</p>
            </div>
          ) : (
            <div className="products-grid">
              {products.map((product: any, index: number) => {
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