import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function Education() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.education-item', {
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

    const education = [
        {
            title: "Master's in Computer and Information Systems",
            company: 'New England College',
            location: 'Henniker, NH',
            period: '2023',
            points: ['GPA: 3.95', 'Focused on database systems, cloud computing, and analytics.'],
            skills: []
        }
    ];

    return (
        <section ref={sectionRef} id="education" className="py-32 bg-slate-900/30 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-transparent to-purple-500/5 pointer-events-none" />
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-semibold text-indigo-500 uppercase tracking-wider mb-4">
                            Academics
                        </h2>
                        <h3 className="text-4xl font-bold text-white">Education</h3>
                    </div>

                    <div className="space-y-6">
                        {education.map((edu, index) => (
                            <div key={index} className="education-item p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/30 transition-all duration-300">
                                <div className="flex gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                                        <GraduationCap className="w-6 h-6 text-indigo-400" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                                            <h4 className="text-xl font-semibold text-white">{edu.title}</h4>
                                            <span className="text-sm text-indigo-400 font-medium">{edu.period}</span>
                                        </div>
                                        <p className="text-slate-400 mb-1">{edu.company}</p>
                                        <p className="text-slate-500 text-sm">{edu.location}</p>
                                    </div>
                                </div>
                                <div className="ml-16">
                                    <ul className="space-y-2">
                                        {edu.points.map((point, i) => (
                                            <li key={i} className="text-slate-400 text-sm flex items-start">
                                                <span className="w-2 h-2 rounded-full bg-indigo-400 mr-3 mt-2 flex-shrink-0" />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
