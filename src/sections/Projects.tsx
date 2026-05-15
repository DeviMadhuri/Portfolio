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
          <h3 className="text-4xl font-bold text-white mb-6">Featured Projects</h3>
          <p className="text-slate-400 text-lg mb-8">
            Selected data engineering and RAG solutions demonstrating cloud ETL, model orchestration, and production-ready data governance.
          </p>
          <div className="grid gap-6 mb-10 lg:grid-cols-2">
            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/30 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-white">RAG Chatbot</h4>
                  <p className="text-slate-500 text-sm">LangChain, OpenAI GPT-4o-mini, ChromaDB, Streamlit</p>
                </div>
              </div>
              <p className="text-slate-400 mb-4">
                Built a PDF-powered Q&A system that ingests documents, creates vector embeddings, and returns cited answers using OpenAI.
              </p>
              <div className="flex flex-wrap gap-2">
                {['LangChain', 'OpenAI', 'ChromaDB', 'Streamlit', 'Python'].map((tool, index) => (
                  <span key={index} className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 text-xs border border-indigo-500/20">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/30 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-white">Real-Time Sentiment Pipeline</h4>
                  <p className="text-slate-500 text-sm">Kafka, PySpark, HuggingFace, Delta Lake, Streamlit</p>
                </div>
              </div>
              <p className="text-slate-400 mb-4">
                Developed a streaming pipeline to process product reviews, run inference with transformers, and surface sentiment trends in real time.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Kafka', 'PySpark', 'HuggingFace', 'Delta Lake', 'Streamlit'].map((tool, index) => (
                  <span key={index} className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 text-xs border border-indigo-500/20">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://github.com/DeviMadhuri" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8">
                <Github className="mr-2 w-5 h-5" />
                View GitHub
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