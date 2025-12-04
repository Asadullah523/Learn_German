import React, { useEffect, useRef } from 'react';
import { useTheme, themePresets } from '../context/ThemeContext';

export default function ParticleBackground() {
  const canvasRef = useRef(null);
  const { isDark, themePreset } = useTheme();
  const particlesRef = useRef([]);
  const animationFrameRef = useRef(null);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Get current theme data
    const currentTheme = themePresets[themePreset];
    const animationType = currentTheme.animation;
    const particleColor = currentTheme.particleColor;
    const particleType = currentTheme.particleType || 'dots';

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = width;
      canvas.height = height;
    };
    setCanvasSize();

    // Base Particle class
    class Particle {
      constructor() {
        this.reset();
        this.y = Math.random() * height;
        this.opacity = Math.random();
        this.phase = Math.random() * Math.PI * 2;
        
        // Leaf-specific properties
        if (particleType === 'leaves') {
          this.rotation = Math.random() * Math.PI * 2;
          this.rotationSpeed = (Math.random() - 0.5) * 0.05;
          this.swingAmplitude = 30 + Math.random() * 50;
        }
        
        // Orb-specific properties
        if (particleType === 'orbs') {
          this.glowIntensity = Math.random();
          this.pulseSpeed = 0.001 + Math.random() * 0.002;
        }
        
        // Electric-specific properties
        if (particleType === 'electric') {
          this.connectionDistance = 150;
          this.charge = Math.random() > 0.5 ? 1 : -1;
        }
      }

      reset() {
        this.x = Math.random() * width;
        this.y = -10;
        this.speed = 0.1 + Math.random() * 0.5;
        this.radius = 1 + Math.random() * 2;
        this.opacity = Math.random() * 0.5;
        this.drift = (Math.random() - 0.5) * 0.5;
      }

      update(time) {
        // Theme-specific movement patterns
        switch (animationType) {
          case 'wave': // Ocean - Wave motion with bubbles
            this.y += this.speed * 0.6;
            this.x += Math.sin(time * 0.001 + this.phase) * 1.2;
            // Bubbles rise
            if (Math.random() > 0.98) {
              this.y -= 2;
            }
            this.opacity = 0.3 + Math.sin(time * 0.002 + this.phase) * 0.2;
            break;
            
          case 'drift': // Forest - Falling leaves
            this.y += this.speed * 0.7;
            // Swing motion like falling leaves
            this.x += Math.sin(this.y * 0.01 + this.phase) * 0.8;
            this.rotation += this.rotationSpeed;
            this.opacity = 0.4 + Math.sin(time * 0.001 + this.phase) * 0.2;
            break;
            
          case 'pulse': // Sunset - Glowing orbs
            this.y += this.speed * 0.4;
            this.x += this.drift * 0.3;
            this.opacity = 0.5 + Math.sin(time * this.pulseSpeed + this.phase) * 0.4;
            this.glowIntensity = 0.5 + Math.sin(time * 0.003 + this.phase) * 0.5;
            this.radius = 2 + Math.sin(time * 0.002 + this.phase) * 1;
            break;
            
          case 'glow': // Neon - Electric particles
            this.y += this.speed * 0.8;
            this.x += Math.sin(time * 0.004 + this.phase) * 0.8;
            this.radius = 1.5 + Math.sin(time * 0.005 + this.phase) * 0.5;
            this.opacity = 0.6 + Math.sin(time * 0.003 + this.phase) * 0.3;
            break;
            
          default: // Default - Simple float
            this.y += this.speed;
            this.x += this.drift;
            this.x += Math.sin(this.y * 0.01) * 0.2;
        }
        
        // Reset if out of bounds
        if (this.y > height + 10) {
          this.reset();
        }
        
        if (this.x < -10 || this.x > width + 10) {
          this.x = Math.random() * width;
        }
      }

      draw(ctx) {
        ctx.save();
        
        // Draw based on particle type
        switch (particleType) {
          case 'leaves':
            this.drawLeaf(ctx);
            break;
          case 'bubbles':
            this.drawBubble(ctx);
            break;
          case 'orbs':
            this.drawOrb(ctx);
            break;
          case 'electric':
            this.drawElectric(ctx);
            break;
          default:
            this.drawDot(ctx);
        }
        
        ctx.restore();
      }

      drawDot(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        const color = particleColor.replace(/[\d.]+\)/, `${this.opacity})`);
        ctx.fillStyle = color;
        ctx.fill();
      }

      drawLeaf(ctx) {
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        
        // Draw leaf shape
        ctx.beginPath();
        ctx.moveTo(0, -this.radius * 2);
        ctx.quadraticCurveTo(this.radius * 1.5, -this.radius, this.radius * 1.5, 0);
        ctx.quadraticCurveTo(this.radius * 1.5, this.radius, 0, this.radius * 2);
        ctx.quadraticCurveTo(-this.radius * 1.5, this.radius, -this.radius * 1.5, 0);
        ctx.quadraticCurveTo(-this.radius * 1.5, -this.radius, 0, -this.radius * 2);
        
        const color = particleColor.replace(/[\d.]+\)/, `${this.opacity})`);
        ctx.fillStyle = color;
        ctx.fill();
      }

      drawBubble(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        
        // Outer circle
        const color = particleColor.replace(/[\d.]+\)/, `${this.opacity * 0.3})`);
        ctx.strokeStyle = color;
        ctx.lineWidth = 1;
        ctx.stroke();
        
        // Inner highlight
        ctx.beginPath();
        ctx.arc(this.x - this.radius * 0.3, this.y - this.radius * 0.3, this.radius * 0.3, 0, Math.PI * 2);
        const highlightColor = particleColor.replace(/[\d.]+\)/, `${this.opacity * 0.5})`);
        ctx.fillStyle = highlightColor;
        ctx.fill();
      }

      drawOrb(ctx) {
        // Outer glow
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius * 3);
        const color1 = particleColor.replace(/[\d.]+\)/, `${this.opacity * this.glowIntensity})`);
        const color2 = particleColor.replace(/[\d.]+\)/, '0)');
        gradient.addColorStop(0, color1);
        gradient.addColorStop(1, color2);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Core
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        const coreColor = particleColor.replace(/[\d.]+\)/, `${this.opacity})`);
        ctx.fillStyle = coreColor;
        ctx.fill();
      }

      drawElectric(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        
        // Electric glow
        ctx.shadowBlur = 15;
        ctx.shadowColor = particleColor;
        
        const color = particleColor.replace(/[\d.]+\)/, `${this.opacity})`);
        ctx.fillStyle = color;
        ctx.fill();
        
        ctx.shadowBlur = 0;
      }
    }

    // Create particles
    const particleCount = Math.min(40, Math.floor((width * height) / 20000));
    particlesRef.current = Array.from({ length: particleCount }, () => new Particle());

    // Animation loop
    const animate = () => {
      timeRef.current += 16;
      ctx.clearRect(0, 0, width, height);
      
      // Draw connection lines for electric theme
      if (particleType === 'electric') {
        ctx.strokeStyle = particleColor.replace(/[\d.]+\)/, '0.1)');
        ctx.lineWidth = 1;
        
        for (let i = 0; i < particlesRef.current.length; i++) {
          for (let j = i + 1; j < particlesRef.current.length; j++) {
            const p1 = particlesRef.current[i];
            const p2 = particlesRef.current[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 150) {
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              const opacity = (1 - distance / 150) * 0.3;
              ctx.strokeStyle = particleColor.replace(/[\d.]+\)/, `${opacity})`);
              ctx.stroke();
            }
          }
        }
      }
      
      particlesRef.current.forEach(particle => {
        particle.update(timeRef.current);
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
  }, [isDark, themePreset]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.7 }}
    />
  );
}
