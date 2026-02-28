import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navigation } from './sections/Navigation';
import Hero from './sections/Hero';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import Hobbies from './sections/Hobbies';
import { Contact } from './sections/Contact';
import Footer from './sections/Footer';
import './App.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
    useEffect(() => {
        // Configure ScrollTrigger defaults
        ScrollTrigger.defaults({
            toggleActions: 'play none none reverse',
        });

        // Refresh ScrollTrigger on load
        ScrollTrigger.refresh();

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div className="min-h-screen bg-[#010101] text-white overflow-x-hidden">
            <Navigation />
            <main>
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Experience />
                <Hobbies />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;