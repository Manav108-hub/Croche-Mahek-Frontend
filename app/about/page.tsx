/* eslint-disable react/no-unescaped-entities */
// app/about/page.tsx
import Link from 'next/link';
import WhatsAppFloat from '@/app/whatsapp-float';
import '../girly-pages.css';

export const metadata = {
  title: 'About Us | DRISHYAA',
  description: 'Learn about our handmade crochet journey and passion',
};

export default function AboutPage() {
  return (
    <div className="girly-page">
      <WhatsAppFloat />

      {/* Page Header */}
      <section className="page-hero">
        <div className="hero-decoration">
          <span className="deco-flower">🌸</span>
          <span className="deco-flower">🌺</span>
          <span className="deco-flower">🌼</span>
        </div>
        <div className="container">
          <Link href="/" className="back-link">
            ← Back to Home
          </Link>
          <h1 className="page-title">About Us</h1>
          <p className="page-subtitle">
            Our story of love, yarn, and creativity
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="page-content">
        <div className="container">
          <div className="about-content">
            {/* Story Section */}
            <div className="about-section">
              <h2 className="section-heading">Our Story 🌺</h2>
              <p className="section-text">
                Welcome to DRISHYAA, where every stitch tells a story! We're passionate about 
                creating beautiful, handmade crochet items that bring joy and warmth to your life. 
                What started as a hobby has blossomed into a full-fledged creative journey, and 
                we're so glad you're here to be part of it.
              </p>
              <p className="section-text">
                Each piece in our collection is lovingly crafted by hand, using premium quality 
                yarn and lots of care. We believe in the magic of handmade items – they carry 
                the warmth of the maker and become cherished keepsakes for years to come.
              </p>
            </div>

            {/* Values Cards */}
            <div className="values-grid">
              <div className="value-card">
                <span className="value-icon">🧶</span>
                <h3 className="value-title">100% Handmade</h3>
                <p className="value-description">
                  Every item is crafted by hand with premium yarn and attention to detail. 
                  No mass production, just pure craftsmanship.
                </p>
              </div>

              <div className="value-card">
                <span className="value-icon">💖</span>
                <h3 className="value-title">Made with Love</h3>
                <p className="value-description">
                  We pour our heart into every piece. Each creation is unique and carries 
                  the warmth of handcrafted art.
                </p>
              </div>

              <div className="value-card">
                <span className="value-icon">🌸</span>
                <h3 className="value-title">Fresh & Unique</h3>
                <p className="value-description">
                  Made fresh to order (15-20 days). Your piece is specially created just 
                  for you, ensuring uniqueness.
                </p>
              </div>
            </div>

            {/* Process Section */}
            <div className="about-section">
              <h2 className="section-heading">How We Work ✨</h2>
              <div className="process-list">
                <div className="process-item">
                  <span className="process-number">1</span>
                  <div className="process-content">
                    <h4>You Choose</h4>
                    <p>Browse our collection and pick your favorite design. Contact us via WhatsApp with any customization requests.</p>
                  </div>
                </div>

                <div className="process-item">
                  <span className="process-number">2</span>
                  <div className="process-content">
                    <h4>We Create</h4>
                    <p>Once you place your order, we start crafting your piece fresh from scratch. Takes 15-20 working days.</p>
                  </div>
                </div>

                <div className="process-item">
                  <span className="process-number">3</span>
                  <div className="process-content">
                    <h4>You Receive</h4>
                    <p>Your handcrafted treasure is carefully packaged and shipped to your doorstep with love and care!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="about-section">
              <h2 className="section-heading">Why Choose Us? 💝</h2>
              <ul className="features-list">
                <li className="feature-item">
                  <span className="feature-icon">✨</span>
                  <span>Premium quality yarn and materials</span>
                </li>
                <li className="feature-item">
                  <span className="feature-icon">🎨</span>
                  <span>Custom colors and designs available</span>
                </li>
                <li className="feature-item">
                  <span className="feature-icon">🎁</span>
                  <span>Perfect for gifts - free gift wrapping</span>
                </li>
                <li className="feature-item">
                  <span className="feature-icon">📱</span>
                  <span>Easy ordering via WhatsApp</span>
                </li>
                <li className="feature-item">
                  <span className="feature-icon">💬</span>
                  <span>Personalized customer support</span>
                </li>
                <li className="feature-item">
                  <span className="feature-icon">🚚</span>
                  <span>Secure packaging and timely delivery</span>
                </li>
              </ul>
            </div>

            {/* CTA Section */}
            <div className="about-cta">
              <h2>Ready to Start Your Crochet Journey?</h2>
              <p>Let's create something beautiful together!</p>
              <Link href="/products" className="cta-button">
                Browse Our Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="girly-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-col">
              <h3 className="footer-title">DRISHYAA 🌸</h3>
              <p className="footer-text">
                Handmade with love, crafted with care. Each piece is unique and special.
              </p>
              <div className="social-links">
                <a href="#">Instagram</a>
              </div>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Shop</h4>
              <ul className="footer-links">
                <li><Link href="/products">All Products</Link></li>
                <li><Link href="/categories">Categories</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Information</h4>
              <ul className="footer-links">
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/terms">Terms & Conditions</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Payment & Support</h4>
              <div className="payment-info">
                <p>📱 WhatsApp: {process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}</p>
                <p>⏰ Mon-Sat, 10 AM - 8 PM</p>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2025 DRISHYAA. Handcrafted with 💖 in India</p>
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