import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="min-h-screen flex items-center justify-center p-6 relative pt-32 pb-20 bg-primary">
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-lg bg-white brutalist-card p-8 md:p-12 relative z-10"
            >
                <div className="mb-12 text-center space-y-2">
                    <h1 className="text-2xl md:text-3xl font-heading tracking-[0.5em] text-secondary uppercase">Register</h1>
                    <p className="text-[9px] font-mono tracking-[0.3em] text-accent uppercase font-black">Create a new account</p>
                </div>

                <form className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-1">
                            <label className="text-[9px] font-mono tracking-[0.2em] uppercase text-accent font-bold">Full Name</label>
                            <input
                                type="text"
                                placeholder="Jane Doe"
                                className="w-full bg-transparent border-b border-black/10 py-3 focus:border-black outline-none transition-all font-sans text-sm tracking-wide"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-[9px] font-mono tracking-[0.2em] uppercase text-accent font-bold">Email</label>
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="w-full bg-transparent border-b border-black/10 py-3 focus:border-black outline-none transition-all font-sans text-sm tracking-wide"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-1">
                            <label className="text-[9px] font-mono tracking-[0.2em] uppercase text-accent font-bold">Password</label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full bg-transparent border-b border-black/10 py-3 focus:border-black outline-none transition-all font-sans text-sm tracking-wide"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-[9px] font-mono tracking-[0.2em] uppercase text-accent font-bold">Confirm Password</label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full bg-transparent border-b border-black/10 py-3 focus:border-black outline-none transition-all font-sans text-sm tracking-wide"
                            />
                        </div>
                    </div>

                    <div className="flex items-center space-x-3 py-2">
                        <input type="checkbox" id="terms" className="w-4 h-4 accent-secondary bg-transparent border border-black/20" required />
                        <label htmlFor="terms" className="text-[9px] font-mono tracking-widest uppercase text-accent font-bold cursor-pointer">I accept the terms and conditions</label>
                    </div>

                    <div className="pt-4">
                        <motion.button
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            className="w-full bg-secondary text-primary font-heading text-lg py-4 tracking-[0.3em] hover:bg-black transition-colors"
                        >
                            CREATE ACCOUNT
                        </motion.button>
                    </div>
                </form>

                <div className="mt-16 pt-8 border-t border-secondary/5 text-center">
                    <p className="text-[10px] font-mono tracking-widest uppercase text-accent font-bold">
                        Already have an account? <Link to="/login" className="text-secondary font-black hover:underline ml-2">Login</Link>
                    </p>
                </div>
            </motion.div>

            {/* Subtle brand watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-heading text-secondary/[0.02] -z-10 whitespace-nowrap pointer-events-none uppercase tracking-[0.2em]">
                Unique.Catalog
            </div>
        </div>
    );
};

export default Register;
