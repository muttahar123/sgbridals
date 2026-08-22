import React, { useEffect, useMemo, useRef, useState } from 'react';
import { allDresses, collections } from '../data/collections';
import type { CollectionSlug, Dress } from '../data/collections';

interface HeaderProps {
  onGoHome: () => void;
  onGoCollections: () => void;
  onOpenCollection: (slug: CollectionSlug) => void;
  onOpenProduct: (product: Dress) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onGoHome,
  onGoCollections,
  onOpenCollection,
  onOpenProduct,
}) => {
  const [isSolid, setIsSolid] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSolid(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isSearchOpen) {
      return;
    }

    const focusTimer = window.setTimeout(() => {
      searchInputRef.current?.focus();
    }, 80);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isSearchOpen]);

  const normalizeSearchValue = (value: string) => value.toLowerCase().replace(/-/g, ' ').replace(/\s+/g, ' ').trim();
  const normalizedQuery = normalizeSearchValue(searchQuery);

  const collectionResults = useMemo(() => {
    if (!normalizedQuery) {
      return collections;
    }

    return collections.filter((collection) => {
      return [collection.title, collection.headline, collection.description, collection.index]
        .some((value) => normalizeSearchValue(value).includes(normalizedQuery));
    });
  }, [normalizedQuery]);

  const dressResults = useMemo(() => {
    if (!normalizedQuery) {
      return allDresses.slice(0, 4);
    }

    return allDresses
      .filter((dress) => {
        return [dress.name, dress.collectionTitle, dress.fabric, dress.description]
          .some((value) => normalizeSearchValue(value).includes(normalizedQuery));
      })
      .slice(0, 5);
  }, [normalizedQuery]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleSearchClick = () => {
    setIsSearchOpen((current) => !current);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (collectionResults[0]) {
      closeSearch();
      onOpenCollection(collectionResults[0].slug);
      return;
    }

    if (dressResults[0]) {
      closeSearch();
      onOpenProduct(dressResults[0]);
      return;
    }

    closeSearch();
    onGoCollections();
  };

  return (
    <>
      <header id="siteHeader" className={isSolid ? 'solid' : ''}>
        <div className="top-contact-bar">
          <div className="top-contact-inner">
            <a href="tel:+923122375706" className="top-contact-item">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.6 3.7l3.2-.7 2.2 5.1-1.9 1.2c1 2 2.6 3.6 4.6 4.6l1.2-1.9 5.1 2.2-.7 3.2c-.2 1-1.1 1.7-2.1 1.7C10.9 19.2 4.8 13.1 4.8 5.8c0-1 .8-1.9 1.8-2.1z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
              <span>+923122375706</span>
            </a>
            <span className="top-contact-divider" aria-hidden="true"></span>
            <span className="top-contact-item">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3.5 7.5h11v9h-11zM14.5 10.5h3.4l2.6 3.1v2.9h-6z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <circle cx="7" cy="18" r="1.7" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="17.5" cy="18" r="1.7" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <span>World Wide Shipping</span>
            </span>
          </div>
        </div>
        <nav className="wrap">
          <button type="button" className="logo-button" onClick={onGoHome} aria-label="Go to homepage">
            <img
              src="/logo.png"
              alt="Logo"
              className="object-contain"
              style={{ width: '65px', height: 'auto', display: 'block' }}
            />
          </button>
          <div className="navlist">
            <button type="button" className="nav-link" onClick={onGoCollections}>Collections</button>
            <a href="#process">Atelier</a>
            <a href="#shipping">Shipping</a>
            <a href="#book">Appointments</a>
          </div>
          <div className="nav-tools">
            <button type="button" className="nav-search" onClick={handleSearchClick} aria-label="Search collections">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="11" cy="11" r="5.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
                <path d="M16 16L21 21" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
            <a href="#book" className="btn" style={{ border: 'none', padding: 0 }}>
              Book a Fitting
            </a>
          </div>
          <button
            type="button"
            className="nav-search mobile-search-trigger"
            onClick={handleSearchClick}
            aria-label="Search collections"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="11" cy="11" r="5.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
              <path d="M16 16L21 21" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
          <button
            className="burger"
            id="burgerBtn"
            aria-label="Open menu"
            onClick={toggleMobileMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </header>

      <div id="mobileMenu" className={isMobileMenuOpen ? 'open' : ''}>
        <button className="close" id="closeMenu" onClick={closeMobileMenu}>
          Close ✕
        </button>
        <button type="button" className="mobile-link" onClick={() => { closeMobileMenu(); onGoCollections(); }}>Collections</button>
        <button type="button" className="mobile-link mobile-search-link" onClick={() => { closeMobileMenu(); setIsSearchOpen(true); }}>Search</button>
        <a href="#process" onClick={closeMobileMenu}>Atelier</a>
        <a href="#shipping" onClick={closeMobileMenu}>Shipping</a>
        <a href="#book" onClick={closeMobileMenu}>Appointments</a>
      </div>

      {isSearchOpen && (
        <>
          <button type="button" className="search-backdrop" aria-label="Close search" onClick={closeSearch}></button>
          <div className="site-search-panel" role="dialog" aria-label="Search SG Bridals">
            <form className="site-search-form" onSubmit={handleSearchSubmit}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="11" cy="11" r="5.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
                <path d="M16 16L21 21" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              <input
                ref={searchInputRef}
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search bridal, formal, semi-formal..."
                aria-label="Search bridal collections"
              />
              {searchQuery && (
                <button type="button" className="search-clear" onClick={() => setSearchQuery('')} aria-label="Clear search">
                  Clear
                </button>
              )}
            </form>

            <div className="site-search-results">
              <div className="search-result-group">
                <span className="search-result-label">Collections</span>
                {collectionResults.length > 0 ? (
                  collectionResults.slice(0, 3).map((collection) => (
                    <button
                      key={collection.slug}
                      type="button"
                      className="search-result-row"
                      onClick={() => {
                        closeSearch();
                        onOpenCollection(collection.slug);
                      }}
                    >
                      <span>{collection.title}</span>
                      <small>{collection.headline}</small>
                    </button>
                  ))
                ) : (
                  <p className="search-empty">No collection found.</p>
                )}
              </div>

              <div className="search-result-group">
                <span className="search-result-label">Looks</span>
                {dressResults.length > 0 ? (
                  dressResults.map((dress) => (
                    <button
                      key={dress.id}
                      type="button"
                      className="search-result-row"
                      onClick={() => {
                        closeSearch();
                        onOpenProduct(dress);
                      }}
                    >
                      <span>{dress.name}</span>
                      <small>{dress.collectionTitle} · {dress.fabric}</small>
                    </button>
                  ))
                ) : (
                  <p className="search-empty">No dress found.</p>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
