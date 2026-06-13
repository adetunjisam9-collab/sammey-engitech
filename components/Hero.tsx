"use client";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(100);

  const roles = ["Web Applications", "Mobile Apps", "AI Systems", "Embedded Chips", "Robotics", "The Future"];

  useEffect(() => {
    const ticker = setInterval(() => {
      const i = loopNum % roles.length;
      const fullText = roles[i];
      if (isDeleting) { setText(fullText.substring(0, text.length - 1)); setDelta(50); }
      else { setText(fullText.substring(0, text.length + 1)); setDelta(100); }
      if (!isDeleting && text === fullText) { setTimeout(() => setIsDeleting(true), 1500); }
      else if (isDeleting && text === "") { setIsDeleting(false); setLoopNum(loopNum + 1); setDelta(100); }
    }, delta);
    return () => clearInterval(ticker);
  }, [text, isDeleting, loopNum, delta]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animationId: number;

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.5 + 0.1,
      color: Math.random() > 0.6 ? "0, 255, 198" : "255, 255, 255",
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`;
        ctx.fill();
      });
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 255, 198, ${0.06 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => { cancelAnimationFrame(animationId); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden bg-gray-950">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: "#00FFC6" }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-5 blur-3xl" style={{ background: "#3B82F6" }}></div>
      </div>

      <div className="w-full max-w-6xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#00FFC6" }}></span>
          <span className="text-sm text-gray-300">Now accepting new projects</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
          We Build
          <br />
          <span style={{ color: "#00FFC6" }}>{text}</span>
          <span className="animate-pulse" style={{ color: "#00FFC6" }}>|</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-4 leading-relaxed">
          Building the future, one technology at a time.
        </p>
        <p className="text-base text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
          From web and mobile applications to AI systems, embedded chips and robotics — Sammey Engitech is where vision meets execution.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="#contact" className="px-8 py-4 rounded-lg font-medium text-base text-gray-950 hover:opacity-90 active:scale-95 transition duration-200" style={{ background: "#00FFC6" }}>Start a Project</a>
          <a href="#services" className="px-8 py-4 rounded-lg font-medium text-base text-white border border-white/20 hover:border-white/40 active:scale-95 transition duration-200">Explore Services</a>
        </div>

        <div className="flex items-center justify-center gap-10 text-center">
          <div>
            <p className="text-3xl font-bold text-white">2+</p>
            <p className="text-gray-500 text-sm mt-1">Projects Delivered</p>
          </div>
          <div className="w-px h-10 bg-white/10"></div>
          <div>
            <p className="text-3xl font-bold text-white">100%</p>
            <p className="text-gray-500 text-sm mt-1">Client Satisfaction</p>
          </div>
          <div className="w-px h-10 bg-white/10"></div>
          <div>
            <p className="text-3xl font-bold text-white">∞</p>
            <p className="text-gray-500 text-sm mt-1">Vision & Ambition</p>
          </div>
        </div>
      </div>
    </section>
  );
}
