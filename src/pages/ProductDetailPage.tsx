import React, { useMemo, useState } from 'react';
import { collections, type CollectionItem, type Dress } from '../data/collections';

interface ProductDetailPageProps {
  product: Dress | null;
  onBackToCollection: () => void;
  onBackHome: () => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product, onBackToCollection, onBackHome }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!product) {
    return null;
  }

  const collection = collections.find((item: CollectionItem) => item.slug === product.category) ?? null;
  const galleryImages = useMemo(() => {
    if (product.images && product.images.length > 0) {
      return product.images;
    }
    if (collection?.images && collection.images.length > 0) {
      return collection.images;
    }
    return [product.image];
  }, [collection, product]);

  const activeImage = galleryImages[activeImageIndex] ?? galleryImages[0];

  const goToPrevious = () => {
    setActiveImageIndex((current) => (current === 0 ? galleryImages.length - 1 : current - 1));
  };

  const goToNext = () => {
    setActiveImageIndex((current) => (current === galleryImages.length - 1 ? 0 : current + 1));
  };

  return (
    <section className="product-detail-page reveal">
      <div className="wrap">
        <div className="product-detail-layout">
          <div className="product-gallery">
            <img src={activeImage} alt={product.name} className="product-main-image" />

            {galleryImages.length > 1 && (
              <>
                <button type="button" className="product-gallery-button prev" onClick={goToPrevious} aria-label="Previous product image">
                  ‹
                </button>
                <button type="button" className="product-gallery-button next" onClick={goToNext} aria-label="Next product image">
                  ›
                </button>
              </>
            )}

            {galleryImages.length > 1 && (
              <div className="product-gallery-thumbs">
                {galleryImages.map((image, index) => (
                  <button
                    key={`${product.id}-${index}`}
                    type="button"
                    className={index === activeImageIndex ? 'product-thumb-button active' : 'product-thumb-button'}
                    onClick={() => setActiveImageIndex(index)}
                    aria-label={`View product image ${index + 1}`}
                  >
                    <img src={image} alt={`${product.name} look ${index + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="product-info">
            <span className="label">{product.collectionTitle}</span>
            <h1>{product.name}</h1>
            <div className="product-price-row">
              <strong>{product.price}</strong>
              <span>{product.fabric}</span>
            </div>

            <p className="product-description">
              Crafted to move beautifully through your celebration with sculpted tailoring, couture finishing, and a silhouette chosen to flatter with ease.
            </p>

            <div className="product-meta-grid">
              <div>
                <span className="meta-label">Category</span>
                <strong>{product.category}</strong>
              </div>
              <div>
                <span className="meta-label">Finish</span>
                <strong>Hand-finished</strong>
              </div>
              <div>
                <span className="meta-label">Made for</span>
                <strong>Custom fittings</strong>
              </div>
            </div>

            <div className="product-actions">
              <button type="button" className="btn btn-inline" onClick={onBackToCollection}>← Back to collection</button>
              <button type="button" className="btn btn-inline" onClick={onBackHome}>Back Home</button>
            </div>

            <button type="button" className="btn-block product-cta">Book this look</button>
          </div>
        </div>
      </div>
    </section>
  );
};
