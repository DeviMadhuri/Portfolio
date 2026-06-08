import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Cloud,
  Database,
  Code2,
  Workflow,
  Brain,
  Cpu,
  Award,
  ExternalLink
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
      skills: ['Glue', 'Redshift', 'SageMaker', 'Bedrock', 'Lambda', 'EMR', 'Step Functions', 'S3', 'Athena', 'Kinesis', 'CloudWatch']
    },
    {
      icon: Brain,
      title: 'Gen AI & ML',
      skills: ['Amazon Bedrock', 'LangChain', 'RAG Systems', 'HuggingFace', 'MLflow', 'OpenAI', 'ChromaDB', 'Pinecone', 'scikit-learn', 'pandas', 'NumPy']
    },
    {
      icon: Database,
      title: 'Data Lakehouse',
      skills: ['Apache Iceberg', 'Delta Lake', 'Databricks', 'Starburst', 'Kafka', 'Delta Live Tables', 'Snowflake']
    },
    {
      icon: Workflow,
      title: 'Orchestration & DevOps',
      skills: ['Apache Airflow', 'dbt', 'Great Expectations', 'Step Functions', 'Terraform', 'Docker', 'Kubernetes', 'CI/CD']
    },
    {
      icon: Code2,
      title: 'Languages',
      skills: ['Python', 'PySpark', 'SQL', 'Scala', 'Bash', 'TypeScript']
    },
    {
      icon: Cpu,
      title: 'Data & Analytics',
      skills: ['PostgreSQL', 'DynamoDB', 'Redshift', 'Snowflake', 'Netezza', 'Splunk', 'Data Lineage', 'Data Quality']
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Cloud Practitioner',
      issued: '2023',
      link: 'https://cp.certmetrics.com/amazon/en/credentials/status/3327177',
      badgeColor: 'from-amber-500/20 to-orange-500/20',
      borderColor: 'border-amber-500/40',
      textColor: 'text-amber-300'
    },
    {
      name: 'AWS Certified Developer - Associate',
      issued: '2025',
      link: 'https://cp.certmetrics.com/amazon/en/public/verify/credential',
      badgeColor: 'from-indigo-500/20 to-blue-500/20',
      borderColor: 'border-indigo-500/40',
      textColor: 'text-indigo-300'
    }
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-24 md:py-32 bg-slate-950 border-y border-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold text-indigo-500 uppercase tracking-wider mb-3">Technical Skills</h2>
            <h3 className="text-3xl font-bold text-white">Tools and Technologies</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-14">
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
          <div>
            <div className="flex items-center justify-center gap-3 mb-6">
              <Award className="w-6 h-6 text-indigo-400" />
              <h3 className="text-2xl font-bold text-white">Certifications</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {certifications.map((cert, i) => (
                <a
                  key={i}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={"group flex items-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r " + cert.badgeColor + " border " + cert.borderColor + " hover:scale-105 transition-all duration-200 shadow-lg"}
                >
                  <div className="flex flex-col">
                    <span className={"font-semibold text-sm " + cert.textColor}>{cert.name}</span>
                    <span className="text-xs text-slate-400 mt-0.5">Issued {cert.issued} · AWS</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-300 transition-colors ml-1" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
