import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Filter, Grid, List } from 'lucide-react';

const products = [
    { id: '01', name: 'TACTICAL_SHELL_V1', price: '$240.00', category: 'OUTERWEAR', img: 'https://maggucultures.com/cdn/shop/files/CE92B932-DDCA-4A91-858A-49C3481DFFDE.png?v=1757007204&width=990' },
    { id: '02', name: 'INDUSTRIAL_CARGO_P09', price: '$180.00', category: 'BOTTOMS', img: 'https://maggucultures.com/cdn/shop/files/6.png?v=1727953813&width=493' },
    { id: '03', name: 'CORE_LAYERING_Tee', price: '$85.00', category: 'BASS_LAYER', img: 'https://maggucultures.com/cdn/shop/files/2_70a02982-07e8-4370-a12a-14ab936b2dd4.png?v=1772782742&width=493' },
    { id: '04', name: 'UNIFORM_HOODIE_H2', price: '$150.00', category: 'MID_LAYER', img: 'https://maggucultures.com/cdn/shop/files/6.png?v=1727953813&width=493' },
];

const NewArrivals = () => {
    return (
        <div className="min-h-screen bg-primary pt-32 pb-20 px-4 md:px-6">
            <div className="container mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6 md:gap-8">
                    <div className="space-y-4">
                        <span className="text-[10px] font-mono tracking-[0.4em] text-accent uppercase">LATEST_DROP — PHASE_04</span>
                        <h1 className="text-xl md:text-3xl font-heading leading-[0.8] tracking-widest">NEW_ARRIVALS</h1>
                    </div>
                    <div className="flex items-center gap-6 border-t border-secondary/10 pt-4 w-full md:w-auto">
                        <button className="flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase hover:opacity-100 opacity-60">
                            <Filter size={14} /> Filter
                        </button>
                        <div className="flex items-center gap-4 text-secondary">
                            <Grid size={16} />
                            <List size={16} className="opacity-20 transition-opacity hover:opacity-100" />
                        </div>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-8 gap-y-12 md:gap-y-20">
                    {products.map((product, i) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-[3/4] bg-secondary/5 overflow-hidden brutalist-card mb-4 md:mb-6">
                                <img 
                                    src={product.img} 
                                    alt={product.name} 
                                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                />
                                <div className="absolute top-2 left-2 md:top-4 md:left-4 font-heading text-2xl md:text-4xl text-secondary/10 group-hover:text-secondary/30 transition-colors">
                                    {product.id}
                                </div>
                                <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 bg-secondary text-primary px-2 py-1 text-[8px] md:text-[10px] font-mono tracking-widest uppercase">
                                    AVAILABLE
                                </div>
                                {/* Technical Overlay */}
                                <div className="absolute inset-0 bg-secondary/40 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />
                            </div>
                            
                            <div className="space-y-1 md:space-y-2">
                                <div className="flex flex-col justify-between items-start">
                                    <div className="w-full">
                                        <p className="text-[7px] md:text-[9px] font-mono tracking-[0.2em] text-accent uppercase mb-1">{product.category}</p>
                                        <div className="flex justify-between items-baseline gap-4 w-full">
                                            <h3 className="text-xs md:text-sm font-heading tracking-widest leading-tight group-hover:underline underline-offset-4 flex-1">{product.name}</h3>
                                            <span className="text-xs md:text-sm font-heading tracking-widest whitespace-nowrap">{product.price}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full h-[1px] bg-secondary/10 group-hover:bg-secondary/40 transition-colors" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-32 border-t-2 border-secondary pt-16 text-center">
                    <p className="text-[10px] font-mono tracking-[0.4em] text-accent uppercase mb-6">MORE_ARTIFACTS_PENDING</p>
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-secondary text-primary font-heading text-[10px] md:text-xs px-10 py-4 flex items-center gap-4 mx-auto group shadow-sm transition-all hover:shadow-xl"
                    >
                        VIEW_FULL_DATABASE
                        <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default NewArrivals;
