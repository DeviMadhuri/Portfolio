import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Cloud, 
  Database, 
  Server, 
  Layers, 
  Workflow, 
  Code2
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    icon: Cloud,
    title: 'Cloud Platforms',
    skills: ['AWS', 'S3', 'EC2', 'Lambda', 'Glue', 'Redshift', 'EMR', 'Step Functions', 'DynamoDB', 'EC2' ],
    color: 'from-orange-500/20 to-yellow-500/20',
  },
  {
    icon: Database,
    title: 'Data Processing',
    skills: ['PySpark', 'Apache Spark', 'ETL/ELT', 'Data Transformation', 'Batch & Streaming'],
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    icon: Server,
    title: 'Infrastructure',
    skills: ['Terraform/Open Tofu', 'CloudFormation', 'Docker', 'Kubernetes', 'CI/CD Pipelines'],
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    icon: Layers,
    title: 'Databases',
    skills: ['Amazon Redshift', 'DynamoDB', 'PostgreSQL', 'MySQL', 'Data Warehousing'],
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    icon: Workflow,
    title: 'Orchestration',
    skills: ['Apache Airflow', 'AWS Step Functions', 'Workflow Automation', 'Pipeline Scheduling'],
    color: 'from-red-500/20 to-orange-500/20',
  },
  {
    icon: Code2,
    title: 'Languages & Tools',
    skills: ['Python', 'SQL', 'Bash/Shell', 'Scala'],
    color: 'from-indigo-500/20 to-blue-500/20',
  },
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const connectionsRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Hexagon cards entrance
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll('.skill-card');
        gsap.fromTo(
          cards,
          { rotation: 180, scale: 0, opacity: 0 },
          {
            rotation: 0,
            scale: 1,
            opacity: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: 'elastic.out(1, 0.5)',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Connection lines draw
      if (connectionsRef.current) {
        const lines = connectionsRef.current.querySelectorAll('line');
        gsap.fromTo(
          lines,
          { strokeDashoffset: 200 },
          {
            strokeDashoffset: 0,
            duration: 0.8,
            stagger: 0.05,
            ease: 'smooth',
            scrollTrigger: {
              trigger: connectionsRef.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative min-h-screen w-full py-24 overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Technical Expertise
          </h2>
          <p className="text-gray-500 text-lg">Tools & Technologies I Work With</p>
        </div>

        {/* Skills Grid with Connections */}
        <div className="relative">
          {/* SVG Connection Lines */}
          <svg
            ref={connectionsRef}
            className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
            style={{ zIndex: 0 }}
          >
            {/* Horizontal connections */}
            <line
              x1="15%"
              y1="25%"
              x2="35%"
              y2="25%"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
              strokeDasharray="200"
              strokeDashoffset="200"
            />
            <line
              x1="40%"
              y1="25%"
              x2="60%"
              y2="25%"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
              strokeDasharray="200"
              strokeDashoffset="200"
            />
            <line
              x1="65%"
              y1="25%"
              x2="85%"
              y2="25%"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
              strokeDasharray="200"
              strokeDashoffset="200"
            />
            {/* Vertical connections */}
            <line
              x1="25%"
              y1="30%"
              x2="25%"
              y2="70%"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
              strokeDasharray="200"
              strokeDashoffset="200"
            />
            <line
              x1="50%"
              y1="30%"
              x2="50%"
              y2="70%"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
              strokeDasharray="200"
              strokeDashoffset="200"
            />
            <line
              x1="75%"
              y1="30%"
              x2="75%"
              y2="70%"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
              strokeDasharray="200"
              strokeDashoffset="200"
            />
          </svg>

          {/* Skills Grid */}
          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10"
          >
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className={`skill-card glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 group cursor-default ${
                  index === 3 ? 'lg:col-start-2' : ''
                }`}
              >
                {/* Card Header with Gradient */}
                <div
                  className={`flex items-center gap-3 mb-5 p-3 rounded-xl bg-gradient-to-r ${category.color}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center backdrop-blur-sm">
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-medium text-white">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-white/5 text-gray-300 rounded-lg border border-white/10 hover:bg-white/20 hover:text-white hover:border-white/30 hover:scale-105 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-4 text-gray-600">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gray-600" />
            <span className="text-sm">Always learning, always growing</span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gray-600" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
