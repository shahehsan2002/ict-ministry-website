
import { motion } from 'framer-motion';

const servicesData = [
  {
    title: "Online Applications",
    description: "Apply for various government services online, from licenses to permits.",
    link: "/services/online-applications",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-green-600 mb-4 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M8 6h13M8 12h13m-8 6h8M3 6h.01M3 12h.01M3 18h.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Citizen Portal",
    description: "Access a wide range of e-services through our integrated citizen portal.",
    link: "/services/citizen-portal",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-green-600 mb-4 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M8 17l4 4m0 0l4-4m-4 4V3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "ICT Training Programs",
    description: "Enroll in training programs to enhance your digital skills and knowledge.",
    link: "/services/training-programs",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-green-600 mb-4 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M9 18v-6a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v6m-3-10h0a2.5 2.5 0 0 0-2.5-2.5h0a2.5 2.5 0 0 0-2.5 2.5h0m5 0h0a2.5 2.5 0 0 0-2.5-2.5h0a2.5 2.5 0 0 0-2.5 2.5h0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Services = () => {
  return (
    <section className="relative bg-gradient-to-r from-green-50 to-white py-12 overflow-hidden">
      <div className="container mx-auto">
        <motion.h3 
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-green-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Services
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              {service.icon}
              <h4 className="text-xl font-bold mb-4 text-green-600">{service.title}</h4>
              <p className="mb-4 text-gray-600">{service.description}</p>
              <a href={service.link} className="text-green-600 hover:underline">Learn more →</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
