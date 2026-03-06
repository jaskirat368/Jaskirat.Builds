import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, AlertTriangle } from 'lucide-react';

export default function ServiceDetail() {
  const { id } = useParams();

  // Mock data for the specific service based on ID
  const serviceData = {
    title: id?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    painPoints: [
      'High bounce rates and low engagement metrics.',
      'Users struggling to find key information or complete actions.',
      'A brand image that feels outdated or unprofessional.',
      'Competitors outperforming you with better digital experiences.',
    ],
    whyDiyFails: 'DIY templates look okay on the surface but lack the strategic foundation required for conversion. They are often bloated with unnecessary code, slow to load, and fail to guide the user logically toward a purchase or inquiry.',
    solution: 'I build custom, performance-driven solutions tailored to your specific business goals. Every decision is based on data, user psychology, and proven conversion principles, not just aesthetics.',
    process: [
      { step: 'Audit & Strategy', desc: 'Analyzing your current performance and defining clear objectives.' },
      { step: 'Wireframing & UX', desc: 'Mapping the user journey to eliminate friction points.' },
      { step: 'High-Fidelity Design', desc: 'Creating a modern, brand-aligned visual interface.' },
      { step: 'Development & Testing', desc: 'Building fast, responsive, and accessible code.' },
    ]
  };

  return (
    <div className="w-full overflow-hidden pt-32 pb-24 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Link to="/services" className="text-zinc-500 hover:text-blue-600 transition-colors mb-8 inline-block font-medium">
            &larr; Back to Services
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-zinc-950 mb-6">
            {serviceData.title}
          </h1>
          <p className="text-xl text-zinc-600 leading-relaxed">
            Stop losing customers to a poorly optimized digital presence. Let's build a strategic asset that works for you 24/7.
          </p>
        </motion.div>

        <div className="space-y-20">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-zinc-950 mb-6 flex items-center gap-3">
              <AlertTriangle className="text-amber-500 w-6 h-6" /> The Problem
            </h2>
            <div className="bg-white p-8 rounded-2xl border border-zinc-100">
              <ul className="space-y-4">
                {serviceData.painPoints.map((point, i) => (
                  <li key={i} className="flex gap-3 text-zinc-600">
                    <span className="text-zinc-400 mt-1">•</span> {point}
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-8 border-t border-zinc-100">
                <h3 className="font-bold text-zinc-950 mb-2">Why DIY Solutions Fail</h3>
                <p className="text-zinc-600 leading-relaxed">{serviceData.whyDiyFails}</p>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-zinc-950 mb-6 flex items-center gap-3">
              <CheckCircle2 className="text-blue-600 w-6 h-6" /> The Solution
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed mb-8">
              {serviceData.solution}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {serviceData.process.map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm">
                  <div className="text-sm font-bold text-blue-600 mb-2">Step 0{i + 1}</div>
                  <h4 className="font-bold text-zinc-950 mb-2">{item.step}</h4>
                  <p className="text-sm text-zinc-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-blue-600 text-white rounded-3xl p-10 md:p-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Ready to fix your {serviceData.title.toLowerCase()}?
            </h2>
            <p className="text-lg text-blue-100 mb-10 max-w-xl mx-auto">
              Book a free strategy call to discuss your specific challenges and how we can solve them.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:bg-zinc-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Book Strategy Call
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-blue-400 text-white rounded-full font-bold hover:bg-blue-700 transition-all"
              >
                Request Free Audit
              </Link>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
