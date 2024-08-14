// src/components/Header.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';
import SearchBar from './SearchBar';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-green-600 to-red-600 text-white p-4 shadow-lg z-50">
      <div className="container mx-auto flex items-center justify-between">
        <img src={logo} alt="ICT Ministry Logo" className="h-12" />
        
        {/* Middle section with search bar */}
        <div className="hidden md:flex flex-grow justify-center">
          <SearchBar />
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-green-300 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-green-300 transition-colors">About Us</Link>
          <Link to="/initiatives" className="hover:text-green-300 transition-colors">Initiatives</Link>
          <Link to="/services" className="hover:text-green-300 transition-colors">Services</Link>
          <Link to="/news" className="hover:text-green-300 transition-colors">News</Link>
          <Link to="/contact" className="hover:text-green-300 transition-colors">Contact</Link>
        </nav>
        
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <nav className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-red-700 p-4`}>
        <Link to="/" className="block py-2 hover:text-green-300 transition-colors">Home</Link>
        <Link to="/about" className="block py-2 hover:text-green-300 transition-colors">About Us</Link>
        <Link to="/initiatives" className="block py-2 hover:text-green-300 transition-colors">Initiatives</Link>
        <Link to="/services" className="block py-2 hover:text-green-300 transition-colors">Services</Link>
        <Link to="/news" className="block py-2 hover:text-green-300 transition-colors">News</Link>
        <Link to="/contact" className="block py-2 hover:text-green-300 transition-colors">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
