import React from 'react';

const ShimmerSearchBar = () => {
  return (
    <div className="flex items-center space-x-2 max-w-md mx-auto mt-4">
      <div className="bg-gray-300 animate-pulse h-10 w-full rounded-l-lg"></div>
      <div className="bg-gray-300 animate-pulse h-10 w-20 rounded-r-lg"></div>
    </div>
  );
};

export default ShimmerSearchBar;
