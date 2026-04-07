import React, { useState } from 'react';
import { motion } from 'framer-motion';

const IndustrialMotion = () => {
  const [isPaused, setIsPaused] = useState(false);

  const assets = [
    {
      id: "REF_001",
      title: "STRUCTURAL_NUCLEUS",
      image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "REF_002",
      title: "METROPOLIS_FRAME",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "REF_003",
      title: "THERMAL_SHIELD",
      image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "REF_004",
      title: "KINETIC_FOUNDATION",
      image: "/brutalist_industrial_boot_premium.png"
    },
    {
      id: "REF_005",
      title: "CARGO_SYSTEM",
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "REF_006",
      title: "URBAN_OVERSHADOW",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  // Duplicate for seamless loop
  const duplicatedAssets = [...assets, ...assets];

  return (
    <section className="relative bg-white py-24 md:py-20 overflow-hidden border-t border-b border-secondary/5">
      {/* Header Label - Technical */}
      <div className="container mx-auto px-6 md:px-12 mb-12 md:mb-20 flex justify-between items-end">
        <div className="space-y-4">
          <span className="text-[10px] font-mono tracking-[0.5em] text-accent font-black uppercase block">PROD_LINE // LIVE_FEED</span>
          <h2 className="text-3xl md:text-5xl font-heading tracking-widest text-secondary leading-none uppercase">Industrial_Reel</h2>
        </div>
        <div className="hidden md:flex gap-10 items-center">
            <div className="flex flex-col items-end">
                <span className="text-[8px] font-mono text-accent opacity-40">SYSTEM_STATUS</span>
                <span className="text-[10px] font-mono text-secondary font-black">ACTIVE_SCAN_26</span>
            </div>
            <div className="w-16 h-[2px] bg-secondary/10 relative overflow-hidden">
                <motion.div 
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                    className="absolute inset-0 bg-secondary"
                />
            </div>
        </div>
      </div>

      {/* Infinite Marquee Container */}
      <div 
        className="w-full flex"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div 
            className={`flex gap-4 md:gap-8 pr-4 md:pr-8 animate-marquee ${isPaused ? 'pause-marquee' : ''}`}
        >
          {duplicatedAssets.map((asset, i) => (
            <div 
                key={`${asset.id}-${i}`}
                className="relative w-[70vw] md:w-[400px] aspect-[4/5] md:aspect-[3.5/4.5] group overflow-hidden bg-white brutalist-card cursor-crosshair p-2 md:p-3"
            >
                <div className="w-full h-full overflow-hidden bg-[#F3F3F3]">
                    <img 
                        src={asset.image} 
                        alt={asset.title} 
                        className="w-full h-full object-cover mono-img"
                    />
                </div>
                
                {/* Meta Labels inside the card */}
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-primary/95 text-secondary text-[8px] font-mono font-black py-1 px-2 border border-secondary shadow-sm uppercase">
                        {asset.id} // SCANNING
                    </span>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all pointer-events-none translate-y-2 group-hover:translate-y-0">
                    <h3 className="text-white font-heading text-xl md:text-2xl tracking-tighter uppercase leading-none drop-shadow-lg">
                        {asset.title}
                    </h3>
                </div>

                {/* Industrial Grid Overlay (Subtle) */}
                <div className="absolute inset-0 pointer-events-none opacity-10 group-hover:opacity-20 transition-opacity bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] " />
            </div>
          ))}
        </div>
      </div>

      {/* Footer System Info */}
      <div className="container mx-auto px-6 md:px-12 mt-12 md:mt-20 flex justify-between items-center text-[9px] font-mono tracking-widest text-accent uppercase opacity-40">
        <div className="flex items-center gap-4">
            <span>[ SYSTEM_OK ]</span>
            <div className="w-2 h-2 rounded-full bg-secondary/20" />
            <span>GLOBAL_DIST_2026</span>
        </div>
        <div className="hidden md:block">
            <span>DRAG_L_SYNC_ACTIVE // SYST_OK</span>
        </div>
      </div>
    </section>
  );
};

export default IndustrialMotion;
