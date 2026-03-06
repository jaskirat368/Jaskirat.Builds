import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, LayoutTemplate, Settings, ShoppingCart, RefreshCcw, Zap, BarChart3, Workflow } from 'lucide-react';
import SpotlightCard from '../components/SpotlightCard';

export default function Services() {
  const services = [
    {
      id: 'ui-ux-design',
      title: 'UI/UX Design',
      icon: <LayoutTemplate className="w-8 h-8" />,
      desc: 'Intuitive, user-centric interfaces that guide visitors to conversion.',
      impact: 'Reduces bounce rates and increases time-on-site by creating frictionless user journeys.',
    },
    {
      id: 'development',
      title: 'Website Development',
      icon: <Settings className="w-8 h-8" />,
      desc: 'Clean, scalable code built on modern tech stacks for maximum reliability.',
      impact: 'Ensures your site is fast, secure, and easily maintainable as your business scales.',
    },
    {
      id: 'ecommerce',
      title: 'Ecommerce Development',
      icon: <ShoppingCart className="w-8 h-8" />,
      desc: 'High-performance storefronts optimized for average order value and checkout speed.',
      impact: 'Directly impacts bottom-line revenue by removing friction from the buying process.',
    },
    {
      id: 'redesign',
      title: 'Website Redesign',
      icon: <RefreshCcw className="w-8 h-8" />,
      desc: 'Strategic overhauls of underperforming assets to align with current goals.',
      impact: 'Revitalizes brand perception and fixes legacy conversion bottlenecks.',
    },
    {
      id: 'optimization',
      title: 'Performance Optimization',
      icon: <Zap className="w-8 h-8" />,
      desc: 'Technical SEO and speed enhancements to dominate search rankings.',
      impact: 'Improves organic visibility and prevents user drop-off due to slow load times.',
    },
    {
      id: 'maintenance',
      title: 'Website Maintenance',
      icon: <BarChart3 className="w-8 h-8" />,
      desc: 'Ongoing support to ensure security, speed, and continuous improvement.',
      impact: 'Protects your digital investment and ensures it remains a high-performing asset.',
    },
    {
      id: 'automation',
      title: 'Automation & Workflow',
      icon: <Workflow className="w-8 h-8" />,
      desc: 'Workflow integrations to save time and streamline your business operations.',
      impact: 'Reduces manual labor, minimizes errors, and accelerates lead response times.',
    },
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
            Digital Architecture <br />
            <span className="text-blue-600">Built to Scale.</span>
          </h1>
          <p className="text-xl text-zinc-600 leading-relaxed">
            I don't just build websites. I engineer digital solutions that solve complex business problems and drive measurable growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {services.map((service, i) => (
            <div key={service.id}>
              <SpotlightCard className="p-10 flex flex-col h-full">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-bold text-zinc-950 mb-4">{service.title}</h2>
                <p className="text-zinc-600 mb-6 flex-grow">{service.desc}</p>
                <div className="pt-6 border-t border-zinc-100 mt-auto">
                  <p className="text-sm font-medium text-zinc-950 mb-2">Business Impact:</p>
                  <p className="text-sm text-zinc-500 mb-6">{service.impact}</p>
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
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
            Not sure what you need?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Let's audit your current setup and identify the highest-leverage opportunities for improvement.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:bg-zinc-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Request Free Audit <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
