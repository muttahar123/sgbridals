import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Collections } from './components/Collections';
import { Process } from './components/Process';
import { Shipping } from './components/Shipping';
import { BookingPanel } from './components/BookingPanel';
import { Footer } from './components/Footer';

function App() {
  const [preloaderGone, setPreloaderGone] = useState(false);
  const [preloaderRemoved, setPreloaderRemoved] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setPreloaderGone(true);
      const timer2 = setTimeout(() => {
        setPreloaderRemoved(true);
      }, 800);
      return () => clearTimeout(timer2);
    }, 400);
    return () => clearTimeout(timer1);
  }, []);

  useEffect(() => {
    if (!preloaderGone) {
      document.body.classList.add('locked');
    } else {
      document.body.classList.remove('locked');
    }
  }, [preloaderGone]);

  useEffect(() => {
    // Wait until preloader is gone or immediately observe reveal classes
    const revealEls = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    revealEls.forEach((el) => revealObserver.observe(el));
    return () => revealObserver.disconnect();
  }, [preloaderRemoved]);

  return (
    <>
      {!preloaderRemoved && (
        <div id="preloader" className={preloaderGone ? 'gone' : ''}>
          <div className="mark">S &amp; G</div>
        </div>
      )}

      <Header />

      <main id="top">
        <Hero />
        <Marquee />
        <Collections />
        <Process />
        <Shipping />
        <BookingPanel />
      </main>

      <Footer />
    </>
  );
}

export default App;
