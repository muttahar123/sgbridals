import { useEffect, useMemo, useState } from 'react';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { CollectionsOverviewPage } from './pages/CollectionsOverviewPage';
import { CollectionPage } from './pages/CollectionPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { collections, type Dress } from './data/collections';

function App() {
  const [preloaderGone, setPreloaderGone] = useState(false);
  const [preloaderRemoved, setPreloaderRemoved] = useState(false);
  const [activeView, setActiveView] = useState<'home' | 'collections' | 'collection' | 'product'>('home');
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Dress | null>(null);

  const selectedCollectionData = useMemo(
    () => collections.find((item) => item.slug === selectedCollection) ?? null,
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
    setSelectedProduct(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openCollections = () => {
    if (activeView === 'home') {
      document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setSelectedCollection(null);
      setSelectedProduct(null);
      return;
    }

    setActiveView('collections');
    setSelectedCollection(null);
    setSelectedProduct(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openSelectedCollection = (slug: string) => {
    setSelectedCollection(slug);
    setSelectedProduct(null);
    setActiveView('collection');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openProductDetail = (product: Dress) => {
    setSelectedProduct(product);
    setActiveView('product');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {!preloaderRemoved && (
        <div id="preloader" className={preloaderGone ? 'gone' : ''}>
          <div className="mark"><img src="/logo.png" alt="" /></div>
        </div>
      )}

      <Layout onGoHome={openHome} onGoCollections={openCollections}>
        {activeView === 'home' && <HomePage onOpenCollection={openSelectedCollection} />}

        {activeView === 'collections' && <CollectionsOverviewPage onOpenCollection={openSelectedCollection} />}

        {activeView === 'collection' && (
          <CollectionPage
            collection={selectedCollectionData}
            onBackToCollections={openCollections}
            onBackHome={openHome}
            onOpenProduct={openProductDetail}
          />
        )}

        {activeView === 'product' && (
          <ProductDetailPage
            product={selectedProduct}
            onBackToCollection={() => {
              if (selectedCollection) {
                setActiveView('collection');
              } else {
                openCollections();
              }
            }}
            onBackHome={openHome}
          />
        )}
      </Layout>
    </>
  );
}

export default App;
