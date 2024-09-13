import React from 'react';

const ShimmerCard = () => {
  return (
    <div className="bg-gray-200 animate-pulse rounded-lg mt-8 overflow-hidden">
      <div className="h-56 bg-gray-300"></div>
      <div className="p-6">
        <div className="h-4 bg-gray-300 mb-4 rounded"></div>
        <div className="h-3 bg-gray-300 mb-2 rounded"></div>
        <div className="h-3 bg-gray-300 mb-2 rounded"></div>
        <div className="h-3 bg-gray-300 mb-2 rounded"></div>
      </div>
    </div>
  );
};

export default ShimmerCard;
