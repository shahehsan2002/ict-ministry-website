import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const Hero = () => {
  return (
    <motion.div 
      className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-red-500 text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* Circuit-themed SVG Background */}
      <motion.div 
        className="absolute inset-0 -z-10"
        animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 15, ease: "easeInOut", loop: Infinity }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 200 200" fill="none">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#00f2fe", stopOpacity: 0.5 }} />
              <stop offset="100%" style={{ stopColor: "#ff00ab", stopOpacity: 0.5 }} />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grad1)" />
          <g stroke="white" strokeWidth="1.5">
            {/* Circuit lines */}
            <line x1="10" y1="10" x2="190" y2="10" />
            <line x1="10" y1="30" x2="190" y2="30" />
            <line x1="10" y1="50" x2="190" y2="50" />
            <line x1="10" y1="70" x2="190" y2="70" />
            <line x1="10" y1="90" x2="190" y2="90" />
            <line x1="10" y1="110" x2="190" y2="110" />
            <line x1="10" y1="130" x2="190" y2="130" />
            <line x1="10" y1="150" x2="190" y2="150" />
            <line x1="10" y1="170" x2="190" y2="170" />
            
            {/* Circuit nodes */}
            <circle cx="50" cy="10" r="5" fill="white" />
            <circle cx="150" cy="10" r="5" fill="white" />
            <circle cx="50" cy="50" r="5" fill="white" />
            <circle cx="150" cy="50" r="5" fill="white" />
            <circle cx="50" cy="90" r="5" fill="white" />
            <circle cx="150" cy="90" r="5" fill="white" />
            <circle cx="50" cy="130" r="5" fill="white" />
            <circle cx="150" cy="130" r="5" fill="white" />
            <circle cx="50" cy="170" r="5" fill="white" />
            <circle cx="150" cy="170" r="5" fill="white" />
            
            {/* Circuit connections */}
            <line x1="50" y1="10" x2="50" y2="50" />
            <line x1="150" y1="10" x2="150" y2="50" />
            <line x1="50" y1="50" x2="50" y2="90" />
            <line x1="150" y1="50" x2="150" y2="90" />
            <line x1="50" y1="90" x2="50" y2="130" />
            <line x1="150" y1="90" x2="150" y2="130" />
            <line x1="50" y1="130" x2="50" y2="170" />
            <line x1="150" y1="130" x2="150" y2="170" />
          </g>
        </svg>
      </motion.div>

      <motion.h1 
        className="text-4xl md:text-6xl  font-extrabold mb-6  text-center z-10 "
        variants={textVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, type: 'spring', stiffness: 100 }}
      >
        Welcome to <span className="text-green-300">Bangladesh ICT Ministry</span>
      </motion.h1>
      
      <motion.p 
        className="text-lg md:text-2xl mb-8 text-center z-10 font-light"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, delay: 0.5, type: 'spring', stiffness: 100 }}
      >
        Spearheading the <span className="text-yellow-200">Digital Transformation</span> <br /> for a Brighter Bangladesh
      </motion.p>
      
      <motion.button 
        className="bg-white text-green-500 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-green-500 hover:text-white transition-colors duration-300 z-10"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9, rotate: -5 }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        Discover More
      </motion.button>

      <motion.div 
        className="mt-12 text-center z-10"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, delay: 1.5 }}
      >
        <h2 className="text-2xl md:text-4xl font-bold mb-6">Our Latest Initiatives</h2>
        <p className="text-base md:text-lg font-light">
          Dive into our innovative projects aimed at revolutionizing digital infrastructure, advancing e-governance, and driving technology forward.
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 max-w-5xl z-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              delayChildren: 2,
              staggerChildren: 0.5,
            },
          },
        }}
      >
        <motion.div 
          className="bg-white text-green-500 p-8 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 cursor-pointer"
          variants={cardVariants}
        >
          <h3 className="text-xl font-bold mb-3">Digital Bangladesh 2025</h3>
          <p className="text-base font-light">
            Join our ambitious plan to transform Bangladesh into a leading digital nation by 2025 through advanced infrastructure and widespread digital education.
          </p>
        </motion.div>
        
        <motion.div 
          className="bg-white text-green-500 p-8 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 cursor-pointer"
          variants={cardVariants}
        >
          <h3 className="text-xl font-bold mb-3">Tech Park Development</h3>
          <p className="text-base font-light">
            Explore our initiative to build cutting-edge technology parks nationwide, fostering innovation and attracting global tech investments.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
