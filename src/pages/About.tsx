import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Zap, Layout, Code2 } from 'lucide-react';
import SpotlightCard from '../components/SpotlightCard';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <div className="w-full overflow-hidden pt-32 pb-24 px-6 md:px-12 bg-white">
      <motion.div 
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="max-w-3xl mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-zinc-950 mb-6">
            Strategy First. <br />
            <span className="text-blue-600">Aesthetics Second.</span>
          </h1>
          <p className="text-xl text-zinc-600 leading-relaxed">
            I build digital architecture that prioritizes business goals, user psychology, and performance over superficial trends.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          <motion.div
            variants={itemVariants}
          >
            <h2 className="text-3xl font-bold text-zinc-950 mb-6">My Philosophy</h2>
            <div className="space-y-6 text-lg text-zinc-600 leading-relaxed">
              <p>
                My philosophy is simple. I believe that a website should be more than just a digital business card; it should be a powerful tool that actively contributes to your business's success and growth.
              </p>
              <p>
                A successful website begins with strategy. Design should support that strategy, and development should bring it to life with speed, performance, and reliability. This means understanding your unique value proposition and translating it into a digital experience that resonates with your audience.
              </p>
              <p>
                That’s why I combine strategic thinking, modern development practices, and conversion-focused design to create websites that don’t just look impressive but are built to perform. Every section is intentional, every interaction has a purpose, and every line of code contributes to a smoother and more effective user experience. I am committed to delivering excellence in every project, ensuring that your digital presence is a true reflection of your brand's quality and ambition.
              </p>
              <p>
                For me, web design is not just about aesthetics. It is about building high-performing digital foundations that help businesses grow and convert attention into real opportunities. I take pride in my ability to blend creativity with technical precision, resulting in websites that are as functional as they are beautiful.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-zinc-950 mb-8">Core Beliefs</h3>
            {[
              { icon: <Target className="w-6 h-6 text-blue-600" />, title: 'Clarity drives conversion', desc: 'Confused visitors don\'t buy. Clear messaging and intuitive navigation are non-negotiable.' },
              { icon: <Zap className="w-6 h-6 text-blue-600" />, title: 'Speed is a feature', desc: 'A slow website kills trust instantly. Performance optimization is built into my process from day one.' },
              { icon: <Layout className="w-6 h-6 text-blue-600" />, title: 'Form follows function', desc: 'Design must serve the user journey, not distract from it.' },
              { icon: <Code2 className="w-6 h-6 text-blue-600" />, title: 'Scalable foundations', desc: 'I build robust systems that grow with your business, avoiding technical debt.' },
            ].map((item, i) => (
              <div key={i}>
                <SpotlightCard className="p-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">{item.icon}</div>
                    <div>
                      <h4 className="text-lg font-bold text-zinc-950">{item.title}</h4>
                      <p className="text-zinc-600 mt-1">{item.desc}</p>
                    </div>
                  </div>
                </SpotlightCard>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="bg-blue-600 text-white rounded-3xl p-12 md:p-20 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Ready to build a site that actually works?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Let's discuss your business goals and map out a strategy to achieve them.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:bg-zinc-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Book a Strategy Call <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
