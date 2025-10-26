/* eslint-disable react/no-unescaped-entities */
// app/contact/page.tsx
import Link from 'next/link';
import WhatsAppFloat from '@/app/whatsapp-float';
import '../girly-pages.css';

export const metadata = {
  title: 'Contact Us | Crochet Haven',
  description: 'Get in touch with us for orders, customizations, and inquiries',
};

export default function ContactPage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Hi! I have a question about your products.`;

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
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">
            We'd love to hear from you! 💌
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="page-content">
        <div className="container">
          <div className="contact-content">
            {/* Introduction */}
            <div className="contact-intro">
              <h2 className="section-heading">Let's Connect! 🌺</h2>
              <p className="section-text">
                Have questions about our products? Want to place a custom order? Or just want 
                to say hello? We're here to help! Reach out to us through any of the channels 
                below, and we'll get back to you as soon as possible.
              </p>
            </div>

            {/* Contact Methods Grid */}
            <div className="contact-methods">
              <div className="contact-card">
                <div className="contact-icon">📱</div>
                <h3 className="contact-method-title">WhatsApp</h3>
                <p className="contact-method-desc">
                  Chat with us directly for instant responses and personalized assistance.
                </p>
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-button"
                >
                  Chat on WhatsApp
                </a>
              </div>

              <div className="contact-card">
                <div className="contact-icon">📧</div>
                <h3 className="contact-method-title">Email</h3>
                <p className="contact-method-desc">
                  Send us an email for detailed inquiries and we'll respond within 24 hours.
                </p>
                <a 
                  href="mailto:hello@crochethaven.com"
                  className="contact-button"
                >
                  Send an Email
                </a>
              </div>

              <div className="contact-card">
                <div className="contact-icon">📷</div>
                <h3 className="contact-method-title">Instagram</h3>
                <p className="contact-method-desc">
                  Follow us for daily inspiration, new designs, and behind-the-scenes content!
                </p>
                <a 
                  href="https://instagram.com/crochethaven"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-button"
                >
                  Follow Us
                </a>
              </div>

              <div className="contact-card">
                <div className="contact-icon">💬</div>
                <h3 className="contact-method-title">Facebook</h3>
                <p className="contact-method-desc">
                  Join our community and stay updated with our latest creations and offers.
                </p>
                <a 
                  href="https://facebook.com/crochethaven"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-button"
                >
                  Like Our Page
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="business-hours">
              <h2 className="section-heading">Business Hours ⏰</h2>
              <div className="hours-grid">
                <div className="hours-item">
                  <span className="day">Monday - Saturday</span>
                  <span className="time">10:00 AM - 8:00 PM</span>
                </div>
                <div className="hours-item">
                  <span className="day">Sunday</span>
                  <span className="time">Closed</span>
                </div>
              </div>
              <p className="hours-note">
                💡 We typically respond to WhatsApp messages within 2-3 hours during business hours.
              </p>
            </div>

            {/* FAQ Section */}
            <div className="contact-faq">
              <h2 className="section-heading">Quick Answers 💭</h2>
              <div className="faq-list">
                <div className="faq-item">
                  <h4 className="faq-question">How do I place an order?</h4>
                  <p className="faq-answer">
                    Simply browse our products, click "Order via WhatsApp" on any item you like, 
                    and chat with us directly to complete your order!
                  </p>
                </div>

                <div className="faq-item">
                  <h4 className="faq-question">Do you accept custom orders?</h4>
                  <p className="faq-answer">
                    Absolutely! We love creating custom pieces. Contact us on WhatsApp with your 
                    ideas, preferred colors, and size requirements.
                  </p>
                </div>

                <div className="faq-item">
                  <h4 className="faq-question">How long does delivery take?</h4>
                  <p className="faq-answer">
                    Each piece is made fresh to order, which takes 15-20 working days. Shipping 
                    takes an additional 3-5 days depending on your location.
                  </p>
                </div>

                <div className="faq-item">
                  <h4 className="faq-question">What payment methods do you accept?</h4>
                  <p className="faq-answer">
                    We accept UPI, bank transfers, and Cash on Delivery (COD) for most locations. 
                    Payment details will be shared via WhatsApp.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="contact-cta">
              <h2>Ready to Create Something Special?</h2>
              <p>Let's bring your crochet dreams to life! 🌸</p>
              <div className="cta-buttons">
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button primary"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
                <Link href="/products" className="cta-button secondary">
                  Browse Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="girly-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-col">
              <h3 className="footer-title">Crochet Haven 🌸</h3>
              <p className="footer-text">
                Handmade with love, crafted with care. Each piece is unique and special.
              </p>
              <div className="social-links">
                <a href="#">Instagram</a>
                <a href="#">Facebook</a>
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
                <p>💳 UPI, COD, Bank Transfer</p>
                <p>📱 WhatsApp: {process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}</p>
                <p>⏰ Mon-Sat, 10 AM - 8 PM</p>
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