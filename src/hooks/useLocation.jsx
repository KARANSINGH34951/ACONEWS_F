// src/hooks/useLocation.js
import { useState, useEffect } from 'react';

const useLocation = () => {
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [error, setError] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ lat: latitude, lon: longitude });
      },
      (error) => {
        setError(error.message);
      }
    );
  }, []);

  return { location, error };
};

export default useLocation;
