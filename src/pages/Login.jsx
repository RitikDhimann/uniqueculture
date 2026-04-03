import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Lock, ArrowRight } from 'lucide-react';

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center p-6 relative pt-32">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md bg-primary brutalist-card p-6 md:p-12 relative z-10"
            >
                <div className="mb-8 md:mb-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-heading mb-2">ACCESS_GRANTED</h1>
                    <p className="text-[10px] font-mono tracking-[0.2em] md:tracking-[0.3em] text-accent uppercase">ENTER_CREDENTIALS_TO_PROCEED</p>
                </div>

                <form className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-[10px] font-mono tracking-widest uppercase text-secondary opacity-60">Identity/Email</label>
                        <div className="relative group">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary opacity-30 group-focus-within:opacity-100 transition-opacity" size={18} />
                            <input
                                type="email"
                                placeholder="name@Unique.Culture"
                                className="w-full bg-transparent border-2 border-secondary/10 p-4 pl-12 focus:border-secondary outline-none transition-all font-mono text-sm"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <label className="text-[10px] font-mono tracking-widest uppercase text-secondary opacity-60">Security/Password</label>
                            <Link to="/forgot-password" title="forgot-password" id="forgot-password" className="text-[10px] font-mono tracking-widest uppercase hover:underline opacity-60">Lost_Key?</Link>
                        </div>
                        <div className="relative group">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary opacity-30 group-focus-within:opacity-100 transition-opacity" size={18} />
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full bg-transparent border-2 border-secondary/10 p-4 pl-12 focus:border-secondary outline-none transition-all font-mono text-sm"
                            />
                        </div>
                    </div>

                    <div className="flex items-center space-x-3 py-2">
                        <input type="checkbox" id="remember" className="w-4 h-4 accent-secondary bg-transparent border-2 border-secondary" />
                        <label htmlFor="remember" className="text-[10px] font-mono tracking-widest uppercase opacity-60 cursor-pointer">Stay_Connected</label>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-secondary text-primary font-heading text-2xl py-4 flex items-center justify-center gap-3 group"
                    >
                        INITIALIZE_LOGIN
                        <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                    </motion.button>
                </form>

                <div className="mt-12 pt-8 border-t border-secondary/10 text-center">
                    <p className="text-[10px] font-mono tracking-widest uppercase opacity-60">
                        New_Recruit? <Link to="/register" className="text-secondary font-bold hover:underline">Request_Access</Link>
                    </p>
                </div>
            </motion.div>

            {/* Background elements */}
            <div className="absolute top-1/4 left-10 w-[1px] h-32 bg-secondary/10 hidden lg:block" />
            <div className="absolute bottom-1/4 right-10 w-[1px] h-32 bg-secondary/10 hidden lg:block" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] md:text-[20vw] font-heading text-secondary/[0.02] -z-10 whitespace-nowrap pointer-events-none overflow-hidden">
                Culture_IDENTITY
            </div>
        </div>
    );
};

export default Login;
