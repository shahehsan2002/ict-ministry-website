const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-4 mt-10">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} ICT Ministry of Bangladesh. All rights reserved.</p>
        <div className="mt-2">
          <a href="https://facebook.com" className="mx-2 hover:underline">Facebook</a>
          <a href="https://twitter.com" className="mx-2 hover:underline">Twitter</a>
          <a href="https://linkedin.com" className="mx-2 hover:underline">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
