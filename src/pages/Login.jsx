import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center p-6 relative pt-32 bg-primary">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-sm bg-white brutalist-card p-8 md:p-12 relative z-10"
            >
                <div className="mb-12 text-center space-y-2">
                    <h1 className="text-2xl md:text-3xl font-heading tracking-[0.5em] text-secondary">LOGIN</h1>
                    <p className="text-[9px] font-mono tracking-[0.3em] text-accent uppercase font-bold">Sign in to your account</p>
                </div>

                <form className="space-y-8">
                    <div className="space-y-1">
                        <label className="text-[9px] font-mono tracking-[0.2em] uppercase text-accent font-bold">Email</label>
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="w-full bg-transparent border-b border-black/10 py-3 focus:border-black outline-none transition-all font-sans text-sm tracking-wide"
                        />
                    </div>

                    <div className="space-y-1">
                        <div className="flex justify-between items-center">
                            <label className="text-[9px] font-mono tracking-[0.2em] uppercase text-accent font-black">Password</label>
                            <Link to="/forgot-password" title="forgot-password" id="forgot-password" className="text-[9px] font-mono tracking-[0.1em] uppercase hover:underline text-secondary font-bold">Forgot Password?</Link>
                        </div>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full bg-transparent border-b border-black/10 py-3 focus:border-black outline-none transition-all font-sans text-sm tracking-wide"
                        />
                    </div>

                    <div className="pt-4">
                        <motion.button
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            className="w-full bg-secondary text-primary font-heading text-lg py-4 tracking-[0.3em] hover:bg-black transition-colors"
                        >
                            SIGN IN
                        </motion.button>
                    </div>
                </form>

                <div className="mt-16 pt-8 border-t border-secondary/5 text-center">
                    <p className="text-[10px] font-mono tracking-widest uppercase text-accent">
                        New here? <Link to="/register" className="text-secondary font-black hover:underline ml-2">Register</Link>
                    </p>
                </div>
            </motion.div>

            {/* Subtle brand watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-heading text-secondary/[0.02] -z-10 whitespace-nowrap pointer-events-none uppercase tracking-[0.2em]">
                Unique.Identity
            </div>
        </div>
    );
};

export default Login;
