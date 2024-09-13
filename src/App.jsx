import React, { useState } from 'react';
import Sidebar from './component/Sidebar';
import NewsFeed from './component/NewsFeed';
import Headers from './component/Header';
import Footer from './component/Footer';
import Chatbot from './component/Chatbot';
import Slider from './component/Slider'; // Import the Slider component

const App = () => {
  const [category, setCategory] = useState('general');
  const [country, setCountry] = useState('us');

  const handleSelectCategory = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  const handleSelectCountry = (selectedCountry) => {
    setCountry(selectedCountry);
  };

  return (
    <>
      <Headers />
      <Chatbot />
      <div className="flex flex-col lg:flex-row mt-20">
        <div className="hidden lg:block lg:w-1/4 lg:pr-4">
          <Sidebar 
            onSelectCategory={handleSelectCategory} 
            onSelectCountry={handleSelectCountry} 
          />
        </div>

        <div className="flex-grow p-4 lg:w-3/4">
          <Slider /> 
          <NewsFeed category={category} country={country} />
        </div>

        <div className="lg:hidden md:hidden">
          <Sidebar 
            onSelectCategory={handleSelectCategory} 
            onSelectCountry={handleSelectCountry} 
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
