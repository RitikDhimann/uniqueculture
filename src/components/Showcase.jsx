import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const projects = [
  {
    title: 'CYBERPUNK',
    category: 'VIRTUAL DESIGN',
    image: 'https://images.unsplash.com/photo-1614728263952-84ea206f99b6?q=80&w=2666&auto=format&fit=crop',
    color: '#00f2ff',
  },
  {
    title: 'NEBULOUS',
    category: '3D ART',
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2574&auto=format&fit=crop',
    color: '#9d00ff',
  },
  {
    title: 'VELOCITY',
    category: 'INTERACTIVE',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop',
    color: '#ff0055',
  }
]

const Showcase = () => {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })

  return (
    <section ref={container} className="relative py-40 px-8 bg-dark-lighter">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
          <div>
            <h2 className="text-5xl md:text-7xl font-black font-heading tracking-tighter">FEATURED<br />EXPERIENCES</h2>
          </div>
          <div className="md:max-w-sm text-white/40 mt-8 md:mt-0 font-light">
            Each project is a unique journey through digital landscapes, blending aesthetic beauty with technical precision.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="group cursor-pointer"
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-[#111]">
        <img 
          src={project.image} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
          alt={project.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
        
        <div className="absolute bottom-8 left-8">
          <p className="text-xs tracking-[0.3em] font-bold text-white/50 uppercase mb-2">{project.category}</p>
          <h3 className="text-3xl font-black font-heading">{project.title}</h3>
        </div>

        <div className="absolute top-8 right-8 w-12 h-12 glass rounded-full flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform duration-500">
          <ArrowRight className="w-6 h-6 text-white" />
        </div>
      </div>
    </motion.div>
  )
}

export default Showcase
