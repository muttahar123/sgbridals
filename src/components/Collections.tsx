import React, { useRef, useState } from 'react';

const collectionData = [
  {
    slug: 'bridal',
    index: '01 — Bridal',
    title: 'The Bridal Line',
    description:
      'Gowns built around silhouette, not trend. Boned bodices, hand-finished hems and necklines drafted to flatter your frame — for the ceremony and the reception.',
    images: [
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    slug: 'formal',
    index: '02 — Formal',
    title: 'Formal Eveningwear',
    description:
      'Statement pieces for galas, receptions and formal dinners — sculpted lines, directional necklines and structured trains made to order in your size.',
    images: [
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    slug: 'semi-formal',
    index: '03 — Semi-Formal',
    title: 'Semi-Formal Edit',
    description:
      'Occasion dresses for engagements, showers and rehearsal dinners — lighter fabrications and softer construction, with the same atelier finish.',
    images: [
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
    ],
  },
];

interface CollectionsProps {
  onOpenCollection: (slug: string) => void;
}

export const Collections: React.FC<CollectionsProps> = ({ onOpenCollection }) => {
  return (
    <section id="collections">
      <div className="wrap section-head reveal">
        <span className="label">The Collections</span>
        <h2>Three lines, one atelier standard.</h2>
        <p>Every piece is cut to your measurements and finished by hand — the difference is occasion, fabrication and silhouette.</p>
      </div>

      {collectionData.map((collection, index) => (
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
  collection: (typeof collectionData)[number];
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

  return (
    <div className={reverse ? 'collection-row reverse reveal' : 'collection-row reveal'}>
      <div
        className="col-panel"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
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
