
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const newsData = {
  'ict-policy-2024': {
    title: "ICT Policy 2024 Announced",
    date: "August 10, 2024",
    content: `
      The ICT Ministry of Bangladesh is pleased to announce the ICT Policy 2024, which aims to revolutionize the digital landscape of the country.
      This policy includes new initiatives to enhance cybersecurity, promote digital literacy, and support innovation in technology.
      With a focus on sustainability and inclusivity, the ICT Policy 2024 sets the stage for a transformative era in digital governance.
    `,
  },
  'digital-literacy': {
    title: "New Initiatives to Enhance Digital Literacy",
    date: "July 25, 2024",
    content: `
      The ICT Ministry is launching several initiatives to boost digital literacy across Bangladesh.
      These initiatives include free online courses, community workshops, and partnerships with educational institutions.
      The goal is to empower citizens with the skills needed to thrive in a digital world and to bridge the digital divide.
    `,
  },
};

const NewsDetail = () => {
  const { id } = useParams();
  const newsItem = newsData[id] || { title: "Not Found", content: "No details available." };

  return (
    <div className="relative bg-gradient-to-r from-blue-100 to-white py-12 px-4">
      <div className="absolute inset-0 -z-10 opacity-40">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 200 200" fill="none">
          <defs>
            <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#e3f2fd", stopOpacity: 0.4 }} />
              <stop offset="100%" style={{ stopColor: "#bbdefb", stopOpacity: 0.2 }} />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#bgGrad)" />
          <g stroke="rgba(0, 0, 0, 0.1)" strokeWidth="1">
            <line x1="10" y1="10" x2="190" y2="10" />
            <line x1="10" y1="30" x2="190" y2="30" />
            <circle cx="50" cy="10" r="5" />
            <circle cx="150" cy="10" r="5" />
          </g>
        </svg>
      </div>
      <div className="container mx-auto px-6">
        <motion.div
          className="bg-white p-8 rounded-lg shadow-lg border border-gray-200"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl font-bold text-red-600 mb-4">{newsItem.title}</h1>
          <p className="text-lg text-gray-600 mb-6">{newsItem.date}</p>
          <p className="text-lg leading-relaxed text-gray-800">{newsItem.content}</p>
        </motion.div>
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
           <Link to="/news" className="bg-red-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-700 transition-all duration-300">
            Back to News List
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NewsDetail;
