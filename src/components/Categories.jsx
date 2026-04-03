import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  {
    id: 1,
    title: 'Modern T-Shirts',
    subtitle: 'Streetwear Essentials',
    image: '/category_tshirts_light_image_1774942705348.png',
    link: '#',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 2,
    title: 'Premium Hoodies',
    subtitle: 'Culture x Comfort',
    image: '/product_hoodie_light_mockup_2_1774942672527.png', // Reusing light mockup
    link: '#',
    aspect: 'aspect-[3/4]',
  },
];

const Categories = () => {
  return (
    <section className="py-24 bg-primary px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={`relative flex-1 group cursor-pointer overflow-hidden ${category.aspect} bg-darkest`}
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              
              <div className="absolute bottom-12 left-12 right-12 text-secondary">
                <p className="text-accent text-[10px] uppercase tracking-[0.3em] font-bold mb-4 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                  {category.subtitle}
                </p>
                <h3 className="text-5xl md:text-7xl font-heading mb-8 group-hover:tracking-wider transition-all duration-700 font-bold">
                  {category.title.split(' ').map((word, i) => (
                    <span key={i} className="block">{word}</span>
                  ))}
                </h3>
                
                <button className="group/btn relative px-8 py-3 overflow-hidden border border-secondary text-secondary text-[10px] uppercase font-bold tracking-widest hover:text-primary transition-colors">
                  <span className="relative z-10">Shop Collection</span>
                  <div className="absolute inset-x-0 bottom-0 top-full bg-secondary group-hover/btn:top-0 transition-all duration-500 ease-out" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
