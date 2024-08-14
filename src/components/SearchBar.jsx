import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      navigate(`/search?q=${query}`);
    }
  };

  // Define the animation styles inline
  const placeholderAnimation = {
    animation: 'placeholder-shift 2s infinite',
    color: '#aaa' // Placeholder color
  };

  // Define the keyframes for the animation using a <style> tag
  const keyframes = `
    @keyframes placeholder-shift {
      0% {
        transform: translateY(0);
        opacity: 0.7;
      }
      50% {
        transform: translateY(-8px);
        opacity: 1;
      }
      100% {
        transform: translateY(0);
        opacity: 0.7;
      }
    }
  `;

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-md mx-auto">
      {/* Inline style for keyframes */}
      <style>
        {keyframes}
      </style>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-3 pl-10 pr-4 rounded-full border text-black border-gray-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-shadow duration-300 ease-in-out"
        style={placeholderAnimation}
      />
      <button
        type="submit"
        className="absolute right-2 top-2 text-red-600 hover:text-red-800 transition-colors duration-300"
      >
        <FaSearch size={20} />
      </button>
    </form>
  );
};

export default SearchBar;
