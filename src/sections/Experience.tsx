import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building2, GraduationCap, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    id: 1,
    type: 'work',
    title: 'AWS Data Engineer',
    company: 'State Farm',
    location: 'Chicago,IL',
    duration: '2024 - Present',
    description: 'Lead data engineering initiatives for enterprise analytics platform. Design and implement scalable ETL pipelines processing terabytes of data daily.',
    achievements: [
      'Built cloud-native data platform serving 500+ users',
      'Reduced data processing costs by 40%',
      'Implemented real-time streaming architecture',
      'Mentored junior engineers and established best practices',
    ],
    icon: Building2,
  },
  {
    id: 2,
    type: 'work',
    title: 'Data Engineer',
    company: 'Bank of America',
    location: 'United States',
    duration: '2023 - 2024',
    description: 'Developed batch processing pipelines and data warehouse solutions. Collaborated with analytics teams to deliver business intelligence platforms.',
    achievements: [
      'Migrated legacy pipelines to cloud infrastructure',
      'Improved data quality by 95%',
      'Built automated monitoring and alerting systems',
    ],
    icon: Building2,
  },
  {
    id: 3,
    type: 'education',
    title: "Masters's in Computer Information Systems",
    company: 'New England College',
    location: 'United States',
    duration: '2022 - 2023',
    description: 'Specialized in database systems, cloud-based application development, and enterprise information systems.',
    achievements: [
      'Designed and implemented relational database schemas using MySQL and PostgreSQL',
      'Built backend applications using Python and PHP with database-driven architectures',
      'Applied cloud computing concepts to deploy and manage scalable applications'
    ],
    icon: GraduationCap,
  },
];

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
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

      // Timeline line draw
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Experience entries
      if (timelineRef.current) {
        const entries = timelineRef.current.querySelectorAll('.experience-entry');
        entries.forEach((entry, index) => {
          const isLeft = index % 2 === 0;
          gsap.fromTo(
            entry,
            { x: isLeft ? -100 : 100, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.6,
              ease: 'expo.out',
              scrollTrigger: {
                trigger: entry,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        });

        // Branch connectors
        const branches = timelineRef.current.querySelectorAll('.branch-connector');
        gsap.fromTo(
          branches,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 0.4,
            stagger: 0.2,
            ease: 'smooth',
            scrollTrigger: {
              trigger: timelineRef.current,
              start: 'top 60%',
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
      id="experience"
      className="relative min-h-screen w-full py-24 overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Professional Journey
          </h2>
          <p className="text-gray-500 text-lg">My Career Path in Data Engineering</p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Center Line */}
          <div
            ref={lineRef}
            className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/30 via-white/20 to-transparent origin-top"
          />

          {/* Timeline Entries */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={exp.id}
                  className={`experience-entry relative flex items-start gap-8 ${
                    isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-[#010101] z-10 mt-6">
                    <div className="absolute inset-0 rounded-full bg-white animate-pulse-glow" />
                  </div>

                  {/* Branch Connector */}
                  <div
                    className={`branch-connector hidden sm:block absolute top-8 ${
                      isLeft
                        ? 'left-1/2 w-[calc(50%-2rem)] origin-left'
                        : 'right-1/2 w-[calc(50%-2rem)] origin-right'
                    } h-px bg-white/20`}
                  />

                  {/* Content Card */}
                  <div
                    className={`ml-12 sm:ml-0 sm:w-[calc(50%-3rem)] ${
                      isLeft ? 'sm:pr-0 sm:mr-auto' : 'sm:pl-0 sm:ml-auto'
                    }`}
                  >
                    <div className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 group">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                          <exp.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-medium text-white mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-gray-400">{exp.company}</p>
                        </div>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-gray-500"
                          >
                            <CheckCircle2 className="w-4 h-4 text-white/50 mt-0.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
