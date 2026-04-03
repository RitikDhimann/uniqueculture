import React from 'react'
import { motion } from 'framer-motion'

const images = [
  { url: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2670&auto=format&fit=crop', title: 'REACT' },
  { url: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2831&auto=format&fit=crop', title: 'THREE.JS' },
  { url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop', title: 'GSAP' },
  { url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop', title: 'FRAMER' },
  { url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop', title: 'WEBGL' },
  { url: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=2574&auto=format&fit=crop', title: 'DESIGN' },
]

const Gallery = () => {
  return (
    <section id="experience" className="bg-dark py-40 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-black font-heading tracking-tighter">OUR<br />TECH STACK</h2>
          <div className="mt-8 text-white/30 text-lg max-w-lg font-light leading-relaxed">
            We use the most advanced tools to create unforgettable experiences that perform as beautifully as they look.
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="relative aspect-square overflow-hidden rounded-xl bg-dark-lighter group"
            >
              <img 
                src={img.url} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125 group-hover:rotate-3 opacity-30 group-hover:opacity-100 grayscale group-hover:grayscale-0" 
                alt={img.title}
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-500 bg-black/40 group-hover:bg-transparent">
                <span className="text-2xl font-black font-heading opacity-40 group-hover:opacity-100 group-hover:scale-110 tracking-widest uppercase">{img.title}</span>
              </div>
              <div className="absolute inset-0 border-2 border-white/0 group-hover:border-neon-blue/20 transition-colors duration-500 rounded-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
