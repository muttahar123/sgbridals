import React, { useRef, useState } from 'react';
import type { CollectionItem } from '../data/collections';

interface CollectionDetailPageProps {
  collection: CollectionItem | null;
  onBackToCollections: () => void;
  onBackHome: () => void;
  onBookAppointment: () => void;
}

export const CollectionDetailPage: React.FC<CollectionDetailPageProps> = ({
  collection,
  onBackToCollections,
  onBackHome,
  onBookAppointment,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const dragStartX = useRef<number | null>(null);

  if (!collection) {
    return null;
  }

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? collection.images.length - 1 : current - 1));
  };

  const goToNext = () => {
    setActiveIndex((current) => (current === collection.images.length - 1 ? 0 : current + 1));
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    dragStartX.current = event.clientX;
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (dragStartX.current === null) {
      return;
    }

    const delta = event.clientX - dragStartX.current;
    if (delta > 50) {
      goToPrevious();
    }
    if (delta < -50) {
      goToNext();
    }
    dragStartX.current = null;
  };

  const activeMedia = collection.images[activeIndex] ?? collection.heroImage;
  const isVideoSlide = /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(activeMedia);

  return (
    <section className="collection-page detail-page reveal">
      <div className="wrap">
        <div className="collection-detail-hero">
          <div className="collection-detail-copy">
            <span className="label">{collection.index}</span>
            <h1>{collection.title}</h1>
            <p>{collection.description}</p>
            <div className="detail-actions">
              <button type="button" className="btn btn-inline" onClick={onBackToCollections}>Back to Collections</button>
              <button type="button" className="btn btn-inline" onClick={onBookAppointment}>Book an Appointment</button>
              <button type="button" className="btn btn-inline" onClick={onBackHome}>Back Home</button>
            </div>
          </div>

          <div
            className="collection-detail-visual collection-detail-gallery"
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            style={{ touchAction: 'pan-y' }}
          >
            {isVideoSlide ? (
              <video
                src={activeMedia}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            ) : (
              <img src={activeMedia} alt={collection.title} />
            )}

            {collection.images.length > 1 && (
              <>
                <button type="button" className="gallery-arrow prev" onClick={goToPrevious} aria-label="Previous collection image">
                  ‹
                </button>
                <button type="button" className="gallery-arrow next" onClick={goToNext} aria-label="Next collection image">
                  ›
                </button>
                <div className="gallery-dots" aria-label="Collection gallery status">
                  {collection.images.map((_, index) => (
                    <span key={index} className={index === activeIndex ? 'dot active' : 'dot'} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
