"use client";

import { useEffect, useRef } from "react";

const GLYPHS =
  "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789";
const FONT_SIZE = 16;
const FRAME_MS = 60; // ~16 fps: slow, ambient fall

/**
 * Full-page "Matrix" falling-glyph background, drawn on a fixed canvas behind
 * all content. Colors follow the theme tokens (--primary / --success).
 */
export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let drops: number[] = [];
    let frame = 0;
    let last = 0;

    const tokenColor = (name: string) => {
      const rgb = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
      return rgb.split(/\s+/).join(", ");
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const columns = Math.ceil(window.innerWidth / FONT_SIZE);
      // Start each column at a random height so the screen is filled right away.
      drops = Array.from({ length: columns }, () =>
        Math.floor((Math.random() * window.innerHeight) / FONT_SIZE),
      );
    };

    const draw = (time: number) => {
      frame = requestAnimationFrame(draw);
      if (time - last < FRAME_MS) return;
      last = time;

      const width = window.innerWidth;
      const height = window.innerHeight;

      // Fade previous glyphs while keeping the canvas transparent.
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
      ctx.fillRect(0, 0, width, height);
      ctx.globalCompositeOperation = "source-over";

      const primary = tokenColor("--primary");
      const success = tokenColor("--success");
      ctx.font = `${FONT_SIZE}px var(--font-mono), monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Only some columns move each frame, for an uneven, organic rain.
        if (Math.random() > 0.55) continue;
        const glyph = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        const x = i * FONT_SIZE;
        const y = drops[i] * FONT_SIZE;
        ctx.fillStyle = `rgba(${i % 3 === 0 ? success : primary}, 0.9)`;
        ctx.fillText(glyph, x, y);

        if (y > height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
    };

    resize();
    window.addEventListener("resize", resize);
    if (!reduceMotion) frame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-20 h-screen w-screen opacity-[0.18]"
    />
  );
}
