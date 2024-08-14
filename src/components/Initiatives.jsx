import { motion } from 'framer-motion';

const initiativesData = [
  {
    title: "Digital Bangladesh",
    description: "Transforming Bangladesh through the integration of technology into every sector.",
    link: "/initiatives/digital-bangladesh",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-green-600 mb-4 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M4 4v5a2 2 0 0 0 2 2h5m7 0h3a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-3m-7 0h-5a2 2 0 0 0-2 2v3m14 14h-7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2z"></path>
      </svg>
    ),
  },
  {
    title: "e-Governance",
    description: "Making government services accessible to citizens through digital platforms.",
    link: "/initiatives/e-governance",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-green-600 mb-4 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M21 21H3V3h9l4 4h5v14z"></path>
      </svg>
    ),
  },
  {
    title: "ICT for Education",
    description: "Integrating ICT into the education system to improve learning outcomes.",
    link: "/initiatives/ict-for-education",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-green-600 mb-4 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M21 14v-2a4 4 0 0 0-4-4h-4m0 0H7m5 0V3m5 9a4 4 0 0 0-4 4v3"></path>
      </svg>
    ),
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Initiatives = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-50 to-white py-12 overflow-hidden">
      <motion.div 
        className="absolute inset-0 -z-10 opacity-20"
        initial={{ scale: 1 }}
        animate={{ scale: 1.2 }}
        transition={{ duration: 10, ease: "easeInOut", loop: Infinity }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 200 200" fill="none">
          <defs>
            <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#e0f7fa", stopOpacity: 0.2 }} />
              <stop offset="100%" style={{ stopColor: "#e0f7fa", stopOpacity: 0.1 }} />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#bgGrad)" />
          <g stroke="rgba(0, 0, 0, 0.05)" strokeWidth="1">
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
      
      <div className="container mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center text-green-600">
          Our Initiatives
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {initiativesData.map((initiative, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              {initiative.icon}
              <h4 className="text-xl font-bold mb-4 text-green-600">{initiative.title}</h4>
              <p className="mb-4 text-gray-600">{initiative.description}</p>
              <a href={initiative.link} className="text-green-600 hover:underline">Learn more →</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Initiatives;
