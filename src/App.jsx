import React, { Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Components & Layout
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import NewArrivals from './pages/NewArrivals';
import Collections from './pages/Collections';
import Identity from './pages/Identity';
import Archive from './pages/Archive';
import ProductDetail from './pages/ProductDetail';

gsap.registerPlugin(ScrollTrigger);

const Loader = () => (
    <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-primary flex flex-col items-center justify-center p-6"
    >
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-6xl md:text-8xl font-heading font-black tracking-tighter text-secondary"
        >
            Unique<span className="text-stroke-dark">Culture</span>
        </motion.div>
        <div className="w-40 h-[2px] bg-secondary opacity-10 mt-12 relative overflow-hidden">
            <motion.div
                animate={{ x: ['-100%', '100%'] }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="absolute inset-0 bg-secondary"
            />
        </div>
        <span className="mt-8 text-[10px] font-mono tracking-[0.5em] text-accent uppercase">INITIALIZING_SYSTEMS</span>
    </motion.div>
);

function App() {
    useEffect(() => {
        // Refresh ScrollTrigger when images load
        window.addEventListener('load', () => {
            ScrollTrigger.refresh();
        });

        return () => {
            window.removeEventListener('load', () => ScrollTrigger.refresh());
        };
    }, []);

    return (
        <Suspense fallback={<Loader />}>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="forgot-password" element={<ForgotPassword />} />
                    <Route path="new-arrivals" element={<NewArrivals />} />
                    <Route path="collections" element={<Collections />} />
                    <Route path="identity" element={<Identity />} />
                    <Route path="archive" element={<Archive />} />
                    <Route path="product/:id" element={<ProductDetail />} />
                </Route>
            </Routes>
        </Suspense>
    );
}

export default App;
