import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Search } from 'lucide-react';

export default function NotFound() {
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
    <div className="w-full overflow-hidden pt-32 pb-24 px-6 md:px-12 bg-white min-h-[80vh] flex items-center justify-center">
      <motion.div 
        className="max-w-3xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-8 relative inline-block">
          <h1 className="text-9xl md:text-[12rem] font-black tracking-tighter text-zinc-100 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="bg-white px-6 py-2 text-2xl md:text-4xl font-bold tracking-tight text-zinc-950 backdrop-blur-md rounded-2xl border border-zinc-100 shadow-xl">
              Page Not Found
            </span>
          </div>
        </motion.div>

        <motion.p variants={itemVariants} className="text-xl text-zinc-600 leading-relaxed mb-12 max-w-xl mx-auto">
          The page you are looking for doesn't exist or has been moved. Let's get you back on track to building something great.
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-blue-600 rounded-full transition-all hover:bg-blue-500 hover:shadow-lg hover:-translate-y-0.5"
          >
            <Home className="w-4 h-4" />
            <span className="relative z-10">Back to Home</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-zinc-700 bg-zinc-100 rounded-full transition-all hover:bg-zinc-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
