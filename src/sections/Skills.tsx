import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    Cloud,
    Database,
    Code2,
    Container,
    Workflow,
    LineChart,
    Brain,
    Shield
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function Skills() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.skill-category', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
                y: 30,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const skillCategories = [
        {
            icon: Cloud,
            title: 'AWS Ecosystem',
            skills: ['Glue', 'Redshift', 'SageMaker', 'Bedrock', 'Lambda', 'EMR', 'Step Functions', 'Lake Formation', 'Kinesis', 'S3']
        },
        {
            icon: Brain,
            title: 'Gen AI & ML',
            skills: ['Amazon Bedrock', 'SageMaker', 'RAG Systems', 'NLP', 'Python (Boto3)', 'ML Pipelines']
        },
        {
            icon: Database,
            title: 'Data Lakehouse',
            skills: ['Apache Iceberg', 'Delta Lake', 'Starburst', 'Databricks', 'Hadoop', 'Kafka', 'Spark Structured Streaming']
        },
        {
            icon: Workflow,
            title: 'Orchestration & Quality',
            skills: ['Apache Airflow', 'dbt', 'Great Expectations', 'AWS Step Functions', 'Data Lineage', 'CI/CD']
        },
        {
            icon: Container,
            title: 'Infrastructure',
            skills: ['Terraform', 'OpenTofu', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'Ansible']
        },
        {
            icon: Shield,
            title: 'Observability',
            skills: ['Splunk', 'Dynatrace', 'CloudWatch', 'CloudTrail', 'Data Quality Monitoring', 'SLA Alerting']
        },
        {
            icon: Code2,
            title: 'Languages',
            skills: ['Python (Pandas, NumPy, PySpark)', 'SQL', 'Scala', 'Bash', 'Java', 'Node.js']
        },
        {
            icon: LineChart,
            title: 'Databases',
            skills: ['Redshift', 'Snowflake', 'PostgreSQL', 'DynamoDB', 'MongoDB', 'Cassandra', 'Teradata', 'MySQL']
        }
    ];

    return (
        <section ref={sectionRef} id="skills" className="py-32 bg-slate-950 border-y border-slate-900">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-semibold text-indigo-500 uppercase tracking-wider mb-4">
                            Technical Expertise
                        </h2>
                        <h3 className="text-4xl font-bold text-white">Tools & Technologies</h3>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {skillCategories.map((category, index) => (
                            <div
                                key={index}
                                className="skill-category p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/30 transition-all group"
                            >
                                <category.icon className="w-8 h-8 text-indigo-400 mb-4 group-hover:scale-110 transition-transform" />
                                <h4 className="font-semibold text-white mb-4">{category.title}</h4>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-1 rounded text-xs bg-slate-800 text-slate-300 border border-slate-700"
                                        >
                      {skill}
                    </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 flex flex-wrap justify-center gap-4">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800">
                            <div className="w-2 h-2 rounded-full bg-orange-400" />
                            <span className="text-sm text-slate-400">AWS Developer Associate (2025)</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800">
                            <div className="w-2 h-2 rounded-full bg-orange-400" />
                            <span className="text-sm text-slate-400">AWS Cloud Practitioner</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800">
                            <div className="w-2 h-2 rounded-full bg-blue-400" />
                            <span className="text-sm text-slate-400">HackerRank SQL (Advanced)</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800">
                            <div className="w-2 h-2 rounded-full bg-yellow-400" />
                            <span className="text-sm text-slate-400">HackerRank Python</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}