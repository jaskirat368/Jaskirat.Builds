import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink, ArrowRight } from 'lucide-react';
import SpotlightCard from '../components/SpotlightCard';
import { Image } from '../components/Image';

export default function Portfolio() {
  const projects = [
    {
      id: 5,
      title: 'PexelParadox — Agency Website Concept',
      category: 'Marketing Agency Website',
      desc: 'A premium marketing agency website built to showcase services, client results, and generate qualified leads through a modern, conversion-focused experience.',
      image: 'https://i.ibb.co/G4q2FYBG/IMG-20260615-190044.jpg',
      comparison: {
        before: {
          items: ['Outdated template-based website', 'Limited online authority', 'No dedicated lead generation system'],
          link: ''
        },
        after: {
          items: ['Premium agency website', 'Service & results showcase', 'SEO Optimized', 'Mobile Responsive', 'Fast Performance', 'In-Built Form Inquiry System'],
          link: 'https://pexelparadox.vercel.app/'
        }
      }
    },
    {
      id: 4,
      title: 'Gill Architects — Architecture Website',
      category: 'Architecture Studio Website',
      desc: 'A premium architecture website designed to showcase residential and commercial projects, build credibility, attract higher-value clients, and establish a strong digital presence across Punjab.',
      image: 'https://i.ibb.co/mVqjmywr/IMG-20260610-161309.jpg',
      comparison: {
        before: {
          items: ['No Professional Website', 'Instagram Only Presence', 'No Online Inquiries'],
          link: ''
        },
        after: {
          items: ['Premium Architecture Website', 'Project Showcase System', 'Lead Generation Funnel', 'Advanced SEO', 'Fast Performance', 'Mobile Responsive', 'Bonus : Architectural Brand Experience'],
          link: 'https://gillarchitects.vercel.app/'
        }
      }
    },
    {
      id: 1,
      title: 'FCG Landscaping — Website Redesign',
      category: 'Landscaping Website',
      desc: 'Modern redesign concept focused on improving lead generation, user experience, and visual credibility for the landscaping business.',
      image: 'https://i.ibb.co/RTz95yT6/image.png',
      comparison: {
        before: {
          items: ['Outdated design', 'Weak CTA', 'Poor mobile layout', 'Template Used Website'],
          link: 'https://www.fcglandscaping.com.au/'
        },
        after: {
          items: ['Modern UI', 'Strong CTA', 'Mobile optimized', 'Fast Performance', 'Responsive', 'Lead Generation'],
          link: 'https://fcglandscapingsydney.vercel.app/'
        }
      }
    },
    {
      id: 2,
      title: 'WAO Fitness Gym — Website Concept',
      category: 'Fitness Gym Website',
      desc: 'A modern, high-performance gym website concept designed to showcase facilities, build trust, and drive membership inquiries.',
      image: 'https://i.ibb.co/60kqMspk/image.png',
      comparison: {
        before: {
          items: ['No website', 'Only Instagram presence', 'No online inquiry system'],
          link: ''
        },
        after: {
          items: ['Professional gym website', 'Facility showcase sections', 'Clear membership CTA', 'Fast Performance', 'Mobile Responsive', 'Membership Focus', 'Bonus : Special Personalized Ai Assistant Chatbot'],
          link: 'https://waofitnessgymchandigarh.vercel.app/'
        }
      }
    },
    {
      id: 3,
      title: 'Alligator Fitness Gym — Website Concept',
      category: 'Fitness Gym Website',
      desc: 'Modern website concept designed to attract new members and strengthen the gym’s digital presence in New Delhi.',
      image: 'https://i.ibb.co/k2NWKFr8/image.png',
      comparison: {
        before: {
          items: ['No official website', 'Only social media presence', 'No membership inquiry system'],
          link: ''
        },
        after: {
          items: ['Professional gym website', 'Facility & program sections', 'Clear membership CTA', 'Fast Performance', 'Mobile Responsive', 'Membership Focus', 'Bonus : Special Personalized Ai Assistant Chatbot'],
          link: 'https://alligator-fitness-gym-new-delhi.vercel.app/'
        }
      }
    }
  ];

  return (
    <div className="w-full overflow-hidden pt-32 pb-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-zinc-950 mb-6">
            Proof of <br />
            <span className="text-blue-600">Performance.</span>
          </h1>
          <p className="text-xl text-zinc-600 leading-relaxed">
            I don't just design pretty pages. I engineer digital assets that solve specific business problems and deliver measurable ROI.
          </p>
        </motion.div>

        <div className="space-y-32 mb-32">
          {projects.map((project, i) => (
            <div key={project.id} className="relative">
              {/* Recent Project Badge */}
              {i === 0 && (
                <div className="absolute -top-4 -left-4 md:-top-5 md:-left-5 z-30 flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-full shadow-xl border border-blue-500">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
                  </span>
                  <span className="text-[10px] font-bold text-white uppercase tracking-wide">Recent Project</span>
                </div>
              )}

              <SpotlightCard className="p-0 flex flex-col h-full relative" maxRotation={5}>
                <div className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center p-8`}>
                  <div className="w-full lg:w-1/2">
                    <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-zinc-100 border border-zinc-200 shadow-xl relative group">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-zinc-950/10 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                  </div>
                  
                  <div className="w-full lg:w-1/2">
                    <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6">
                      {project.category}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-zinc-950 mb-4">{project.title}</h2>
                    <p className="text-lg text-zinc-600 mb-8 leading-relaxed">{project.desc}</p>
                    
                    {/* Conditional Rendering: Comparison vs Metrics */}
                    {(project as any).comparison ? (
                      <div className="grid grid-cols-2 gap-6 mb-8">
                        {/* Before Section */}
                        <div className="bg-red-50/50 p-5 rounded-2xl border border-red-100">
                          <h3 className="text-xs font-bold text-red-600 uppercase tracking-wider mb-3 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-red-500"></span> Before (Problems)
                          </h3>
                          <ul className="space-y-2 mb-4">
                            {(project as any).comparison.before.items.map((item: string, idx: number) => (
                              <li key={idx} className="text-sm text-zinc-600 flex items-start gap-2">
                                <span className="text-red-400 mt-1">×</span> {item}
                              </li>
                            ))}
                          </ul>
                          {(project as any).comparison.before.link && (
                            <a 
                              href={(project as any).comparison.before.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1 transition-colors"
                            >
                              View Website <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>

                        {/* After Section */}
                        <div className="bg-emerald-50/50 p-5 rounded-2xl border border-emerald-100">
                          <h3 className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-3 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500"></span> After (Solutions)
                          </h3>
                          <ul className="space-y-2 mb-4">
                            {(project as any).comparison.after.items.map((item: string, idx: number) => (
                              <li key={idx} className="text-sm text-zinc-600 flex items-start gap-2">
                                <span className="text-emerald-500 mt-1">✓</span>
                                <span>
                                  {item.startsWith('Bonus') ? (
                                    <>
                                      <span className="font-bold text-zinc-900">Bonus</span>
                                      {item.substring(5)}
                                    </>
                                  ) : (
                                    item
                                  )}
                                </span>
                              </li>
                            ))}
                          </ul>
                          {(project as any).comparison.after.link && (
                            <a 
                              href={(project as any).comparison.after.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1 transition-colors"
                            >
                              View Project <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="grid grid-cols-3 gap-4 mb-8">
                          {(project as any).metrics?.map((metric: string, j: number) => (
                            <div key={j} className="bg-white p-4 rounded-xl border border-zinc-100 shadow-sm text-center">
                              <span className="block text-sm font-bold text-zinc-950">{metric.split(' ')[0]}</span>
                              <span className="block text-xs text-zinc-500 mt-1">{metric.split(' ').slice(1).join(' ')}</span>
                            </div>
                          ))}
                        </div>

                        <div className="mb-8">
                          <h3 className="text-sm font-bold text-zinc-950 uppercase tracking-wider mb-2">The Approach</h3>
                          <p className="text-sm text-zinc-600 leading-relaxed">{(project as any).approach}</p>
                        </div>
                      </>
                    )}

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors group"
                    >
                      Discuss a similar project <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="bg-blue-600 text-white rounded-3xl p-12 md:p-20 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Your project could be next.
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Stop losing customers to a poorly optimized digital presence. Let's build a strategic asset that works for you 24/7.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:bg-zinc-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Book a Strategy Call <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
