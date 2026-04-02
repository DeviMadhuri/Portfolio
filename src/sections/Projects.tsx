import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';

gsap.registerPlugin(ScrollTrigger);

export function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.projects-content', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
        y: 50, opacity: 0, duration: 0.8, ease: 'power3.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-24 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center projects-content">
          <h2 className="text-sm font-semibold text-indigo-500 uppercase tracking-wider mb-4">Portfolio</h2>
          <h3 className="text-4xl font-bold text-white mb-6">Projects & Learning</h3>
          <p className="text-slate-400 text-lg mb-8">
            I learn something new every day and add it to GitHub.
            Check out my repositories to see what I'm currently working on.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://github.com/DeviMadhuri" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8">
                <Github className="mr-2 w-5 h-5" />
                View My GitHub
              </Button>
            </a>
            <a href="https://github.com/DeviMadhuri?tab=repositories" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-slate-700 hover:bg-slate-800 text-white">
                <ExternalLink className="mr-2 w-4 h-4" />
                All Repositories
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}