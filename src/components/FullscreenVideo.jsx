import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const FullscreenVideo = () => {
  const [showBadge, setShowBadge] = useState(true);

  return (
    <section className="relative w-full h-[140vh] overflow-hidden bg-black z-50">
      {/* Background Video (HTML5 Video for direct .mp4 support) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-80">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          src="https://cdn.shopify.com/videos/c/o/v/7241488ea57b4ad89468b76361a4a64f.mp4"
        />
      </div>

      {/* Optional Brand Text / Overlay */}


      {/* 10% Off Badge (Matches Reference Image) */}
      <AnimatePresence>
        {showBadge && (
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="absolute bottom-10 left-10 z-[60]"
          >
            <div className="bg-white text-black px-6 py-3 rounded-md flex items-center gap-3 shadow-2xl border border-white/20">
              <span className="text-sm font-bold tracking-tight">10% off</span>
              <button
                onClick={() => setShowBadge(false)}
                className="hover:rotate-90 transition-transform duration-300"
              >
                <X size={16} strokeWidth={3} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="w-[1px] h-12 bg-white animate-pulse" />
      </div>
    </section>
  );
};

export default FullscreenVideo;
