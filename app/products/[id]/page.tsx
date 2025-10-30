// app/products/[id]/page.tsx
import { fetchProduct } from '@/lib/api';
import Link from 'next/link';
import Image from 'next/image';
import WhatsAppFloat from '@/app/whatsapp-float';
import '../../girly-pages.css';
import ImageGallery from './image-gallery';
import ShareButton from './share-button';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await fetchProduct(id);
  return {
    title: `${product.name} | DRISHYAA`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await fetchProduct(id);
  
  // Build detailed WhatsApp message
  const effectivePrice = product.price?.discounted || product.price?.original || 0;
  const hasDiscount = product.price?.discounted != null && product.price.discounted < product.price.original;
  const discountPercent = hasDiscount 
    ? Math.round(((product.price.original - product.price.discounted!) / product.price.original) * 100)
    : 0;

  // Create detailed message with all product info
  let whatsappMessage = `🌸 *DRISHYAA - Product Inquiry* 🌸\n\n`;
  whatsappMessage += `*Product:* ${product.name}\n`;
  whatsappMessage += `*Category:* ${product.category?.name || 'N/A'}\n`;
  whatsappMessage += `*Price:* ₹${effectivePrice}`;
  
  if (hasDiscount) {
    whatsappMessage += ` (${discountPercent}% OFF)\n`;
    whatsappMessage += `~~₹${product.price.original}~~`;
  }
  whatsappMessage += `\n\n`;

  // Add description
  if (product.description) {
    whatsappMessage += `📝 ${product.description}\n\n`;
  }

  // Add specifications
  if (product.specifications && Object.keys(product.specifications).length > 0) {
    whatsappMessage += `*Specifications:*\n`;
    Object.entries(product.specifications).forEach(([key, value]) => {
      whatsappMessage += `▫️ ${key}: ${value}\n`;
    });
    whatsappMessage += `\n`;
  }

  // Add variants
  if (product.variants && product.variants.length > 0) {
    whatsappMessage += `*Available Options:*\n`;
    product.variants.forEach((variant: any) => {
      whatsappMessage += `▫️ ${variant.name}: ${variant.value}\n`;
    });
    whatsappMessage += `\n`;
  }

  // Add tags
  if (product.tags && product.tags.length > 0) {
    whatsappMessage += `*Tags:* ${product.tags.map((tag: string) => `#${tag}`).join(' ')}\n\n`;
  }

  // Add product URL for reference
  whatsappMessage += `🔗 Link: ${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/products/${id}\n\n`;

  // Add closing message
  whatsappMessage += `━━━━━━━━━━━━━━━━\n\n`;
  whatsappMessage += `I'm interested in ordering! Please share:\n\n`;
  whatsappMessage += `✓ Availability & delivery time\n`;
  whatsappMessage += `✓ Customization options\n`;
  whatsappMessage += `✓ Payment methods (UPI)\n\n`;
  whatsappMessage += `Thank you! 💖`;

  const whatsappNumber = process.env.NEXT_PUBLIC_DEFAULT_WHATSAPP || '+919876543210';
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="girly-page">
      <WhatsAppFloat />

      {/* Page Hero */}
      <section className="page-hero">
        <div className="hero-decoration">
          <span className="deco-flower">🌸</span>
          <span className="deco-flower">🌺</span>
          <span className="deco-flower">🌼</span>
        </div>
        <div className="container">
          <Link href="/products" className="back-link">
            ← Back to Products
          </Link>
          <h1 className="page-title">{product.name}</h1>
          <div className="product-category-badge">
            {product.category?.name}
          </div>
        </div>
      </section>

      {/* Product Detail Content */}
      <section className="product-detail-section">
        <div className="container">
          <div className="product-detail-grid">
            {/* Image Gallery */}
            <div className="product-detail-images">
              <ImageGallery 
                images={product.images || []} 
                productName={product.name}
                discountPercent={discountPercent}
              />
            </div>

            {/* Product Info */}
            <div className="product-detail-info">
              {/* Price */}
              <div className="product-detail-price">
                <div className="price-current">
                  ₹{effectivePrice}
                </div>
                {hasDiscount && (
                  <>
                    <div className="price-original">₹{product.price.original}</div>
                    <span className="detail-discount-tag">{discountPercent}% OFF</span>
                  </>
                )}
              </div>

              {/* Description */}
              <div className="detail-section">
                <h3 className="detail-heading">Description</h3>
                <p className="detail-text">{product.description}</p>
              </div>

              {/* Specifications */}
              {product.specifications && Object.keys(product.specifications).length > 0 && (
                <div className="detail-section">
                  <h3 className="detail-heading">Specifications</h3>
                  <div className="specs-list">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="spec-item">
                        <span className="spec-label">{key}:</span>
                        <span className="spec-value">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Variants */}
              {product.variants && product.variants.length > 0 && (
                <div className="detail-section">
                  <h3 className="detail-heading">Available Options</h3>
                  <div className="variants-list">
                    {product.variants.map((variant: any, index: number) => (
                      <span key={index} className="variant-tag">
                        {variant.name}: {variant.value}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              {product.tags && product.tags.length > 0 && (
                <div className="detail-section">
                  <div className="tags-list">
                    {product.tags.map((tag: string, index: number) => (
                      <span key={index} className="product-tag">#{tag}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* Product Features */}
              <div className="detail-section">
                <h3 className="detail-heading">Product Features</h3>
                <ul className="features-list">
                  <li>🧶 100% Handmade with premium yarn</li>
                  <li>🌸 Made fresh to order (15-20 days)</li>
                  <li>✨ Each piece is unique</li>
                  <li>💝 Perfect for gifts</li>
                  <li>🎨 Customization available</li>
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="detail-cta-section">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp-large">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Order via WhatsApp
                </a>
                <ShareButton productName={product.name} description={product.description} />
              </div>

              {/* Info Cards */}
              <div className="detail-info-cards">
                <div className="detail-info-card">
                  <div className="info-card-icon">✓</div>
                  <div>
                    <strong>Handmade Quality</strong>
                    <p>Crafted with care</p>
                  </div>
                </div>
                <div className="detail-info-card">
                  <div className="info-card-icon">🚚</div>
                  <div>
                    <strong>15-20 Days Delivery</strong>
                    <p>Made fresh to order</p>
                  </div>
                </div>
                <div className="detail-info-card">
                  <div className="info-card-icon">💝</div>
                  <div>
                    <strong>Perfect Gift</strong>
                    <p>Gift wrapping available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                Handmade with love, crafted with care. Each piece is unique and special.
              </p>
            </div>

            <div className="footer-col">
              <h4>Shop</h4>
              <ul>
                <li><Link href="/products">All Products</Link></li>
                <li><Link href="/categories">Categories</Link></li>
                <li><Link href="/about">About Us</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Information</h4>
              <ul>
                <li><Link href="/terms">Terms & Conditions</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><a href={whatsappLink} target="_blank" rel="noopener noreferrer">WhatsApp Support</a></li>
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