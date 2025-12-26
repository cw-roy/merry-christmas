'use client';

import React from 'react';

type Flake = {
  left: string;
  animationDuration: string;
  animationDelay: string;
};

export default function Snow() {
  const flakes: Flake[] = Array.from({ length: 80 }, () => ({
    left: `${Math.random() * 100}%`,
    animationDuration: `${5 + Math.random() * 10}s`,
    animationDelay: `${Math.random() * 5}s`,
  }));

  return (
    <div className="snow">
      {flakes.map((flake, i) => (
        <span
          key={i}
          style={{
            left: flake.left,
            animationDuration: flake.animationDuration,
            animationDelay: flake.animationDelay,
          }}
        />
      ))}
    </div>
  );
}
