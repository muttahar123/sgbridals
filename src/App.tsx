import { useEffect, useMemo, useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Collections } from './components/Collections';
import { Process } from './components/Process';
import { Shipping } from './components/Shipping';
import { BookingPanel } from './components/BookingPanel';
import { Footer } from './components/Footer';

const collectionData = [
  {
    slug: 'bridal',
    index: '01 — Bridal',
    title: 'The Bridal Line',
    headline: 'Bridal silhouettes shaped for the ceremony and the celebration.',
    description:
      'Hand-crafted gowns with sculpted bodices, refined trains, and couture finishes for your most memorable moments.',
    heroImage:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80',
    ],
    dresses: [
      { id: 'bridal-1', name: 'Rosewood Ballgown', category: 'bridal', collectionTitle: 'The Bridal Line', price: 'PKR 245,000', fabric: 'Italian satin', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80' },
      { id: 'bridal-2', name: 'Aster Lace Gown', category: 'bridal', collectionTitle: 'The Bridal Line', price: 'PKR 280,000', fabric: 'French lace', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80' },
      { id: 'bridal-3', name: 'Velvet Column', category: 'bridal', collectionTitle: 'The Bridal Line', price: 'PKR 230,000', fabric: 'Stretch velvet', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80' },
      { id: 'bridal-4', name: 'Ivory Pearl A-line', category: 'bridal', collectionTitle: 'The Bridal Line', price: 'PKR 260,000', fabric: 'Pearl tulle', image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80' },
    ],
  },
  {
    slug: 'formal',
    index: '02 — Formal',
    title: 'Formal Eveningwear',
    headline: 'Evening silhouettes that turn every entrance into a statement.',
    description:
      'A refined edit of gowns and long dresses ready for grand receptions, galas, and elevated celebrations.',
    heroImage:
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
    ],
    dresses: [
      { id: 'formal-1', name: 'Noir Siren', category: 'formal', collectionTitle: 'Formal Eveningwear', price: 'PKR 170,000', fabric: 'Silk crepe', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80' },
      { id: 'formal-2', name: 'Midnight drape', category: 'formal', collectionTitle: 'Formal Eveningwear', price: 'PKR 155,000', fabric: 'Crisp chiffon', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80' },
      { id: 'formal-3', name: 'Ember line', category: 'formal', collectionTitle: 'Formal Eveningwear', price: 'PKR 180,000', fabric: 'Stretch satin', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80' },
      { id: 'formal-4', name: 'Celia Gown', category: 'formal', collectionTitle: 'Formal Eveningwear', price: 'PKR 165,000', fabric: 'Taffeta', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80' },
    ],
  },
  {
    slug: 'semi-formal',
    index: '03 — Semi-Formal',
    title: 'Semi-Formal Edit',
    headline: 'Light, lovely, and beautifully made for layered celebrations.',
    description:
      'Occasion dresses with softer drama and easier movement, crafted to feel polished from morning to night.',
    heroImage:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
    ],
    dresses: [
      { id: 'semiformal-1', name: 'Sunlit pleat', category: 'semi-formal', collectionTitle: 'Semi-Formal Edit', price: 'PKR 120,000', fabric: 'Georgette', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80' },
      { id: 'semiformal-2', name: 'Patina slip', category: 'semi-formal', collectionTitle: 'Semi-Formal Edit', price: 'PKR 110,000', fabric: 'Silk blend', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80' },
      { id: 'semiformal-3', name: 'Mira gown', category: 'semi-formal', collectionTitle: 'Semi-Formal Edit', price: 'PKR 140,000', fabric: 'Organza', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80' },
      { id: 'semiformal-4', name: 'Pearl column', category: 'semi-formal', collectionTitle: 'Semi-Formal Edit', price: 'PKR 135,000', fabric: 'Soft satin', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80' },
    ],
  },
] as const;

const allDresses = collectionData.flatMap((collection) =>
  collection.dresses.map((dress) => ({ ...dress, collectionSlug: collection.slug, collectionTitle: collection.title }))
);

function App() {
  const [preloaderGone, setPreloaderGone] = useState(false);
  const [preloaderRemoved, setPreloaderRemoved] = useState(false);
  const [activeView, setActiveView] = useState<'home' | 'collections' | 'collection'>('home');
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'bridal' | 'formal' | 'semi-formal'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const selectedCollectionData = useMemo(
    () => collectionData.find((item) => item.slug === selectedCollection) ?? null,
    [selectedCollection]
  );

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setPreloaderGone(true);
      const timer2 = setTimeout(() => {
        setPreloaderRemoved(true);
      }, 800);
      return () => clearTimeout(timer2);
    }, 400);
    return () => clearTimeout(timer1);
  }, []);

  useEffect(() => {
    if (!preloaderGone) {
      document.body.classList.add('locked');
    } else {
      document.body.classList.remove('locked');
    }
  }, [preloaderGone]);

  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    revealEls.forEach((el) => revealObserver.observe(el));
    return () => revealObserver.disconnect();
  }, [preloaderRemoved, activeView]);

  const openHome = () => {
    setActiveView('home');
    setSelectedCollection(null);
    setFilter('all');
    setSearchTerm('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openCollections = () => {
    setActiveView('collections');
    setSelectedCollection(null);
    setFilter('all');
    setSearchTerm('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openSelectedCollection = (slug: string) => {
    setSelectedCollection(slug);
    setActiveView('collection');
    setFilter('all');
    setSearchTerm('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredDresses = useMemo(() => {
    const source = selectedCollectionData ? selectedCollectionData.dresses : allDresses;
    return source.filter((dress) => {
      const categoryMatch = filter === 'all' || dress.category === filter;
      const searchMatch =
        searchTerm.trim() === '' ||
        dress.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dress.collectionTitle.toLowerCase().includes(searchTerm.toLowerCase());
      return categoryMatch && searchMatch;
    });
  }, [filter, searchTerm, selectedCollectionData]);

  return (
    <>
      {!preloaderRemoved && (
        <div id="preloader" className={preloaderGone ? 'gone' : ''}>
          <div className="mark"><img src="/logo.png" alt="" /></div>
        </div>
      )}

      <Header onGoHome={openHome} onGoCollections={openCollections} />

      <main id="top">
        {activeView === 'home' && (
          <>
            <Hero />
            <Marquee />
            <Collections onOpenCollection={openSelectedCollection} />
            <Process />
            <Shipping />
            <BookingPanel />
          </>
        )}

        {activeView === 'collections' && (
          <section className="collection-page collection-overview reveal">
            <div className="wrap">
              <div className="section-head">
                <span className="label">Collections</span>
                <h2>Curated edits for every occasion.</h2>
                <p>Explore our bridal, formal, and semi-formal dress collections — each one crafted to celebrate your moment with elegance.</p>
              </div>

              <div className="collection-list-grid">
                {collectionData.map((collection) => (
                  <article key={collection.slug} className="collection-preview-card reveal">
                    <div className="collection-preview-image">
                      <img src={collection.heroImage} alt={collection.title} />
                    </div>
                    <div className="collection-preview-content">
                      <span className="idx">{collection.index}</span>
                      <h3>{collection.title}</h3>
                      <p>{collection.headline}</p>
                      <button type="button" className="btn" onClick={() => openSelectedCollection(collection.slug)}>
                        View Collection →
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeView === 'collection' && selectedCollectionData && (
          <section className="collection-page detail-page reveal">
            <div className="wrap">
              <div className="collection-detail-hero">
                <div className="collection-detail-copy">
                  <span className="label">{selectedCollectionData.index}</span>
                  <h1>{selectedCollectionData.title}</h1>
                  <p>{selectedCollectionData.description}</p>
                  <div className="detail-actions">
                    <button type="button" className="btn btn-inline" onClick={openCollections}>← Back to Collections</button>
                    <button type="button" className="btn btn-inline" onClick={openHome}>Back Home</button>
                  </div>
                </div>
                <div className="collection-detail-visual">
                  <img src={selectedCollectionData.heroImage} alt={selectedCollectionData.title} />
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

                <label className="search-box" aria-label="Search dresses">
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
                    <article key={dress.id} className="dress-card reveal">
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
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;
