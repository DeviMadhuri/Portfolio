import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Linkedin, Github, Twitter, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Brand animation
      gsap.fromTo(
        brandRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Social icons animation
      if (socialsRef.current) {
        const icons = socialsRef.current.querySelectorAll('a');
        gsap.fromTo(
          icons,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.3,
            stagger: 0.05,
            ease: 'elastic.out(1, 0.5)',
            scrollTrigger: {
              trigger: footerRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      ref={footerRef}
      className="relative w-full py-16 border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Brand */}
          <div ref={brandRef} className="text-center mb-8">
            <button
              onClick={scrollToTop}
              className="group inline-flex flex-col items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/30 group-hover:bg-white/10 transition-all duration-300">
                <span
                  className="text-2xl font-light text-white"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  DM
                </span>
              </div>
              <span className="text-gray-500 text-sm">Crafting Data Solutions</span>
            </button>
          </div>

          {/* Social Links */}
          <div ref={socialsRef} className="flex gap-4 mb-8">
            <a
              href="https://linkedin.com/in/devi-madhuri1205"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:scale-110 hover:rotate-6 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-white" />
            </a>
            <a
              href="https://github.com/DeviMadhuri"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:scale-110 hover:rotate-6 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4 text-white" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-600 text-sm flex items-center gap-1 justify-center">
              © {new Date().getFullYear()} Devi Madhuri. Made with
              <Heart className="w-3 h-3 text-red-400 fill-red-400" />
              in Chicago
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
