import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ParticleField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    opacity: number;
  }>>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Initialize particles
    const particleCount = window.innerWidth < 768 ? 25 : 50;
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3 - 0.2,
      radius: Math.random() * 2 + 2,
      opacity: Math.random() * 0.3 + 0.3,
    }));

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle, i) => {
        // Mouse repulsion
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          const force = (100 - dist) / 100;
          particle.vx -= (dx / dist) * force * 0.5;
          particle.vy -= (dy / dist) * force * 0.5;
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Damping
        particle.vx *= 0.99;
        particle.vy *= 0.99;

        // Add slight upward drift
        particle.vy -= 0.005;

        // Wrap around
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.fill();

        // Draw connections
        particlesRef.current.slice(i + 1).forEach((other) => {
          const dx2 = particle.x - other.x;
          const dy2 = particle.y - other.y;
          const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

          if (dist2 < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - dist2 / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="particle-canvas"
      style={{ opacity: 0.6 }}
    />
  );
};

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

      // Orbital ring rotation
      gsap.to(ringRef.current, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: 'none',
      });

      // Profile image entrance
      tl.fromTo(
        imageRef.current,
        { rotateY: -45, z: -200, opacity: 0 },
        { rotateY: 0, z: 100, opacity: 1, duration: 1.2 },
        0.2
      );

      // Name letter reveal
      if (nameRef.current) {
        const letters = nameRef.current.querySelectorAll('.letter');
        tl.fromTo(
          letters,
          { y: '100%', opacity: 0 },
          { y: '0%', opacity: 1, duration: 0.8, stagger: 0.04 },
          0.4
        );
      }

      // Title slide + blur
      tl.fromTo(
        titleRef.current,
        { x: -80, filter: 'blur(10px)', opacity: 0 },
        { x: 0, filter: 'blur(0px)', opacity: 1, duration: 0.7 },
        0.8
      );

      // Description fade rise
      tl.fromTo(
        descRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        1
      );

      // Buttons stagger pop
      if (buttonsRef.current) {
        const buttons = buttonsRef.current.querySelectorAll('button');
        tl.fromTo(
          buttons,
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.4, stagger: 0.1, ease: 'elastic.out(1, 0.5)' },
          1.2
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nameLetters = 'Devi Madhuri'.split('');

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
      style={{ perspective: '1200px' }}
    >
      {/* Particle Background */}
      <ParticleField />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left" style={{ transformStyle: 'preserve-3d' }}>
            {/* Name */}
            <h1
              ref={nameRef}
              className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-4 overflow-hidden"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {nameLetters.map((letter, i) => (
                <span key={i} className="letter inline-block" style={{ whiteSpace: letter === ' ' ? 'pre' : 'normal' }}>
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </h1>

            {/* Title */}
            <p
              ref={titleRef}
              className="text-xl sm:text-2xl text-gray-400 mb-6 tracking-wide"
            >
              AWS Data Engineer
            </p>

            {/* Description */}
            <p
              ref={descRef}
              className="text-base sm:text-lg text-gray-500 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Crafting scalable data pipelines and cloud-native solutions that transform 
              raw data into actionable intelligence. 5+ years building enterprise-grade 
              ETL systems.
            </p>

            {/* CTA Buttons */}
            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection('projects')}
                className="group bg-white text-black hover:bg-gray-200 px-8 py-6 text-base font-medium transition-all duration-300"
              >
                View My Work
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="group border-white/30 text-white hover:bg-white/10 px-8 py-6 text-base font-medium transition-all duration-300"
              >
                Get In Touch
                <Mail className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center" style={{ transformStyle: 'preserve-3d' }}>
            <div
              ref={imageRef}
              className="relative"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Orbital Ring */}
              <div
                ref={ringRef}
                className="absolute inset-0 -m-8 rounded-full border border-white/10"
                style={{
                  width: 'calc(100% + 64px)',
                  height: 'calc(100% + 64px)',
                }}
              >
                {/* Ring glow points */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-white/50 rounded-full" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-white/30 rounded-full" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white/40 rounded-full" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white/20 rounded-full" />
              </div>

              {/* Image Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden glow-white animate-float-slow">
                <img
                  src="/profile.jpg"
                  alt="Devi Madhuri"
                  className="w-full h-full object-cover"
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Glow effect behind */}
              <div className="absolute inset-0 -z-10 rounded-full bg-white/5 blur-3xl scale-110" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#010101] to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
