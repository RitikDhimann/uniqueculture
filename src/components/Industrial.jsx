import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const IndustrialMotion = () => {
  const images = [
    "https://image.hm.com/assets/hm/df/1d/df1d5f40d03616e3515ec4f3ff8ca6dc6b3678ee.jpg?imwidth=820",
    "https://image.hm.com/assets/hm/bc/0e/bc0e8056c639080e443021e5f0d3035cefe68983.jpg?imwidth=820",
    "https://image.hm.com/assets/hm/a3/21/a321819091904bf9e79be222d8395ad21d6aeb18.jpg?imwidth=820",
    "https://image.hm.com/content/dam/ind-local-assets/IN_Ws23i_Teaser_2x3.jpg?imwidth=1024"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  // Sync index with native scroll for mobile
  const handleScroll = (e) => {
    if (window.innerWidth < 768) {
      const scrollPosition = e.target.scrollLeft;
      const width = e.target.offsetWidth * 0.85; // 85vw width
      const index = Math.round(scrollPosition / width);
      if (index !== currentIndex && index < images.length) {
        setCurrentIndex(index);
      }
    }
  };

  const handleDragEnd = (event, info) => {
    if (window.innerWidth >= 768) {
      const threshold = 50; 
      if (info.offset.x < -threshold && currentIndex < images.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else if (info.offset.x > threshold && currentIndex > 0) {
        setCurrentIndex(prev => prev - 1);
      }
    }
  };

  return (
    <section className="w-full relative h-auto bg-white py-20 px-6 md:px-12 flex flex-col items-center">
      {/* Draggable Slider Container */}
      <div 
        className="relative w-full max-w-[1000px] md:aspect-[3/4] overflow-hidden"
      >
        <div
          ref={containerRef}
          onScroll={handleScroll}
          className="flex w-full h-full overflow-x-auto snap-x snap-mandatory no-scrollbar md:overflow-hidden cursor-grab active:cursor-grabbing pb-4 md:pb-0"
        >
          {images.map((src, i) => (
            <motion.div 
              key={src} 
              drag={window.innerWidth >= 768 ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              animate={window.innerWidth >= 768 ? { x: `-${currentIndex * 100}%` } : {}}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="min-w-[85vw] md:min-w-full h-[85vh] md:h-full relative snap-center mr-4 md:mr-0 first:ml-0 last:mr-0 group shadow-3d-layer md:shadow-none"
            >
              <img
                src={src}
                alt={`Industrial Section ${i + 1}`}
                className="w-full h-full object-cover object-top grayscale select-none pointer-events-none group-hover:grayscale-0 transition-all duration-700"
              />
              {/* Desktop-only reference tag inside the motion div if needed, 
                  but we'll keep the absolute ones for better consistency */}
            </motion.div>
          ))}
        </div>

        {/* Constant Overlay Text (Single word/Minimalist) */}
        <div className="absolute bottom-10 left-10 z-10 pointer-events-none hidden md:block">
          <h2 className="text-secondary font-heading text-4xl md:text-7xl tracking-[0.1em] leading-none mix-blend-difference invert uppercase">
            {currentIndex % 2 === 0 ? "INDUSTRIAL" : "COLLECTION"}
          </h2>
        </div>

        {/* Image Reference Tag */}
        <div className="absolute top-10 right-10 z-10 text-[10px] font-mono tracking-widest text-secondary font-bold bg-primary/80 px-3 py-1 border border-secondary/20 shadow-sm hidden md:block">
          REF_00{currentIndex + 1}
        </div>
      </div>

      {/* Mobile Title & Ref (Shown below/above on mobile if preferred, or as overlay) */}
      <div className="w-full flex justify-between items-baseline md:hidden mb-4">
          <h2 className="text-secondary font-heading text-3xl tracking-tighter uppercase">Industrial</h2>
          <span className="font-mono text-[10px] text-accent">REF_00{currentIndex + 1}</span>
      </div>

      {/* Segmented Progress Bar */}
      <div className="mt-20 w-full max-w-[1000px] flex gap-4 h-6 items-end justify-center">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className="flex flex-col items-center group/btn relative pt-2"
          >
            <span
              className={`text-[10px] font-mono tracking-tighter transition-all duration-300 ${i === currentIndex ? 'text-secondary font-black scale-110' : 'text-accent opacity-40 group-hover/btn:opacity-100'
                }`}
            >
              0{i + 1}
            </span>

            {/* Active Indicator (Dot under the number) */}
            {i === currentIndex && (
              <motion.div
                layoutId="active-dot"
                className="w-1.5 h-1.5 bg-secondary rounded-full mt-1"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Swipe Instruction for Mobile */}
      <div className="mt-6 text-[8px] font-bold tracking-[0.3em] text-accent/50 uppercase md:hidden flex items-center gap-2">
        <div className="w-4 h-[1px] bg-accent/20" />
        DRAG TO EXPLORE
        <div className="w-4 h-[1px] bg-accent/20" />
      </div>

      {/* Minimal footer metadata */}
      <div className="w-full max-w-[1000px] mt-12 flex justify-between items-center text-[8px] font-mono tracking-widest text-accent uppercase border-t border-secondary/10 pt-4">
        <span>DRAG_G_INT_ACTIVE</span>
        <span>GLOBAL_DISTRIBUTION_2026 // SYST_SYNC_OK</span>
      </div>
    </section>
  );
};

export default IndustrialMotion;
