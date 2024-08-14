// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-red-600 to-green-600 text-white p-4 z-50">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} ICT Ministry of Bangladesh. All rights reserved.</p>
        {/* Uncomment and update the links below if needed */}
        {/* <div className="mt-2">
          <a href="https://facebook.com" className="mx-2 hover:text-green-300 transition-colors">Facebook</a>
          <a href="https://twitter.com" className="mx-2 hover:text-green-300 transition-colors">Twitter</a>
          <a href="https://linkedin.com" className="mx-2 hover:text-green-300 transition-colors">LinkedIn</a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
