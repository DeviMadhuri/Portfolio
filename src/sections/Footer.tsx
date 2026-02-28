import { Github, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="py-8 bg-slate-950 border-t border-slate-900">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-slate-500 text-sm">
                        © 2024 Devi Madhuri. Senior AWS Data Engineer.
                    </div>

                    <div className="flex items-center gap-6">
                        <a
                            href="https://github.com/DeviMadhuri"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-white transition-colors"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                        <a
                            href="https://linkedin.com/in/devi-madhuri1205"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-white transition-colors"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>

                    <div className="text-slate-600 text-sm flex items-center gap-1">
                        Built with <Heart className="w-4 h-4 text-red-500 fill-current" /> and React
                    </div>
                </div>
            </div>
        </footer>
    );
}