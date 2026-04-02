import { Mail, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">

            {/* Left Side */}
            <div>
              <h2 className="text-sm font-semibold text-indigo-500 uppercase tracking-wider mb-4">
                Get In Touch
              </h2>
              <h3 className="text-4xl font-bold text-white mb-6">
                Let's Work Together
              </h3>
              <p className="text-slate-400 text-lg mb-8">
                Open to data engineering opportunities, RAG projects, and collaborations.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Email</div>
                    <a href="mailto:devimadhuri1205@gmail.com" className="text-white hover:text-indigo-400 transition-colors">
                      devimadhuri1205@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Location</div>
                    <div className="text-white">Chicago, IL</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                  <Input
                    placeholder="Your name"
                    className="bg-slate-800 border-slate-700 text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="bg-slate-800 border-slate-700 text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                  <Textarea
                    placeholder="Tell me about your project..."
                    rows={4}
                    className="bg-slate-800 border-slate-700 text-white resize-none"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                  disabled={submitted}
                >
                  {submitted ? 'Message Sent!' : <><Send className="mr-2 w-4 h-4" /> Send Message</>}
                </Button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}