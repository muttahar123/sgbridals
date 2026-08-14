import React, { useEffect, useState } from 'react';

interface HeaderProps {
  onGoHome: () => void;
  onGoCollections: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onGoHome, onGoCollections }) => {
  const [isSolid, setIsSolid] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSolid(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header id="siteHeader" className={isSolid ? 'solid' : ''}>
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
          <div className="navcta">
            <a href="#book" className="btn" style={{ border: 'none', padding: 0 }}>
              Book a Fitting
            </a>
          </div>
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
        <a href="#process" onClick={closeMobileMenu}>Atelier</a>
        <a href="#shipping" onClick={closeMobileMenu}>Shipping</a>
        <a href="#book" onClick={closeMobileMenu}>Appointments</a>
      </div>
    </>
  );
};
