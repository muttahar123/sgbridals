import React from 'react';

export const Process: React.FC = () => {
  return (
    <section id="process">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="label">Made to Order</span>
          <h2>From first sketch to final fitting.</h2>
          <p>Nothing is pulled from a rack. Each order moves through four stages before it ships.</p>
        </div>
        <div className="process-grid reveal">
          <div className="process-item">
            <span className="pnum">01</span>
            <h3>Consultation</h3>
            <p>Share your vision and measurements with our design team — in person or by video, worldwide.</p>
          </div>
          <div className="process-item">
            <span className="pnum">02</span>
            <h3>Design &amp; Fabric</h3>
            <p>Choose silhouette, fabric and embellishment. We render your piece before a stitch is cut.</p>
          </div>
          <div className="process-item">
            <span className="pnum">03</span>
            <h3>Fittings</h3>
            <p>Two to three fittings — in-atelier or by video — refine the fit until it's exact.</p>
          </div>
          <div className="process-item">
            <span className="pnum">04</span>
            <h3>Delivery</h3>
            <p>Pressed, packed in a travel-ready case and shipped fully insured to your door.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
