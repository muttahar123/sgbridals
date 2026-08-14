import React, { useRef, useState } from 'react';
import { collections } from '../data/collections';

interface CollectionSectionProps {
  onOpenCollection: (slug: string) => void;
}

export const CollectionSection: React.FC<CollectionSectionProps> = ({ onOpenCollection }) => {
  return (
    <section id="collections">
      <div className="wrap section-head reveal">
        <span className="label">The Collections</span>
        <h2>Three lines, one atelier standard.</h2>
        <p>Every piece is cut to your measurements and finished by hand — the difference is occasion, fabrication and silhouette.</p>
      </div>

      {collections.map((collection, index) => (
        <CollectionRow
          key={collection.slug}
          collection={collection}
          reverse={index % 2 !== 0}
          onOpenCollection={onOpenCollection}
        />
      ))}
    </section>
  );
};

interface CollectionRowProps {
  collection: (typeof collections)[number];
  reverse: boolean;
  onOpenCollection: (slug: string) => void;
}

const CollectionRow: React.FC<CollectionRowProps> = ({ collection, reverse, onOpenCollection }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const dragStartX = useRef<number | null>(null);

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

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    dragStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (dragStartX.current === null) {
      return;
    }

    const delta = (event.changedTouches[0]?.clientX ?? dragStartX.current) - dragStartX.current;
    if (delta > 50) {
      goToPrevious();
    }
    if (delta < -50) {
      goToNext();
    }
    dragStartX.current = null;
  };

  return (
    <div className={reverse ? 'collection-row reverse reveal' : 'collection-row reveal'}>
      <div
        className="col-panel"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{ touchAction: 'pan-y' }}
      >
        <img src={collection.images[activeIndex]} alt={collection.title} className="tex object-cover w-full h-full" />
        <button type="button" className="gallery-arrow prev" onClick={goToPrevious} aria-label="Previous image">
          ‹
        </button>
        <button type="button" className="gallery-arrow next" onClick={goToNext} aria-label="Next image">
          ›
        </button>
        <div className="gallery-dots" aria-label="Photo gallery status">
          {collection.images.map((_, index) => (
            <span key={index} className={index === activeIndex ? 'dot active' : 'dot'} />
          ))}
        </div>
      </div>
      <div className="col-text">
        <span className="idx">{collection.index}</span>
        <h3>{collection.title}</h3>
        <p>{collection.description}</p>
        <button type="button" className="btn" onClick={() => onOpenCollection(collection.slug)}>
          Discover {collection.title.split(' ')[0]} →
        </button>
      </div>
    </div>
  );
};
