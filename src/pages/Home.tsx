import { motion, useScroll, useTransform, animate, useInView } from 'motion/react';
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SpotlightCard from '../components/SpotlightCard';
import FlipWord from '../components/FlipWord';
import { ArrowRight, ArrowUpRight, CheckCircle2, BarChart3, Zap, LayoutTemplate, Settings, RefreshCcw, ShoppingCart } from 'lucide-react';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  const revealVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  return (
    <div className="w-full overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[100vh] flex items-center justify-center pt-32 pb-20 px-6 md:px-12 bg-zinc-950 z-20">
        {/* Static Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://plus.unsplash.com/premium_photo-1675330629202-20726eedd8ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhZGllbnQlMjBiYWNrZ3JvdW5kJTIwYmxhY2t8ZW58MHx8MHx8fDA%3D"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          {/* Dark Overlay for Text Contrast */}
          <div className="absolute inset-0 bg-zinc-950/10 pointer-events-none" />
          
          {/* 3D Animated Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ perspective: "1000px" }}>
            {/* Floating Cube - Left */}
            <div className="absolute top-1/4 left-[10%] opacity-60">
              <Cube3D size={60} className="border border-white/20 bg-white/5 shadow-[0_0_30px_rgba(255,255,255,0.1)]" />
            </div>

            {/* Floating Cube - Right */}
            <div className="absolute bottom-1/3 right-[10%] opacity-60">
              <Cube3D size={80} reverse className="border border-white/20 bg-white/5 shadow-[0_0_30px_rgba(255,255,255,0.1)]" />
            </div>

            {/* Floating Ring - Top Right */}
            <motion.div
              animate={{ rotateX: [0, 360], rotateY: [0, 180] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute top-[15%] right-[20%] w-32 h-32 border border-white/10 rounded-full"
              style={{ transformStyle: "preserve-3d" }}
            />

            {/* Floating Ring - Bottom Left */}
            <motion.div
              animate={{ rotateX: [0, -360], rotateY: [0, -180] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-[20%] left-[15%] w-48 h-48 border border-white/5 rounded-full"
              style={{ transformStyle: "preserve-3d" }}
            />
            
            {/* Glowing Orbs */}
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -z-10"
            />
          </div>
        </div>

        <motion.div
          className="max-w-5xl mx-auto text-center z-10 relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md mb-8 shadow-[0_4px_24px_rgba(37,99,235,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-xs font-medium text-blue-200 tracking-wide uppercase">Available for new projects</span>
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter text-white leading-[1.05] mb-8"
          >
            High-<FlipWord /> <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-zinc-400 drop-shadow-sm">
              Websites Built for Growth.
            </span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 font-medium tracking-tight"
          >
            Modern · Fast · Strategic · Performance-Driven
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:from-blue-500 hover:to-blue-400"
            >
              <span className="absolute inset-0 w-full h-full rounded-full opacity-50 bg-gradient-to-b from-white/20 to-transparent pointer-events-none"></span>
              <span className="relative z-10 flex items-center gap-2">
                Book a Free Strategy Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-transparent border border-white/10 rounded-full transition-all duration-300 hover:bg-white/5 hover:border-white/20"
            >
              Get a Free Website Audit
            </Link>
          </motion.div>
          
          <motion.p variants={itemVariants} className="mt-12 text-sm text-zinc-500 font-medium tracking-wide">
            Designed to turn traffic into customers — not just clicks.
          </motion.p>
        </motion.div>
        
        {/* Seamless Bottom Gradient Transition */}
        <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-b from-zinc-950/0 to-zinc-50 pointer-events-none z-10" />
      </section>

      {/* PROBLEM SECTION */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={revealVariants}
        className="relative pt-32 pb-32 px-6 md:px-12 bg-zinc-50 overflow-hidden"
      >
        {/* Animated background elements */}
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-indigo-200/20 rounded-full blur-3xl pointer-events-none"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-950 mb-6">
              Most Websites Don't Convert. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Here's Why.</span>
            </h2>
            <p className="text-lg text-zinc-600">
              A beautiful website is useless if it doesn't generate revenue. If your current site is underperforming, it's likely suffering from one of these critical flaws.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Poor UX', desc: 'Confusing navigation and friction points that frustrate users and cause them to bounce.' },
              { title: 'Weak Messaging', desc: 'Failing to clearly articulate value within the first 5 seconds of a visit.' },
              { title: 'Slow Performance', desc: 'Load times over 3 seconds kill conversion rates before the page even renders.' },
              { title: 'No Conversion Strategy', desc: 'Missing clear calls-to-action and logical user journeys.' },
              { title: 'No Optimization', desc: 'Ignoring data, analytics, and iterative improvements post-launch.' },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
              >
                <SpotlightCard className="h-full p-8 bg-white border-zinc-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center relative">
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 bg-blue-100 rounded-2xl"
                      />
                      <XIcon className="w-6 h-6 relative z-10" />
                    </div>
                    <motion.div 
                      animate={{ opacity: [0.2, 0.8, 0.2] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: i * 0.3 }}
                      className="w-2 h-2 rounded-full bg-red-400 shadow-[0_0_8px_rgba(248,113,113,0.8)]"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-950 mb-3">{item.title}</h3>
                  <p className="text-zinc-600 leading-relaxed">{item.desc}</p>
                </SpotlightCard>
              </motion.div>
            ))}
            
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 5 * 0.4 }}
              className="relative bg-zinc-950 p-8 rounded-3xl shadow-xl border border-zinc-800 flex flex-col justify-center items-start overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-zinc-950 z-0" />
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-24 -right-24 w-48 h-48 bg-blue-600/20 blur-3xl rounded-full"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-24 -left-24 w-48 h-48 bg-indigo-600/20 blur-3xl rounded-full"
              />
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">I build the solution.</h3>
              <p className="text-zinc-400 mb-6 relative z-10">Strategic architecture designed specifically for your business goals.</p>
              <Link to="/contact" className="relative z-10 text-blue-400 font-semibold flex items-center gap-2 hover:text-blue-300 transition-colors group-hover:translate-x-2 duration-300">
                Let's fix your site 
                <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* SERVICES SNAPSHOT */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={revealVariants}
        className="py-32 px-6 md:px-12 bg-white relative"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-10">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-zinc-950 mb-6">
                Digital Architecture for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Modern Businesses.</span>
              </h2>
              <p className="text-xl text-zinc-600 max-w-2xl font-medium">
                Comprehensive solutions focused on performance, aesthetics, and measurable ROI.
              </p>
            </div>
            <Link to="/services" className="group flex items-center gap-3 px-6 py-3 rounded-full bg-zinc-950 text-white font-semibold hover:bg-zinc-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              View all services 
              <span className="bg-white/20 p-1 rounded-full group-hover:bg-white/30 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <LayoutTemplate className="w-8 h-8" />, title: 'UI/UX Design', desc: 'Intuitive, user-centric interfaces that guide visitors to conversion.', span: 'lg:col-span-2' },
              { icon: <Settings className="w-8 h-8" />, title: 'Development', desc: 'Clean, scalable code built on modern tech stacks for maximum reliability.', span: '' },
              { icon: <ShoppingCart className="w-8 h-8" />, title: 'Ecommerce', desc: 'High-performance storefronts optimized for average order value and checkout speed.', span: '' },
              { icon: <RefreshCcw className="w-8 h-8" />, title: 'Redesign', desc: 'Strategic overhauls of underperforming assets to align with current goals.', span: '' },
              { icon: <Zap className="w-8 h-8" />, title: 'Optimization', desc: 'Technical SEO and speed enhancements to dominate search rankings.', span: '' },
              { icon: <BarChart3 className="w-8 h-8" />, title: 'Maintenance', desc: 'Ongoing support to ensure security, speed, and continuous improvement.', span: '' },
              { icon: <Settings className="w-8 h-8" />, title: 'Automation', desc: 'Workflow integrations to save time and streamline your business operations.', span: 'lg:col-span-2' },
            ].map((service, i) => (
              <div key={i}>
                <SpotlightCard 
                  to={`/services/${service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} 
                  className={`p-8 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] ${service.span}`}
                >
                  <div className="absolute top-8 right-8 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="w-6 h-6 text-blue-600" />
                  </div>
                  
                  <div className="w-16 h-16 rounded-2xl bg-white border border-zinc-100 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:border-blue-100 group-hover:text-blue-600 transition-all duration-300">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-zinc-950 mb-3 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                  <p className="text-zinc-600 leading-relaxed font-medium">{service.desc}</p>
                </SpotlightCard>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* PROCESS SECTION */}
      <section ref={containerRef} className="relative py-48 px-6 md:px-12 bg-zinc-950 text-white overflow-hidden">
        
        {/* Seamless Gradient Transitions - Extended for smoothness */}
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-white via-zinc-950/20 to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white via-zinc-950/20 to-transparent z-10 pointer-events-none" />

        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900/50 to-zinc-950 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
            >
              A Structured, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">Strategic Process.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-zinc-400"
            >
              No guesswork. Just a proven methodology designed to deliver results on time and on budget.
            </motion.p>
          </div>

          <div className="relative mt-20">
            {/* Central Track Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-zinc-800 -translate-x-1/2 md:translate-x-0" />
            
            {/* Animated Filling Beam - Electricity Effect */}
            <motion.div 
              style={{ height }}
              className="absolute left-6 md:left-1/2 top-0 w-[3px] bg-white -translate-x-1/2 md:translate-x-0 shadow-[0_0_15px_rgba(255,255,255,0.8),0_0_30px_rgba(255,255,255,0.4)] z-10 origin-top overflow-hidden" 
            >
              {/* Flowing texture inside the line */}
              <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.8),transparent)] bg-[length:100%_50%] animate-flow opacity-70" />
            </motion.div>

            <div className="space-y-24 pb-20">
              {[
                { step: '01', title: 'Discovery', desc: 'Deep dive into your business goals, target audience, and market positioning.' },
                { step: '02', title: 'Strategy', desc: 'Mapping the user journey, defining the architecture, and planning conversions.' },
                { step: '03', title: 'Design', desc: 'Crafting high-fidelity, conversion-focused visual interfaces.' },
                { step: '04', title: 'Development', desc: 'Building fast, responsive, and scalable code.' },
                { step: '05', title: 'Testing', desc: 'Rigorous QA across devices, browsers, and performance metrics.' },
                { step: '06', title: 'Launch', desc: 'Seamless deployment with zero downtime and full SEO preservation.' },
                { step: '07', title: 'Optimization', desc: 'Post-launch analytics review and iterative improvements.' },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className={`relative flex flex-col md:flex-row gap-12 items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="hidden md:block flex-1 md:w-1/2" />
                  
                  {/* Timeline Node */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <motion.div 
                      whileInView={{ scale: [1, 1.5, 1], borderColor: ["#27272a", "#3b82f6", "#27272a"] }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="w-4 h-4 rounded-full bg-zinc-950 border border-zinc-700 z-10 relative"
                    >
                      <div className="absolute inset-0 bg-blue-500/50 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>
                  </div>

                  <div className={`flex-1 w-full pl-16 md:pl-0 ${i % 2 === 0 ? 'md:pr-24 md:text-right' : 'md:pl-24 md:text-left'}`}>
                    <motion.div 
                      animate={{ 
                        y: [0, -8, 0],
                        borderColor: ["rgba(39, 39, 42, 0.5)", "rgba(59, 130, 246, 0.4)", "rgba(39, 39, 42, 0.5)"],
                        backgroundColor: ["rgba(24, 24, 27, 0.4)", "rgba(24, 24, 27, 0.8)", "rgba(24, 24, 27, 0.4)"],
                        boxShadow: ["0 0 0 rgba(0,0,0,0)", "0 10px 40px -10px rgba(37,99,235,0.2)", "0 0 0 rgba(0,0,0,0)"]
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                      className="relative p-8 rounded-3xl border backdrop-blur-sm overflow-hidden"
                    >
                      
                      {/* Animated Gradient Border - Continuous Shimmer */}
                      <div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent -translate-x-full animate-shimmer" 
                        style={{ animationDuration: '3s', animationDelay: `${i * 0.5}s` }}
                      />
                      
                      {/* Connector Line (Desktop) */}
                      <motion.div 
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className={`absolute top-1/2 -translate-y-1/2 w-24 h-px bg-gradient-to-r from-blue-500/50 to-transparent hidden md:block ${i % 2 === 0 ? '-right-24 origin-left' : '-left-24 origin-right'}`} 
                      />
                      
                      <div className={`flex items-center gap-4 mb-4 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <motion.span 
                          animate={{ scale: [1, 1.1, 1], borderColor: ["rgba(59, 130, 246, 0.2)", "rgba(59, 130, 246, 0.5)", "rgba(59, 130, 246, 0.2)"] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                          className="flex items-center justify-center w-12 h-12 text-lg font-bold text-blue-400 bg-blue-500/10 rounded-xl border shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                        >
                          {item.step}
                        </motion.span>
                        <div className={`h-px flex-1 bg-gradient-to-r from-zinc-800 to-transparent ${i % 2 === 0 ? 'bg-gradient-to-l' : ''}`} />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">{item.title}</h3>
                      <p className="text-zinc-300 leading-relaxed">{item.desc}</p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE ME */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={revealVariants}
        className="py-24 px-6 md:px-12 bg-white"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-950 mb-8">
              Why Partner <br />
              <span className="text-blue-600">With Me?</span>
            </h2>
            <div className="space-y-6">
              {[
                { title: 'Clarity over complexity', desc: 'I build intuitive interfaces that users instantly understand, removing friction from the buying process.' },
                { title: 'Strategy over aesthetics', desc: 'Beautiful design is expected. I focus on the underlying strategy that turns visitors into leads.' },
                { title: 'Performance over decoration', desc: 'Fast load times and clean code prioritize user experience and search engine rankings.' },
                { title: 'Long-term partnership mindset', desc: 'I don\'t just launch and leave. I build scalable foundations for your future growth.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-zinc-950">{item.title}</h4>
                    <p className="text-zinc-600 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-zinc-100 overflow-hidden relative border border-zinc-200 shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center text-zinc-300">
                 <div className="w-full h-full bg-[url('https://i.ibb.co/rKLhgjwV/ndsukp7f7yjl4unagsvh.jpg')] bg-cover bg-center"></div>
              </div>
            </div>
            {/* Floating stats card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-zinc-100 max-w-xs">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-zinc-950">Conversion Rate</p>
                  <p className="text-xs text-zinc-500">Average Client Increase</p>
                </div>
              </div>
              <div className="text-3xl font-black text-zinc-950 tracking-tight flex items-center">
                <span className="text-zinc-950">+</span>
                <Counter from={0} to={42} />
                <span>%</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* FINAL CTA */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={revealVariants}
        className="py-20 px-6 md:px-12 bg-white"
      >
        <div className="max-w-7xl mx-auto relative rounded-[2.5rem] overflow-hidden bg-zinc-950 text-white text-center py-24 px-6 md:px-12 shadow-2xl">
          {/* Subtle White Dots Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none" />
          
          {/* Gradient Overlay for Depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-zinc-950/50 to-zinc-950/80 pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
              Ready to Turn Your Website into a Growth Engine?
            </h2>
            <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
              Stop losing customers to a poorly optimized digital presence. Let's build a strategic asset that works for you 24/7.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="w-full sm:w-auto"
              >
                <Link
                  to="/contact"
                  className="block w-full px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-500 transition-all shadow-lg hover:shadow-xl"
                >
                  Book Strategy Call
                </Link>
              </motion.div>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold hover:bg-white/10 transition-all"
              >
                Request Free Audit
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function Counter({ from, to }: { from: number; to: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true });

  useEffect(() => {
    const node = nodeRef.current;
    if (!node || !inView) return;

    const controls = animate(from, to, {
      duration: 1.5,
      onUpdate(value) {
        node.textContent = Math.round(value).toString();
      },
    });

    return () => controls.stop();
  }, [from, to, inView]);

  return <span ref={nodeRef} />;
}

function Cube3D({ size = 60, className = "", reverse = false }: { size?: number, className?: string, reverse?: boolean }) {
  const half = size / 2;
  return (
    <motion.div
      animate={{ 
        rotateX: reverse ? [360, 0] : [0, 360], 
        rotateY: reverse ? [360, 0] : [0, 360] 
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      style={{ 
        width: size, 
        height: size, 
        transformStyle: "preserve-3d", 
      }}
      className="relative"
    >
      {/* Faces */}
      {[
        { transform: `translateZ(${half}px)` }, // Front
        { transform: `rotateY(180deg) translateZ(${half}px)` }, // Back
        { transform: `rotateY(90deg) translateZ(${half}px)` }, // Right
        { transform: `rotateY(-90deg) translateZ(${half}px)` }, // Left
        { transform: `rotateX(90deg) translateZ(${half}px)` }, // Top
        { transform: `rotateX(-90deg) translateZ(${half}px)` }, // Bottom
      ].map((style, i) => (
        <div key={i} className={`absolute inset-0 ${className}`} style={style} />
      ))}
    </motion.div>
  );
}