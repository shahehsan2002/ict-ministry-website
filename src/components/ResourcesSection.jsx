
import React from 'react';

const ResourcesSection = () => {
  return (
    <section id="resources" className="py-16 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Documents & Reports</h3>
            <p>Access downloadable resources, reports, and publications.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Research & Development</h3>
            <p>Explore our research initiatives and development activities.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Career Opportunities</h3>
            <p>Find job openings and internship opportunities with the ministry.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
