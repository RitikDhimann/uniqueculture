import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const collections = [
    {
        id: 'C1',
        title: 'CORE_ESSENTIALS',
        phase: 'PHASE_01',
        desc: 'The foundational layer of the Culture Unique ecosystem. Minimalist silhouettes optimized for daily utility.',
        img: 'https://maggucultures.com/cdn/shop/files/CE92B932-DDCA-4A91-858A-49C3481DFFDE.png?v=1757007204&width=990',
        color: 'bg-secondary/5'
    },
    {
        id: 'C2',
        title: 'INDUSTRIAL_MODULAR',
        phase: 'PHASE_02',
        desc: 'Technical outerwear featuring multi-pocket configurations and weatherproof membrane technology.',
        img: 'https://maggucultures.com/cdn/shop/files/6.png?v=1727953813&width=493',
        color: 'bg-secondary/10'
    },
    {
        id: 'C3',
        title: 'URBAN_UTILITY',
        phase: 'PHASE_03',
        desc: 'Adaptable gear designed for high-mobility metropolitan envCulturements. High-tenacity textiles and ergonomic tailoring.',
        img: 'https://maggucultures.com/cdn/shop/files/2_70a02982-07e8-4370-a12a-14ab936b2dd4.png?v=1772782742&width=493',
        color: 'bg-secondary/5'
    }
];

const Collections = () => {
    return (
        <div className="min-h-screen bg-primary pt-32 pb-20">
            <div className="container mx-auto px-4 md:px-6">
                {/* Intro */}
                <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12 border-b-2 border-secondary pb-12 md:pb-16">
                    <div className="max-w-3xl">
                        <span className="text-[10px] font-mono tracking-[0.4em] text-accent uppercase mb-4 block">ARCHITECTURE — SYSTEM_INDEX</span>
                        <h1 className="text-6xl md:text-9xl font-heading leading-tight md:leading-none tracking-tighter mb-4 md:mb-8">COLLECTIONS</h1>
                    </div>
                    <div className="w-full md:w-1/3 pt-4 md:pt-12">
                        <p className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-accent leading-relaxed">
                            A systematic catalog of Unique .Culture artifacts. Each collection represents a specific phase in our evolution of technical precision and urban adaptation.
                        </p>
                    </div>
                </div>

                {/* Collection Chapters */}
                <div className="space-y-24 md:space-y-40">
                    {collections.map((coll, i) => (
                        <div key={coll.id} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 md:gap-12 lg:gap-24 items-center`}>
                            {/* Visual Side */}
                            <div className="w-full lg:w-1/2 relative group">
                                <motion.div
                                    initial={{ scale: 0.95, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                    className={`relative aspect-square md:aspect-video lg:aspect-square overflow-hidden brutalist-card ${coll.color}`}
                                >
                                    <img
                                        src={coll.img}
                                        alt={coll.title}
                                        className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                                    />
                                    {/* Abstract Overlay */}
                                    <div className="absolute inset-0 border-[10px] md:border-[20px] border-primary/20 pointer-events-none group-hover:border-primary/5 transition-all duration-700" />
                                </motion.div>
                                <div className="absolute -bottom-4 -right-4 md:bottom-12 md:right-12 z-20">
                                    <motion.div
                                        whileHover={{ rotate: 45, scale: 1.1 }}
                                        className="w-16 h-16 md:w-24 md:h-24 bg-secondary flex items-center justify-center text-primary cursor-pointer shadow-2xl transition-transform"
                                    >
                                        <ArrowUpRight size={30} md:size={40} />
                                    </motion.div>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
                                <div className="space-y-2 md:space-y-4">
                                    <div className="flex items-center gap-4">
                                        <span className="text-3xl md:text-4xl font-heading text-secondary/30">{coll.id}</span>
                                        <span className="w-8 md:w-12 h-[2px] bg-secondary/10" />
                                        <span className="text-[8px] md:text-[10px] font-mono tracking-[0.4em] text-accent uppercase font-bold">{coll.phase}</span>
                                    </div>
                                    <h2 className="text-5xl md:text-7xl font-heading leading-none tracking-tighter">{coll.title}</h2>
                                </div>
                                <p className="text-sm md:text-base font-mono uppercase tracking-widest text-accent leading-relaxed max-w-lg">
                                    {coll.desc}
                                </p>
                                <div className="pt-4 md:pt-8 flex flex-wrap gap-3 md:gap-4">
                                    {['OUTERWEAR', 'ACCESSORIES', 'FOOTWEAR'].map(tag => (
                                        <span key={tag} className="px-3 py-1 md:px-4 md:py-1.5 border border-secondary/10 text-[8px] md:text-[10px] font-mono tracking-widest uppercase hover:bg-secondary hover:text-primary transition-colors cursor-pointer">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <motion.button
                                    whileHover={{ x: 10 }}
                                    className="pt-8 md:pt-12 text-xl md:text-2xl font-heading underline underline-offset-8 hover:text-accent transition-all flex items-center gap-4"
                                >
                                    EXPLORE_COLLECTION
                                    <ArrowUpRight size={20} md:size={24} />
                                </motion.button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Collections;
