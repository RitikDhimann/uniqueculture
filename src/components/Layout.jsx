import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import SmoothScroll from './SmoothScroll';

const Layout = () => {
    return (
        <SmoothScroll>
            <div className="relative min-h-screen bg-primary selection:bg-secondary selection:text-primary overflow-x-hidden">
                {/* Global Texture Overlay */}
                <div className="noise" />

                <Navbar />

                <Outlet />

                <Footer />
            </div>
        </SmoothScroll>
    );
};

export default Layout;
