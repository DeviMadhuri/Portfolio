import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navigation } from './sections/Navigation';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import Hobbies from './sections/Hobbies';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
    useEffect(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
        return () => {
            document.documentElement.style.scrollBehavior = 'auto';
        };
    }, []);

    return (
        <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-indigo-500/30">
            <Navigation />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Hobbies />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;