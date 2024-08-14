// src/pages/SearchResults.jsx
import  { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const searchVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const placeholderVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const fetchSearchResults = async (query) => {
  // Replace with your actual search logic
  const allResults = [
    { title: 'Digital Bangladesh Policy 2024', snippet: 'Details about the Digital Bangladesh Policy 2024.', link: '/news/digital-bangladesh-policy-2024' },
    { title: 'ICT for Development', snippet: 'How ICT is driving development in Bangladesh.', link: '/news/ict-for-development' },
    // Add more sample results as needed
  ];

  // Simulate a search operation
  return allResults.filter(result =>
    result.title.toLowerCase().includes(query.toLowerCase())
  );
};

const SearchResults = () => {
  const query = new URLSearchParams(useLocation().search).get('q');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const performSearch = async () => {
      setLoading(true);
      const searchResults = await fetchSearchResults(query);
      setResults(searchResults);
      setLoading(false);
    };

    performSearch();
  }, [query]);

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-red-600 mb-6">
        Search Results for "<span className="text-gray-800">{query}</span>"
      </h1>
      {loading ? (
        <div className="space-y-6">
          {[...Array(3)].map((_, index) => (
            <motion.div
              key={index}
              className="animate-pulse mb-6 p-6 bg-white rounded-lg shadow-lg"
              variants={placeholderVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <div className="h-6 bg-gray-300 rounded mb-4"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded mt-2"></div>
            </motion.div>
          ))}
        </div>
      ) : results.length > 0 ? (
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={searchVariants}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {results.map((result, index) => (
            <motion.li
              key={index}
              className="mb-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <a href={result.link} className="text-xl font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300">
                {result.title}
              </a>
              <p className="text-gray-700 mt-2">{result.snippet}</p>
            </motion.li>
          ))}
        </motion.ul>
      ) : (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-lg text-gray-600"
        >
          No results found.
        </motion.p>
      )}
    </div>
  );
};

export default SearchResults;
