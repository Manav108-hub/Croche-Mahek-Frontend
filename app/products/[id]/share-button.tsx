// app/products/[id]/share-button.tsx
'use client';

import { useState } from 'react';

export default function ShareButton({ productName, description }: { productName: string; description: string }) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: productName,
          text: description,
          url: window.location.href,
        });
      } catch (error) {
        // User cancelled share or error occurred
        if ((error as Error).name !== 'AbortError') {
          copyToClipboard();
        }
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button className="btn-share" onClick={handleShare}>
      <span className="btn-icon">{copied ? '✓' : '🔗'}</span>
      {copied ? 'Link Copied!' : 'Share Product'}
    </button>
  );
}