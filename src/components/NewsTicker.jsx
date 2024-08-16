
import { motion } from 'framer-motion';

const NewsTicker = () => {
  const newsItems = [
    'New ICT policy announced!',
    'Upcoming seminar on digital transformation.',
    'Support desk now available 24/7.',
  ];

  return (
    <div className="bg-red-700 text-white py-2 px-4">
      <motion.div
        className="whitespace-nowrap overflow-hidden"
        initial={{ x: '100%' }}
        animate={{ x: '-100%' }}
        transition={{ duration: 30, repeat: Infinity }}
      >
        {newsItems.join(' • ')}
      </motion.div>
    </div>
  );
};

export default NewsTicker;
