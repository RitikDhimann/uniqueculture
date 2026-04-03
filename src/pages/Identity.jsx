import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const Identity = () => {
    const marqueeRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(marqueeRef.current, {
                x: "-50%",
                duration: 30,
                repeat: -1,
                ease: "none",
            });
        });
        return () => ctx.revert();
    }, []);

    const pillars = [
        { title: 'MINIMALISM', code: 'PROT_01', desc: 'Removing the superfluous to reveal the essential architecture of form.' },
        { title: 'DURABILITY', code: 'PROT_02', desc: 'Engineering garments to withstand the pressures of urban existence.' },
        { title: 'ADAPTATION', code: 'PROT_03', desc: 'Modular systems that evolve with the user envCulturement.' },
    ];

    return (
        <div className="min-h-screen bg-primary pt-32 overflow-hidden">
            {/* Infinite Marquee bg */}
            <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 opacity-[0.03] pointer-events-none select-none z-0">
                <div ref={marqueeRef} className="flex whitespace-nowrap gap-20">
                    <h2 className="text-[40vw] md:text-[30vw] font-heading leading-none">Unique.Culture</h2>
                    <h2 className="text-[40vw] md:text-[30vw] font-heading leading-none">Unique.Culture</h2>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Hero section */}
                <div className="max-w-4xl mb-24 md:mb-40">
                    <span className="text-[10px] font-mono tracking-[0.6em] text-accent font-bold uppercase mb-6 md:mb-8 block underline underline-offset-8">MANIFESTO // IDENTITY_V2</span>
                    <h1 className="text-6xl md:text-[10rem] font-heading leading-[0.8] tracking-tighter mb-8 md:mb-12">
                        CULTURE<br /><span className="text-stroke-dark">AS_CODE</span>
                    </h1>
                    <p className="text-lg md:text-2xl font-mono uppercase tracking-widest text-secondary leading-relaxed border-l-4 border-secondary pl-6 md:pl-8">
                        Unique .Culture is not a fashion label. It is a framework for modern existence. We engineer artifacts for the few who understand the physics of style and the geometry of utility.
                    </p>
                </div>

                {/* Pillars grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-24 md:mb-40">
                    {pillars.map((pillar, i) => (
                        <motion.div
                            key={pillar.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="p-6 md:p-8 border border-secondary/10 hover:border-secondary transition-colors brutalist-card bg-primary/80 backdrop-blur-sm"
                        >
                            <span className="text-[10px] font-mono text-accent block mb-4">{pillar.code}</span>
                            <h3 className="text-3xl md:text-4xl font-heading mb-6">{pillar.title}</h3>
                            <div className="w-12 h-1 bg-secondary mb-6" />
                            <p className="text-[11px] md:text-xs font-mono uppercase tracking-widest leading-loose text-accent">
                                {pillar.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Technical diagram section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center mb-24 md:mb-40">
                    <div className="space-y-8 md:space-y-12">
                        <h2 className="text-4xl md:text-6xl font-heading leading-none tracking-tighter">ANATOMY_OF_AN_ARTIFACT</h2>
                        <div className="space-y-6 md:space-y-8">
                            {[
                                { t: 'REINFORCED_STITCHING', d: 'High-tenacity nylon thread for structural integrity.' },
                                { t: 'MODULAR_ATTACHMENTS', d: 'MOLLE-compatible systems for hardware expansion.' },
                                { t: 'ERGONOMIC_TAILORING', d: 'Laser-cut silhouettes for maximum mobility.' }
                            ].map((spec, i) => (
                                <div key={i} className="flex gap-4 md:gap-6 items-start border-b border-secondary/5 pb-6 md:pb-8">
                                    <span className="text-xl md:text-2xl font-heading text-secondary/20">0{i + 1}</span>
                                    <div className="space-y-2">
                                        <h4 className="text-lg md:text-xl font-heading tracking-tight">{spec.t}</h4>
                                        <p className="text-[9px] md:text-[10px] font-mono uppercase tracking-[0.2em] text-accent">{spec.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <motion.div
                            initial={{ rotate: -5, scale: 0.9 }}
                            whileInView={{ rotate: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="aspect-square bg-secondary/5 brutalist-card overflow-hidden flex items-center justify-center p-8 md:p-12"
                        >
                            {/* Abstract wireframe diagram */}
                            <div className="w-full h-full border-2 border-secondary/20 relative flex items-center justify-center">
                                <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-10">
                                    {Array.from({ length: 36 }).map((_, i) => <div key={i} className="border border-secondary/20" />)}
                                </div>
                                <div className="z-10 text-center space-y-4">
                                    <div className="w-16 h-16 md:w-24 md:h-24 border-2 border-secondary mx-auto animate-spin-slow" />
                                    <span className="text-[9px] md:text-[10px] font-mono tracking-widest text-secondary block">STRUCTURAL_SCAN_V4.0</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Final Quote */}
                <div className="py-24 md:py-40 text-center border-t-2 border-secondary">
                    <p className="text-[10px] font-mono tracking-[0.5em] text-accent uppercase mb-8 md:mb-12">JOIN_THE_Unique</p>
                    <h2 className="text-5xl md:text-8xl font-heading leading-tight tracking-tighter max-w-5xl mx-auto">
                        TRUTH_IS_MEASURED <br />
                        IN <span className="text-stroke-dark italic">RESILIENCE.</span>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Identity;
