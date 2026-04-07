import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ArrowLeft, Trash2, Plus, Minus, CreditCard } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, cartSubtotal, cartCount } = useCart();
    const navigate = useNavigate();

    const shipping = cartCount > 0 ? 15.00 : 0;
    const total = cartSubtotal + shipping;

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen bg-primary flex flex-col items-center justify-center pt-20 px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center space-y-8"
                >
                    <div className="relative inline-block">
                        <ShoppingBag size={80} className="text-secondary opacity-10" />
                        <motion.div 
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="absolute -top-2 -right-2 w-6 h-6 bg-accent"
                        />
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tighter text-secondary uppercase">
                            Your_Cart_Is_Empty
                        </h1>
                        <p className="text-accent font-mono text-[10px] tracking-[0.3em] uppercase">
                            NO_ITEMS_DETECTED_IN_SYSTEM_STORAGE
                        </p>
                    </div>
                    <Link 
                        to="/new-arrivals"
                        className="inline-flex items-center gap-4 bg-secondary text-white px-8 py-4 font-heading text-xs tracking-widest hover:bg-secondary/90 transition-all group uppercase"
                    >
                        <span className="text-white">RETURN_TO_DISTRIBUTION</span> <ArrowLeft size={16} className="rotate-180 group-hover:translate-x-2 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-primary pt-32 pb-20 px-6 md:px-12 selection:bg-secondary selection:text-primary">
            <div className="max-w-[1400px] mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="space-y-2">
                        <span className="text-[10px] font-mono tracking-[0.5em] text-accent font-bold uppercase block mb-2">SHOPPING_CART_OVERVIEW</span>
                        <h1 className="text-xl md:text-2xl font-heading tracking-widest text-secondary leading-none uppercase">
                            Selected<span className="text-stroke-dark">_Items</span>
                        </h1>
                    </div>
                    <div className="text-right">
                        <span className="text-[10px] font-mono tracking-widest text-accent uppercase block">BATCH_COUNT</span>
                        <span className="text-4xl font-heading font-black text-secondary">{cartCount.toString().padStart(2, '0')}</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Cart Items List */}
                    <div className="lg:col-span-8 space-y-8">
                        <AnimatePresence mode='popLayout'>
                            {cartItems.map((item) => (
                                <motion.div 
                                    key={`${item.id}-${item.size}`}
                                    layout
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    className="flex flex-col sm:flex-row gap-8 pb-8 border-b border-secondary/10 group"
                                >
                                    {/* Product Image */}
                                    <div className="w-full sm:w-48 aspect-square bg-secondary/5 border border-secondary/10 overflow-hidden shrink-0">
                                        <img 
                                            src={item.image} 
                                            alt={item.name} 
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>

                                    {/* Product Details */}
                                    <div className="flex-1 flex flex-col justify-between py-2">
                                        <div className="space-y-4">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <span className="text-[9px] font-mono tracking-widest text-accent uppercase mb-1 block">{item.category}</span>
                                                    <h3 className="text-lg md:text-xl font-heading tracking-widest text-secondary uppercase hover:text-accent transition-colors">
                                                        <Link to={`/product/${item.id}`}>{item.name}</Link>
                                                    </h3>
                                                </div>
                                                <button 
                                                    onClick={() => removeFromCart(item.id, item.size)}
                                                    className="p-2 text-accent hover:text-red-500 transition-colors"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                            <div className="flex gap-4 items-center">
                                                <div className="px-3 py-1 border border-secondary/20 text-[10px] font-mono text-secondary">
                                                    SIZE_{item.size}
                                                </div>
                                                <div className="text-lg font-mono text-secondary">
                                                    {item.price}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between mt-8">
                                            <div className="flex items-center border border-secondary/10 px-2 h-10 bg-white/30">
                                                <button 
                                                    onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                                                    className="p-1 text-secondary hover:text-accent transition-colors"
                                                >
                                                    <Minus size={14} />
                                                </button>
                                                <span className="w-10 text-center font-mono text-sm text-secondary font-bold">{item.quantity}</span>
                                                <button 
                                                    onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                                                    className="p-1 text-secondary hover:text-accent transition-colors"
                                                >
                                                    <Plus size={14} />
                                                </button>
                                            </div>
                                            <div className="text-lg font-heading text-secondary">
                                                ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-4">
                        <div className="bg-secondary/5 border border-secondary/10 p-8 sticky top-32 space-y-8">
                            <div className="space-y-4 pb-8 border-b border-secondary/10">
                                <h2 className="text-2xl font-heading font-black tracking-tighter text-secondary uppercase">Order_Summary</h2>
                                <div className="space-y-2 text-[10px] font-mono tracking-widest text-accent uppercase">
                                    <p>SYSTEM_CHECK_COMPLETE</p>
                                    <p>READY_FOR_DISTRIBUTION</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex justify-between font-mono text-sm">
                                    <span className="text-accent">SUBTOTAL</span>
                                    <span className="text-secondary">${cartSubtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between font-mono text-sm">
                                    <span className="text-accent">SHIPPING_FEE</span>
                                    <span className="text-secondary">${shipping.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between font-mono text-sm">
                                    <span className="text-accent">ESTIMATED_TAXES</span>
                                    <span className="text-secondary">$0.00</span>
                                </div>
                                <div className="pt-4 border-t border-secondary/10 flex justify-between items-end">
                                    <span className="text-[10px] font-mono tracking-widest text-accent uppercase font-bold">TOTAL_SECURED_VALUE</span>
                                    <span className="text-4xl font-heading font-black text-secondary leading-none">${total.toFixed(2)}</span>
                                </div>
                            </div>

                            <button className="w-full bg-secondary text-white font-heading text-xs md:text-sm tracking-widest flex items-center justify-center gap-3 hover:bg-accent transition-all h-14 uppercase group">
                                <CreditCard size={18} className="group-hover:scale-110 transition-transform text-white" /> 
                                <span className="text-white">INITIATE_CHECKOUT</span>
                            </button>

                            <div className="pt-4">
                                <p className="text-[8px] font-mono text-accent text-center tracking-[0.2em] uppercase leading-relaxed">
                                    SECURE_PROTOCOL_ACTIVE // ENCRYPTED_TRANSACTION_SYSTEM
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
