import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';
import { Image } from './Image';

export default function SelectedWorkSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for right, -1 for left

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-xs font-bold tracking-widest text-blue-600 uppercase mb-4">
            Selected Work
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-950 mb-6">
            Work We're Proud Of
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            A selection of digital experiences built to make businesses look credible, communicate clearly, and convert better.
          </p>
        </motion.div>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full max-w-[100vw] overflow-hidden px-4 md:px-12 flex justify-center items-center h-[500px] md:h-[600px] lg:h-[700px]">
        
        {/* Navigation Buttons */}
        <div className="absolute inset-x-4 md:inset-x-12 top-1/2 -translate-y-1/2 flex justify-between z-40 pointer-events-none">
          <button
            onClick={handlePrev}
            className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/90 backdrop-blur-md border border-zinc-200 shadow-xl flex items-center justify-center text-zinc-900 hover:scale-105 hover:bg-white hover:text-blue-600 transition-all duration-300 pointer-events-auto"
            aria-label="Previous project"
          >
            <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/90 backdrop-blur-md border border-zinc-200 shadow-xl flex items-center justify-center text-zinc-900 hover:scale-105 hover:bg-white hover:text-blue-600 transition-all duration-300 pointer-events-auto"
            aria-label="Next project"
          >
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Side Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 lg:w-48 bg-gradient-to-r from-white to-transparent z-30 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 lg:w-48 bg-gradient-to-l from-white to-transparent z-30 pointer-events-none" />

        <div className="relative w-full max-w-7xl mx-auto h-full flex justify-center items-center">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            {projects.map((project, index) => {
              // Calculate relative position
              let relativeIndex = (index - activeIndex + projects.length) % projects.length;
              if (relativeIndex > projects.length / 2) {
                relativeIndex -= projects.length;
              }

              // Determine visibility and styles based on position
              const isActive = relativeIndex === 0;
              const isPrev = relativeIndex === -1;
              const isNext = relativeIndex === 1;
              
              if (!isActive && !isPrev && !isNext) return null;

              return (
                <motion.div
                  key={project.id}
                  layout
                  custom={direction}
                  initial={{ 
                    opacity: 0, 
                    x: direction > 0 ? 300 : -300,
                    scale: 0.8
                  }}
                  animate={{ 
                    opacity: isActive ? 1 : 0.4, 
                    x: isActive ? 0 : (isNext ? '75%' : '-75%'),
                    scale: isActive ? 1 : 0.85,
                    zIndex: isActive ? 20 : 10
                  }}
                  exit={{ 
                    opacity: 0,
                    x: direction > 0 ? -300 : 300,
                    scale: 0.8,
                    zIndex: 0
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 30,
                    mass: 0.8
                  }}
                  className={`absolute top-0 bottom-0 w-full md:w-[85%] lg:w-[75%] max-w-5xl rounded-3xl overflow-hidden shadow-2xl ${isActive ? 'cursor-default' : 'cursor-pointer'}`}
                  onClick={() => {
                    if (isPrev) handlePrev();
                    if (isNext) handleNext();
                  }}
                >
                  <div className="relative w-full h-full group bg-zinc-100">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    
                    {/* Subtle Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-950/80 pointer-events-none" />
                    
                    {/* Translucent Info Panel */}
                    <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 rounded-2xl bg-zinc-950/40 backdrop-blur-xl border border-white/10 p-6 md:p-8 flex items-center justify-between shadow-2xl transition-transform duration-500 hover:bg-zinc-950/60">
                      <div className="flex-1 pr-6">
                        <h3 className="text-xl md:text-3xl font-bold text-white mb-2 tracking-tight line-clamp-1">
                          {project.title.split('—')[0].trim()}
                        </h3>
                        <p className="text-zinc-300 text-sm md:text-base font-medium">
                          {project.category}
                        </p>
                      </div>
                      
                      {project.comparison?.after?.link ? (
                        <a 
                          href={project.comparison.after.link} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-full bg-white text-zinc-950 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-300"
                          aria-label={`Visit ${project.title}`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                        </a>
                      ) : (
                        <Link 
                          to="/portfolio" 
                          className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-full bg-white text-zinc-950 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-300"
                          aria-label={`View ${project.title}`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                        </Link>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* View All Projects CTA */}
      <div className="mt-16 flex justify-center relative z-20">
        <Link 
          to="/portfolio"
          className="group flex items-center gap-2 px-8 py-4 rounded-full bg-zinc-950 text-white font-medium hover:bg-blue-600 transition-colors duration-300 shadow-xl"
        >
          View All Projects
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
