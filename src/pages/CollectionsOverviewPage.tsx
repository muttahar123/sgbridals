import React, { useMemo, useState } from 'react';
import { allDresses, collections, type Dress } from '../data/collections';

interface CollectionsOverviewPageProps {
  onOpenProduct: (product: Dress) => void;
}

export const CollectionsOverviewPage: React.FC<CollectionsOverviewPageProps> = ({
  onOpenProduct,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDresses = useMemo(() => {
    const searchValue = searchTerm.trim().toLowerCase();

    if (!searchValue) {
      return allDresses;
    }

    return allDresses.filter((dress) => {
      return [dress.name, dress.collectionTitle, dress.fabric, dress.description]
        .some((value) => value.toLowerCase().includes(searchValue));
    });
  }, [searchTerm]);

  return (
    <section className="collection-page collection-overview reveal">
      <div className="wrap">
        <div className="section-head">
          <span className="label">Collections</span>
          <h2>Signature bridals and atelier looks.</h2>
          <p>Explore the three featured bridal edits first, then browse every available dress below.</p>
        </div>

        <div className="collection-list-grid">
          {collections.map((collection) => (
            <article id={`collection-${collection.slug}`} key={collection.slug} className="collection-preview-card reveal">
              <div className="collection-preview-image">
                <img src={collection.heroImage} alt={collection.title} />
              </div>
              <div className="collection-preview-content">
                <span className="idx">{collection.index}</span>
                <h3>{collection.title}</h3>
                <p>{collection.description}</p>
                <button
                  type="button"
                  className="btn"
                  onClick={() => document.getElementById('all-dresses')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                >
                  View Dresses →
                </button>
              </div>
            </article>
          ))}
        </div>

        <div id="all-dresses" className="collections-products-block">
          <div className="collections-subhead">
            <div>
              <span className="label">All Dresses</span>
              <h2>Browse every look.</h2>
            </div>
            <label className="search-box collections-search" aria-label="Search dresses">
              <span>Search</span>
              <input
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Find a dress..."
              />
            </label>
          </div>

          <div className="dress-grid">
            {filteredDresses.length > 0 ? (
              filteredDresses.map((dress) => (
                <article key={dress.id} className="dress-card reveal" onClick={() => onOpenProduct(dress)}>
                  <div className="dress-card-image">
                    <img src={dress.image} alt={dress.name} />
                  </div>
                  <div className="dress-card-meta">
                    <span className="dress-type">{dress.collectionTitle}</span>
                    <h3>{dress.name}</h3>
                    <div className="dress-stats">
                      <span>{dress.fabric}</span>
                      <strong>View details</strong>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="empty-state reveal">
                <h3>No dresses match this search.</h3>
                <p>Try a different name, fabric, or detail.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
