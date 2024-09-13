import React, { useState, useEffect } from 'react';
import { sliderData } from '../assets/data/Sliderdata';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + sliderData.length) % sliderData.length);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {sliderData.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full h-64 bg-cover bg-center flex items-center justify-center text-center"
            style={{ backgroundImage: `url(${item.backgroundImage})`, backgroundSize: 'cover' }}
          >
            <div className="bg-black bg-opacity-50 p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-2 text-white">{item.title}</h2>
              <p className="text-sm text-gray-300">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-r-lg focus:outline-none"
      >
        &lt;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-l-lg focus:outline-none"
      >
        &gt;
      </button>
    </div>
  );
};

export default Slider;
