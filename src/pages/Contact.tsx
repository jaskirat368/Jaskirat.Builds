import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, Mail, Instagram, CheckCircle, AlertCircle, Loader2, Phone } from 'lucide-react';
import React, { useState } from 'react';
import SpotlightCard from '../components/SpotlightCard';

const ContactCard = ({ 
  title, 
  link, 
  linkText, 
  icon, 
  colorText, 
  bgGradient, 
  iconBg,
}: any) => (
  <SpotlightCard className="!bg-white !border-zinc-100 shadow-md hover:shadow-lg transition-all duration-300">
    <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden pointer-events-none">
      <div className={`absolute inset-0 bg-gradient-to-br ${bgGradient} to-transparent opacity-50`} />
    </div>
    <div className="relative z-10 flex items-center gap-4 p-6">
      <div className={`w-12 h-12 md:w-14 md:h-14 shrink-0 ${iconBg} rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300 border border-black/5 p-2.5`}>
        {icon}
      </div>
      <div>
        <h3 className="text-lg md:text-xl font-bold mb-1 text-zinc-950">{title}</h3>
        <a
          href={link}
          target={link.startsWith('http') ? '_blank' : undefined}
          rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
          className={`inline-flex items-center gap-2 ${colorText} font-semibold hover:opacity-80 transition-colors group/link text-sm md:text-base`}
        >
          <span className="truncate">{linkText}</span> <ArrowUpRight className="w-4 h-4 shrink-0 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
        </a>
      </div>
    </div>
  </SpotlightCard>
);

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

  const instaCardProps = {
    title: "Instagram",
    link: "https://instagram.com/jaskirat.builds",
    linkText: "@jaskirat.builds",
    icon: <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="Instagram" className="w-full h-full object-contain" />,
    colorText: "text-pink-600",
    bgGradient: "from-pink-50",
    iconBg: "bg-pink-50"
  };

  const whatsappCardProps = {
    title: "WhatsApp",
    link: "https://wa.me/918553502222",
    linkText: "+91 8553502222",
    icon: <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-full h-full object-contain" />,
    colorText: "text-[#25D366]",
    bgGradient: "from-[#25D366]/10",
    iconBg: "bg-[#25D366]/10"
  };

  const phoneCardProps = {
    title: "Phone",
    link: "tel:+918553502222",
    linkText: "+91 8553502222",
    icon: <Phone className="w-full h-full text-white fill-white p-1" />,
    colorText: "text-blue-600",
    bgGradient: "from-blue-50",
    iconBg: "bg-blue-600"
  };

  const emailCardProps = {
    title: "Email",
    link: "mailto:jaskiratforbusiness@gmail.com",
    linkText: "jaskiratforbusiness@gmail.com",
    icon: <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="Gmail" className="w-full h-full object-contain" />,
    colorText: "text-red-500",
    bgGradient: "from-red-50",
    iconBg: "bg-red-50"
  };

  return (
    <div className="w-full overflow-hidden pt-32 pb-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 lg:items-stretch items-start">
        
        {/* Left Column (Desktop) */}
        <div className="w-full lg:w-[calc(50%-3rem)] flex flex-col order-1 h-full min-h-0 xs:min-h-0 sm:min-h-0 md:min-h-0 flex-1">
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
          </motion.div>

          {/* Desktop Only Cards & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex flex-col gap-4 md:gap-6 mt-4 w-full flex-shrink-0 relative flex-grow"
          >
            <div className="flex flex-col gap-4 md:gap-6">
              <ContactCard {...instaCardProps} />
              <ContactCard {...whatsappCardProps} />
              <ContactCard {...phoneCardProps} />
            </div>
            
            {/* CTA Line to fill space */}
            <div className="mt-auto pt-8 pb-6 px-4 flex flex-col items-center justify-center text-center opacity-80 hover:opacity-100 transition-opacity bg-zinc-50/50 rounded-3xl border border-zinc-100">
              <h3 className="text-xl font-bold text-zinc-950 mb-2">Prefer to talk it out?</h3>
              <p className="text-zinc-600 text-sm">
                Skip the form and let's get straight to how we can scale your business.
              </p>
              <a href="tel:+918553502222" className="mt-4 flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all cursor-pointer text-sm">
                <span>Book a Strategy Call</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column (Form & Email) */}
        <div className="w-full lg:w-[calc(50%-3rem)] flex flex-col gap-6 order-2">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-10 md:p-12 rounded-3xl border border-zinc-100 shadow-xl h-fit w-full"
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

          {/* Desktop Email Card placed below the Form */}
          <div className="hidden lg:block w-full">
             <ContactCard {...emailCardProps} />
          </div>
        </div>

        {/* Mobile ONLY Cards (Appears below Form on Mobile) */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.4 }}
           className="lg:hidden flex flex-col gap-4 w-full mt-4 order-3"
        >
           <ContactCard {...instaCardProps} />
           <ContactCard {...whatsappCardProps} />
           <ContactCard {...phoneCardProps} />
           <ContactCard {...emailCardProps} />
        </motion.div>

      </div>
    </div>
  );
}
