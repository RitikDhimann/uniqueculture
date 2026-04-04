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
        className="group cursor-pointer flex flex-col"
    >
        <Link to={`/product/${product.id}`} className="flex flex-col h-full">
            {/* Image Container */}
            <div className="relative aspect-[3/4] md:aspect-[3.5/4.5] overflow-hidden mb-4 md:mb-6 bg-[#F3F3F3]">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                />
                {/* Hover Info Overlay */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-[10px] font-mono tracking-[0.3em] font-black text-black bg-white px-4 py-2 border border-black shadow-sm transform translate-y-4 group-hover:translate-y-0 transition-transform">VIEW_DETAILS</span>
                </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col gap-1 px-1">
                <div className="relative self-start">
                    <h3 className="text-[13px] md:text-[16px] font-normal tracking-tight text-black group-hover:opacity-100 transition-opacity">
                        <span className="relative uppercase">
                            {product.name}
                            <span className="absolute left-0 -bottom-[1px] w-0 h-[1.5px] bg-black transition-all duration-500 ease-out group-hover:w-full" />
                        </span>
                    </h3>
                </div>
                <span className="text-[11px] md:text-[14px] text-black/40 font-mono tracking-tighter">{product.price}</span>
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
      <section className="relative z-50 py-12 md:py-24 bg-white px-4 md:px-6 border-b border-secondary/5">
        <div className="container mx-auto">
          {/* Header Section */}
          <div className="mb-8 md:mb-16">
            <span className="text-[10px] font-mono tracking-[0.5em] text-accent font-bold uppercase mb-4 block">DROP_001 // MAGGU_IDENTITY</span>
            <h2 className="text-xl md:text-3xl font-heading font-black tracking-tighter text-black uppercase">JUST_DROPPED_ST_26</h2>
            <div className="w-full h-[1px] bg-black/10 mt-6" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-8 gap-y-12 md:gap-y-20">
            {firstSection.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-50 py-12 md:py-24 bg-white px-4 md:px-6">
        <div className="container mx-auto">
          {/* Section 02 Divider/Header */}
          <div className="mb-8 md:mb-16">
            <span className="text-[10px] font-mono tracking-[0.5em] text-accent font-bold uppercase mb-4 block">CORE_ARCHIVE // TECHNICAL_WALKER</span>
            <h2 className="text-xl md:text-3xl font-heading font-black tracking-tighter text-black uppercase">ESSENTIAL_STRUCTURES</h2>
            <div className="w-full h-[1px] bg-black/10 mt-6" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-8 gap-y-12 md:gap-y-20">
            {secondSection.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          {/* View All Products Button */}
          <div className="mt-20 md:mt-32 flex justify-center">
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
