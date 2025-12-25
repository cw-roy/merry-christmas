"use client";

import { useEffect, useState } from "react";

type Flake = {
  left: string;
  duration: string;
  delay: string;
};

function Snow() {
  const [flakes, setFlakes] = useState<Flake[]>([]);

  useEffect(() => {
    const generated: Flake[] = Array.from({ length: 60 }).map(() => ({
      left: `${Math.random() * 100}%`,
      duration: `${5 + Math.random() * 10}s`,
      delay: `${Math.random() * 5}s`,
    }));

    setFlakes(generated);
  }, []);

  return (
    <div className="snow">
      {flakes.map((flake, i) => (
        <span
          key={i}
          style={{
            left: flake.left,
            animationDuration: flake.duration,
            animationDelay: flake.delay,
          }}
        />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative h-screen w-screen flex items-center justify-center">
      <Snow />
      <h1 className="z-10 text-white text-5xl font-bold text-center drop-shadow-lg">
        Merry Christmas 🎄
        <br />
        <span className="text-xl font-normal block mt-4 leading-relaxed">
          Beneath the sky so still and bright,<br />
          “For unto you is born this day a Savior, who is Christ the Lord” (Luke 2:11).<br />
          Angels sing with holy light,<br />
          “Glory to God in the highest heaven, and peace on earth” (Luke 2:14).<br />
          A humble birth, yet heaven’s voice declares,<br />
          Love has come, a gift beyond compare.
        </span>
      </h1>
    </main>
  );
}

