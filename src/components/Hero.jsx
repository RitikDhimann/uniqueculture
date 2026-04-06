import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

import mobileHeroGirlImg from '../assets/hero-bg-mobile.png';
import desktopHeroGirlImg from '../assets/hero-bg-girl-desktop.png';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const heroRef = useRef(null);
    const leftRef = useRef(null);
    const rightRef = useRef(null);
    const mobileBottomRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Deskstop Pinning
            if (window.innerWidth >= 768) {
                ScrollTrigger.create({
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    pin: rightRef.current,
                    scrub: true,
                });

                gsap.to(leftRef.current, {
                    y: "-50%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: heroRef.current,
                        start: "top top",
                        end: "+=200%",
                        scrub: true,
                    },
                });
            } else {
                // Mobile Reveal (Pins the section while zooming)
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: heroRef.current,
                        start: "top top",
                        end: "+=100%", // Controlled duration for "web continues"
                        pin: true,
                        scrub: true,
                        anticipatePin: 1,
                    }
                });

                // Zoom into the top image to reveal the bottom one
                tl.to(".mobile-reveal-top", {
                    scale: 6,
                    duration: 1,
                    ease: "power2.inOut"
                });

                // Hide the top image at the end of zoom to ensure cleanly seeing the bottom one
                tl.set(".mobile-reveal-top", { display: "none" });
            }
        }, heroRef);

        return () => ctx.revert();
    }, []);

    const gridImages = [
        desktopHeroGirlImg,
        "https://image.hm.com/assets/hm/a3/21/a321819091904bf9e79be222d8395ad21d6aeb18.jpg?imwidth=820",
        'https://maggucultures.com/cdn/shop/files/Untitleddesign-9.png?v=1766118455&width=990',
        'https://image.hm.com/content/dam/ind-local-assets/IN_Ws23i_Teaser_2x3.jpg?imwidth=1024',
    ];

    return (
        <section
            ref={heroRef}
            className="relative h-screen md:h-[330vh] w-full flex flex-col md:flex-row bg-primary overflow-hidden"
        >
            {/* Mobile Reveal View - NO TEXT, NO OPACITY */}
            <div className="md:hidden relative w-full h-full flex items-center justify-center overflow-hidden">
                {/* Bottom Image (Revealed) */}
                <div className="absolute inset-0 z-0 ">
                    <img
                        src={gridImages[1]}
                        alt="Mobile Reveal Bottom"
                        className="w-full h-full mt-20"
                        style={{ opacity: 1 }}
                    />
                </div>

                {/* Top Image (Zooms out) */}
                <div className="mobile-reveal-top absolute inset-0 z-10 origin-[50%_25%]">
                    <img
                        src={gridImages[0]}
                        alt="Mobile Reveal Top"
                        className="w-full h-full mt-16"
                        style={{ opacity: 1 }}
                    />
                </div>
            </div>

            {/* Desktop Left Side: Image Grid */}
            <div
                ref={leftRef}
                className="hidden md:grid w-1/2 p-20 grid grid-cols-1 gap-20 relative z-10"
            >
                {gridImages.map((src, i) => (
                    <motion.div
                        key={i}
                        className="grid-item relative group shadow-3d-layer"
                    >
                        <div className="overflow-hidden bg-secondary/5 border-2 border-secondary/10">
                            <img
                                src={src}
                                alt={`Model ${i}`}
                                className="w-full h-auto mono-img grayscale hover:grayscale-0 transition-all duration-700 aspect-[3/4] "
                            />
                        </div>
                        <div className="mt-4 flex justify-between items-center text-[10px] font-mono tracking-widest text-accent uppercase">
                            <span>IMG_REF_00{i + 1}</span>
                            <span>2026_SEASON_01</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Desktop Vertical Divider */}
            <div className="hidden md:block fixed left-1/2 top-0 h-screen z-20" />

            {/* Desktop Right Side: Bold Typography */}
            <div
                ref={rightRef}
                className="hidden md:flex w-1/2 h-screen flex-col justify-center px-10 mt-10 lg:px-20 relative z-10"
            >
                <div className="relative">
                    <motion.p
                        initial={{ opacity: 1 }}
                        className="text-accent text-[11px] uppercase tracking-[0.5em] mb-4 font-bold"
                    >
                        ESTABLISHED .2026
                    </motion.p>

                    <h1 className="text-[12vw] leading-[0.8] font-heading font-black tracking-tighter text-secondary mb-10">
                        <span className="block">Unique</span>
                        <span className="block text-stroke-dark">.Culture</span>
                    </h1>

                    <div className="flex gap-10 mt-12 items-start max-w-md">
                        <div className="w-10 h-[1px] bg-secondary mt-3 shrink-0" />
                        <p className="text-accent text-xs font-sans leading-relaxed tracking-wide">
                            Technical precision meets modern brutalism. A study in monochrome architecture and streetwear culture. Engineered for the few who define the industry.
                        </p>
                    </div>

                    <div className="mt-20">
                        <Link to="/archive">
                            <button className="group relative px-12 py-5 bg-secondary text-primary overflow-hidden font-black text-xs uppercase tracking-[0.3em] transition-all border-2 border-secondary hover:bg-transparent hover:text-secondary">
                                ENTERING_ARCHIVE
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="absolute bottom-20 right-20 text-[10px] font-mono tracking-widest text-accent flex flex-col items-end gap-2">
                    <span>LAT: 52.520038</span>
                    <span>LNG: 13.404954</span>
                    <span className="mt-4 text-secondary font-bold">MONO_VERSION_1.0</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
