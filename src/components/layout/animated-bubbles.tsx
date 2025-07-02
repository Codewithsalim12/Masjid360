'use client';

import React, { useState, useEffect } from 'react';

export function AnimatedBubbles() {
  const [bubbles, setBubbles] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const generatedBubbles = Array.from({ length: 10 }).map((_, i) => {
      const style: React.CSSProperties = {
        left: `${Math.random() * 100}%`,
        width: `${Math.random() * 60 + 20}px`,
        height: `${Math.random() * 60 + 20}px`,
        animationDelay: `${Math.random() * 15}s`,
        animationDuration: `${Math.random() * 20 + 15}s`,
      };
      return <div key={i} className="bubble" style={style} />;
    });
    setBubbles(generatedBubbles);
  }, []);

  return <div className="bubbles" aria-hidden="true">{bubbles}</div>;
}
