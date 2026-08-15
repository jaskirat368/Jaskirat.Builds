import React, { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface ImageProps extends React.ComponentProps<'img'> {
  fallbackClassName?: string;
}

export function Image({ fallbackClassName, className, alt, ...props }: ImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`flex flex-col items-center justify-center bg-zinc-50 border border-zinc-100 rounded-2xl p-4 text-center overflow-hidden ${className} ${fallbackClassName || ''}`}>
        <ImageOff className="w-8 h-8 text-zinc-300 mb-2 shrink-0" />
        <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wide">Image temporarily unavailable</span>
        <span className="text-[10px] text-zinc-400 mt-1 max-w-[200px] mx-auto leading-tight">Please refresh the page 2–3 times to try loading it again.</span>
      </div>
    );
  }

  return (
    <img
      {...props}
      className={className}
      alt={alt || "Image"}
      onError={() => setError(true)}
    />
  );
}
