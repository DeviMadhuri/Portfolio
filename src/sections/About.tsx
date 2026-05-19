import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cloud, Code2, Zap, Database, Wrench } from 'lucide-react';

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

    const skills = [
        {
            icon: Cloud,
            title: '☁️ Cloud & Platforms',
            items: ['AWS', 'Databricks', 'Azure']
        },
        {
            icon: Code2,
            title: '💻 Languages',
            items: ['Python', 'SQL', 'Scala', 'JavaScript']
        },
        {
            icon: Zap,
            title: '🔧 Big Data & Processing',
            items: ['Spark', 'PySpark', 'Kafka', 'Airflow', 'dbt']
        },
        {
            icon: Database,
            title: '🗄️ Databases & Warehouses',
            items: ['PostgreSQL', 'Redshift', 'MongoDB', 'Snowflake', 'Delta Lake']
        },
        {
            icon: Wrench,
            title: '🛠️ DevOps & Tools',
            items: ['Terraform', 'Docker', 'Kubernetes', 'Git', 'GitHub Actions']
        }
    ];

    return (
        <section ref={sectionRef} id="about" className="py-32 bg-slate-900/30 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-transparent to-purple-500/5 pointer-events-none" />
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-16">
                        <h2 className="text-sm font-semibold text-indigo-500 uppercase tracking-wider mb-6">
                            About Me
                        </h2>
                        <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                            <p>
                                I'm Devi Madhuri, a data engineer with 5+ years of experience building and maintaining production-grade ETL/ELT pipelines and cloud data platforms.
                                I work across financial services and insurance, delivering scalable AWS and Azure solutions that prioritize data quality, governance, and compliance.
                            </p>
                            <p>
                                I focus on master data management, data lineage, validation rules and observability, while also building Gen AI and RAG systems using LangChain, OpenAI, and vector databases.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 mt-12">
                            <div className="p-6 rounded-xl bg-slate-800/20 border border-slate-700/50 hover:border-indigo-500/30 transition-all">
                                <h4 className="text-indigo-400 font-semibold mb-2 text-sm uppercase tracking-wide">What I Do</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Design and build scalable data infrastructure that processes petabyte-scale datasets with reliability, performance, and governance at its core.
                                </p>
                            </div>
                            <div className="p-6 rounded-xl bg-slate-800/20 border border-slate-700/50 hover:border-indigo-500/30 transition-all">
                                <h4 className="text-indigo-400 font-semibold mb-2 text-sm uppercase tracking-wide">My Focus</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Data quality, lineage tracking, observability, and modern data architecture patterns. Also exploring AI/ML integration with retrieval systems.
                                </p>
                            </div>
                            <div className="p-6 rounded-xl bg-slate-800/20 border border-slate-700/50 hover:border-indigo-500/30 transition-all">
                                <h4 className="text-indigo-400 font-semibold mb-2 text-sm uppercase tracking-wide">Beyond Work</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    I'm an artist passionate about visual expression and creative exploration. Abstract and contemporary work fuel my creativity outside of engineering.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-20">
                        <h3 className="text-3xl font-bold text-white mb-10">Tools & Technologies</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                            {skills.map((skill, index) => (
                                <div key={index} className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/30 transition-all duration-300 group">
                                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
                                        <skill.icon className="w-6 h-6 text-indigo-400" />
                                    </div>
                                    <h4 className="text-lg font-semibold text-white mb-4">{skill.title}</h4>
                                    <div className="space-y-2">
                                        {skill.items.map((item, i) => (
                                            <div key={i} className="text-slate-400 text-sm flex items-center">
                                                <span className="w-2 h-2 rounded-full bg-indigo-400 mr-2" />
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-white text-center mb-8">Certifications</h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            {[
                                'AWS Developer Associate (2025)',
                                'AWS Cloud Practitioner'
                            ].map((cert, i) => (
                                <div key={i} className="flex items-center gap-3 px-6 py-3 rounded-lg bg-indigo-500/15 border border-indigo-500/40 text-base text-indigo-300 font-semibold hover:bg-indigo-500/20 transition-all">
                                    <div className="w-3 h-3 rounded-full bg-indigo-400" />
                                    {cert}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}