import React from 'react';

export const Marquee: React.FC = () => {
  return (
    <div className="marquee">
      <div className="marquee-track">
        <span>WORLDWIDE SHIPPING</span>
        <span>MADE TO ORDER</span>
        <span>PRIVATE APPOINTMENTS</span>
        <span>HANDCRAFTED IN THE ATELIER</span>
        <span>WORLDWIDE SHIPPING</span>
        <span>MADE TO ORDER</span>
        <span>PRIVATE APPOINTMENTS</span>
        <span>HANDCRAFTED IN THE ATELIER</span>
      </div>
    </div>
  );
};
