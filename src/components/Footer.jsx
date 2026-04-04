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
    <footer className="bg-white pt-24 pb-12 px-6 border-t-4 border-secondary  overflow-hidden relative">
      {/* Structural Accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-32">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-4xl font-heading font-black mb-10 tracking-tighter">
              Unique <span className="opacity-30">.Culture</span>
            </h2>
            <div className="space-y-6 text-black  text-[10px] font-mono tracking-widest  uppercase leading-loose">
              <p>STRUCTURAL_STREETWEAR_SYSTEMS</p>
              <p>BUILT_FOR_ENDURANCE_AND_IDENTITY</p>
              <div className="flex gap-6 pt-4">
                <Instagram size={20} className="hover:text-primary cursor-pointer transition-all hover:scale-125" />
                <Twitter size={20} className="hover:text-primary cursor-pointer transition-all hover:scale-125" />
                <Facebook size={20} className="hover:text-primary cursor-pointer transition-all hover:scale-125" />
              </div>
            </div>
          </div>

          {/* Links Groups */}
          {links.map((group) => (
            <div key={group.title} className="space-y-10">
              <h3 className="text-black text-[9px] font-mono font-bold tracking-[0.5em] uppercase border-b border-primary/10 pb-4">{group.title}</h3>
              <ul className="space-y-5">
                {group.items.map((item) => (
                  <li key={item}>
                    <a href="#" className="group flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.25em] text-black/60 hover:text-primary transition-all">
                      <div className="w-0 h-[1px] bg-primary group-hover:w-4 transition-all" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-primary/5 text-[9px] font-mono uppercase tracking-[0.5em] text-black">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <p>© {currentYear} Unique_Culture_OS_V1.0</p>
            <div className="flex gap-10">
              <p className="hover:text-primary cursor-pointer">PRIVACY_PROTOCOL</p>
              <p className="hover:text-primary cursor-pointer">TERMS_OF_SERVICE</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-primary animate-pulse" />
            <p className="text-primary font-black italic">CONNECTED_TO_THE_ARCHIVE</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
