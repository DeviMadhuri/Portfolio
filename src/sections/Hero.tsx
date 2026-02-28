import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowDown, Download, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.hero-content > *', {
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power4.out'
            });
            gsap.from('.hero-image', {
                x: 100,
                opacity: 0,
                duration: 1.2,
                ease: 'power4.out',
                delay: 0.3
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-slate-950" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

                    <div className="hero-content text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            <span className="text-sm text-indigo-300">Available for opportunities</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-indigo-400">
                            Senior AWS<br />Data Engineer
                        </h1>

                        <p className="text-xl text-slate-400 mb-8 max-w-xl leading-relaxed">
                            6 years of experience building scalable ETL pipelines, cloud data warehouses, and Gen AI solutions across financial services and insurance.
                        </p>

                        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-12">
                            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8">
                                <a href="#projects">View Projects</a>
                            </Button>
                            <Button size="lg" variant="outline" className="border-slate-700 hover:bg-slate-800">
                                <Download className="mr-2 h-4 w-4" />
                                <a href="/DEVI_MADHURI_Resume.pdf" download>Download Resume</a>
                            </Button>
                        </div>

                        <div className="flex justify-center md:justify-start gap-4">
                            <a href="https://github.com/DeviMadhuri" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-900 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-800 transition-all">
                                <Github className="w-5 h-5 text-slate-400" />
                            </a>
                            <a href="https://linkedin.com/in/devi-madhuri1205" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-900 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-800 transition-all">
                                <Linkedin className="w-5 h-5 text-slate-400" />
                            </a>
                        </div>
                    </div>

                    <div className="hero-image relative flex justify-center">
                        <div className="relative w-full max-w-md aspect-square">
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl rotate-6 opacity-30 blur-2xl"></div>

                            <div className="relative bg-slate-900 rounded-3xl p-3 h-full border border-slate-800 shadow-2xl">
                                <img
                                    src="/Portfolio/profile-pic.jpg"
                                    alt="Devi Madhuri"
                                    className="w-full h-full object-cover rounded-2xl"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                                        if (fallback) fallback.style.display = 'flex';
                                    }}
                                />

                                <div className="hidden w-full h-full rounded-2xl bg-slate-800 flex-col items-center justify-center absolute inset-0">
                                    <span className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">DM</span>
                                </div>

                                <div className="absolute -bottom-4 -left-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-indigo-500/30 shadow-xl">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                                            <i className="fab fa-aws text-orange-400 text-xl"></i>
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold text-white">AWS Certified</div>
                                            <div className="text-xs text-slate-400">Developer Associate</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute -top-4 -right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-purple-500/30 shadow-xl">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                                            <i className="fas fa-brain text-blue-400 text-xl"></i>
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold text-white">Gen AI</div>
                                            <div className="text-xs text-slate-400">RAG Systems</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
                <ArrowDown className="w-6 h-6 text-slate-600" />
            </div>
        </section>
    );
}