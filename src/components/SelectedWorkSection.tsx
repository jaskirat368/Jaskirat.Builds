import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
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
      <div className="relative w-full max-w-[100vw] overflow-hidden px-4 md:px-12 flex justify-center items-center h-[400px] md:h-[500px] lg:h-[550px]">
        
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
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-64 lg:w-80 bg-gradient-to-r from-white via-white/80 to-transparent z-30 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 lg:w-80 bg-gradient-to-l from-white via-white/80 to-transparent z-30 pointer-events-none" />

        <div className="relative w-full max-w-7xl mx-auto h-full flex justify-center items-center">
          {projects.map((project, index) => {
            let offset = index - activeIndex;
            const total = projects.length;

            if (offset > Math.floor(total / 2)) offset -= total;
            if (offset < -Math.floor(total / 2)) offset += total;

            const isActive = offset === 0;

            let xPos = "0%";
            if (offset === -1) xPos = "-105%";
            if (offset === 1) xPos = "105%";
            if (offset <= -2) xPos = "-210%";
            if (offset >= 2) xPos = "210%";

            let scale = isActive ? 1 : 0.85;
            if (Math.abs(offset) >= 2) scale = 0.75;

            let opacity = isActive ? 1 : 0.3;
            if (Math.abs(offset) >= 2) opacity = 0;

            let zIndex = isActive ? 20 : 10;
            if (Math.abs(offset) >= 2) zIndex = 0;

            return (
              <motion.div
                key={project.id}
                initial={false}
                animate={{
                  x: xPos,
                  scale: scale,
                  opacity: opacity,
                  zIndex: zIndex
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 30,
                  mass: 1
                }}
                className={`absolute top-0 bottom-0 w-[85%] md:w-[65%] lg:w-[55%] max-w-4xl rounded-3xl overflow-hidden shadow-2xl ${isActive ? 'cursor-default' : 'cursor-pointer'}`}
                onClick={() => {
                  if (offset === -1) handlePrev();
                  if (offset === 1) handleNext();
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
                    <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 w-[90%] max-w-[22rem] md:max-w-[28rem] rounded-2xl bg-zinc-950/90 backdrop-blur-xl border border-white/10 p-5 md:p-6 flex items-center justify-between shadow-2xl transition-transform duration-500 hover:bg-zinc-950 hover:scale-[1.02]">
                      <div className="flex-1 pr-4">
                        <h3 className="text-lg md:text-2xl font-bold text-white mb-1.5 tracking-tight line-clamp-1">
                          {project.title.split('—')[0].trim()}
                        </h3>
                        <p className="text-zinc-300 text-xs md:text-sm font-medium">
                          {project.category}
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-2 md:gap-3 shrink-0">
                        <Link
                          to={`/portfolio#project-${project.id}`}
                          className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold backdrop-blur-sm transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          View Details
                        </Link>
                        {project.comparison?.after?.link ? (
                          <a 
                            href={project.comparison.after.link} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 md:w-10 md:h-10 shrink-0 rounded-full bg-white text-zinc-950 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-300"
                            aria-label={`Visit ${project.title}`}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ArrowUpRight className="w-4 h-4 md:w-4 md:h-4" />
                          </a>
                        ) : (
                          <Link 
                            to={`/portfolio#project-${project.id}`}
                            className="w-8 h-8 md:w-10 md:h-10 shrink-0 rounded-full bg-white text-zinc-950 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-300"
                            aria-label={`View ${project.title}`}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ArrowUpRight className="w-4 h-4 md:w-4 md:h-4" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
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
