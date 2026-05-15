import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function About() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.about-content', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
                y: 50,
                opacity: 0,
                duration: 0.8
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="about" className="py-32 bg-slate-950">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-sm font-semibold text-indigo-500 uppercase tracking-wider mb-4">
                                About Me
                            </h2>
                            <div className="space-y-4 text-slate-400 text-lg">
                                <p>
                                    I'm Devi Madhuri, a data engineer with 5+ years of experience building and maintaining production-grade ETL/ELT pipelines and cloud data platforms.
                                    I work across financial services and insurance, delivering scalable AWS and Azure solutions that prioritize data quality, governance, and compliance.
                                </p>
                                <p>
                                    I focus on master data management, data lineage, validation rules and observability, while also building Gen AI and RAG systems using LangChain, OpenAI, and vector databases.
                                </p>
                            </div>
                        </div>

                        <div className="grid gap-4">
                            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl bg-slate-950/70">
                                <img src="Profile-pic.jpg" alt="Profile picture" className="w-full h-[340px] object-cover transition-transform duration-700 hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}