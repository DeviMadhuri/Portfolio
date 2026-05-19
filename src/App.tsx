import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navigation } from './sections/Navigation';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Experience } from './sections/Experience';
import { Education } from './sections/Education';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';
import Hobbies from './sections/Hobbies';
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
                <Experience />
                <Education />
                <Projects />
                <Hobbies />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;