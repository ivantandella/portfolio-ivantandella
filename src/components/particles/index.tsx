import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  baseAlpha: number;
}

export default function AntigravityParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Particle[] = [];
    // Sparse — 1 particle per ~20000px² area, capped at 45
    const count = Math.min(Math.floor((width * height) / 20000), 45);

    const mouse = { x: -9999, y: -9999, radius: 100 };

    for (let i = 0; i < count; i++) {
      const alpha = 0.12 + Math.random() * 0.2;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: 1 + Math.random() * 1.5,
        alpha,
        baseAlpha: alpha,
      });
    }

    const onResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const onMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    const tick = () => {
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < -2) p.x = width + 2;
        if (p.x > width + 2) p.x = -2;
        if (p.y < -2) p.y = height + 2;
        if (p.y > height + 2) p.y = -2;

        // Repulse from mouse
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius && dist > 0) {
          const force = ((mouse.radius - dist) / mouse.radius) * 2.5;
          const angle = Math.atan2(dy, dx);
          p.x -= Math.cos(angle) * force;
          p.y -= Math.sin(angle) * force;
          p.alpha = Math.min(p.baseAlpha + 0.25, 0.55);
        } else {
          p.alpha += (p.baseAlpha - p.alpha) * 0.06;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 216, 245, ${p.alpha})`;
        // Soft glow only when hovered (avoids constant re-paint cost)
        if (dist < mouse.radius) {
          ctx.shadowColor = "#00D8F5";
          ctx.shadowBlur = 6;
        } else {
          ctx.shadowBlur = 0;
        }
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        // Floats ABOVE content so it's always visible, never covered by section bg
        zIndex: 0,
        // Clicks pass through to elements below
        pointerEvents: "none",
      }}
    />
  );
}
