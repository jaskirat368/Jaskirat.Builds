import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Timer, Sparkles, Target } from 'lucide-react';

export default function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [exit, setExit] = useState(false);
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    // Start exit animation after 4 seconds (increased from 2.5s)
    const timer = setTimeout(() => {
      setExit(true);
    }, 4000);

    // Call onComplete after exit animation finishes (4s + 0.8s slide)
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 4800);

    // Progress counter (starts immediately)
    const startTime = Date.now();
    const duration = 3500;
    let animationFrame: number;

    const updateProgress = () => {
      const now = Date.now();
      const elapsed = Math.max(0, now - startTime);
      const t = Math.min(1, elapsed / duration);
      // Rough approximation of [0.76, 0, 0.24, 1] easing (quart ease out)
      const easeT = 1 - Math.pow(1 - t, 4);
      const currentProgress = Math.min(100, Math.floor(easeT * 100));
      
      setProgress(Math.max(1, currentProgress));

      if (elapsed < duration) {
        animationFrame = requestAnimationFrame(updateProgress);
      } else {
        setProgress(100);
      }
    };

    animationFrame = requestAnimationFrame(updateProgress);

    return () => {
      clearTimeout(timer);
      clearTimeout(completeTimer);
      cancelAnimationFrame(animationFrame);
    };
  }, [onComplete]);

  const textVariants = {
    hidden: { opacity: 0, y: 20, rotateX: 90 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    }),
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950 overflow-hidden"
      initial={{ y: 0 }}
      animate={exit ? { y: '-100%' } : { y: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Textured Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none" />
      <div className="absolute inset-0 m-auto h-[600px] w-[600px] rounded-full bg-white opacity-[0.03] blur-[120px] pointer-events-none" />

      {/* Floating Metrics Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
        className="absolute top-[18%] left-[5%] md:top-[15%] lg:top-[22%] md:left-[20%] lg:left-[26%] z-10 flex items-center gap-2 md:gap-3 bg-white px-3 py-2 md:px-4 md:py-3 rounded-2xl shadow-[0_10px_40px_-10px_rgba(255,255,255,0.2)] scale-[0.85] md:scale-100 origin-top-left"
      >
        <div className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full bg-yellow-50 text-yellow-500">
          <Timer className="w-3 h-3 md:w-4 md:h-4" />
        </div>
        <div>
          <div className="font-bold text-zinc-900 text-xs md:text-sm leading-tight">0.8s Load Time</div>
          <div className="text-[8px] md:text-[9px] font-mono tracking-wider text-zinc-500 uppercase mt-0.5">Lightning Fast</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
        className="absolute top-[45%] left-[5%] md:top-[55%] lg:top-[50%] md:left-[10%] lg:left-[14%] z-10 hidden sm:flex items-center gap-3 bg-white px-4 py-3 rounded-2xl shadow-[0_10px_40px_-10px_rgba(255,255,255,0.2)]"
      >
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-50 text-purple-500">
          <Sparkles className="w-4 h-4" />
        </div>
        <div>
          <div className="font-bold text-zinc-900 text-sm leading-tight">Pixel Perfect</div>
          <div className="text-[9px] font-mono tracking-wider text-zinc-500 uppercase mt-0.5">Elite Design</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
        className="absolute bottom-[28%] right-[5%] md:bottom-[25%] lg:bottom-[32%] md:right-[15%] lg:right-[22%] z-10 flex items-center gap-2 md:gap-3 bg-white px-3 py-2 md:px-4 md:py-3 rounded-2xl shadow-[0_10px_40px_-10px_rgba(255,255,255,0.2)] scale-[0.85] md:scale-100 origin-bottom-right"
      >
        <div className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full bg-cyan-50 text-cyan-500">
          <Target className="w-3 h-3 md:w-4 md:h-4" />
        </div>
        <div>
          <div className="font-bold text-zinc-900 text-xs md:text-sm leading-tight">SEO Optimized</div>
          <div className="text-[8px] md:text-[9px] font-mono tracking-wider text-zinc-500 uppercase mt-0.5">First Page Ready</div>
        </div>
      </motion.div>

      <div className="relative flex flex-col items-center">
        <motion.div 
          className="flex items-baseline gap-1 md:gap-2 text-4xl md:text-7xl font-bold tracking-tighter text-white perspective-[1000px]"
          initial="hidden"
          animate="visible"
        >
          {/* JASKIRAT */}
          <div className="flex overflow-hidden">
            {['J', 'A', 'S', 'K', 'I', 'R', 'A', 'T'].map((char, i) => (
              <motion.span
                key={`char-${i}`}
                custom={i}
                variants={textVariants}
                className="inline-block origin-bottom"
              >
                {char}
              </motion.span>
            ))}
          </div>

          {/* Dot */}
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0, duration: 0.4, type: 'spring' }}
            className="text-blue-600"
          >
            .
          </motion.span>

          {/* BUILDS */}
          <div className="flex overflow-hidden">
            {['B', 'U', 'I', 'L', 'D', 'S'].map((char, i) => (
              <motion.span
                key={`char-2-${i}`}
                custom={i + 8} // Delay offset
                variants={textVariants}
                className="inline-block origin-bottom"
              >
                {char}
              </motion.span>
            ))}
          </div>
        </motion.div>
        
        {/* Subtle 3D Line */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: '100%', opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
          className="h-[1px] bg-gradient-to-r from-transparent via-blue-600 to-transparent mt-4 w-full max-w-[200px] md:max-w-[400px]"
        />
      </div>

      {/* Loading Bar at the bottom */}
      <div
        className="absolute bottom-16 md:bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center w-[85vw] max-w-[800px] z-10"
      >
        <div className="w-full flex justify-between items-end mb-3 px-1">
          <span className="font-mono text-[9px] md:text-[10px] text-zinc-400 tracking-widest uppercase translate-y-0.5">Initializing</span>
          <div className="font-mono text-[9px] md:text-[10px] text-zinc-200 tracking-widest uppercase flex items-center justify-end">
            <span className="w-10 text-right">{progress}%</span>
            <motion.span 
              initial={{ opacity: 0, width: 0, marginLeft: 0 }}
              animate={{ opacity: 1, width: "auto", marginLeft: 12 }}
              transition={{ delay: 3.5, duration: 0.3 }}
              className="text-white font-bold overflow-hidden whitespace-nowrap inline-block"
            >
              Ready
            </motion.span>
          </div>
        </div>
        <div className="w-full h-[2px] bg-white/10 overflow-hidden relative rounded-full">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 3.5, ease: [0.76, 0, 0.24, 1] }}
            className="absolute top-0 left-0 h-full bg-zinc-200 shadow-[0_0_15px_rgba(255,255,255,0.5)]"
          />
        </div>
      </div>

      {/* Decorative Code Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute inset-0 pointer-events-none p-6 md:p-12 flex flex-col justify-between"
      >
        <div className="flex justify-between items-start">
          <div className="font-mono text-[10px] md:text-xs text-white/20 tracking-widest">
            &lt;SYSTEM_INIT /&gt;
          </div>
          <div className="font-mono text-[10px] md:text-xs text-white/20 tracking-widest text-right">
            import &#123; FUTURE &#125; from 'react';
          </div>
        </div>
        <div className="flex justify-between items-end">
          <div className="font-mono text-[10px] md:text-xs text-white/20 tracking-widest">
            const vision = "UNLIMITED";
          </div>
          <div className="font-mono text-[10px] md:text-xs text-white/20 tracking-widest text-right">
            export default SUCCESS;
          </div>
        </div>
        
        {/* Decorative Lines */}
        <div className="absolute top-0 left-12 w-[1px] h-24 bg-gradient-to-b from-white/10 to-transparent hidden md:block" />
        <div className="absolute bottom-0 right-12 w-[1px] h-24 bg-gradient-to-t from-white/10 to-transparent hidden md:block" />
      </motion.div>
    </motion.div>
  );
}
