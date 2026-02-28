import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, GraduationCap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function Experience() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.timeline-item', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
                x: -50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.3
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const experiences = [
        {
            type: 'work',
            title: 'Senior AWS Data Engineer',
            company: 'State Farm',
            location: 'Chicago, IL',
            period: 'July 2024 – Present',
            points: [
                'Built ETL pipelines processing 2+TB daily using AWS Glue, Lambda, PySpark, cutting runtime by 30%',
                'Implemented RAG pipeline on Amazon Bedrock & SageMaker for real-time context-aware insights',
                'Migrated S3 to Apache Iceberg tables with Starburst query engine (20% faster cross-source queries)',
                'Built data quality layer using Great Expectations with lineage tracking and Splunk alerting',
                'Managed infrastructure with Terraform/OpenTofu including SQS error queues and automated alerting',
                'Wrote dbt models reducing ad-hoc SQL requests by 40%',
                'Set up S3 lifecycle policies reducing storage costs by 20%'
            ],
            skills: ['AWS Glue', 'PySpark', 'Bedrock', 'Iceberg', 'dbt', 'Terraform']
        },
        {
            type: 'work',
            title: 'Python Data Engineer',
            company: 'Bank of America',
            location: 'Hartford, CT',
            period: 'August 2022 – June 2024',
            points: [
                'Built batch & streaming pipelines using Python, Spark, Kafka for 10+ downstream teams',
                'Implemented Delta Lake on Databricks for ACID-compliant, versioned storage',
                'Set up CI/CD for ML deployments using Docker, Kubernetes, Jenkins (40% faster deployments)',
                'Tuned Spark jobs via partition pruning & broadcast joins (35% runtime reduction)',
                'Managed Airflow for 15+ daily pipeline runs with SLA alerting',
                'Built Flask REST APIs serving data to Tableau dashboards'
            ],
            skills: ['Python', 'Spark', 'Airflow', 'Delta Lake', 'Docker', 'Kubernetes']
        },
        {
            type: 'work',
            title: 'AWS Data Engineer / Python Developer',
            company: 'Dentsu',
            location: 'India',
            period: '2020 – December 2021',
            points: [
                'Built ETL pipelines integrating 20+ sources using Python, PySpark, AWS Glue, EMR',
                'Improved ETL throughput by 25% via Glue/EMR optimizations',
                'Migrated SQL Server to Redshift improving query speed by 30%',
                'Set up CloudTrail/CloudWatch monitoring with real-time alerting',
                'Built REST APIs using Flask, Django, React, Node.js'
            ],
            skills: ['AWS', 'Python', 'React', 'Step Functions', 'Redshift']
        },
        {
            type: 'education',
            title: "Master's in Computer Information Systems",
            company: 'New England College',
            location: 'Henniker, NH',
            period: 'May 2023',
            points: ['GPA: 3.95/4.0', 'Specialized in database systems and cloud computing'],
            skills: []
        }
    ];

    return (
        <section ref={sectionRef} id="experience" className="py-32 bg-slate-950 relative">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-semibold text-indigo-500 uppercase tracking-wider mb-4">
                            Career Path
                        </h2>
                        <h3 className="text-4xl font-bold text-white">Professional Journey</h3>
                    </div>

                    <div className="relative">
                        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent hidden md:block" />

                        {experiences.map((exp, index) => (
                            <div key={index} className="timeline-item relative md:pl-24 mb-12 last:mb-0">
                                <div className="hidden md:flex absolute left-6 top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-indigo-500 items-center justify-center">
                                    {exp.type === 'education' ? (
                                        <GraduationCap className="w-3 h-3 text-indigo-400" />
                                    ) : (
                                        <Briefcase className="w-3 h-3 text-indigo-400" />
                                    )}
                                </div>

                                <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/30 transition-all">
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                        <div>
                                            <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                                            <p className="text-indigo-400 font-medium">{exp.company}</p>
                                        </div>
                                        <div className="text-right mt-2 md:mt-0">
                                            <span className="text-sm text-slate-400">{exp.period}</span>
                                            <p className="text-sm text-slate-500">{exp.location}</p>
                                        </div>
                                    </div>

                                    <ul className="space-y-2 mb-4">
                                        {exp.points.map((point, i) => (
                                            <li key={i} className="text-slate-400 text-sm flex items-start">
                                                <span className="text-indigo-500 mr-2">•</span>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>

                                    {exp.skills.length > 0 && (
                                        <div className="flex flex-wrap gap-2">
                                            {exp.skills.map((skill, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 rounded-full text-xs bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                                                >
                          {skill}
                        </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}