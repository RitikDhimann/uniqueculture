import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { ShoppingBag, Search, Menu, X, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'New Arrivals', href: '/new-arrivals' },
        { name: 'Collections', href: '/collections' },
        { name: 'Identity', href: '/identity' },
        { name: 'Archive', href: '/archive' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled 
                ? 'glass py-4 md:py-6' 
                : 'bg-transparent py-6'
            }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                {/* Logo */}
                <Link to="/">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={`text-2xl md:text-3xl font-heading font-black tracking-tighter cursor-pointer transition-colors duration-300 flex items-center gap-2 ${
                            isScrolled ? 'text-secondary' : 'text-secondary md:text-secondary max-md:text-white'
                        }`}
                    >
                        Unique <span className={`${isScrolled ? 'text-secondary opacity-30' : 'text-secondary md:text-secondary opacity-30 max-md:text-white/30'}`}>.Culture</span>
                    </motion.div>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-10">
                    {navLinks.map((link, i) => (
                        <motion.div
                            key={link.name}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Link
                                to={link.href}
                                className="text-[11px] uppercase tracking-[0.25em] font-bold text-black hover:underline underline-offset-8 transition-all"
                            >
                                {link.name}
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Icons */}
                <div className={`flex items-center space-x-4 md:space-x-8 transition-colors duration-300 ${
                    isScrolled ? 'text-secondary' : 'text-secondary md:text-secondary max-md:text-white'
                }`}>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="hover:opacity-60 transition-opacity hidden sm:block"
                    >
                        <Search size={18} md:size={20} strokeWidth={2.5} />
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="hover:opacity-60 transition-opacity"
                        onClick={() => navigate('/login')}
                    >
                        <User size={18} md:size={20} strokeWidth={2.5} />
                    </motion.button>

                    <div className="w-[1px] h-6 bg-secondary opacity-10 hidden md:block" />

                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="relative hover:opacity-60 transition-opacity"
                    >
                        <ShoppingBag size={18} md:size={20} strokeWidth={2.5} />
                        <span className="absolute -top-2 -right-2 bg-secondary text-primary text-[8px] font-black w-4 h-4 flex items-center justify-center">
                            0
                        </span>
                    </motion.button>

                    <button
                        className="md:hidden hover:opacity-60 z-50"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 h-screen w-full bg-primary z-[45] md:hidden flex flex-col justify-center px-8"
                    >
                        {/* Background Marquee for Mobile Menu */}
                        <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 opacity-[0.03] pointer-events-none select-none -z-10">
                            <h2 className="text-[40vw] font-heading leading-none whitespace-nowrap">MENU</h2>
                        </div>

                        <div className="flex flex-col space-y-6">
                            <span className="text-[10px] font-mono tracking-[0.5em] text-accent uppercase mb-4 block">NAVIGATION_SYSTEM</span>
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + i * 0.1 }}
                                >
                                    <Link
                                        to={link.href}
                                        className="text-5xl font-heading tracking-tighter text-secondary flex items-center justify-between group"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                        <div className="w-0 h-[2px] bg-secondary group-hover:w-12 transition-all duration-500" />
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                                className="pt-10 border-t border-secondary/10"
                            >
                                <Link
                                    to="/login"
                                    className="text-4xl font-heading tracking-tighter text-secondary flex items-center gap-4"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <User size={32} /> ACCOUNT/LOGIN
                                </Link>
                            </motion.div>
                        </div>

                        <div className="absolute bottom-10 left-8 right-8 flex justify-between items-end">
                            <div className="space-y-1 text-[10px] font-mono tracking-widest text-accent uppercase">
                                <p>© 2026 Unique .Culture</p>
                                <p>ALL_RIGHTS_RESERVED</p>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full border border-secondary/10" />
                                <div className="w-8 h-8 rounded-full border border-secondary/10" />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Scroll Progress Bar - Industrial Minimalist */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-[3px] bg-secondary origin-left z-[100] hidden md:block"
                style={{ scaleX }}
            />
        </nav>
    );
};

export default Navbar;
