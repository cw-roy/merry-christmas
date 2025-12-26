'use client';

import { useState } from 'react';

type Flake = {
  left: string;
  animationDuration: string;
  animationDelay: string;
};

function generateFlakes(count: number): Flake[] {
  return Array.from({ length: count }, () => ({
    left: `${Math.random() * 100}%`,
    animationDuration: `${5 + Math.random() * 10}s`,
    animationDelay: `${Math.random() * 5}s`,
  }));
}

export default function Snow() {
  const [flakes] = useState<Flake[]>(() => generateFlakes(80));

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
