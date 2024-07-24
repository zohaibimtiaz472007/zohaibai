// src/components/BlogLoader.js

import React from 'react';

const BlogLoader = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-pulse"
        >
          <div className="w-full h-48 bg-gray-300 rounded-t-lg mb-4"></div>
          <div className="w-3/4 h-6 bg-gray-300 rounded mb-2"></div>
          <div className="w-1/2 h-4 bg-gray-300 rounded mb-4"></div>
        </div>
      ))}
    </div>
  );
};

export default BlogLoader;
