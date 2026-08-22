import { useEffect, useMemo, useState } from 'react';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { CollectionsOverviewPage } from './pages/CollectionsOverviewPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { allDresses, type Dress } from './data/collections';

type ActiveView = 'home' | 'collections' | 'product';

const getProductPath = (product: Dress) => `/products/${product.id}`;

const getViewFromPath = (): { view: ActiveView; product: Dress | null } => {
  const productMatch = window.location.pathname.match(/^\/products\/([^/]+)$/);

  if (productMatch) {
    const product = allDresses.find((item) => item.id === productMatch[1]) ?? null;
    return { view: product ? 'product' : 'collections', product };
  }

  if (window.location.pathname === '/collections') {
    return { view: 'collections', product: null };
  }

  return { view: 'home', product: null };
};

function App() {
  const [preloaderGone, setPreloaderGone] = useState(false);
  const [preloaderRemoved, setPreloaderRemoved] = useState(false);
  const initialRoute = useMemo(getViewFromPath, []);
  const [activeView, setActiveView] = useState<ActiveView>(initialRoute.view);
  const [selectedProduct, setSelectedProduct] = useState<Dress | null>(initialRoute.product);

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

  useEffect(() => {
    const handlePopState = () => {
      const route = getViewFromPath();
      setActiveView(route.view);
      setSelectedProduct(route.product);
      window.scrollTo({ top: 0, behavior: 'auto' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
  };

  const openHome = () => {
    navigateTo('/');
    setActiveView('home');
    setSelectedProduct(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openCollections = () => {
    navigateTo('/collections');
    setActiveView('collections');
    setSelectedProduct(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openSelectedCollection = (slug: string) => {
    navigateTo('/collections');
    setActiveView('collections');
    setSelectedProduct(null);
    window.setTimeout(() => {
      document.getElementById(`collection-${slug}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);
  };

  const openProductDetail = (product: Dress) => {
    navigateTo(getProductPath(product));
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

      <Layout
        onGoHome={openHome}
        onGoCollections={openCollections}
        onOpenCollection={openSelectedCollection}
        onOpenProduct={openProductDetail}
      >
        {activeView === 'home' && <HomePage onOpenCollection={openSelectedCollection} />}

        {activeView === 'collections' && (
          <CollectionsOverviewPage
            onOpenProduct={openProductDetail}
          />
        )}

        {activeView === 'product' && (
          <ProductDetailPage
            product={selectedProduct}
            onBackToCollection={openCollections}
            onBackHome={openHome}
          />
        )}
      </Layout>
    </>
  );
}

export default App;
