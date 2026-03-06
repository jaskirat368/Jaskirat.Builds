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
    <span className="inline-block relative perspective-[2000px] text-left">
      {/* Spacer to reserve width for the widest word */}
      <span className="opacity-0 pointer-events-none">Performance</span>
      
      <motion.span
        className="absolute top-0 left-0 w-full h-full"
        style={{ 
          transformStyle: 'preserve-3d', 
          transformOrigin: 'center center -0.55em' 
        }}
        animate={{ rotateX: flipped ? 90 : 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Front Face: Converting */}
        <span 
          className="absolute top-0 left-0 w-full h-full flex items-center justify-start"
          style={{ 
            backfaceVisibility: 'hidden',
          }}
        >
          Converting
        </span>
        
        {/* Bottom Face: Performance */}
        <span 
          className="absolute top-full left-0 w-full h-full flex items-center justify-start"
          style={{ 
            transformOrigin: 'top center',
            transform: 'rotateX(-90deg)', 
            backfaceVisibility: 'hidden' 
          }}
        >
          Performance
        </span>
      </motion.span>
    </span>
  );
}
