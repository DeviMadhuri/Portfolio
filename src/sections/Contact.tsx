import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <section id="contact" className="py-32 bg-slate-950">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-sm font-semibold text-indigo-500 uppercase tracking-wider mb-4">
                                Get In Touch
                            </h2>
                            <h3 className="text-4xl font-bold text-white mb-6">
                                Let's Build Something Amazing
                            </h3>
                            <p className="text-slate-400 mb-8 text-lg">
                                Open to data engineering opportunities, consulting projects, and collaborations in cloud architecture and Gen AI.
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
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-slate-500">Phone</div>
                                        <a href="tel:779-758-5823" className="text-white hover:text-indigo-400 transition-colors">
                                            779-758-5823
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-slate-500">Location</div>
                                        <span className="text-white">Chicago, IL</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                                    <Input
                                        placeholder="John Doe"
                                        className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                                        value={formState.name}
                                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                                    <Input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                                        value={formState.email}
                                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                                    <Textarea
                                        placeholder="Tell me about your project..."
                                        rows={4}
                                        className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                                        value={formState.message}
                                        onChange={(e) => setFormState({...formState, message: e.target.value})}
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                                    disabled={submitted}
                                >
                                    {submitted ? (
                                        'Message Sent!'
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="ml-2 w-4 h-4" />
                                        </>
                                    )}
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}