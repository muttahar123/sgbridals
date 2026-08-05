import React from 'react';
import { Counter } from './Counter';

export const Shipping: React.FC = () => {
  return (
    <section id="shipping" className="shipping">
      <div className="wrap">
        <div className="globe-wrap reveal">
          <svg viewBox="0 0 200 200" fill="none">
            <circle cx="100" cy="100" r="86" stroke="#11111033" strokeWidth="1" />
            <ellipse cx="100" cy="100" rx="86" ry="34" stroke="#11111033" strokeWidth="1" />
            <ellipse cx="100" cy="100" rx="86" ry="34" stroke="#11111033" strokeWidth="1" transform="rotate(60 100 100)" />
            <ellipse cx="100" cy="100" rx="86" ry="34" stroke="#11111033" strokeWidth="1" transform="rotate(120 100 100)" />
            <line x1="14" y1="100" x2="186" y2="100" stroke="#11111033" strokeWidth="1" />
            <circle cx="60" cy="70" r="3.5" fill="#111110" />
            <circle cx="140" cy="60" r="3.5" fill="#111110" />
            <circle cx="150" cy="130" r="3.5" fill="#111110" />
            <circle cx="70" cy="150" r="3.5" fill="#111110" />
            <circle cx="100" cy="40" r="3.5" fill="#111110" />
          </svg>
        </div>
        <div className="reveal">
          <span className="label">Worldwide Shipping</span>
          <h2 style={{ fontSize: 'clamp(28px,3.4vw,44px)', marginTop: '16px', fontWeight: 300 }}>
            Delivered, insured, anywhere you say "I do."
          </h2>
          <p style={{ color: 'var(--charcoal)', marginTop: '18px', maxWidth: '56ch' }}>
            We ship to more than 90 countries. Every gown travels in a rigid garment case, fully insured, with duties calculated at checkout wherever available.
          </p>
          <div className="ship-stats">
            <div className="ship-stat">
              <Counter target={90} suffix="+" />
              <span>Countries served</span>
            </div>
            <div className="ship-stat">
              <b>10–16 wks</b>
              <span>Standard atelier lead time</span>
            </div>
            <div className="ship-stat">
              <Counter target={100} suffix="%" />
              <span>Insured in transit</span>
            </div>
            <div className="ship-stat">
              <b>24/7</b>
              <span>Order tracking support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
