
import { motion } from 'framer-motion';

// Sample data
const news = [
  { title: "ICT Policy 2024 Announced", date: "August 10, 2024", link: "/news/ict-policy-2024" },
  { title: "New Initiatives to Enhance Digital Literacy", date: "July 25, 2024", link: "/news/digital-literacy" },
];

const events = [
  { title: "Digital Bangladesh Conference", date: "September 20, 2024", location: "Dhaka", link: "/events/digital-bangladesh" },
  { title: "ICT Innovation Workshop", date: "October 15, 2024", location: "Chittagong", link: "/events/innovation-workshop" },
];

// Animation variants
const listVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const NewsUpdates = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <motion.h1 
        className="text-4xl font-bold text-red-600 mb-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        News & Updates
      </motion.h1>
      <motion.p 
        className="text-lg leading-relaxed mb-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        Stay updated with the latest news and developments from the ICT Ministry. Read about our recent activities, policy changes, and upcoming events.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div 
          className="bg-white p-6 rounded-lg shadow-lg"
          initial="hidden"
          animate="visible"
          variants={listVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-semibold text-red-600 mb-6">Latest News</h2>
          <ul>
            {news.map((item, index) => (
              <li key={index} className="mb-4">
                <a href={item.link} className="text-lg text-green-600 hover:underline">{item.title}</a>
                <p className="text-gray-600">{item.date}</p>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div 
          className="bg-white p-6 rounded-lg shadow-lg"
          initial="hidden"
          animate="visible"
          variants={listVariants}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="text-3xl font-semibold text-red-600 mb-6">Upcoming Events</h2>
          <ul>
            {events.map((event, index) => (
              <li key={index} className="mb-4">
                <a href={event.link} className="text-lg text-green-600 hover:underline">{event.title}</a>
                <p className="text-gray-600">{event.date} - {event.location}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default NewsUpdates;
