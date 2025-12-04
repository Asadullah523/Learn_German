import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function ParticleBackground() {
  const canvasRef = useRef(null);
  const { isDark } = useTheme();
  const particlesRef = useRef([]);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = width;
      canvas.height = height;
    };
    setCanvasSize();

    // Particle class
    class Particle {
      constructor() {
        this.reset();
        this.y = Math.random() * height;
        this.opacity = Math.random();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = -10;
        this.speed = 0.1 + Math.random() * 0.5;
        this.radius = 1 + Math.random() * 2;
        this.opacity = Math.random() * 0.5;
        this.drift = (Math.random() - 0.5) * 0.5;
      }

      update() {
        this.y += this.speed;
        this.x += this.drift;
        
        // Gentle floating motion
        this.x += Math.sin(this.y * 0.01) * 0.2;
        
        // Reset if out of bounds
        if (this.y > height + 10) {
          this.reset();
        }
        
        if (this.x < -10 || this.x > width + 10) {
          this.x = Math.random() * width;
        }
      }

      draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = isDark 
          ? `rgba(139, 192, 255, ${this.opacity * 0.4})`  // Light blue for dark mode
          : `rgba(59, 130, 246, ${this.opacity * 0.3})`;   // Primary blue for light mode
        ctx.fill();
      }
    }

    // Create particles
    const particleCount = Math.min(50, Math.floor((width * height) / 15000));
    particlesRef.current = Array.from({ length: particleCount }, () => new Particle());

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      particlesRef.current.forEach(particle => {
        particle.update();
        particle.draw(ctx);
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      setCanvasSize();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
}
