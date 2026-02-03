import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Instagram, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const artworks = [
    `${import.meta.env.BASE_URL}art-1.jpg`,
    `${import.meta.env.BASE_URL}art-2.jpg`,
    `${import.meta.env.BASE_URL}art-3.jpg`,
    `${import.meta.env.BASE_URL}art-4.jpg`,
    `${import.meta.env.BASE_URL}art-5.jpg`,
];

const Hobbies = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                titleRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'expo.out',
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );

            if (gridRef.current) {
                const items = gridRef.current.querySelectorAll('.art-item');
                gsap.fromTo(
                    items,
                    { y: 60, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        stagger: 0.1,
                        ease: 'expo.out',
                        scrollTrigger: {
                            trigger: gridRef.current,
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
            id="hobbies"
            className="relative min-h-screen w-full py-24 overflow-hidden"
        >
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2
                        ref={titleRef}
                        className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-4"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                        Hobbies
                    </h2>
                    <p className="text-gray-500 text-lg mb-8">Beyond code and data</p>

                    <a
                        href="https://www.instagram.com/artspotbymadhu/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button
                            variant="outline"
                            className="group border-white/30 text-white hover:bg-white/10"
                        >
                            <Instagram className="w-5 h-5 mr-2" />
                            @artspotbymadhu
                            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </a>
                </div>

                <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {artworks.map((art, index) => (
                        <div key={index} className="art-item">
                            <div className="aspect-square rounded-xl overflow-hidden bg-white/5">
                                <img
                                    src={art}
                                    alt={`Artwork ${index + 1}`}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hobbies;