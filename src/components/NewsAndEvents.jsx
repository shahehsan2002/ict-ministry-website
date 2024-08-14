const NewsAndEvents = () => {
  // Replace with actual data fetching logic
  const news = [
    { title: "ICT Policy 2024 Announced", date: "August 10, 2024", link: "/news/ict-policy-2024" },
    { title: "New Initiatives to Enhance Digital Literacy", date: "July 25, 2024", link: "/news/digital-literacy" },
  ];
  const events = [
    { title: "Digital Bangladesh Conference", date: "September 20, 2024", location: "Dhaka", link: "/events/digital-bangladesh" },
    { title: "ICT Innovation Workshop", date: "October 15, 2024", location: "Chittagong", link: "/events/innovation-workshop" },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-red-600 mb-8">Latest News & Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-red-600">News</h3>
            <ul>
              {news.map((item, index) => (
                <li key={index} className="mb-4">
                  <a href={item.link} className="text-lg text-green-600 hover:underline">{item.title}</a>
                  <p className="text-gray-600">{item.date}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-red-600">Events</h3>
            <ul>
              {events.map((event, index) => (
                <li key={index} className="mb-4">
                  <a href={event.link} className="text-lg text-green-600 hover:underline">{event.title}</a>
                  <p className="text-gray-600">{event.date} - {event.location}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsAndEvents;
