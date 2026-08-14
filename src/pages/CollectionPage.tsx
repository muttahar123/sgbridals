import React, { useMemo, useState } from 'react';
import { allDresses, type Dress } from '../data/collections';
import type { CollectionFilter, CollectionItem } from '../data/collections';

interface CollectionPageProps {
  collection: CollectionItem | null;
  onBackToCollections: () => void;
  onBackHome: () => void;
  onOpenProduct: (product: Dress) => void;
}

export const CollectionPage: React.FC<CollectionPageProps> = ({ collection, onBackToCollections, onBackHome, onOpenProduct }) => {
  const [filter, setFilter] = useState<CollectionFilter>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDresses = useMemo(() => {
    const source = collection ? collection.dresses : allDresses;
    return source.filter((dress) => {
      const categoryMatch = filter === 'all' || dress.category === filter;
      const searchValue = searchTerm.trim().toLowerCase();
      const matchesSearch =
        searchValue === '' ||
        dress.name.toLowerCase().includes(searchValue) ||
        dress.collectionTitle.toLowerCase().includes(searchValue);
      return categoryMatch && matchesSearch;
    });
  }, [collection, filter, searchTerm]);

  if (!collection) {
    return null;
  }

  return (
    <section className="collection-page detail-page reveal">
      <div className="wrap">
        <div className="collection-detail-hero">
          <div className="collection-detail-copy">
            <span className="label">{collection.index}</span>
            <h1>{collection.title}</h1>
            <p>{collection.description}</p>
            <div className="detail-actions">
              <button type="button" className="btn btn-inline" onClick={onBackToCollections}>← Back to Collections</button>
              <button type="button" className="btn btn-inline" onClick={onBackHome}>Back Home</button>
            </div>
          </div>
          <div className="collection-detail-visual">
            <img src={collection.heroImage} alt={collection.title} />
          </div>
        </div>

        <div className="detail-filter-bar">
          <div className="filter-group" aria-label="Collection filters">
            {(['all', 'bridal', 'formal', 'semi-formal'] as const).map((option) => (
              <button
                key={option}
                type="button"
                className={filter === option ? 'filter-pill active' : 'filter-pill'}
                onClick={() => setFilter(option)}
              >
                {option === 'all' ? 'All looks' : option === 'bridal' ? 'Bridal' : option === 'formal' ? 'Formal' : 'Semi-Formal'}
              </button>
            ))}
          </div>

          <div className="collection-search-tools">
            <label className="search-box" aria-label="Search dresses">
              <span>Search</span>
              <input
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Find a dress..."
              />
            </label>

            <label className="category-select" aria-label="Filter by category">
              <span>Category</span>
              <select
                value={filter}
                onChange={(event) => setFilter(event.target.value as CollectionFilter)}
              >
                <option value="all">All categories</option>
                <option value="bridal">Bridal</option>
                <option value="formal">Formal</option>
                <option value="semi-formal">Semi-Formal</option>
              </select>
            </label>
          </div>
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
                    <strong>{dress.price}</strong>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="empty-state reveal">
              <h3>No dresses match this filter.</h3>
              <p>Try a different style or clear the search field.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
