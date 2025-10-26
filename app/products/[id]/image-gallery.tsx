// app/products/[id]/image-gallery.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ImageGalleryProps {
  images: Array<{ url: string; public_id: string; alt?: string }>;
  productName: string;
  discountPercent: number;
}

export default function ImageGallery({ images, productName, discountPercent }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="gallery-container">
        <div className="gallery-main-image">
          <div className="product-placeholder">
            🧶
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="gallery-container">
      {/* Main Image */}
      <div className="gallery-main-image">
        <Image
          src={images[selectedIndex].url}
          alt={`${productName} - Image ${selectedIndex + 1}`}
          fill
          className="gallery-image"
          priority={selectedIndex === 0}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {discountPercent > 0 && (
          <span className="gallery-discount-badge">
            {discountPercent}% OFF
          </span>
        )}
      </div>

      {/* Thumbnail Gallery */}
      {images.length > 1 && (
        <div className="gallery-thumbnails">
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`gallery-thumbnail ${selectedIndex === index ? 'active' : ''}`}
              onClick={() => setSelectedIndex(index)}
            >
              <Image
                src={image.url}
                alt={`${productName} - Thumbnail ${index + 1}`}
                fill
                className="gallery-thumbnail-img"
                sizes="100px"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}