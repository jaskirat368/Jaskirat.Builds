import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, BookOpen, Calendar } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="w-full pt-32 pb-24 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-blue-600 transition-colors mb-8 font-medium"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-4 py-1.5 rounded-full">
              {post.category}
            </span>
            <span className="text-sm text-zinc-500 font-medium flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> {post.readTime}
            </span>
            <span className="text-sm text-zinc-500 font-medium flex items-center gap-2">
              <Calendar className="w-4 h-4" /> {post.date}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-zinc-950 mb-8">
            {post.title}
          </h1>

          <div
            className="prose prose-zinc prose-lg max-w-none leading-relaxed text-zinc-600"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.div>
      </div>
    </div>
  );
}
