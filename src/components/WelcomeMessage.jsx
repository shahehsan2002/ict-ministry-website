
import { motion } from 'framer-motion';

const WelcomeMessage = () => {
  return (
    <section className="relative bg-white py-12 overflow-hidden">
      <div className="container mx-auto text-center relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-6 text-green-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to the ICT Ministry of Bangladesh
        </motion.h2>
        <motion.p 
          className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-700"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Our mission is to drive Bangladesh forward into a future where technology empowers every citizen. 
          Explore our site to learn more about our initiatives, services, and the progress we're making.
        </motion.p>
      </div>
      
      {/* Background Elements */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-100 to-blue-100 opacity-30 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
      />
      <motion.div 
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-tr from-green-300 to-blue-300 rounded-full opacity-20 -z-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
      />
    </section>
  );
}

export default WelcomeMessage;
