"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import { useTheme } from "next-themes";

const ParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();
  const [particleColor, setParticleColor] = useState("rgba(190, 112, 255, 0.2)");
  const [lineColor, setLineColor] = useState("rgba(112, 228, 255, 0.2)");

  useEffect(() => {
    if (resolvedTheme === 'dark') {
      setParticleColor("rgba(190, 112, 255, 0.2)");
      setLineColor("rgba(112, 228, 255, 0.2)");
    } else {
      setParticleColor("rgba(190, 112, 255, 0.4)");
      setLineColor("rgba(112, 228, 255, 0.4)");
    }
  }, [resolvedTheme]);


  const draw = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      frame: number,
      particles: any[],
      w: number,
      h: number
    ) => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = particleColor;
      ctx.strokeStyle = lineColor;

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        particles.forEach((p2) => {
          const dist = Math.sqrt(Math.pow(p.x - p2.x, 2) + Math.pow(p.y - p2.y, 2));
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(() => draw(ctx, frame + 1, particles, w, h));
    },
    [particleColor, lineColor]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const particles: any[] = [];
    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: Math.random() * 0.5 - 0.25,
        vy: Math.random() * 0.5 - 0.25,
        size: Math.random() * 2 + 1,
      });
    }

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    let animationFrameId: number;
    
    const render = () => {
        draw(ctx, 0, particles, w, h);
        animationFrameId = requestAnimationFrame(render);
    }
    
    render();

    return () => {
        window.removeEventListener("resize", handleResize);
        cancelAnimationFrame(animationFrameId);
    }
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 h-full w-full"
    />
  );
};

export default ParticlesBackground;
