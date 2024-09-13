import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { debounce } from 'lodash';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = useCallback(
    debounce(async (value) => {
      if (value.length > 1) {
        try {
          const response = await axios.get(`/suggestions?q=${value}`);
          setSuggestions(response.data);
        } catch (error) {
          console.error("Error fetching suggestions:", error);
        }
      } else {
        setSuggestions([]);
      }
    }, 300),
    []
  );

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    fetchSuggestions(value);
  };

  const handleSelectSuggestion = (suggestion) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
    onSearch(suggestion);
  };

  return (
    <div className="relative max-w-md mx-auto flex flex-col items-center  mt-6 mb-6">
      <div className="relative w-full flex items-center"> {/* Added flex and items-center */}
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          className="border border-gray-300 rounded-l-lg p-3 w-full"
          placeholder="Search for news"
        />
        <buttons
          onClick={() => onSearch(searchTerm)}
          className="p-3 bg-blue-500 text-white rounded-r-lg"
        >
          Search
        </buttons>

       
        {suggestions.length > 0 && (
          <ul className="absolute top-full left-0 w-full bg-white border border-gray-200 mt-1 z-10 rounded-lg shadow-lg">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="p-2 hover:bg-gray-200 cursor-pointer border-b last:border-b-0"
                onClick={() => handleSelectSuggestion(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
