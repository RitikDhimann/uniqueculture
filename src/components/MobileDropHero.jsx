import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import mobileHeroImg from '../assets/hero-bg-mobile.png';

const MobileDropHero = () => {
  const [showOffer, setShowOffer] = useState(true);

  return (
    <section className="relative w-full h-[150vh] bg-black overflow-x-hidden md:hidden">
      {/* Fixed Background Image */}
      <div className="fixed inset-0 w-full h-screen z-0 pointer-events-none">
        <img
          src={mobileHeroImg}
          alt="Drop Model"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      </div>

      {/* Scrolling Content Overlay */}
      <div className="relative z-10 w-full h-full flex flex-col items-center pt-[60vh] pb-20 px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          {/* Main Title */}
          <h1 className="text-5xl font-heading font-black tracking-tighter !text-white leading-none filter drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            STANDARDS <br />
            DROP <br />
            LIVE NOW
          </h1>

          {/* Action Button */}
          <div className="pt-8">
            <Link to="/new-arrivals">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-6 py-2 bg-transparent border-2 border-red-500 text-white font-heading text-lg tracking-widest overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.6)]"
              >
                <span className="relative z-10">SHOP NOW</span>
                <div className="absolute inset-0 bg-red-600/10 group-hover:bg-red-600/20 transition-colors" />
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-red-500 opacity-20 blur-xl group-hover:opacity-40 transition-opacity" />
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Brand/Drop Meta Info */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-32 flex flex-col items-center gap-2 text-white/40 font-mono text-[10px] tracking-[0.3em] uppercase"
        >
          <span>ARCHIVE_REF_001</span>
          <span>SEASON_26_SPRING</span>
          <div className="w-[1px] h-20 bg-white/20 mt-4" />
        </motion.div>
      </div>

      {/* 10% Off Floating Badge (Sticky/Fixed) */}
      {showOffer && (
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="fixed bottom-10 left-6 z-50 flex items-center bg-white text-black px-4 py-3 rounded-xl shadow-2xl space-x-3"
        >
          <span className="font-bold text-sm tracking-tight whitespace-nowrap">10% off</span>
          <button 
            onClick={() => setShowOffer(false)}
            className="p-1 hover:bg-black/10 rounded-full transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </motion.div>
      )}

      {/* Floating Indicators */}
      <div className="fixed top-1/2 right-4 z-20 flex flex-col gap-4 -translate-y-1/2 opacity-30">
        {[1, 2, 3].map(i => (
          <div key={i} className={`w-1 h-1 rounded-full ${i === 1 ? 'bg-red-500 h-4' : 'bg-white'}`} />
        ))}
      </div>
    </section>
  );
};

export default MobileDropHero;
