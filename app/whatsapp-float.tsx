// app/whatsapp-float.tsx
'use client';

import './whatsapp-float.css';

export default function WhatsAppFloat() {
  const whatsappNumber = process.env.NEXT_PUBLIC_DEFAULT_WHATSAPP || '+919876543210';
  const message = encodeURIComponent('Hi! I need help with your products 💖');
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="whatsapp-icon">
        <path
          fill="currentColor"
          d="M16 0C7.164 0 0 7.163 0 16c0 2.82.744 5.49 2.04 7.81L0 32l8.36-2.19A15.93 15.93 0 0 0 16 32c8.836 0 16-7.163 16-16S24.836 0 16 0zm0 29.44c-2.42 0-4.74-.64-6.77-1.84l-.48-.29-5.02 1.31 1.34-4.89-.32-.5A13.38 13.38 0 0 1 2.56 16c0-7.39 6.01-13.4 13.4-13.4 7.39 0 13.4 6.01 13.4 13.4 0 7.39-6.01 13.44-13.36 13.44zm7.35-10.03c-.4-.2-2.37-1.17-2.74-1.3-.37-.14-.64-.2-.91.2-.27.4-1.05 1.3-1.29 1.57-.24.27-.47.3-.87.1-.4-.2-1.69-.62-3.22-1.98-1.19-1.06-1.99-2.36-2.22-2.76-.24-.4-.03-.62.18-.82.18-.18.4-.47.6-.71.2-.24.27-.4.4-.67.14-.27.07-.5-.03-.71-.1-.2-.91-2.19-1.25-3-.33-.78-.66-.67-.91-.68h-.77c-.27 0-.71.1-1.08.5-.37.4-1.42 1.39-1.42 3.39s1.45 3.93 1.66 4.2c.2.27 2.88 4.4 6.98 6.17.98.42 1.74.67 2.33.86.98.31 1.87.27 2.58.16.79-.12 2.37-.97 2.7-1.91.34-.93.34-1.73.24-1.9-.1-.18-.37-.28-.77-.48z"
        />
      </svg>
      <span className="whatsapp-text">Chat with us</span>
    </a>
  );
}