import React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import type { CollectionSlug, Dress } from '../data/collections';

interface LayoutProps {
  children: React.ReactNode;
  onGoHome: () => void;
  onGoCollections: () => void;
  onOpenCollection: (slug: CollectionSlug) => void;
  onOpenProduct: (product: Dress) => void;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  onGoHome,
  onGoCollections,
  onOpenCollection,
  onOpenProduct,
}) => (
  <>
    <Header
      onGoHome={onGoHome}
      onGoCollections={onGoCollections}
      onOpenCollection={onOpenCollection}
      onOpenProduct={onOpenProduct}
    />
    <main id="top">{children}</main>
    <Footer />
  </>
);
