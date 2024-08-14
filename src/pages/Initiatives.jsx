
import { Link } from 'react-router-dom';

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

const InitiativesPage = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-red-600 mb-6">Our Initiatives</h1>
      <p className="text-lg leading-relaxed mb-8">
        Discover our various initiatives aimed at transforming Bangladesh through technology. 
        From enhancing digital services to improving educational outcomes, explore how we are making a significant impact.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {initiativesData.map((initiative, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <h2 className="text-2xl font-semibold text-red-600 mb-4">{initiative.title}</h2>
            <p className="text-lg mb-4">{initiative.description}</p>
            <Link 
              to={initiative.link} 
              className="text-green-600 hover:underline font-semibold"
            >
              Learn More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InitiativesPage;
