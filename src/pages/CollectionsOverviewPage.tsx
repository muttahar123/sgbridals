import React from 'react';
import { collections } from '../data/collections';

interface CollectionsOverviewPageProps {
  onOpenCollection: (slug: string) => void;
}

export const CollectionsOverviewPage: React.FC<CollectionsOverviewPageProps> = ({ onOpenCollection }) => (
  <section className="collection-page collection-overview reveal">
    <div className="wrap">
      <div className="section-head">
        <span className="label">Collections</span>
        <h2>Curated edits for every occasion.</h2>
        <p>Explore our bridal, formal, and semi-formal dress collections — each one crafted to celebrate your moment with elegance.</p>
      </div>

      <div className="collection-list-grid">
        {collections.map((collection) => (
          <article key={collection.slug} className="collection-preview-card reveal">
            <div className="collection-preview-image">
              <img src={collection.heroImage} alt={collection.title} />
            </div>
            <div className="collection-preview-content">
              <span className="idx">{collection.index}</span>
              <h3>{collection.title}</h3>
              <p>{collection.headline}</p>
              <button type="button" className="btn" onClick={() => onOpenCollection(collection.slug)}>
                View Collection →
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
