import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function Projects() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.project-card', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 85%',
                },
                y: 50,
                opacity: 0,
                duration: 0.6,
                stagger: 0.15,
                ease: 'power3.out'
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const projects = [
        {
            title: 'RAG Pipeline on AWS Bedrock',
            description: 'Production RAG system using Amazon Bedrock and SageMaker, connected to live S3 and Redshift streams for real-time context-aware insights.',
            gradient: 'from-pink-600 to-purple-600',
            tags: ['Bedrock', 'SageMaker', 'Python', 'Redshift'],
            metric: 'Real-time Gen AI insights',
            github: 'https://github.com/DeviMadhuri',
            demo: '#'
        },
        {
            title: 'Apache Iceberg Data Lakehouse',
            description: 'Migrated S3 storage to Apache Iceberg tables with Starburst query engine for schema evolution and time-travel queries.',
            gradient: 'from-blue-600 to-cyan-600',
            tags: ['Iceberg', 'Starburst', 'S3', 'PySpark'],
            metric: '20% faster queries',
            github: 'https://github.com/DeviMadhuri',
            demo: '#'
        },
        {
            title: 'Great Expectations Data Quality',
            description: 'Built data quality layer with validation rules, lineage tracking, and Splunk alerting across ingestion stages.',
            gradient: 'from-green-600 to-emerald-600',
            tags: ['Great Expectations', 'Python', 'Airflow', 'Splunk'],
            metric: 'Proactive issue detection',
            github: 'https://github.com/DeviMadhuri',
            demo: '#'
        },
        {
            title: 'dbt Analytics Transformation',
            description: 'Centralized business logic using dbt models with version control. Served data via Flask APIs to Tableau.',
            gradient: 'from-orange-600 to-red-600',
            tags: ['dbt', 'Redshift', 'Flask', 'Tableau'],
            metric: '40% less ad-hoc SQL',
            github: 'https://github.com/DeviMadhuri',
            demo: '#'
        },
        {
            title: 'Real-Time Streaming Architecture',
            description: 'Implemented Kafka and Spark Structured Streaming for real-time processing with DynamoDB and Cassandra.',
            gradient: 'from-yellow-600 to-orange-600',
            tags: ['Kafka', 'Spark Streaming', 'DynamoDB', 'Python'],
            metric: 'Sub-second latency',
            github: 'https://github.com/DeviMadhuri',
            demo: '#'
        },
        {
            title: 'Terraform Infrastructure Automation',
            description: 'Reusable Terraform modules for multi-environment AWS infrastructure with OpenTofu and automated compliance.',
            gradient: 'from-purple-600 to-indigo-600',
            tags: ['Terraform', 'OpenTofu', 'AWS', 'CI/CD'],
            metric: '35% faster deployment',
            github: 'https://github.com/DeviMadhuri',
            demo: '#'
        }
    ];

    return (
        <section ref={sectionRef} id="projects" className="py-24 md:py-32 bg-slate-950">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-sm font-semibold text-indigo-500 uppercase tracking-wider mb-4">
                            Portfolio
                        </h2>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Featured Projects
                        </h3>
                        <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
                            Real-world data engineering solutions delivering measurable business value
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="project-card group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/10"
                            >
                                {/* Image/Gradient Header */}
                                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-20 transition-opacity">
                                        <Github className="w-16 h-16 text-white" />
                                    </div>
                                    <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-black/30 backdrop-blur-md border border-white/10 text-xs font-medium text-white">
                      {project.metric}
                    </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors line-clamp-1">
                                        {project.title}
                                    </h4>
                                    <p className="text-slate-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-2 py-1 rounded-md bg-slate-800 text-xs text-slate-300 border border-slate-700"
                                            >
                        {tag}
                      </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4 pt-4 border-t border-slate-800">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                                        >
                                            <Github className="w-4 h-4" />
                                            Code
                                        </a>
                                        <a
                                            href={project.demo}
                                            className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            Demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}