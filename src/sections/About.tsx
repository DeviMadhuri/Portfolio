import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Database, Cloud, Brain, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function About() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.about-card', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const highlights = [
        {
            icon: Cloud,
            title: 'Cloud Architecture',
            desc: 'AWS solutions that scale with business needs'
        },
        {
            icon: Brain,
            title: 'Gen AI & ML',
            desc: 'RAG systems on Bedrock & SageMaker'
        },
        {
            icon: Database,
            title: 'Data Lakehouse',
            desc: 'Apache Iceberg & Delta Lake implementations'
        },
        {
            icon: Shield,
            title: 'Data Quality',
            desc: 'Great Expectations & dbt implementations'
        }
    ];

    return (
        <section ref={sectionRef} id="about" className="py-32 bg-slate-950">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
                        <div>
                            <h2 className="text-sm font-semibold text-indigo-500 uppercase tracking-wider mb-4">
                                About Me
                            </h2>
                            <div className="space-y-4 text-slate-400 text-lg">
                                <p>
                                    I'm Devi Madhuri, a Senior AWS Data Engineer with 6 years of experience designing and operating large-scale data platforms. I specialize in building resilient ETL pipelines, cloud-native data architectures, and Gen AI solutions using AWS Bedrock and SageMaker.
                                </p>
                                <p>
                                    My expertise spans financial services and insurance, with deep experience in regulated environments where data governance, lineage, and pipeline reliability are critical. I believe great data engineering is invisible—when pipelines run flawlessly, insights flow naturally.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {highlights.map((item, index) => (
                                <div
                                    key={index}
                                    className="about-card p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/30 transition-all group"
                                >
                                    <item.icon className="w-8 h-8 text-indigo-400 mb-4 group-hover:scale-110 transition-transform" />
                                    <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                                    <p className="text-sm text-slate-400">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}