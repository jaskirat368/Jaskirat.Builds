import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, Mail, Instagram, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/jaskiratforbusiness@gmail.com", {
        method: "POST",
        body: formData,
        headers: { 
            'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setFormState('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setFormState('error');
      }
    } catch (error) {
      setFormState('error');
    }
  };

  return (
    <div className="w-full overflow-hidden pt-32 pb-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-zinc-950 mb-6">
              Let's Build <br />
              <span className="text-blue-600">Something Real.</span>
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed mb-12">
              Ready to turn your website into a growth engine? Fill out the form or send a direct message to start the conversation.
            </p>

            <div className="space-y-8">
              <div className="group relative bg-white p-8 rounded-3xl border border-zinc-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Gradient Border Effect - Permanent */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 opacity-10" />
                <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-3xl opacity-100 -z-10 blur-sm" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-tr from-purple-600 via-pink-600 to-orange-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Instagram className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Fastest Response</h3>
                  <p className="text-zinc-600 mb-6 text-lg leading-relaxed">DM me the word <span className="font-bold text-zinc-900">"SITE"</span> on Instagram for a free, no-obligation website audit.</p>
                  <a
                    href="https://instagram.com/jaskirat.builds"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-pink-600 font-bold hover:text-pink-700 transition-colors group/link text-lg"
                  >
                    @jaskirat.builds <ArrowUpRight className="w-5 h-5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-10 md:p-12 rounded-3xl border border-zinc-100 shadow-xl"
          >
            <h2 className="text-3xl font-bold text-zinc-950 mb-8">Project Inquiry</h2>
            
            {formState === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-12 space-y-4"
              >
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-2">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-950">Message Sent!</h3>
                <p className="text-zinc-600 max-w-xs">
                  Thanks for reaching out. I'll get back to you within 24-48 hours.
                </p>
                <button 
                  onClick={() => setFormState('idle')}
                  className="mt-6 px-6 py-2 bg-zinc-100 text-zinc-900 rounded-full font-medium hover:bg-zinc-200 transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_subject" value="New Project Inquiry from Portfolio Site" />

                <div className="grid grid-cols-1 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-zinc-950">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-zinc-950">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-bold text-zinc-950">What do you need help with?</label>
                  <input
                    type="text"
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
                    placeholder="e.g., UI/UX Design, Website Development..."
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-zinc-950">Project Details</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all resize-none"
                    placeholder="Tell me about your business goals, current challenges, and timeline..."
                  ></textarea>
                </div>

                {formState === 'error' && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>Something went wrong. Please try again or DM me on Instagram.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formState === 'submitting' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      Submit Inquiry <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
                
                <p className="text-xs text-zinc-500 text-center mt-4">
                  I typically respond within 24-48 hours. Zero friction, no obligations.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
