import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [exit, setExit] = useState(false);

  useEffect(() => {
    // Start exit animation after 4 seconds (increased from 2.5s)
    const timer = setTimeout(() => {
      setExit(true);
    }, 4000);

    // Call onComplete after exit animation finishes (4s + 0.8s slide)
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 4800);

    return () => {
      clearTimeout(timer);
      clearTimeout(completeTimer);
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
      className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950"
      initial={{ y: 0 }}
      animate={exit ? { y: '-100%' } : { y: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
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
