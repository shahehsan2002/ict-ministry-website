
import { FaCheckCircle } from 'react-icons/fa';

const Modal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm mx-auto text-center">
        <FaCheckCircle size={48} className="text-green-500 mb-4" />
        <h4 className="text-2xl font-semibold mb-4">Thank you!</h4>
        <p className="text-gray-700 mb-6">Your message has been sent successfully. We will get back to you soon.</p>
        <button
          onClick={onClose}
          className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
