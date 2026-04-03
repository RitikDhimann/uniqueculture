import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Continuous Marquee Animation
      gsap.to(textRef.current, {
        x: "-50%",
        duration: 20,
        repeat: -1,
        ease: "none",
      });

      // Subtle scroll-parallax for the whole container if desired
      // But keeping it simple for the marquee first
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-20 md:py-40 bg-primary overflow-hidden relative border-t-2 border-secondary"
    >
      {/* Background Decor: Infinite Marquee */}
      <div className="absolute top-10 left-0 w-full opacity-5 md:opacity-10 pointer-events-none z-0">
        <div
          ref={textRef}
          className="flex whitespace-nowrap gap-10 md:gap-20"
          style={{ width: "fit-content" }}
        >
          <h2 className="text-[25vw] md:text-[18vw] font-heading leading-none select-none">Unique Culture</h2>
          <h2 className="text-[25vw] md:text-[18vw] font-heading leading-none select-none">Unique Culture</h2>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-20 items-start">
          {/* Left: Tactical Info */}
          <div className="w-full lg:w-1/3 space-y-8 md:space-y-12">
            <div className="space-y-4">
              <span className="text-[9px] md:text-[10px] font-mono tracking-[0.4em] text-accent font-bold uppercase">MISSION_STATEMENT — 01</span>
              <h2 className="text-4xl md:text-5xl lg:text-3xl font-heading tracking-tighter leading-none">CULTURE_AS_CODE</h2>
            </div>

            <div className="hidden md:block w-12 md:w-20 h-2 bg-secondary" />

            <div className="hidden md:block space-y-6 md:space-y-8 text-accent text-[10px] md:text-xs font-mono leading-relaxed uppercase tracking-widest">
              <p>
                Built on the intersection of industrial design and urban utility. Unique Culture is a framework for modern existence. We dont provide garments; we provide equipment.
              </p>
              <div className="p-4 md:p-6 border border-secondary/10 bg-secondary/5 brutalist-card">
                <p className="text-secondary font-black">
                  "THE INDUSTRY IS NOT A TREND. IT IS A PERMANENT STATE OF EVOLUTION."
                </p>
              </div>
            </div>
          </div>

          {/* Center: Vertical Divider */}
          <div className="hidden lg:block w-[1px] h-96 bg-secondary opacity-10 self-center" />

          {/* Right: Structural Philosophy */}
          <div className="hidden md:block w-full lg:w-1/2 space-y-12 md:space-y-16">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-3xl font-heading font-black leading-[0.9] tracking-tighter text-secondary"
            >
              WE ENGINEER ARTIFACTS <br className="hidden md:block" />
              FOR THE FEW WHO <br className="hidden md:block" />
              UNDERSTAND THE <br className="hidden md:block" />
              <span className="text-stroke-dark italic">PHYSICS OF STYLE.</span>
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-accent text-sm leading-relaxed tracking-wide font-sans">
              <p>
                Our process is reductive. We remove the superfluous until only the essential remain. Every seam, every textile, every silhouette is calculated to withstand the pressures of the modern metropolis.
              </p>
              <p>
                This is not fashion. This is architecture for the body. This is a study in monochrome resilience and technical precision. This is Unique .Culture.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="px-3 py-1.5 md:px-4 md:py-2 border-2 border-secondary text-secondary font-black text-[9px] md:text-[10px] tracking-widest uppercase hover:bg-secondary hover:text-primary transition-all cursor-pointer">
                  PHASE_00{i}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
