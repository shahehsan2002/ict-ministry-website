// src/components/News.jsx
import React from 'react';

const newsData = [
  {
    title: "Tech Conference 2024",
    date: "2024-08-01",
    summary: "Join us for the annual Tech Conference where we showcase the latest innovations in technology.",
    link: "/news/tech-conference-2024",
  },
  {
    title: "New ICT Policy",
    date: "2024-07-20",
    summary: "The government has introduced a new ICT policy aimed at boosting digital infrastructure.",
    link: "/news/new-ict-policy",
  },
  {
    title: "Digital Literacy Program",
    date: "2024-06-15",
    summary: "Our new digital literacy program aims to improve tech skills across the country.",
    link: "/news/digital-literacy-program",
  },
];

const News = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto">
        <h3 className="text-3xl font-semibold mb-8 text-center text-red-600">Latest News</h3>
        <div className="space-y-8">
          {newsData.map((news, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-xl font-bold mb-4 text-red-600">{news.title}</h4>
              <p className="text-gray-600 mb-4">{news.date}</p>
              <p className="mb-4">{news.summary}</p>
              <a href={news.link} className="text-green-600 hover:underline">Read more →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
