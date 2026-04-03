import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ArrowLeft, Plus, Minus, Share2, Info } from 'lucide-react';
import { products } from '../data/productData';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState('M');

    useEffect(() => {
        const foundProduct = products.find(p => p.id === parseInt(id));
        if (foundProduct) {
            setProduct(foundProduct);
        }
    }, [id]);

    if (!product) {
        return (
            <div className="h-screen w-full flex items-center justify-center bg-primary text-secondary font-mono">
                LOADING_PRODUCT_DATA...
            </div>
        );
    }

    const sizes = ['S', 'M', 'L', 'XL'];

    return (
        <div className="min-h-screen bg-primary pt-24 pb-20 px-6 md:px-12 selection:bg-secondary selection:text-primary">
            {/* Back Navigation */}
            <button 
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-accent hover:text-secondary transition-colors mb-12"
            >
                <ArrowLeft size={14} /> RETURN_TO_COLLECTION
            </button>

            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                
                {/* Left: Product Image Container */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative group bg-secondary/5 border border-secondary/10 overflow-hidden"
                >
                    <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    {/* Floating Label */}
                    <div className="absolute top-6 left-6 z-10 text-[9px] font-mono tracking-widest text-secondary font-black bg-primary/80 px-3 py-1 border border-secondary/20">
                        REF_ID_{product.id} // MAGGU_ST_26
                    </div>
                </motion.div>

                {/* Right: Product Details Info */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="flex flex-col"
                >
                    <div className="space-y-6 pb-12 border-b border-secondary/10">
                        <div className="space-y-2">
                             <span className="text-[10px] font-mono tracking-[0.4em] text-accent font-bold uppercase">
                                {product.category} — MAGGU_IDENTITY
                             </span>
                             <h1 className="text-5xl md:text-7xl font-heading font-black tracking-tighter text-secondary leading-none">
                                {product.name.toUpperCase()}
                             </h1>
                        </div>
                        
                        <p className="text-2xl font-mono tracking-tighter text-secondary">
                            {product.price}
                        </p>
                        
                        <p className="text-accent text-sm leading-relaxed max-w-md">
                            {product.description}
                        </p>
                    </div>

                    {/* Size Selection */}
                    <div className="py-12 border-b border-secondary/10 space-y-6">
                        <div className="flex justify-between items-center">
                            <span className="text-[10px] font-mono tracking-widest text-accent uppercase font-bold">SELECT_SIZE</span>
                            <button className="text-[10px] font-mono tracking-widest text-secondary border-b border-secondary/20 flex items-center gap-1">
                                <Info size={12} /> SIZE_GUIDE
                            </button>
                        </div>
                        <div className="flex gap-4">
                            {sizes.map(size => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`w-14 h-14 border-2 flex items-center justify-center font-mono text-sm transition-all ${
                                        selectedSize === size 
                                        ? 'bg-secondary text-primary border-secondary' 
                                        : 'border-secondary/10 text-secondary hover:border-secondary transition-colors'
                                    }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Technical Specs */}
                    <div className="py-12 border-b border-secondary/10 space-y-6">
                        <span className="text-[10px] font-mono tracking-widest text-accent uppercase font-bold">TECHNICAL_SPECIFICATIONS</span>
                        <div className="grid grid-cols-2 gap-y-4">
                            {product.specs.map((spec, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 bg-secondary/20" />
                                    <span className="text-[10px] font-mono text-secondary tracking-widest">{spec}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Purchase Controls */}
                    <div className="pt-12 flex flex-col sm:flex-row gap-6">
                        <div className="flex items-center border-2 border-secondary/10 px-4 h-16">
                            <button 
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                className="p-2 hover:text-accent transition-colors"
                            >
                                <Minus size={18} />
                            </button>
                            <span className="w-12 text-center font-mono text-lg">{quantity}</span>
                            <button 
                                onClick={() => setQuantity(quantity + 1)}
                                className="p-2 hover:text-accent transition-colors"
                            >
                                <Plus size={18} />
                            </button>
                        </div>
                        
                        <button className="flex-1 bg-secondary text-primary font-heading font-black text-xl tracking-tighter flex items-center justify-center gap-3 hover:bg-secondary/90 transition-all h-16">
                            <ShoppingBag size={20} /> ADD_TO_CART_ST_26
                        </button>
                    </div>

                    {/* Meta Footer */}
                    <div className="mt-16 flex items-center gap-8 text-[8px] font-mono text-accent tracking-[0.2em] uppercase">
                        <button className="hover:text-secondary flex items-center gap-2"><Share2 size={10} /> SHARE_DISTRIBUTION</button>
                        <span>© 2026 UNIQUE_CULTURE_FRAMEWORK</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ProductDetail;
