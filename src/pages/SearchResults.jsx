// src/pages/SearchResults.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const query = new URLSearchParams(useLocation().search).get('q');
  // Implement search logic based on the `query`
  const results = []; // Replace with actual search results

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-red-600 mb-6">Search Results for "{query}"</h1>
      {results.length > 0 ? (
        <ul>
          {results.map((result, index) => (
            <li key={index} className="mb-4">
              <a href={result.link} className="text-lg text-blue-600 hover:underline">{result.title}</a>
              <p className="text-gray-700">{result.snippet}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;
