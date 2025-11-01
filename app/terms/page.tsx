/* eslint-disable react/no-unescaped-entities */
// app/terms/page.tsx
import Link from 'next/link';
import '../girly-pages.css';
import './terms.css';
import WhatsAppFloat from '../whatsapp-float';

export const metadata = {
  title: 'Terms & Conditions | DRISHYAA',
  description: 'Terms and conditions for ordering from DRISHYAA',
};

export default function TermsPage() {
  return (
    <div className="girly-page">
      <WhatsAppFloat />

      {/* Page Header */}
      <section className="page-hero">
        <div className="hero-decoration">
          <span className="deco-flower">🌸</span>
          <span className="deco-flower">🌺</span>
        </div>
        <div className="container">
          <Link href="/" className="back-link">
            ← Back to Home
          </Link>
          <h1 className="page-title">Terms & Conditions</h1>
          <p className="page-subtitle">
            Please read carefully before placing your order
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="content-section">
        <div className="container">
          <div className="content-card">

            <div className="terms-section">
              <h2>🌸 Welcome to DRISHYAA</h2>
              <p>
                By placing an order with us, you agree to the following terms and conditions.
                We handcraft each item with love and care, and these terms help us maintain
                the quality you deserve.
              </p>
            </div>

            <div className="terms-section">
              <h3>💖 1. Made Fresh for You</h3>
              <p>
                All our products are <strong>made to order</strong> and crafted fresh just for you!
                This means:
              </p>
              <ul>
                <li>Each item begins production only after your order is confirmed</li>
                <li>Standard delivery time is <strong>15-20 working days</strong> from order confirmation</li>
                <li>Rush orders may be accommodated for an additional fee (contact us via WhatsApp)</li>
                <li>Delivery times may vary during festive seasons or high-demand periods</li>
              </ul>
            </div>

            <div className="terms-section">
              <h3>🎀 2. Ordering Process</h3>
              <p>
                We use <strong>WhatsApp for all orders</strong> to provide you with personal service:
              </p>
              <ul>
                <li>Click the WhatsApp button on any product you love</li>
                <li>Share your requirements, customization requests, and delivery address</li>
                <li>We'll confirm availability, pricing, and delivery timeline</li>
                <li>Once you confirm, we'll begin crafting your item!</li>
              </ul>
            </div>

            <div className="terms-section">
              <h3>💳 3. Payment Methods</h3>
              <p>We accept the following payment methods:</p>
              <ul>
                <li><strong>UPI</strong> - PhonePe, GPay, Paytm, etc.</li>
                <li><strong>Advance Payment</strong> - 50% advance may be required for custom orders</li>
              </ul>
            </div>

            <div className="terms-section">
              <h3>🎨 4. Customization & Colors</h3>
              <ul>
                <li>We welcome customization requests! Just message us on WhatsApp</li>
                <li>Slight color variations may occur due to handmade nature and screen displays</li>
                <li>Each piece is unique - minor differences make your item special</li>
                <li>We'll share photos of your completed item before shipping</li>
              </ul>
            </div>

            <div className="terms-section">
              <h3>📦 5. Shipping & Delivery</h3>
              <ul>
                <li>Shipping charges are applied to all orders</li>
                <li>We handcraft every product fresh after your order — delivery takes 15-20 days</li>
                <li>All orders are shipped via trusted courier partners across India</li>
                <li>Tracking details will be shared via WhatsApp once dispatched</li>
                <li>International shipping is available on request</li>
              </ul>
            </div>

            <div className="terms-section">
              <h3>🚫 6. No Return / No Exchange Policy</h3>
              <ul>
                <li>Since all our items are <strong>handmade and made to order</strong>, we follow a strict <strong>No Return, No Exchange policy</strong>.</li>
                <li>Each product is thoroughly checked and packed with care before dispatch.</li>
                <li>We do not accept cancellations or changes once the order has been placed and production has begun.</li>
                <li>In case your product is damaged during transit, please reach out to us within 24 hours of delivery with photos, and we’ll assist you appropriately.</li>
                <li>Our team will ensure a delightful experience and resolve genuine concerns with utmost care. 💝</li>
              </ul>
            </div>

            <div className="terms-section">
              <h3>🧶 7. Care Instructions</h3>
              <ul>
                <li>Hand wash gently with mild detergent in cold water</li>
                <li>Do not wring or twist - gently squeeze out excess water</li>
                <li>Lay flat to dry away from direct sunlight</li>
                <li>Do not bleach or iron</li>
                <li>Store in a cool, dry place</li>
              </ul>
            </div>

            <div className="terms-section">
              <h3>💝 8. Gift Wrapping</h3>
              <ul>
                <li>Free gift wrapping available on request</li>
                <li>Add a personalized message card (just let us know via WhatsApp)</li>
                <li>Perfect for birthdays, anniversaries, and special occasions</li>
              </ul>
            </div>

            <div className="terms-section">
              <h3>📞 9. Customer Support</h3>
              <ul>
                <li>Available on WhatsApp Monday - Saturday, 10 AM - 8 PM</li>
                <li>Response time: Within 2 hours during business hours</li>
                <li>We're here to help with any questions or concerns</li>
              </ul>
            </div>

            <div className="terms-section">
              <h3>⚖️ 10. Intellectual Property</h3>
              <ul>
                <li>All designs, patterns, and photos are our intellectual property</li>
                <li>Images may not be reproduced without permission</li>
                <li>Each design is lovingly created by our artisans</li>
              </ul>
            </div>

            <div className="terms-section">
              <h3>🌟 11. Quality Guarantee</h3>
              <p>
                We take pride in our work! Every item is:
              </p>
              <ul>
                <li>Handcrafted with premium quality yarn</li>
                <li>Checked for quality before shipping</li>
                <li>Made with love and attention to detail</li>
                <li>Backed by our satisfaction guarantee</li>
              </ul>
            </div>

            <div className="terms-section highlight-box">
              <h3>💖 Important Notes</h3>
              <ul>
                <li>We reserve the right to refuse or cancel orders in case of unavailability</li>
                <li>Prices are subject to change without notice</li>
                <li>Festive season orders should be placed 30 days in advance</li>
                <li>We're not responsible for delays due to incorrect address or unavailability</li>
              </ul>
            </div>

            <div className="terms-section cta-section">
              <h3>🌸 Questions?</h3>
              <p>
                If you have any questions about our terms, feel free to contact us on WhatsApp.
                We're here to help make your shopping experience delightful!
              </p>
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_DEFAULT_WHATSAPP?.replace(/[^0-9]/g, '') || '919876543210'}?text=${encodeURIComponent('Hi! I have a question about your Terms & Conditions')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn"
              >
                Contact Us on WhatsApp 💬
              </a>
            </div>

            <div className="terms-footer">
              <p><em>Last updated: October 2025</em></p>
              <p>Thank you for supporting handmade! 💖</p>
            </div>

          </div>
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
