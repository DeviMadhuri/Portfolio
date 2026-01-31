import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, Code2, Cloud, Database, Award, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: Briefcase, value: '5+', label: 'Years Experience' },
  { icon: Code2, value: '50+', label: 'Projects Delivered' },
  { icon: TrendingUp, value: '99.9%', label: 'Uptime Achieved' },
  { icon: Award, value: '3', label: 'AWS Certifications' },
];

const skills = [
  'AWS', 'PySpark', 'Terraform', 'Python', 'SQL', 'ETL', 
  'Airflow', 'Kafka', 'Redshift', 'Glue', 'Lambda', 
  'Step Functions', 'DynamoDB', 'S3', 'EMR', 'Docker', 'Kubernetes'
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title reveal
      gsap.fromTo(
        titleRef.current,
        { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
        {
          clipPath: 'inset(0 0% 0 0)',
          opacity: 1,
          duration: 0.7,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Content cards
      if (contentRef.current) {
        const cards = contentRef.current.querySelectorAll('.about-card');
        gsap.fromTo(
          cards,
          { y: 60, opacity: 0, rotateY: -15 },
          {
            y: 0,
            opacity: 1,
            rotateY: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Stats counter animation
      if (statsRef.current) {
        const statItems = statsRef.current.querySelectorAll('.stat-item');
        gsap.fromTo(
          statItems,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Skills cloud
      if (skillsRef.current) {
        const skillTags = skillsRef.current.querySelectorAll('.skill-tag');
        gsap.fromTo(
          skillTags,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            stagger: 0.03,
            ease: 'elastic.out(1, 0.5)',
            scrollTrigger: {
              trigger: skillsRef.current,
              start: 'top 80%',
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
      id="about"
      className="relative min-h-screen w-full py-24 overflow-hidden"
    >
      {/* Diagonal divider */}
      <div 
        className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#010101] to-transparent"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 100%)' }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            About Me
          </h2>
          <p className="text-gray-500 text-lg">The Engineer Behind the Data</p>
        </div>

        {/* Content Grid */}
        <div ref={contentRef} className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Bio Card */}
          <div className="about-card glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 group">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Cloud className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-medium text-white">Who I Am</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              I'm Devi Madhuri, an AWS Data Engineer with 5 years of experience crafting 
              enterprise-grade data solutions. Currently at State Farm, I specialize in 
              building scalable ETL pipelines, cloud infrastructure automation, and 
              transforming complex data into actionable business intelligence.
            </p>
          </div>

          {/* Philosophy Card */}
          <div className="about-card glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 group lg:mt-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Database className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-medium text-white">My Philosophy</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              I believe great data engineering is invisible—when pipelines run flawlessly, 
              insights flow naturally. My approach combines rigorous technical excellence 
              with pragmatic problem-solving, ensuring solutions that are both robust and 
              maintainable.
            </p>
          </div>

          {/* Experience Card */}
          <div className="about-card glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 group">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-medium text-white">Experience</h3>
            </div>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/50 mt-2 flex-shrink-0" />
                <span>AWS Data Engineer at State Farm (Current)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/50 mt-2 flex-shrink-0" />
                <span>Large-scale ETL pipeline architecture</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/50 mt-2 flex-shrink-0" />
                <span>Cloud-native solution design</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/50 mt-2 flex-shrink-0" />
                <span>Data platform optimization</span>
              </li>
            </ul>
          </div>

          {/* Skills Cloud Card */}
          <div className="about-card glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 group lg:mt-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-medium text-white">Tech Stack</h3>
            </div>
            <div ref={skillsRef} className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="skill-tag px-3 py-1.5 text-sm bg-white/5 text-gray-300 rounded-full border border-white/10 hover:bg-white/20 hover:text-white hover:border-white/30 hover:scale-110 transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="stat-item glass rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 group"
            >
              <Icon className="w-6 h-6 text-white/60 mx-auto mb-3 group-hover:text-white transition-colors" />
              <div className="text-3xl sm:text-4xl font-light text-white mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {value}
              </div>
              <div className="text-sm text-gray-500">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
