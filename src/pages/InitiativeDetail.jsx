
import { useParams } from 'react-router-dom';

const InitiativeDetail = () => {
  const { id } = useParams();

  // Fetch or define the initiative data based on the `id`
  const initiative = {
    title: "Digital Literacy Program",
    description: "A comprehensive program to enhance digital skills across Bangladesh.",
    // Add more details as needed
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-red-600 mb-6">{initiative.title}</h1>
      <p className="text-lg leading-relaxed">{initiative.description}</p>
      {/* Add more detailed information and interactive elements */}
    </div>
  );
};

export default InitiativeDetail;
