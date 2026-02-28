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

    const projects = [
        {
            title: 'RAG Pipeline on AWS Bedrock',
            description: 'Built production RAG system using Amazon Bedrock and SageMaker, connected to live S3 and Redshift streams. Delivers real-time, context-aware insights to analytics teams using production data.',
            image: 'bg-gradient-to-br from-pink-600 to-purple-600',
            tags: ['Bedrock', 'SageMaker', 'Python', 'Redshift', 'RAG'],
            metrics: 'Real-time Gen AI insights from production data',
            github: '#',
            demo: '#'
        },
        {
            title: 'Apache Iceberg Data Lakehouse',
            description: 'Migrated S3 storage to Apache Iceberg tables enabling schema evolution and time-travel queries without pipeline rewrites. Implemented Starburst as federated query engine.',
            image: 'bg-gradient-to-br from-blue-600 to-cyan-600',
            tags: ['Apache Iceberg', 'Starburst', 'S3', 'PySpark', 'Lakehouse'],
            metrics: '20% reduction in cross-source query time',
            github: '#',
            demo: '#'
        },
        {
            title: 'Great Expectations Data Quality',
            description: 'Built comprehensive data quality layer using Great Expectations with validation rules, lineage tracking, and Splunk alerting across ingestion and transformation stages.',
            image: 'bg-gradient-to-br from-green-600 to-emerald-600',
            tags: ['Great Expectations', 'Python', 'Airflow', 'Splunk', 'Data Quality'],
            metrics: 'Issues caught upstream before reaching dashboards',
            github: '#',
            demo: '#'
        },
        {
            title: 'dbt Analytics Transformation',
            description: 'Centralized business logic using dbt transformation models with version control and documentation. Served clean datasets via Flask REST APIs to Tableau dashboards.',
            image: 'bg-gradient-to-br from-orange-600 to-red-600',
            tags: ['dbt', 'Redshift', 'Flask', 'Tableau', 'SQL'],
            metrics: '40% reduction in ad-hoc SQL requests from analysts',
            github: '#',
            demo: '#'
        },
        {
            title: 'Real-Time Streaming Architecture',
            description: 'Implemented Kafka and Spark Structured Streaming for real-time data processing. Integrated with DynamoDB and Cassandra for low-latency access patterns.',
            image: 'bg-gradient-to-br from-yellow-600 to-orange-600',
            tags: ['Kafka', 'Spark Streaming', 'DynamoDB', 'Cassandra', 'Python'],
            metrics: 'Sub-second latency for critical data pipelines',
            github: '#',
            demo: '#'
        },
        {
            title: 'Terraform Infrastructure Automation',
            description: 'Built reusable Terraform modules for multi-environment AWS infrastructure. Implemented OpenTofu for cost-effective infrastructure management with automated compliance checks.',
            image: 'bg-gradient-to-br from-purple-600 to-indigo-600',
            tags: ['Terraform', 'OpenTofu', 'AWS', 'CI/CD', 'DevOps'],
            metrics: 'Infrastructure deployment time reduced by 35%',
            github: '#',
            demo: '#'
        }
    ];

    return (
        <section ref={sectionRef} id="projects" className="py-32 bg-slate-950">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-semibold text-indigo-500 uppercase tracking-wider mb-4">
                            Portfolio
                        </h2>
                        <h3 className="text-4xl font-bold text-white mb-4">Featured Projects</h3>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Real-world data engineering solutions delivering measurable business value across cloud infrastructure, Gen AI, and data lakehouse architectures.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="project-card group rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-indigo-500/30 transition-all duration-300"
                            >
                                <div className={`h-48 ${project.image} relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                                    <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-black/30 backdrop-blur-md border border-white/10 text-xs font-medium text-white">
                      {project.metrics}
                    </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                                        {project.title}
                                    </h4>
                                    <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-2 py-1 rounded bg-slate-800 text-xs text-slate-300"
                                            >
                        {tag}
                      </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-3">
                                        <a
                                            href={project.github}
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