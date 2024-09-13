import React from 'react';

const ErrorComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-4">
      <img 
        src="https://th.bing.com/th/id/OIP.3YKCBXNhVnhxlSbhEsJKCwHaEh?w=489&h=280&c=7&r=0&o=5&dpr=1.5&pid=1.7" 
        alt="Error" 
        className="mb-4"
      />
      <h1 className="text-2xl font-semibold text-red-500 mb-2">Something went wrong</h1>
      <p className="text-gray-600">We're working on fixing this issue. Please try again later.</p>
    </div>
  );
};

export default ErrorComponent;
