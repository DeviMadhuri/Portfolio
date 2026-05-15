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

                    <div className="mt-20">
                        <h3 className="text-3xl font-bold text-white text-center mb-12">Tools & Technologies</h3>
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

                    <div className="mt-12">
                        <h3 className="text-2xl font-bold text-white text-center mb-6">Certifications</h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {[
                                'AWS Developer Associate (2025)',
                                'AWS Cloud Practitioner'
                            ].map((cert, i) => (
                                <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-sm text-indigo-300 font-medium">
                                    <div className="w-2 h-2 rounded-full bg-indigo-500" />
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