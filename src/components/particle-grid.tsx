'use client';

import React, { useRef, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  size: number;
  color: string;
}

export function ParticleGrid({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const particles: Particle[] = [];
    const mouse = { x: -1000, y: -1000, radius: 60 };

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initParticles();
    };

    const initParticles = () => {
      particles.length = 0;
      const gap = 25;
      const primaryColor = 'hsl(211, 100%, 50%)'; // Blue
      const accentColor = 'hsl(16, 89%, 61%)'; // Orange

      for (let y = 0; y < canvas.height; y += gap) {
        for (let x = 0; x < canvas.width; x += gap) {
          particles.push({
            x: x,
            y: y,
            originX: x,
            originY: y,
            size: 1,
            color: Math.random() > 0.95 ? accentColor : primaryColor,
          });
        }
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const force = (mouse.radius - distance) / mouse.radius;

        let directionX = 0;
        let directionY = 0;
        if (distance < mouse.radius) {
          directionX = -forceDirectionX * force * 5;
          directionY = -forceDirectionY * force * 5;
        } else {
          directionX = (p.originX - p.x) * 0.1;
          directionY = (p.originY - p.y) * 0.1;
        }

        p.x += directionX;
        p.y += directionY;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        const opacity =
          1 -
          Math.min(
            1,
            Math.sqrt(
              (p.x - p.originX) ** 2 + (p.y - p.originY) ** 2
            ) / 100
          );
        ctx.fillStyle = `hsla(var(--primary-hsl), ${opacity})`;
        ctx.fillStyle = p.color.replace(')', `, ${opacity})`).replace('hsl', 'hsla');
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className={cn('absolute inset-0 -z-10 h-full w-full', className)}
    />
  );
}
