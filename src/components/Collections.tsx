import React from 'react';

export const Collections: React.FC = () => {
  return (
    <section id="collections">
      <div className="wrap section-head reveal">
        <span className="label">The Collections</span>
        <h2>Three lines, one atelier standard.</h2>
        <p>Every piece is cut to your measurements and finished by hand — the difference is occasion, fabrication and silhouette.</p>
      </div>

      <div className="collection-row reveal">
        <div className="col-panel p1">
          <div className="tex"></div>
        </div>
        <div className="col-text">
          <span className="idx">01 — Bridal</span>
          <h3>The Bridal Line</h3>
          <p>Gowns built around silhouette, not trend. Boned bodices, hand-finished hems and necklines drafted to flatter your frame — for the ceremony and the reception.</p>
          <a href="#book" className="btn">Discover Bridal →</a>
        </div>
      </div>

      <div className="collection-row reverse reveal">
        <div className="col-panel p2">
          <div className="tex"></div>
        </div>
        <div className="col-text">
          <span className="idx">02 — Formal</span>
          <h3>Formal Eveningwear</h3>
          <p>Statement pieces for galas, receptions and formal dinners — sculpted lines, directional necklines and structured trains made to order in your size.</p>
          <a href="#book" className="btn">Discover Formals →</a>
        </div>
      </div>

      <div className="collection-row reveal">
        <div className="col-panel p3">
          <div className="tex"></div>
        </div>
        <div className="col-text">
          <span className="idx">03 — Semi-Formal</span>
          <h3>Semi-Formal Edit</h3>
          <p>Occasion dresses for engagements, showers and rehearsal dinners — lighter fabrications and softer construction, with the same atelier finish.</p>
          <a href="#book" className="btn">Discover Semi-Formal →</a>
        </div>
      </div>
    </section>
  );
};
