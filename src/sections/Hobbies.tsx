import { Instagram, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function Hobbies() {
  return (
    <section id="hobbies" className="py-24 bg-slate-950">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Hobbies</h2>
        <p className="text-slate-400 mb-8">Beyond code and data</p>
        <div className="grid gap-4 md:grid-cols-3 mb-10">
          {['art-1.jpg', 'art-2.jpg', 'art-3.jpg'].map((src, index) => (
            <div key={index} className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/80 shadow-2xl">
              <img src={src} alt={`Art ${index + 1}`} className="w-full h-56 object-cover transition-transform duration-700 hover:scale-105" />
            </div>
          ))}
        </div>
        <a href="https://www.instagram.com/artspotbymadhu/" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
            <Instagram className="w-5 h-5 mr-2" />
            @artspotbymadhu
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </a>
      </div>
    </section>
  );
}