// app/page.tsx
import { fetchCategories, fetchFeaturedProducts } from '@/lib/api';
import Image from 'next/image';
import Link from 'next/link';
import './girly-home.css';
import WhatsAppFloat from './whatsapp-float';

export const metadata = {
  title: 'Handmade Crochet Treasures | Flowers, Bags & Keychains',
  description: 'Discover our beautiful collection of handcrafted crochet items',
};

export default async function HomePage() {
  const categories = await fetchCategories();
  const products = await fetchFeaturedProducts();

  return (
    <div className="girly-homepage">
      {/* Floating WhatsApp */}
      <WhatsAppFloat />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="floating-flower flower-1">🌸</div>
          <div className="floating-flower flower-2">🌺</div>
          <div className="floating-flower flower-3">🌼</div>
          <div className="floating-flower flower-4">🌷</div>
          <div className="floating-flower flower-5">🌻</div>
        </div>
        
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-line">Handcrafted</span>
            <span className="title-line highlight">with Love</span>
          </h1>
          <p className="hero-subtitle">
            Beautiful crochet creations for every moment
          </p>
          <Link href="/products" className="hero-btn">
            <span>Explore Collection</span>
            <span className="btn-icon">✨</span>
          </Link>
        </div>

        <div className="scroll-indicator">
          <span>Scroll to discover</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Story</span>
            <h2 className="section-title">Where Every Stitch Tells a Story</h2>
            <p className="section-subtitle">
              Each piece is lovingly handcrafted with premium yarn and endless care
            </p>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <div className="card-icon">🧶</div>
              <h3>Handmade with Love</h3>
              <p>Every item is carefully crafted by skilled artisans who pour their heart into each creation</p>
            </div>
            <div className="about-card">
              <div className="card-icon">✨</div>
              <h3>Premium Quality</h3>
              <p>We use only the softest, highest-quality yarns to ensure lasting beauty and comfort</p>
            </div>
            <div className="about-card">
              <div className="card-icon">💝</div>
              <h3>Unique & Special</h3>
              <p>No two pieces are exactly alike, making your purchase truly one-of-a-kind</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Collections</span>
            <h2 className="section-title">Shop by Category</h2>
            <p className="section-subtitle">
              Discover our curated collections of handmade treasures
            </p>
          </div>

          {categories.length === 0 ? (
            <div className="empty-state">
              <span className="empty-icon">🌸</span>
              <p>New collections coming soon!</p>
            </div>
          ) : (
            <div className="categories-grid">
              {categories.map((category, index) => (
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

      {/* Featured Products */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Favorites</span>
            <h2 className="section-title">Trending Now</h2>
            <p className="section-subtitle">
              Our most loved handcrafted pieces
            </p>
          </div>

          {products.length === 0 ? (
            <div className="empty-state">
              <span className="empty-icon">🌼</span>
              <p>Beautiful items coming soon!</p>
            </div>
          ) : (
            <div className="products-grid">
              {products.slice(0, 4).map((product, index) => {
                const imageUrl = product.images?.[0]?.url;
                const effectivePrice = product.price?.discounted || product.price?.original || 0;
                const hasDiscount = product.price?.discounted && product.price.discounted < product.price.original;

                return (
                  <Link
                    key={product._id}
                    href={`/products/${product._id}`}
                    className="product-card"
                    style={{ animationDelay: `${index * 0.1}s` }}
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
                          <span>🌷</span>
                        </div>
                      )}
                      {hasDiscount && (
                        <span className="discount-badge">
                          {Math.round(((product.price.original - (product.price.discounted || 0)) / product.price.original) * 100)}% OFF
                        </span>
                      )}
                    </div>
                    <div className="product-info">
                      <span className="product-category">{product.category?.name}</span>
                      <h3 className="product-name">{product.name}</h3>
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

          <div className="view-all-container">
            <Link href="/products" className="view-all-btn">
              View All Products
              <span className="btn-sparkle">✨</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="girly-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-col">
              <h3 className="footer-title">Crochet Haven</h3>
              <p className="footer-text">
                Handmade with love in India. Each piece tells a story of dedication and craftsmanship.
              </p>
              <div className="social-links">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
                  Pinterest
                </a>
              </div>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Shop</h4>
              <ul className="footer-links">
                <li><Link href="/products">All Products</Link></li>
                <li><Link href="/categories">Categories</Link></li>
                <li><Link href="/products?featured=true">Featured</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Information</h4>
              <ul className="footer-links">
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/faq">FAQ</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Payment & Support</h4>
              <div className="payment-info">
                <p><strong>Payment Methods:</strong></p>
                <ul>
                  <li>💵 Cash on Delivery</li>
                  <li>📱 UPI / PhonePe / GPay</li>
                  <li>🏦 Bank Transfer</li>
                </ul>
                <p style={{ marginTop: '1rem' }}><strong>Order via WhatsApp</strong></p>
                <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>Quick response within 2 hours</p>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2025 Crochet Haven. Handcrafted with 💖 in India</p>
            <div className="footer-legal">
              <Link href="/terms">Terms</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/shipping">Shipping</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}