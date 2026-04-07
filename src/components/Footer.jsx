import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Facebook, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { title: 'SYSTEMS', items: ['New Arrivals', 'Technical Gear', 'Core Essentials', 'Archive', 'Research'] },
    { title: 'PROTOCOLS', items: ['Privacy Policy', 'Shipping Info', 'Returns', 'Terms of Service', 'Security'] },
    { title: 'NETWORK', items: ['Instagram', 'Twitter', 'LinkedIn', 'Discord', 'Contact'] },
  ];

  return (
    <footer className="bg-white pt-16 md:pt-24 pb-10 md:pb-12 px-6 border-t-2 md:border-t-4 border-secondary overflow-hidden relative">
      {/* Structural Accent */}
      <div className="absolute top-0 left-0 w-full h-[1px] md:h-1 bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16 mb-20 md:mb-32">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-heading mb-6 md:mb-10 tracking-widest uppercase">
              Unique <span className="opacity-30">.Culture</span>
            </h2>
            <div className="space-y-4 md:space-y-6 text-black text-[9px] md:text-[10px] font-mono tracking-widest uppercase leading-loose">
              <p>STRUCTURAL_STREETWEAR_SYSTEMS</p>
              <p>BUILT_FOR_ENDURANCE_AND_IDENTITY</p>
              <div className="flex justify-center md:justify-start gap-6 pt-4">
                <Instagram size={18} className="hover:text-secondary/60 cursor-pointer transition-all hover:scale-125" />
                <Twitter size={18} className="hover:text-secondary/60 cursor-pointer transition-all hover:scale-125" />
                <Facebook size={18} className="hover:text-secondary/60 cursor-pointer transition-all hover:scale-125" />
              </div>
            </div>
          </div>

          {/* Links Groups */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 col-span-1 md:col-span-3">
            {links.map((group) => (
              <div key={group.title} className="space-y-6 md:space-y-10 flex flex-col items-center md:items-start">
                <h3 className="text-black text-[8px] md:text-[9px] font-mono font-bold tracking-[0.4em] md:tracking-[0.5em] uppercase border-b border-black/10 pb-3 md:pb-4 w-full text-center md:text-left">
                  {group.title}
                </h3>
                <ul className="space-y-4 md:space-y-5 text-center md:text-left">
                  {group.items.map((item) => (
                    <li key={item}>
                      <a href="#" className="group flex flex-col md:flex-row items-center gap-1 md:gap-3 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] md:tracking-[0.25em] text-black/60 hover:text-black transition-all">
                        <div className="hidden md:block w-0 h-[1px] bg-black group-hover:w-4 transition-all" />
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 pt-10 md:pt-12 border-t border-black/5 text-[8px] md:text-[9px] font-mono uppercase tracking-[0.4em] md:tracking-[0.5em] text-black text-center md:text-left">
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
            <p className="opacity-60">© {currentYear} Unique_Culture_OS_V1.0</p>
            <div className="flex gap-6 md:gap-10">
              <p className="hover:text-black cursor-pointer underline-offset-4 hover:underline">PRIVACY_PROTOCOL</p>
              <p className="hover:text-black cursor-pointer underline-offset-4 hover:underline">TERMS_OF_SERVICE</p>
            </div>
          </div>
          <div className="flex items-center gap-3 md:gap-4 bg-black/5 md:bg-transparent px-4 py-2 md:p-0 rounded-full">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-black animate-pulse" />
            <p className="text-black font-black italic tracking-widest">CONNECTED_TO_THE_ARCHIVE</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
