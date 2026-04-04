import React from 'react';
import Hero from '../components/Hero';
import MobileDropHero from '../components/MobileDropHero';

import Products from '../components/Products';
import About from '../components/About';
import IndustrialMotion from '../components/Industrial';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <main className="relative">
      <div className="hidden md:block">
        <Hero />
      </div>
      <div className="block md:hidden">
        <MobileDropHero />
      </div>

      <Products />
      <About />
      <IndustrialMotion />
      <Newsletter />
    </main>
  );
};

export default Home;
