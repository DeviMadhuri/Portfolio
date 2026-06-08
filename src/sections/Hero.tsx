import { Download, Github, Linkedin } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-slate-950" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 w-72 h-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute right-8 top-28 w-64 h-64 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-indigo-900/10" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-indigo-300">Open to opportunities</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-indigo-400">
              Devi Madhuri
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-300 mb-6">
              Data Engineer
            </h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-lg">
              Building production-grade data pipelines, cloud platforms, and RAG systems on AWS.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="./Devi_Madhuri_Donthra_Boina.pdf"
                download="Devi_Madhuri_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all duration-200"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
              <a href="https://github.com/DeviMadhuri" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-900 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-800 transition-all">
                <Github className="w-5 h-5 text-slate-400" />
              </a>
              <a href="https://linkedin.com/in/devi-madhuri1205" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-900 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-800 transition-all">
                <Linkedin className="w-5 h-5 text-slate-400" />
              </a>
            </div>
          </div>
          <div className="hidden md:flex justify-center items-center">
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-indigo-500/30 shadow-2xl bg-slate-950/70">
              <img src="Profile-pic.jpg" alt="Devi Madhuri" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
