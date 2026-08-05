import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-tex"></div>
      <svg className="hero-gown" viewBox="0 0 300 460" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M150 40 C130 40 118 60 120 85 C122 110 108 130 90 150 C58 186 40 250 34 330 C30 386 34 420 40 440 L260 440 C266 420 270 386 266 330 C260 250 242 186 210 150 C192 130 178 110 180 85 C182 60 170 40 150 40 Z" 
          fill="#f7f4ee"
        />
      </svg>
      <div className="hero-content">
        <div className="wrap">
          <span className="label hero-eyebrow">Bridal — Formal — Semi-Formal</span>
          <h1>Made for<br />the moment<br /><em>you'll wear.</em></h1>
          <p className="hero-sub">Bespoke gowns designed in the atelier, fitted to your measurements, and shipped worldwide — fully insured, made to order.</p>
          <div style={{ display: 'flex', gap: '36px', alignItems: 'center', flexWrap: 'wrap' }}>
            <a href="#book" className="btn btn-block">Book a Fitting</a>
            <a href="#collections" className="btn" style={{ color: '#f7f4ee', borderColor: '#f7f4ee88' }}>
              View Collections
            </a>
          </div>
        </div>
      </div>
      <div className="scroll-cue">
        <span className="label" style={{ color: 'inherit' }}>Scroll</span>
        <div className="line"></div>
      </div>
    </section>
  );
};
