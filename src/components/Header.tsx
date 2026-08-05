import React, { useEffect, useState } from 'react';

export const Header: React.FC = () => {
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
          <a href="#top" className="logo">
            S &amp; G<span className="sub">BRIDALS ATELIER</span>
          </a>
          <div className="navlist">
            <a href="#collections">Collections</a>
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
        <a href="#collections" onClick={closeMobileMenu}>Collections</a>
        <a href="#process" onClick={closeMobileMenu}>Atelier</a>
        <a href="#shipping" onClick={closeMobileMenu}>Shipping</a>
        <a href="#book" onClick={closeMobileMenu}>Appointments</a>
      </div>
    </>
  );
};
