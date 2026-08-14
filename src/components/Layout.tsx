import React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

interface LayoutProps {
  children: React.ReactNode;
  onGoHome: () => void;
  onGoCollections: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, onGoHome, onGoCollections }) => (
  <>
    <Header onGoHome={onGoHome} onGoCollections={onGoCollections} />
    <main id="top">{children}</main>
    <Footer />
  </>
);
