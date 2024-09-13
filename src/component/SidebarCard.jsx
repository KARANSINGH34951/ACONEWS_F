// src/components/Card.js
import React from 'react';

const SidebarCard = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        className="w-full h-24 object-cover"
        src={imageUrl || 'https://via.placeholder.com/150'}
        alt={title}
      />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default SidebarCard;
