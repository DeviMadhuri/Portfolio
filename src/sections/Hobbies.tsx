import { Instagram, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function Hobbies() {
  return (
    <section id="hobbies" className="py-24 bg-slate-950">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Hobbies</h2>
        <p className="text-slate-400 mb-8">Beyond code and data</p>
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