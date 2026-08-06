import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="hero">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero-video"
      >
        <source src="https://videos.pexels.com/video-files/5789122/5789122-hd_1920_1080_24fps.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <div className="wrap">
          <span className="label hero-eyebrow">Bridal — Formal — Semi-Formal</span>
          <h1>Made for<br />the moment<br /><em>you'll wear.</em></h1>
          <p className="hero-sub">Bespoke gowns designed in the atelier, fitted to your measurements, and shipped worldwide — fully insured, made to order.</p>
          <div style={{ display: 'flex', gap: '36px', alignItems: 'center', flexWrap: 'wrap' }}>
            <a href="#book" className="btn btn-block btn-block-invert">Book a Fitting</a>
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
