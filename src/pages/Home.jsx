import React from 'react';
import Hero from '../components/Hero';
import Products from '../components/Products';
import About from '../components/About';
import IndustrialMotion from '../components/Industrial';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <main className="relative">
      <Hero />
      <Products />
      <About />
      <IndustrialMotion />
      <Newsletter />
    </main>
  );
};

export default Home;
