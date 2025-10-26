// app/loading.tsx
import './loading.css';

export default function Loading() {
  return (
    <div className="loading-page">
      <div className="loading-container">
        {/* Header Skeleton */}
        <div className="loading-header">
          <div className="skeleton skeleton-title"></div>
          <div className="skeleton skeleton-subtitle"></div>
        </div>

        {/* Products Grid Skeleton */}
        <div className="loading-grid">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="loading-card">
              <div className="skeleton skeleton-image"></div>
              <div className="loading-card-content">
                <div className="skeleton skeleton-badge"></div>
                <div className="skeleton skeleton-name"></div>
                <div className="skeleton skeleton-price"></div>
                <div className="skeleton skeleton-button"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}