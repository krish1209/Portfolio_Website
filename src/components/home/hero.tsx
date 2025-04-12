import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions to match window
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);
    
    // Create chart lines
    const lines: { x: number, y: number[], color: string, speed: number, width: number }[] = [];
    
    // Create several lines with different speeds and colors
    for (let i = 0; i < 12; i++) {
      const pointCount = 120;
      const yValues = [];
      let y = canvas.height / 2 + (Math.random() * 120 - 60);
      
      // Generate initial y values
      for (let j = 0; j < pointCount; j++) {
        y += Math.random() * 6 - 3;
        yValues.push(y);
      }
      
      // Add line with random color and speed
      lines.push({
        x: Math.random() * canvas.width,
        y: yValues,
        color: `rgba(${Math.random() * 80 + 140}, ${Math.random() * 80 + 140}, 255, ${Math.random() * 0.1 + 0.2})`,
        speed: Math.random() * 0.4 + 0.15,
        width: Math.random() * 2 + 1.5
      });
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (const line of lines) {
        // Move line horizontally
        line.x += line.speed;
        if (line.x > canvas.width) {
          line.x = 0;
        }
        
        // Draw line
        ctx.beginPath();
        for (let i = 0; i < line.y.length; i++) {
          const x = line.x + i * (canvas.width / line.y.length) - canvas.width;
          if (x >= 0 && x <= canvas.width) {
            if (i === 0) {
              ctx.moveTo(x, line.y[i]);
            } else {
              ctx.lineTo(x, line.y[i]);
            }
          }
        }
        
        ctx.strokeStyle = line.color;
        ctx.lineWidth = line.width || 2;
        ctx.stroke();
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-foreground align-middle overflow-hidden">
      {/* Stock market background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-30 bg-cover bg-no-repeat bg-center"
             style={{
               backgroundImage: "url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop')",
               filter: "contrast(110%) brightness(110%)"
             }}
        ></div>
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full opacity-40"
        ></canvas>
        <div className="absolute inset-0 bg-foreground opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white p-8">
        <Link href="/projects">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight cursor-pointer hover:opacity-80 transition-opacity drop-shadow-lg">
            View my work
          </h1>
        </Link>
      </div>
    </div>
  );
}
