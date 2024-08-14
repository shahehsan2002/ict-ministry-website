import { FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Modal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <motion.div
        className="bg-gradient-to-r from-red-100 to-white p-8 rounded-lg shadow-xl max-w-md mx-auto text-center"
        initial={{ opacity: 0, scale: 0.8, y: -50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 50 }}
        transition={{ duration: 0.4, type: 'spring', stiffness: 300 }}
      >
        <FaCheckCircle size={60} className="text-green-500 mb-4 animate-bounce" />
        <h4 className="text-3xl font-semibold mb-4 text-red-600">Thank you!</h4>
        <p className="text-gray-700 mb-6">Your message has been sent successfully. We will get back to you soon.</p>
        <button
          onClick={onClose}
          className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-all transform hover:scale-105"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default Modal;
