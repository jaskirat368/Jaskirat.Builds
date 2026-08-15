import { motion } from 'motion/react';
import { Phone } from 'lucide-react';
import { Image } from './Image';

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Phone Button */}
      <motion.a
        href="tel:+918553502222"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-blue-600 rounded-full shadow-lg flex items-center justify-center relative group"
      >
        <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-20 duration-1000"></div>
        <Phone className="w-5 h-5 text-white fill-white" />
        <span className="absolute right-full mr-4 bg-white text-zinc-900 px-3 py-1.5 rounded-lg text-sm font-bold shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-zinc-100">
          Call +91 8553502222
        </span>
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/918553502222"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-[#25D366] rounded-full shadow-lg flex items-center justify-center p-2.5 relative group"
      >
        <Image 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
          alt="WhatsApp" 
          className="w-full h-full object-contain" 
        />
        <span className="absolute right-full mr-4 bg-white text-zinc-900 px-3 py-1.5 rounded-lg text-sm font-bold shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-zinc-100">
          Chat on WhatsApp
        </span>
      </motion.a>
    </div>
  );
}

