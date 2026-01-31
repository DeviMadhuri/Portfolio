import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'Enterprise ETL Platform',
    description: 'Built a scalable ETL platform processing 10TB+ daily using AWS Glue, PySpark, and Airflow. Reduced processing time by 60% through optimized partitioning and parallel execution.',
    tech: ['AWS Glue', 'PySpark', 'Airflow', 'S3', 'Redshift'],
    image: '../assets/project-1.jpg',
    link: '#',
  },
  {
    id: 2,
    title: 'Real-Time Data Pipeline',
    description: 'Implemented real-time streaming pipeline with Kafka and Spark Streaming, enabling sub-second analytics for business operations and fraud detection.',
    tech: ['Kafka', 'Spark Streaming', 'DynamoDB', 'Lambda'],
    image: '../assets/project-2.jpg',
    link: '#',
  },
  {
    id: 3,
    title: 'Infrastructure Automation',
    description: 'Designed Terraform modules for consistent AWS infrastructure deployment across 15+ environments, reducing provisioning time by 80% and ensuring compliance.',
    tech: ['Terraform', 'CloudFormation', 'CodePipeline', 'Docker'],
    image: '../assets/project-3.jpg',
    link: '#',
  },
  {
    id: 4,
    title: 'Data Lake Architecture',
    description: 'Architected enterprise data lake on S3 with partitioned storage, enabling petabyte-scale analytics with Athena and EMR for data science teams.',
    tech: ['S3', 'Athena', 'EMR', 'Glue Catalog', 'Parquet'],
    image: '../assets/project-4.jpg',
    link: '#',
  },
  {
    id: 5,
    title: 'ML Data Pipeline',
    description: 'Built automated ML data pipeline for feature engineering and model training, reducing model deployment time from weeks to days with SageMaker integration.',
    tech: ['SageMaker', 'Step Functions', 'Lambda', 'S3'],
    image: '../assets/project-5.jpg',
    link: '#',
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(2);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title typewriter effect
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Carousel entrance
      gsap.fromTo(
        carouselRef.current,
        { opacity: 0, perspective: 500 },
        {
          opacity: 1,
          perspective: 1500,
          duration: 0.6,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: carouselRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const navigate = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    } else {
      setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    }
  };

  const getCardStyle = (index: number) => {
    const diff = index - activeIndex;
    const normalizedDiff = ((diff + projects.length + Math.floor(projects.length / 2)) % projects.length) - Math.floor(projects.length / 2);
    
    const rotateY = normalizedDiff * 25;
    const translateZ = Math.abs(normalizedDiff) * -120;
    const translateX = normalizedDiff * 320;
    const opacity = Math.abs(normalizedDiff) > 2 ? 0 : 1 - Math.abs(normalizedDiff) * 0.3;
    const scale = 1 - Math.abs(normalizedDiff) * 0.1;

    return {
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity,
      zIndex: 10 - Math.abs(normalizedDiff),
    };
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
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
            Featured Projects
          </h2>
          <p className="text-gray-500 text-lg">Data Engineering Excellence in Action</p>
        </div>

        {/* 3D Carousel */}
        <div
          ref={carouselRef}
          className="relative h-[500px] sm:h-[550px] flex items-center justify-center"
          style={{ perspective: '1500px' }}
        >
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => navigate('prev')}
            className="absolute left-0 sm:left-4 z-20 bg-black/50 border-white/20 hover:bg-white/10 hover:border-white/40"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => navigate('next')}
            className="absolute right-0 sm:right-4 z-20 bg-black/50 border-white/20 hover:bg-white/10 hover:border-white/40"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Cards Container */}
          <div
            className="relative w-full max-w-md"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm"
                style={{
                  ...getCardStyle(index),
                  transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                  transformStyle: 'preserve-3d',
                }}
              >
                <div
                  className={`glass rounded-2xl overflow-hidden transition-all duration-500 ${
                    index === activeIndex ? 'ring-2 ring-white/30 shadow-2xl' : ''
                  }`}
                >
                  {/* Project Image */}
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-medium text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-white/10 text-gray-300 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* View Project Link */}
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 text-white text-sm hover:text-gray-300 transition-colors group/link"
                    >
                      View Case Study
                      <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-white w-6'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="group border-white/30 text-white hover:bg-white/10 px-8 py-6"
          >
            View All Projects
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
