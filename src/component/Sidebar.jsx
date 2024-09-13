import React, { useState } from 'react';
import { categories, countries, cardData } from "../assets/data/sidebardata";
import SidebarCard from './SidebarCard';


const Sidebar = ({ onSelectCategory, onSelectCountry }) => {
  const [search, setSearch] = useState('');

  const filteredCategories = categories.filter(category => 
    category.toLowerCase().includes(search.toLowerCase())
  );

  const filteredCountries = countries.filter(country => 
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full sm:w-64 bg-gray-100 p-6 shadow-lg h-full rounded-lg flex flex-col space-y-6 sidebar-content ">
      
     
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search categories or countries..."
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Categories Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Categories</h2>
        <ul className="flex flex-wrap gap-4">
          {filteredCategories.map((category) => (
            <li
              key={category}
              className="cursor-pointer text-lg font-medium text-gray-700 hover:text-white hover:bg-blue-500 transition-colors duration-300 p-3 rounded-lg flex-1 min-w-[120px] text-center"
              onClick={() => onSelectCategory(category)}
              aria-label={`Select ${category.charAt(0).toUpperCase() + category.slice(1)} category`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </li>
          ))}
        </ul>
      </section>

      {/* Countries Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Countries</h2>
        <ul className="flex flex-wrap gap-4">
          {filteredCountries.map((country) => (
            <li
              key={country.code}
              className="cursor-pointer text-lg font-medium text-gray-700 hover:text-white hover:bg-blue-500 transition-colors duration-300 p-3 rounded-lg flex-1 min-w-[120px] text-center"
              onClick={() => onSelectCountry(country.code)}
              aria-label={`Select ${country.name}`}
            >
              {country.name}
            </li>
          ))}
        </ul>
      </section>

      {/* Additional Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Additional Content</h2>
        <div className="flex flex-col gap-4">
          {cardData.map((card, index) => (
            <SidebarCard
              key={index}
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
