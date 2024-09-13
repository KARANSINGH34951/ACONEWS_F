import React from 'react';

const NoNews = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 text-center">
      <div className="bg-blue-50 p-6 rounded-full shadow-xl mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-32 w-32 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4m0 4h.01M12 4v.01M12 2a10 10 0 100 20 10 10 0 000-20z"
          />
        </svg>
      </div>
      <p className="text-3xl font-bold text-gray-800 mb-4">No News Available</p>
      <p className="text-gray-600 text-lg max-w-md mx-auto">
        It looks like we don't have any news right now. Please check back later or explore other categories for more options.
      </p>
    </div>
  );
};

export default NoNews;
