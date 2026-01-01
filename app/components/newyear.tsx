import { useEffect, useRef } from 'react';

const colors = [
  '#ff595e', '#ffca3a', '#8ac926', '#1982c4', '#6a4c93', '#fff', '#f72585', '#b5179e', '#7209b7', '#3a0ca3', '#4361ee', '#4cc9f0'
];

function randomBetween(a: number, b: number) {
  return Math.random() * (b - a) + a;
}

function launchFirework(ctx: CanvasRenderingContext2D, width: number, height: number) {
  const x = randomBetween(width * 0.2, width * 0.8);
  const y = randomBetween(height * 0.1, height * 0.5);
  const particles = 40 + Math.floor(Math.random() * 20);
  const color = colors[Math.floor(Math.random() * colors.length)];
  const radius = randomBetween(60, 120);
  const angleStep = (2 * Math.PI) / particles;
  const points: {x: number, y: number, dx: number, dy: number, alpha: number}[] = [];
  for (let i = 0; i < particles; i++) {
    const angle = i * angleStep;
    points.push({
      x,
      y,
      dx: Math.cos(angle) * randomBetween(1, 4),
      dy: Math.sin(angle) * randomBetween(1, 4),
      alpha: 1
    });
  }
  return { points, color, radius, life: 0 };
}

export default function NewYear() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  type Firework = {
    points: { x: number; y: number; dx: number; dy: number; alpha: number }[];
    color: string;
    radius: number;
    life: number;
  };
  const fireworks = useRef<Firework[]>([]);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      if (canvas) {
        canvas.width = width;
        canvas.height = height;
      }
    }
    window.addEventListener('resize', resize);

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      // Draw fireworks
      for (let i = fireworks.current.length - 1; i >= 0; i--) {
        const fw = fireworks.current[i];
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';
        for (const p of fw.points) {
          ctx.globalAlpha = p.alpha;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 2.5, 0, 2 * Math.PI);
          ctx.fillStyle = fw.color;
          ctx.shadowColor = fw.color;
          ctx.shadowBlur = 16;
          ctx.fill();
        }
        ctx.restore();
        // Animate
        for (const p of fw.points) {
          p.x += p.dx;
          p.y += p.dy;
          p.dy += 0.02; // gravity
          p.alpha -= 0.012 + Math.random() * 0.01;
        }
        fw.life++;
        // Remove faded
        fw.points = fw.points.filter((p) => p.alpha > 0);
        if (fw.points.length === 0 || fw.life > 80) {
          fireworks.current.splice(i, 1);
        }
      }
      animationRef.current = requestAnimationFrame(draw);
    }

    // launchRandomFirework is now inside the ctx check, so ctx is never null here
    function launchRandomFirework() {
      if (fireworks.current.length < 5) {
        fireworks.current.push(launchFirework(ctx!, width, height));
      }
      setTimeout(launchRandomFirework, randomBetween(600, 1400));
    }

    draw();
    launchRandomFirework();

    return () => {
      window.removeEventListener('resize', resize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  );
}
