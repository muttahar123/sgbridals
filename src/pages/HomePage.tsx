import React from 'react';
import { Hero } from '../components/Hero';
import { Marquee } from '../components/Marquee';
import { CollectionSection } from '../components/CollectionSection';
import { Process } from '../components/Process';
import { Shipping } from '../components/Shipping';
import { BookingPanel } from '../components/BookingPanel';
import { InstagramFollow } from '../components/InstagramFollow';

interface HomePageProps {
  onOpenCollection: (slug: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenCollection }) => (
  <>
    <Hero />
    <Marquee />
    <CollectionSection onOpenCollection={onOpenCollection} />
    <Process />
    <Shipping />
    <BookingPanel />
    <InstagramFollow />
  </>
);
