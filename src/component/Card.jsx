import React from 'react';

const Card = ({ article }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
      <div className="relative h-56">
        <img 
          className="w-full h-full object-cover rounded-t-lg" 
          src={article.image || 'https://via.placeholder.com/150'} 
          alt={article.title} 
        />
      </div>
      <div className="p-6">
        <h2 className="text-lg font-bold mb-2 leading-tight text-gray-900">{article.title}</h2>
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">{article.description}</p>
        <a 
          href={article.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block text-blue-500 hover:underline font-semibold"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default Card;
