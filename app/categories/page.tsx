// app/categories/page.tsx - FULL CODE WITH WORKING MOBILE MENU
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../girly-pages.css';
import WhatsAppFloat from '../whatsapp-float';

async function getCategories() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`, {
    next: { tags: ['categories'], revalidate: 300 },
  });
  
  if (!res.ok) throw new Error('Failed to fetch categories');
  const data = await res.json();
  return data.data;
}

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCategories() {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error('Error loading categories:', error);
      } finally {
        setLoading(false);
      }
    }
    loadCategories();
  }, []);

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="girly-page">
      <WhatsAppFloat />

      {/* Page Header with Logo & Nav */}
      <header className="page-header">
        <div className="hero-decoration">
          <div className="deco-flower">🌸</div>
          <div className="deco-flower">🌺</div>
          <div className="deco-flower">🌼</div>
        </div>

        <div className="container">
          <div className="header-content">
            <Link href="/" className="header-logo-section" onClick={handleLinkClick}>
              <Image
                src="/logo-crochet.png"
                alt="DRISHYAA"
                width={100}
                height={100}
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
          <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', marginTop: '40px' }}>
            <h2 className="page-title">Our Collections</h2>
            <p className="page-subtitle">
              Explore our beautiful categories of handmade crochet items
            </p>
            <div className="products-count">
              {categories.length} {categories.length === 1 ? 'category' : 'categories'}
            </div>
          </div>
        </div>
      </header>

      {/* Categories Grid */}
      <section className="products-section">
        <div className="container">
          {loading ? (
            <div className="empty-state">
              <span className="empty-icon">⏳</span>
              <h2>Loading...</h2>
              <p>Fetching beautiful categories for you!</p>
            </div>
          ) : categories.length === 0 ? (
            <div className="empty-state">
              <span className="empty-icon">🌸</span>
              <h2>No Categories Yet</h2>
              <p>New collections coming soon!</p>
              <Link href="/" className="empty-btn">
                Back to Home
              </Link>
            </div>
          ) : (
            <div className="categories-grid">
              {categories.map((category: any, index: number) => (
                <Link
                  key={category._id}
                  href={`/categories/${category.slug}`}
                  className="category-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="category-image">
                    {category.image?.url ? (
                      <Image
                        src={category.image.url}
                        alt={category.name}
                        fill
                        className="cat-img"
                        sizes="(max-width: 768px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="category-placeholder">
                        <span>🌺</span>
                      </div>
                    )}
                  </div>
                  <div className="category-overlay">
                    <h3>{category.name}</h3>
                    <span className="category-arrow">→</span>
                  </div>
                </Link>
              ))}
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
              <p className="footer-desc">
                Each piece tells a story of dedication and craftsmanship.
              </p>
            </div>

            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><Link href="/products">All Products</Link></li>
                <li><Link href="/categories">Categories</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Payment Methods</h4>
              <ul>
                <li>📱 UPI / PhonePe / GPay</li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2025 DRISHYAA. Handcrafted with 💖 in India</p>
          </div>
        </div>
      </footer>
    </div>
  );
}