/* eslint-disable react/no-unescaped-entities */
// app/contact/page.tsx
import Link from 'next/link';
import WhatsAppFloat from '@/app/whatsapp-float';
import '../girly-pages.css';

export const metadata = {
  title: 'Contact Us | DRISHYAA',
  description: 'Reach out to us via WhatsApp for any questions, orders, or customizations.',
};

export default function ContactPage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Hi! I’d love to know more about your products.`;

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
          <p className="page-subtitle">We’d love to hear from you! 💌</p>
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
                Have questions about our products, or wish to place a custom order?  
                We’re always happy to help — kindly reach out to us on WhatsApp only.  
                Please note that we do not accept calls. Let’s keep our communication  
                sweet, kind, and scam-free 🌸
              </p>
            </div>

            {/* Contact Method */}
            <div className="contact-methods">
              <div className="contact-card">
                <div className="contact-icon">📱</div>
                <h3 className="contact-method-title">WhatsApp Only</h3>
                <p className="contact-method-desc">
                  The best and only way to reach us is through WhatsApp.  
                  We’ll respond personally as soon as possible during business hours.
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-button"
                >
                  Chat on WhatsApp
                </a>
                <p className="note">
                  🚫 Calls are not accepted. Please message only.  
                  ❤️ Be kind, polite, and avoid spam or scams.
                </p>
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
                💬 We usually reply within 2–3 hours during business hours.  
                Thank you for your patience and kindness 💖
              </p>
            </div>

            {/* CTA Section */}
            <div className="contact-cta">
              <h2>Ready to Create Something Beautiful?</h2>
              <p>Send us a WhatsApp message to start your crochet journey 🌷</p>
              <div className="cta-buttons">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button primary"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Chat on WhatsApp
                </a>
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
              <h3 className="footer-title">DRISHYAA 🌸</h3>
              <p className="footer-text">
                Handmade with love, crafted with care. Each piece is unique and special.
              </p>
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
              <h4 className="footer-heading">Support</h4>
              <div className="payment-info">
                <p>📱 WhatsApp: {process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}</p>
                <p>💬 Messages only — no calls accepted</p>
                <p>❤️ Please be kind and respectful. No spam or scams.</p>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2025 DRISHYAA. Handcrafted with 💖 in India</p>
            <div className="footer-legal">
              <Link href="/terms">Terms</Link>
              <Link href="/shipping">Shipping</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
