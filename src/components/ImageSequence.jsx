import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const images = [
  '/hero_light_streetwear_model_1774942614965.png',
  '/category_tshirts_light_image_1774942705348.png',
  '/product_shirt_light_mockup_1_1774942638964.png',
  '/product_hoodie_light_mockup_2_1774942672527.png',
];

const ImageSequence = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=300%',
        pin: true,
        scrub: 0.5,
        onUpdate: (self) => {
          const index = Math.floor(self.progress * (images.length - 1));
          setActiveIndex(index);
        },
      });

      // Text animations
      gsap.fromTo(
        '.seq-text',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center',
            end: 'bottom center',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen w-full bg-primary overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Images with cross-fade */}
        <div className="relative w-full h-full md:w-[60%] md:h-[80%] overflow-hidden bg-darkest">
          {images.map((src, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${i === activeIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                }`}
            >
              <img
                src={src}
                alt={`Sequence ${i}`}
                className="w-full h-full object-cover brightness-[0.98]"
              />
            </div>
          ))}
          <div className="absolute inset-0 border-[20px] border-primary z-10" />
        </div>
      </div>

      {/* Floating UI Elements */}
      <div className="absolute inset-0 flex items-center justify-between px-12 md:px-32 pointer-events-none z-20 text-secondary">
        <div className="seq-text max-w-xs">
          <p className="text-secondary/30 text-[10px] uppercase tracking-widest mb-4 font-bold">01 — The Craftsmanship</p>
          <h3 className="text-4xl md:text-6xl font-heading mb-6 tracking-tight font-bold">Technical Precision</h3>
          <p className="text-secondary/60 text-xs font-display leading-loose">
            Engineered for the modern urban envCulturement, our fabric blends heritage techniques with futuristic durability.
          </p>
        </div>

        <div className="seq-text text-right max-w-xs hidden md:block">
          <p className="text-secondary/30 text-[10px] uppercase tracking-widest mb-4 font-bold">02 — The Result</p>
          <h3 className="text-4xl md:text-6xl font-heading mb-6 tracking-tight font-bold">Pure Form</h3>
          <p className="text-secondary/60 text-xs font-display leading-loose">
            A silhouette that defines the era. Minimalist in appearance, maximalist in impact.
          </p>
        </div>
      </div>

      {/* Counter */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-12 z-20 text-secondary">
        <div className="flex gap-4">
          {images.map((_, i) => (
            <div
              key={i}
              className={`w-12 h-[2px] transition-all duration-500 ${i === activeIndex ? 'bg-secondary w-20' : 'bg-secondary/10'
                }`}
            />
          ))}
        </div>
        <span className="text-xs font-heading tracking-widest font-bold">0{activeIndex + 1} / 0{images.length}</span>
      </div>
    </section>
  );
};

export default ImageSequence;
