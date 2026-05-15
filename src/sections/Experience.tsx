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
            title: 'AWS Data Engineer',
            company: 'State Farm',
            location: 'Chicago, IL',
            period: 'July 2024 – Present',
            points: [
                'Led development of ETL/ELT solutions aligned with master data management strategy, processing 2+ TB of P&C insurance data daily across Auto, Home, and Umbrella.',
                'Designed data quality frameworks with lineage tracking, validation rules, and monitoring to support 10+ downstream teams.',
                'Built production pipelines using AWS Glue, EMR, PySpark, Python, and SQL, reducing runtime by 30% through partitioning and parallel execution.',
                'Implemented CI/CD pipelines with GitLab and Jenkins for automated deployment of data solutions.',
                'Managed Terraform infrastructure for pipeline components, error handling, and monitoring, and integrated Splunk to reduce incident response time by 35%.',
                'Provided technical guidance on data architecture and solution design while ensuring enterprise governance compliance.'
            ],
            skills: ['AWS Glue', 'PySpark', 'Terraform', 'GitLab', 'Jenkins', 'Splunk']
        },
        {
            type: 'work',
            title: 'Data Engineer',
            company: 'Bank of America',
            location: 'Hartford, CT',
            period: 'August 2022 – June 2024',
            points: [
                'Built data quality frameworks, lineage tracking, validation rules, and automated monitoring for enterprise financial data.',
                'Developed semantic data models and dbt transformations to centralize master data definitions across reporting pipelines.',
                'Architected Databricks and Delta Lake solutions for ACID-compliant versioned storage and auditable data management.',
                'Optimized pipeline performance through SQL tuning, partitioning, and caching, reducing average runtime by 35%.',
                'Collaborated with compliance, finance, and engineering teams to translate technical architecture into business-aligned data solutions.',
                'Performed root cause analysis for production issues and escalated critical risks to management for resolution.'
            ],
            skills: ['dbt', 'Databricks', 'Delta Lake', 'SQL', 'Python', 'Airflow']
        },
        {
            type: 'work',
            title: 'Python Developer',
            company: 'Dentsu',
            location: 'India',
            period: 'August 2020 – December 2021',
            points: [
                'Implemented MLOps best practices using MLflow and Azure ML for model versioning, monitoring, and deployment.',
                'Built sentiment analysis and predictive models with Python, TensorFlow, and HuggingFace for streaming Kafka and BigQuery data.',
                'Orchestrated workflows using Apache Airflow to reduce manual intervention and maintain pipeline consistency.',
                'Developed monitoring dashboards and alerting scripts to shift from reactive to proactive incident response.',
                'Delivered REST APIs with Flask and Django to provide self-service data access across teams.',
                'Processed batch data in CSV, JSON, XML, Excel, and Parquet formats and improved pipeline throughput by 25%.'
            ],
            skills: ['Python', 'Airflow', 'Azure ML', 'Flask', 'Django', 'Kafka']
        },
        {
            type: 'education',
            title: "Master's in Computer and Information Systems",
            company: 'New England College',
            location: 'Henniker, NH',
            period: '2023',
            points: ['GPA: 3.95', 'Focused on database systems, cloud computing, and analytics.'],
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