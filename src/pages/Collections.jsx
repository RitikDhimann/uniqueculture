import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Filter, ChevronRight, ShoppingBag } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { products } from '../data/productData';
import { useCart } from '../context/CartContext';

const Collections = () => {
    const [searchParams] = useSearchParams();
    const initialType = searchParams.get('type')?.toUpperCase() || 'ALL';
    
    const [selectedCategory, setSelectedCategory] = useState(initialType);
    const { addToCart } = useCart();

    // Sync state with URL params
    useEffect(() => {
        const type = searchParams.get('type')?.toUpperCase();
        if (type) {
            setSelectedCategory(type);
        }
    }, [searchParams]);

    const categories = ['ALL', 'MEN', 'WOMEN', 'HOODIES', 'TEES', 'OUTERWEAR', 'FOOTWEAR'];

    const filteredProducts = useMemo(() => {
        if (selectedCategory === 'ALL') return products;
        
        // Filter by Gender
        if (selectedCategory === 'MEN' || selectedCategory === 'WOMEN') {
            return products.filter(p => p.gender === selectedCategory || p.gender === 'UNISEX');
        }
        
        // Filter by Category
        return products.filter(p => p.category.toUpperCase() === selectedCategory);
    }, [selectedCategory]);

    const handleQuickAdd = (e, product) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(product, 1, 'M'); // Default size M for quick add
    };

    return (
        <div className="min-h-screen bg-primary pt-32 pb-20 px-4 md:px-6">
            <div className="container mx-auto">
                {/* Header Section */}
                <div className="mb-12 md:mb-20 flex flex-col md:flex-row justify-between items-end gap-6 border-b-2 border-secondary pb-10">
                    <div className="space-y-4">
                        <span className="text-[10px] font-mono tracking-[0.4em] text-accent uppercase">SYSTEM_INDEX // ARCHITECTURE</span>
                        <h1 className="text-3xl md:text-5xl font-heading tracking-widest text-secondary leading-none uppercase">COLLECTIONS</h1>
                    </div>
                    <div className="w-full md:w-1/3">
                        <p className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-accent leading-relaxed">
                            A systematic catalog of Unique .Culture artifacts. Each piece is an engineered element of our modern existence framework.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                    {/* Sidebar / Mobile Category Bar */}
                    <aside className="w-full lg:w-64 shrink-0">
                        <div className="sticky top-32">
                            <div className="flex items-center gap-3 mb-8 opacity-40">
                                <Filter size={14} />
                                <span className="text-[10px] font-mono tracking-[0.4em] uppercase">Refine_By_Phase</span>
                            </div>
                            
                            {/* Desktop: Vertical List | Mobile: Horizontal Scroll */}
                            <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 gap-4 lg:gap-8 scrollbar-hide no-scrollbar">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`group relative flex items-center justify-between whitespace-nowrap lg:whitespace-normal transition-all duration-300 ${
                                            selectedCategory === cat 
                                            ? 'text-secondary' 
                                            : 'text-accent opacity-40 hover:opacity-100'
                                        }`}
                                    >
                                        <span className="text-[11px] md:text-xs font-heading font-bold tracking-[0.4em] uppercase py-2">
                                            {cat.replace('_', ' ')}
                                        </span>
                                        <div className={`hidden lg:block w-8 h-[1px] bg-secondary transition-all duration-500 scale-x-0 origin-right group-hover:scale-x-100 ${
                                            selectedCategory === cat ? 'scale-x-100' : ''
                                        }`} />
                                    </button>
                                ))}
                            </div>

                            <div className="hidden lg:block mt-20 pt-10 border-t border-secondary/10 space-y-4">
                                <span className="text-[9px] font-mono tracking-[0.4em] text-accent uppercase block">TECHNICAL_ADVISORY</span>
                                <p className="text-[9px] font-sans text-accent leading-relaxed tracking-wide">
                                    All artifacts in the system are produced under high-tenacity production protocols. Quality confirmed.
                                </p>
                            </div>
                        </div>
                    </aside>

                    {/* Product Grid Container */}
                    <main className="flex-1">
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={selectedCategory}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className="grid grid-cols-2 xl:grid-cols-3 gap-x-4 md:gap-x-8 gap-y-12 md:gap-y-20"
                            >
                                {filteredProducts.map((product, i) => (
                                    <Link 
                                        to={`/product/${product.id}`} 
                                        key={product.id}
                                        className="group cursor-pointer flex flex-col brutalist-card p-3 bg-white"
                                    >
                                        <div className="relative aspect-[3/4] bg-[#F3F3F3] overflow-hidden mb-4 md:mb-6">
                                            <img 
                                                src={product.image} 
                                                alt={product.name} 
                                                className="w-full h-full object-cover mono-img"
                                            />
                                            {/* Corner Phase Indicator */}
                                            <div className="absolute top-0 right-0 p-2 md:p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <div className="p-2 border border-secondary/10 bg-primary/20 backdrop-blur-sm rounded-full">
                                                    <ArrowRight size={14} className="-rotate-45" />
                                                </div>
                                            </div>
                                            {/* Quick Add Overlay */}
                                            <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/5 transition-all">
                                                <button 
                                                    onClick={(e) => handleQuickAdd(e, product)}
                                                    className="absolute bottom-4 left-4 right-4 bg-primary text-secondary py-3 text-[9px] font-mono tracking-[0.3em] uppercase opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 font-bold border border-secondary/10 backdrop-blur-md z-10"
                                                >
                                                    QUICK_ADD_ST_26
                                                </button>
                                            </div>
                                        </div>
                                        
                                        <div className="space-y-1 px-1">
                                            <p className="text-[7px] md:text-[8px] font-mono tracking-[0.2em] text-accent uppercase">{product.category}</p>
                                            <div className="flex justify-between items-baseline gap-2">
                                                <h3 className="text-xs md:text-sm font-heading tracking-widest text-secondary flex-1">
                                                    {product.name}
                                                </h3>
                                                <span className="text-xs md:text-sm font-heading tracking-widest text-secondary/60 whitespace-nowrap">{product.price}</span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </motion.div>
                        </AnimatePresence>

                        {/* Empty System State */}
                        {filteredProducts.length === 0 && (
                            <div className="h-[50vh] flex flex-col items-center justify-center text-center space-y-6">
                                <span className="text-accent font-mono text-[10px] tracking-[0.5em] uppercase">SYSTEM_ERROR // NO_ARTIFACTS_FOUND</span>
                                <h2 className="text-2xl font-heading text-secondary opacity-20">DATA_REDUNDANT</h2>
                                <button onClick={() => setSelectedCategory('ALL')} className="text-[9px] font-mono tracking-widest uppercase underline underline-offset-4 hover:text-accent">Reset_System</button>
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Collections;
