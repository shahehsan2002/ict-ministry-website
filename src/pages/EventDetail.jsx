
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const eventData = {
  'digital-bangladesh': {
    title: "Digital Bangladesh Conference",
    date: "September 20, 2024",
    location: "Dhaka",
    details: `
      The Digital Bangladesh Conference is a premier event that brings together industry leaders, policymakers, and innovators to discuss the future of digital technology in Bangladesh.
      The conference will feature keynote speeches, panel discussions, and networking opportunities to explore the latest trends and developments in digital transformation.
    `,
  },
  'innovation-workshop': {
    title: "ICT Innovation Workshop",
    date: "October 15, 2024",
    location: "Chittagong",
    details: `
      The ICT Innovation Workshop is designed to foster creativity and innovation in the field of information and communication technology.
      Participants will engage in hands-on activities, collaborative projects, and discussions on emerging technologies and their applications.
    `,
  },
};

const EventDetail = () => {
  const { id } = useParams();
  const event = eventData[id] || { title: "Not Found", details: "" };

  return (
    <div className="relative bg-gradient-to-r from-green-100 to-white py-12 px-4">
      <div className="absolute inset-0 -z-10 opacity-40">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 200 200" fill="none">
          <defs>
            <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#e8f5e9", stopOpacity: 0.4 }} />
              <stop offset="100%" style={{ stopColor: "#c8e6c9", stopOpacity: 0.2 }} />
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
          <h1 className="text-4xl font-bold text-red-600 mb-4">{event.title}</h1>
          <p className="text-lg text-gray-600 mb-4">{event.date} - {event.location}</p>
          <p className="text-lg leading-relaxed text-gray-800">{event.details}</p>
        </motion.div>
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link to="/events" className="bg-red-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-700 transition-all duration-300">
            Back to Events List
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default EventDetail;
