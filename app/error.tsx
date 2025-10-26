// app/error.tsx
'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import './error.css';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Error:', error);
  }, [error]);

  return (
    <div className="error-page">
      <div className="error-content">
        <div className="error-icon">⚠️</div>
        <h1 className="error-title">Something went wrong!</h1>
        <p className="error-message">
          We encountered an error while loading this page.
        </p>
        
        <div className="error-actions">
          <button onClick={reset} className="btn-primary">
            Try Again
          </button>
          <Link href="/" className="btn-secondary">
            Go Home
          </Link>
        </div>

        {process.env.NODE_ENV === 'development' && (
          <details className="error-details">
            <summary>Error Details (Development)</summary>
            <pre>{error.message}</pre>
          </details>
        )}
      </div>
    </div>
  );
}