import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { products } from '../data/productData';

const ProductCard = ({ product, index }) => (
  <motion.div
    key={product.id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: (index % 4) * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
    className="group cursor-pointer flex flex-col brutalist-card p-2 md:p-3 bg-white"
  >
    <Link to={`/product/${product.id}`} className="flex flex-col h-full">
      {/* Image Container */}
      <div className="relative aspect-[3/4] md:aspect-[3.5/4.5] overflow-hidden mb-4 md:mb-6 bg-[#F3F3F3]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover mono-img"
        />
        {/* Hover Info Overlay */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="text-[9px] font-mono tracking-[0.4em] font-black text-black bg-white/90 px-4 py-2 border border-black/10 backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">VIEW_DETAILS</span>
        </div>
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-1 px-1">
        <p className="text-[7px] md:text-[8px] font-mono tracking-[0.2em] text-black/40 uppercase">{product.category}</p>
        <div className="flex justify-between items-baseline gap-2">
          <h3 className="text-xs md:text-sm font-heading tracking-widest text-black flex-1">
            {product.name}
          </h3>
          <span className="text-xs md:text-sm font-heading tracking-widest text-black/60 whitespace-nowrap">{product.price}</span>
        </div>
      </div>
    </Link>
  </motion.div>
);

const Products = () => {
  // Split products into two sections of 4
  const firstSection = products.slice(0, 4);
  const secondSection = products.slice(4, 8);

  return (
    <>
      <section className="relative z-50 py-6 md:py-8 bg-white px-4 md:px-6 border-b border-secondary/5">
        <div className="container mx-auto">
          {/* Header Section */}
          <div className="mb-8 md:mb-16">
            <span className="text-[10px] font-mono tracking-[0.5em] text-accent font-bold uppercase mb-4 block">DROP_001 // Unique_IDENTITY</span>
            <h2 className="text-xl md:text-3xl font-heading font-black tracking-tighter text-black uppercase">New Arrivals</h2>
            <div className="w-full h-[1px] bg-black/10 mt-6" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-8 gap-y-12 md:gap-y-20">
            {firstSection.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-50 py-12 md:py-8 bg-white px-4 md:px-6">
        <div className="container mx-auto">
          {/* Section 02 Divider/Header */}
          <div className="mb-8 md:mb-16">
            <span className="text-[10px] font-mono tracking-[0.5em] text-accent font-bold uppercase mb-4 block">CORE_ARCHIVE // TECHNICAL_WALKER</span>
            <h2 className="text-xl md:text-3xl font-heading font-black tracking-tighter text-black uppercase">Trending Arrival</h2>
            <div className="w-full h-[1px] bg-black/10 mt-6" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-8 gap-y-12 md:gap-y-20">
            {secondSection.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          {/* View All Products Button */}
          <div className="mt-20 md:mt-20 flex justify-center">
            <Link
              to="/collections"
              className="group relative px-10 py-4 border-2 border-black overflow-hidden bg-white"
            >
              <div className="absolute inset-0 bg-black translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.4em] text-black group-hover:text-white transition-colors duration-500">
                EXPLORE_FULL_ARCHIVE
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
