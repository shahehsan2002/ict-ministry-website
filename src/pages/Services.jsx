import React from 'react';
import { motion } from 'framer-motion';

// Data for services
const servicesData = [
  {
    title: "Online Applications",
    description: `Our Online Applications service revolutionizes the way citizens interact with government services. By transitioning many of our processes to a digital platform, we enable you to apply for various documents such as licenses, permits, and certificates from the comfort of your home. This service not only streamlines the application process but also reduces the time and effort required to handle bureaucratic tasks, making government services more accessible to everyone.`,
  },
  {
    title: "Citizen Portal",
    description: `The Citizen Portal is a central hub designed to provide easy access to a variety of e-services. This platform allows you to manage your personal information, track the status of your applications, and utilize several other services, all in one place. By integrating various government services into a single, user-friendly portal, we aim to enhance your overall experience and make it simpler to engage with government processes.`,
  },
  {
    title: "ICT Training Programs",
    description: `Our ICT Training Programs are tailored to meet the diverse needs of individuals and organizations looking to enhance their digital skills. These programs cover a wide range of topics, from basic computer operations to advanced technical training in areas like software development and cybersecurity. Our goal is to empower participants with the skills necessary to excel in today’s technology-driven world, fostering both personal growth and professional development.`,
  },
];

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const ServicesPage = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <motion.h1 
        className="text-4xl font-bold text-red-600 mb-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Our Services
      </motion.h1>
      <motion.p 
        className="text-lg leading-relaxed mb-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        Discover the extensive range of services offered by the ICT Ministry of Bangladesh. Our services are designed to enhance your interaction with the government and improve access to digital resources. Each service is tailored to meet specific needs and aims to foster a more connected and efficient society.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <motion.div 
            key={index} 
            className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.4 * index, ease: "easeOut" }}
          >
            <h2 className="text-2xl font-semibold text-red-600 mb-4">{service.title}</h2>
            <p className="text-lg mb-4">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
