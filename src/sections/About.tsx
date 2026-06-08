import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cloud, Code2, Zap, Database, Wrench, Brain } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-content', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
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
      title: 'Cloud & Platforms',
      items: ['AWS', 'Databricks', 'Azure']
    },
    {
      icon: Code2,
      title: 'Languages',
      items: ['Python', 'SQL', 'Scala', 'JavaScript']
    },
    {
      icon: Zap,
      title: 'Big Data & Processing',
      items: ['Spark', 'PySpark', 'Kafka', 'Airflow', 'dbt']
    },
    {
      icon: Database,
      title: 'Databases & Warehouses',
      items: ['PostgreSQL', 'Redshift', 'Snowflake', 'DynamoDB', 'Delta Lake']
    },
    {
      icon: Brain,
      title: 'AI & ML',
      items: ['LangChain', 'RAG', 'HuggingFace', 'OpenAI', 'ChromaDB', 'scikit-learn']
    },
    {
      icon: Wrench,
      title: 'DevOps & Tools',
      items: ['Terraform', 'Docker', 'Kubernetes', 'Git', 'GitHub Actions']
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-32 bg-slate-900/30 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-transparent to-purple-500/5 pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 about-content">
            <h2 className="text-sm font-semibold text-indigo-500 uppercase tracking-wider mb-6">About Me</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-3xl">
              Data engineer with 5+ years building production-grade ETL/ELT pipelines and cloud data platforms across financial services and insurance.
              Focused on data quality, lineage, observability, and Gen AI systems using LangChain, OpenAI, and vector databases.
            </p>
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
                  Data quality, lineage tracking, observability, and modern data architecture. Also building AI/ML integration with retrieval-augmented systems.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-slate-800/20 border border-slate-700/50 hover:border-indigo-500/30 transition-all">
                <h4 className="text-indigo-400 font-semibold mb-2 text-sm uppercase tracking-wide">Beyond Work</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  I'm an artist passionate about visual expression. Abstract and contemporary work fuel my creativity outside of engineering.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white mb-10">Tools and Technologies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        </div>
      </div>
    </section>
  );
}
