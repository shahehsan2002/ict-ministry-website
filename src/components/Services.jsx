const servicesData = [
  {
    title: "Online Applications",
    description: "Apply for various government services online, from licenses to permits.",
    link: "/services/online-applications",
  },
  {
    title: "Citizen Portal",
    description: "Access a wide range of e-services through our integrated citizen portal.",
    link: "/services/citizen-portal",
  },
  {
    title: "ICT Training Programs",
    description: "Enroll in training programs to enhance your digital skills and knowledge.",
    link: "/services/training-programs",
  },
];

const Services = () => {
  return (
    <section className="bg-green-50 py-12">
      <div className="container mx-auto">
        <h3 className="text-3xl font-semibold mb-8 text-center text-red-600">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-xl font-bold mb-4 text-red-600">{service.title}</h4>
              <p className="mb-4">{service.description}</p>
              <a href={service.link} className="text-green-600 hover:underline">Learn more →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
