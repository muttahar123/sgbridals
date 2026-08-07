import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen min-h-[640px] overflow-hidden flex items-center bg-charcoal">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 min-w-full min-h-full w-full h-full object-cover z-0 pointer-events-none"
      >
        <source src="https://res.cloudinary.com/dxogrw0zo/video/upload/v1786035950/Confidence_is_the_best_bridal_accessory_sgbridalsofficial_justusweddings__kbspbr.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-[#111110]/30 via-[#111110]/50 to-[#111110]/80 z-10"></div>

      {/* <div className="relative z-20 w-full pt-20 mt-10">
        <div className="w-full max-w-wrap mx-auto px-12">
          <span className="font-sans text-[11.5px] tracking-[0.22em] uppercase font-medium text-ivory/80 mb-[22px] block">Bridal — Formal — Semi-Formal</span>
          <h1 className="font-serif text-[clamp(48px,8vw,124px)] leading-[0.96] text-ivory max-w-[16ch] font-light m-0 tracking-[-0.01em]">Made for<br />the moment<br /><em className="italic font-normal">you'll wear.</em></h1>
          <p className="text-ivory/85 max-w-[44ch] text-[16.5px] my-[26px] mb-[36px]">Bespoke gowns designed in the atelier, fitted to your measurements, and shipped worldwide — fully insured, made to order.</p>
          <div className="flex gap-[36px] items-center flex-wrap">
            <a href="#book" className="inline-flex items-center gap-3 py-[17px] px-[40px] text-[12px] font-medium tracking-[0.18em] uppercase border border-ivory text-ivory bg-transparent rounded-[1px] transition-all hover:bg-ivory hover:text-ink hover:gap-[18px]">Book a Fitting</a>
            <a href="#collections" className="inline-flex items-center gap-3 py-4 text-[12px] font-medium tracking-[0.18em] uppercase border-b border-ivory/50 text-ivory transition-all hover:opacity-60 hover:gap-[18px]">
              View Collections
            </a>
          </div>
        </div>
      </div> */}
      <div className="absolute left-1/2 bottom-[34px] -translate-x-1/2 z-20 flex flex-col items-center gap-[10px] text-ivory/60">
        <span className="font-sans text-[11.5px] tracking-[0.22em] uppercase font-medium text-inherit">Scroll</span>
        <div className="w-[1px] h-[46px] bg-ivory/40 overflow-hidden relative">
          <div className="absolute top-[-100%] left-0 w-full h-full bg-ivory animate-cue"></div>
        </div>
      </div>
    </section>
  );
};
