import { motion } from 'framer-motion';

const linkVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const icons = {
  digitalServices: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mx-auto mb-4 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2 2 4-4m2 0l4 4 5-5M5 12l2 2m6-6l4 4M19 12l2 2" />
    </svg>
  ),
  initiatives: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mx-auto mb-4 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-3 3v-6m-4 6v-6m-2 6h2m4 0h2m-6 0h-2m10 0h-2m-2 0h2m-2 0h-2m-2 0v2m0-6v-2m0 0V9m0-2V7m0 4V9" />
    </svg>
  ),
  newsUpdates: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mx-auto mb-4 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l6 6 6-6m0 0l6 6 6-6M3 6l6 6 6-6m0 0l6 6 6-6" />
    </svg>
  ),
};

const QuickLinks = () => {
  return (
    <section className="relative py-16 bg-gradient-to-r from-green-50 to-blue-50 overflow-hidden">
      {/* Decorative Background */}
      <motion.div 
        className="absolute inset-0 -z-10 opacity-30"
        initial={{ scale: 1, opacity: 0.3 }}
        animate={{ scale: 1.3, opacity: 0.5 }}
        transition={{ duration: 15, ease: "easeInOut", loop: Infinity }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 200 200" fill="none">
          <defs>
            <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#ffffff", stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: "#ffffff", stopOpacity: 0.1 }} />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#bgGrad)" />
          <g stroke="rgba(0, 0, 0, 0.1)" strokeWidth="1">
            {/* Decorative Circuit Lines */}
            <line x1="10" y1="10" x2="190" y2="10" />
            <line x1="10" y1="30" x2="190" y2="30" />
            <line x1="10" y1="50" x2="190" y2="50" />
            <line x1="10" y1="70" x2="190" y2="70" />
            <line x1="10" y1="90" x2="190" y2="90" />
            <line x1="10" y1="110" x2="190" y2="110" />
            <line x1="10" y1="130" x2="190" y2="130" />
            <line x1="10" y1="150" x2="190" y2="150" />
            <line x1="10" y1="170" x2="190" y2="170" />
            <circle cx="50" cy="10" r="5" />
            <circle cx="150" cy="10" r="5" />
            <circle cx="50" cy="50" r="5" />
            <circle cx="150" cy="50" r="5" />
            <circle cx="50" cy="90" r="5" />
            <circle cx="150" cy="90" r="5" />
            <circle cx="50" cy="130" r="5" />
            <circle cx="150" cy="130" r="5" />
            <circle cx="50" cy="170" r="5" />
            <circle cx="150" cy="170" r="5" />
          </g>
        </svg>
      </motion.div>

      <div className="container mx-auto px-6">
        <motion.h3 
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-red-600 relative z-10"
          initial="hidden"
          animate="visible"
          variants={linkVariants}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}
        >
          Quick Links
        </motion.h3>
        <div className="flex flex-wrap justify-center gap-6">
          <motion.a 
            href="/digital-services"
            className="relative bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-green-100 text-center text-gray-700 border border-gray-200 hover:border-green-300 overflow-hidden"
            variants={linkVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.2 }}
          >
            {icons.digitalServices}
            <h4 className="text-2xl font-semibold mb-3 text-red-600">Digital Services</h4>
            <p className="text-md">Explore a wide range of digital services available for you.</p>
          </motion.a>
          <motion.a 
            href="/initiatives"
            className="relative bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-green-100 text-center text-gray-700 border border-gray-200 hover:border-green-300 overflow-hidden"
            variants={linkVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.4 }}
          >
            {icons.initiatives}
            <h4 className="text-2xl font-semibold mb-3 text-red-600">Initiatives</h4>
            <p className="text-md">Learn about our latest initiatives and projects.</p>
          </motion.a>
          <motion.a 
            href="/news"
            className="relative bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-green-100 text-center text-gray-700 border border-gray-200 hover:border-green-300 overflow-hidden"
            variants={linkVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.6 }}
          >
            {icons.newsUpdates}
            <h4 className="text-2xl font-semibold mb-3 text-red-600">News & Updates</h4>
            <p className="text-md">Stay updated with the latest news and updates.</p>
          </motion.a>
        </div>
      </div>
    </section>
  );
}

export default QuickLinks;
