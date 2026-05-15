import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    Cloud,
    Database,
    Code2,
    Container,
    Workflow,
    Brain,
    Shield,
    Server
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function Skills() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.skill-category', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 85%',
                },
                y: 30,
                opacity: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: 'power3.out'
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const skillCategories = [
        {
            icon: Cloud,
            title: 'AWS & Cloud',
            skills: ['Glue', 'Redshift', 'SageMaker', 'Bedrock', 'Lambda', 'EMR', 'Step Functions', 'S3', 'Athena']
        },
        {
            icon: Brain,
            title: 'Gen AI & ML',
            skills: ['Amazon Bedrock', 'SageMaker', 'LangChain', 'RAG Systems', 'HuggingFace', 'MLflow']
        },
        {
            icon: Database,
            title: 'Data Lakehouse',
            skills: ['Apache Iceberg', 'Delta Lake', 'Databricks', 'Starburst', 'Kafka', 'Delta Live Tables']
        },
        {
            icon: Workflow,
            title: 'Orchestration',
            skills: ['Apache Airflow', 'dbt', 'Great Expectations', 'Step Functions', 'Data Lineage']
        }
    ];

    return (
        <section ref={sectionRef} id="skills" className="py-24 md:py-32 bg-slate-950 border-y border-slate-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {skillCategories.map((category, index) => (
                            <div
                                key={index}
                                className="skill-category p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1 group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
                                    <category.icon className="w-6 h-6 text-indigo-400" />
                                </div>
                                <h4 className="font-semibold text-white mb-3 text-lg">{category.title}</h4>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-1 rounded-md bg-slate-800 text-xs text-slate-300 border border-slate-700 hover:border-indigo-500/30 transition-colors"
                                        >
                      {skill}
                    </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 md:mt-10">
                        <h3 className="text-2xl font-bold text-white text-center mb-4">Certifications</h3>
                        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                            {[
                                'AWS Developer Associate (2025)',
                                'AWS Cloud Practitioner'
                            ].map((cert, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-sm text-indigo-300 font-medium"
                                >
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