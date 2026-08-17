import React from 'react';

export const InstagramFollow: React.FC = () => (
  <section className="instagram-follow" aria-label="Follow SG Bridal Official on Instagram">
    <div className="wrap instagram-follow-inner">
      <a
        href="https://www.instagram.com/sgbridalsofficial/"
        className="instagram-follow-link"
        target="_blank"
        rel="noreferrer"
      >
        <span className="instagram-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" />
          </svg>
        </span>
        <span className="instagram-follow-copy">
          <span className="label">Instagram</span>
          <strong>Follow sgbridalsofficial</strong>
        </span>
      </a>
    </div>
  </section>
);
