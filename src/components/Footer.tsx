import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-16 px-6 md:px-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="text-2xl font-bold tracking-tight text-white mb-4 block">
            JASKIRAT<span className="text-blue-600">.</span>BUILDS
          </Link>
          <p className="text-sm max-w-sm mt-4 leading-relaxed">
            High-converting websites built for growth. Modern, fast, strategic, and performance-driven digital architecture.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a
              href="https://instagram.com/jaskirat.builds"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors"
            >
              Instagram: @jaskirat.builds
              <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Navigation</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
            <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Legal</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/legal" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link to="/legal" className="hover:text-white transition-colors">Terms of Service</Link></li>
            <li><Link to="/legal" className="hover:text-white transition-colors">Disclaimer</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
        <p>&copy; {new Date().getFullYear()} Jaskirat Builds. All rights reserved.</p>
        <p>Designed to turn traffic into customers.</p>
      </div>
    </footer>
  );
}
