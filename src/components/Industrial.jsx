import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IndustrialMotion = () => {
    const images = [
        "https://image.hm.com/assets/hm/df/1d/df1d5f40d03616e3515ec4f3ff8ca6dc6b3678ee.jpg?imwidth=820",
        "https://image.hm.com/assets/hm/bc/0e/bc0e8056c639080e443021e5f0d3035cefe68983.jpg?imwidth=820",
        "https://image.hm.com/assets/hm/a3/21/a321819091904bf9e79be222d8395ad21d6aeb18.jpg?imwidth=820",
        "https://image.hm.com/content/dam/ind-local-assets/IN_Ws23i_Teaser_2x3.jpg?imwidth=1024"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <section className="w-full h-auto bg-primary py-20 px-6 md:px-12 flex flex-col items-center">
            {/* Slider Container */}
            <div className="relative w-full max-w-[1000px] aspect-[3/4] overflow-hidden border-2 border-secondary/10 shadow-3d-layer bg-secondary/5">
                <AnimatePresence initial={false} mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ x: 100, opacity: 1 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -100, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <img 
                            src={images[currentIndex]} 
                            alt={`Industrial Section ${currentIndex + 1}`} 
                            className="w-full h-full object-cover grayscale"
                            style={{ opacity: 1 }}
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Constant Overlay Text (Single word/Minimalist) */}
                <div className="absolute bottom-10 left-10 z-10 pointer-events-none">
                    <h2 className="text-secondary font-heading text-4xl md:text-7xl tracking-[0.1em] leading-none mix-blend-difference invert">
                        {currentIndex % 2 === 0 ? "INDUSTRIAL" : "COLLECTION"}
                    </h2>
                </div>
                
                {/* Image Reference Tag */}
                <div className="absolute top-10 right-10 z-10 text-[10px] font-mono tracking-widest text-secondary font-bold bg-primary/80 px-3 py-1 border border-secondary/20 shadow-sm">
                    REF_00{currentIndex + 1}
                </div>
            </div>

            {/* Continuous Progress Bar with Numbers Below */}
            <div className="mt-20 w-full max-w-[1000px] flex flex-col relative group">
                {/* Horizontal Progress Bar */}
                <div className="w-full h-[3px] bg-secondary/10 relative overflow-hidden">
                    <motion.div 
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: (currentIndex + 1) / images.length }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute inset-0 bg-secondary origin-left"
                    />
                </div>

                {/* Index Numbers Below the Bar */}
                <div className="flex justify-between mt-4">
                    {images.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className="flex flex-col items-center group/btn relative pt-2"
                        >
                            <span 
                                className={`text-[10px] font-mono tracking-tighter transition-all duration-300 ${
                                    i === currentIndex ? 'text-secondary font-black' : 'text-accent opacity-40 group-hover/btn:opacity-100'
                                }`}
                            >
                                0{i + 1}
                            </span>
                            
                            {/* Active Indicator (Dot under the number) */}
                            {i === currentIndex && (
                                <motion.div 
                                    layoutId="active-dot" 
                                    className="w-1 h-1 bg-secondary rounded-full mt-1" 
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Invisible Click Zones spanning the bar for better touch target */}
                <div className="absolute -top-4 bottom-0 left-0 right-0 flex pointer-events-none">
                    {images.map((_, i) => (
                        <div 
                            key={i} 
                            onClick={() => setCurrentIndex(i)}
                            className="flex-1 cursor-pointer pointer-events-auto h-20" 
                        />
                    ))}
                </div>
            </div>

            {/* Minimal footer metadata */}
            <div className="w-full max-w-[1000px] mt-12 flex justify-between items-center text-[8px] font-mono tracking-widest text-accent uppercase border-t border-secondary/10 pt-4">
                <span>CONTINUOUS_NAV_ACTIVE</span>
                <span>GLOBAL_DISTRIBUTION_2026 // SYST_SYNC_OK</span>
            </div>
        </section>
    );
};

export default IndustrialMotion;
