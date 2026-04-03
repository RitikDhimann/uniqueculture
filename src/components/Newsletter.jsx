import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="py-24 bg-primary px-6 flex items-center justify-center border-t border-secondary/5">
      <div className="container max-w-4xl text-center text-secondary">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-accent text-[10px] uppercase tracking-[0.4em] font-bold mb-10"
        >
          Exclusive Membership
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-8xl font-heading mb-16 tracking-tight font-black"
        >
          BECOME AN <span className="text-stroke-dark">EXCLUSIVE MEMBER</span>
        </motion.h2>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="relative max-w-xl mx-auto"
        >
          <input
            type="email"
            placeholder="ENTER YOUR EMAIL"
            className="w-full bg-transparent border-b-2 border-secondary/10 py-6 text-xl font-heading tracking-widest placeholder:text-secondary/20 focus:outline-none focus:border-secondary transition-colors pr-20"
          />
          <button className="absolute right-0 top-1/2 -translate-y-1/2 group bg-secondary text-primary p-4 hover:bg-accent transition-colors">
            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-secondary/30 text-[10px] uppercase tracking-widest"
        >
          By joining, you agree to our privacy policy. No spam, only culture.
        </motion.p>
      </div>
    </section>
  );
};

export default Newsletter;
