import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import SpotlightCard from '../components/SpotlightCard';
import { blogPosts } from '../data/blogPosts';

export default function Blog() {
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
            Insights on <br />
            <span className="text-blue-600">Digital Growth.</span>
          </h1>
          <p className="text-xl text-zinc-600 leading-relaxed">
            Strategic thinking, performance optimization techniques, and conversion psychology for modern businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {blogPosts.map((post) => (
            <div key={post.id}>
              <SpotlightCard className="p-8 flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-zinc-500 font-medium flex items-center gap-1">
                    <BookOpen className="w-3 h-3" /> {post.readTime}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-zinc-950 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-zinc-600 mb-8 flex-grow line-clamp-3 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-zinc-100">
                  <span className="text-xs text-zinc-400 font-medium">{post.date}</span>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-bold text-zinc-950 group-hover:text-blue-600 transition-colors"
                  >
                    Read Article <ArrowRight className="w-4 h-4" />
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
            Want these insights applied to your site?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Stop guessing what works. Let's audit your current setup and identify the highest-leverage opportunities for improvement.
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
