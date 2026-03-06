import React, { useRef, useState, MouseEvent } from "react";
import { Link } from "react-router-dom";

interface SpotlightCardProps {
  children: React.ReactNode;
  to?: string;
  className?: string;
  maxRotation?: number;
}

export default function SpotlightCard({ 
  children, 
  to, 
  className = "", 
  maxRotation = 15,
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({ x, y });

    // Calculate rotation based on mouse position
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation values
    // RotateX: Positive when mouse is at top (tilts back), negative when at bottom
    const rotateX = ((y - centerY) / centerY) * -maxRotation;
    // RotateY: Positive when mouse is at right (tilts back), negative when at left
    const rotateY = ((x - centerX) / centerX) * maxRotation;

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  };

  const content = (
    <>
      {/* Spotlight Background Glow - More intense, smaller radius */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.1), transparent 40%)`,
        }}
      />

      {/* Electric Flowing Border */}
      <div 
        className="pointer-events-none absolute inset-0 z-[5] rounded-3xl"
        style={{
          maskImage: 'linear-gradient(white, white), linear-gradient(white, white)',
          maskClip: 'content-box, border-box',
          maskComposite: 'exclude',
          WebkitMaskClip: 'content-box, border-box',
          WebkitMaskComposite: 'xor',
          padding: '1.5px',
        }}
      >
        <div 
          className="absolute inset-0 w-[200%] h-[200%] -left-[50%] -top-[50%] animate-[spin_4s_linear_infinite]"
          style={{ 
            background: 'conic-gradient(from 0deg, transparent 0deg, transparent 340deg, #60a5fa 360deg)',
          }} 
        />
      </div>
      
      {/* Glowing Border Mask - Sharper, smaller radius */}
      <div
        className="pointer-events-none absolute inset-0 z-10 rounded-3xl border border-blue-500 transition duration-300"
        style={{
          opacity,
          maskImage: `radial-gradient(180px circle at ${position.x}px ${position.y}px, black, transparent)`,
          WebkitMaskImage: `radial-gradient(180px circle at ${position.x}px ${position.y}px, black, transparent)`,
        }}
      />

      <div className="relative z-20 h-full">
        {children}
      </div>
    </>
  );

  const commonProps = {
    onMouseMove: handleMouseMove,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    className: `group block relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50 transition-all duration-200 ease-out hover:bg-white ${className}`,
    style: {
      transform,
      transformStyle: "preserve-3d" as const,
    }
  };

  if (to) {
    return (
      <Link
        ref={divRef as React.RefObject<HTMLAnchorElement>}
        to={to}
        {...commonProps}
      >
        {content}
      </Link>
    );
  }

  return (
    <div
      ref={divRef}
      {...commonProps}
    >
      {content}
    </div>
  );
}
