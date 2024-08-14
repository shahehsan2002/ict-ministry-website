const initiativesData = [
  {
    title: "Digital Bangladesh",
    description: "Transforming Bangladesh through the integration of technology into every sector.",
    link: "/initiatives/digital-bangladesh",
  },
  {
    title: "e-Governance",
    description: "Making government services accessible to citizens through digital platforms.",
    link: "/initiatives/e-governance",
  },
  {
    title: "ICT for Education",
    description: "Integrating ICT into the education system to improve learning outcomes.",
    link: "/initiatives/ict-for-education",
  },
];

const Initiatives = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto">
        <h3 className="text-3xl font-semibold mb-8 text-center text-red-600">Our Initiatives</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {initiativesData.map((initiative, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-xl font-bold mb-4 text-red-600">{initiative.title}</h4>
              <p className="mb-4">{initiative.description}</p>
              <a href={initiative.link} className="text-green-600 hover:underline">Learn more →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Initiatives;
