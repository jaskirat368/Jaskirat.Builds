import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function FlipWord() {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    // Flip every 4 seconds
    const interval = setInterval(() => {
      setFlipped((prev) => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-block relative perspective-[2000px] text-left antialiased">
      {/* Spacer to reserve width for the widest word */}
      <span className="opacity-0 pointer-events-none">Performance</span>
      
      {/* Converting */}
      <motion.span
        className="absolute top-0 left-0 w-full h-full flex items-center justify-start will-change-transform"
        style={{ 
          backfaceVisibility: 'hidden',
          transformOrigin: 'center center -0.55em'
        }}
        animate={{ 
          rotateX: flipped ? 90 : 0,
          opacity: flipped ? 0 : 1 // Fade out slightly to prevent z-fighting/bleeding
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        Converting
      </motion.span>
      
      {/* Performance */}
      <motion.span
        className="absolute top-0 left-0 w-full h-full flex items-center justify-start will-change-transform"
        style={{ 
          backfaceVisibility: 'hidden',
          transformOrigin: 'center center -0.55em'
        }}
        initial={{ rotateX: -90, opacity: 0 }}
        animate={{ 
          rotateX: flipped ? 0 : -90,
          opacity: flipped ? 1 : 0
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        Performance
      </motion.span>
    </span>
  );
}
