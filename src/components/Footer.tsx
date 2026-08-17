import React, { useState } from 'react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    alert('Welcome to the Atelier List.');
    setEmail('');
  };

  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="foot-logo">
              SG<span style={{ fontSize: '13px', color: '#f7f4ee88' }}>Bridals</span>
            </div>
            <p className="foot-about">
              Bespoke bridal, formal and semi-formal couture — designed and hand-finished in the atelier, shipped worldwide.
            </p>
            <form className="newsletter" onSubmit={handleSubscribe}>
              <input 
                type="email" 
                placeholder="Your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" id="subscribeBtn">Join</button>
            </form>
          </div>
          <div>
            <h4>Collections</h4>
            <ul>
              <li><a href="#collections">Bridal</a></li>
              <li><a href="#collections">Formals</a></li>
              <li><a href="#collections">Semi-Formal</a></li>
            </ul>
          </div>
          <div>
            <h4>Atelier</h4>
            <ul>
              <li><a href="#process">Made to Order</a></li>
              <li><a href="#shipping">Shipping &amp; Returns</a></li>
              <li><a href="#book">Book an Appointment</a></li>
            </ul>
          </div>
          <div>
            <h4>Atelier Locations</h4>
            <ul>
              <li>New York, USA</li>
              <li>London, UK</li>
              <li>Dubai, UAE</li>
              <li>Karachi, Pakistan</li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 SG Bridals. All rights reserved.</span>
          <div className="social">
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" />
              </svg>
            </a>
            <a href="#" aria-label="Pinterest">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M8 21c1-3 2-8 2-8m4-6c4 0 6 3 6 6.5 0 4-2 7-6 7-1.2 0-2-.4-2.6-1" />
                <circle cx="12" cy="12" r="9.5" />
              </svg>
            </a>
            <a href="#" aria-label="Email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
