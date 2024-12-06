import { useState, useEffect } from 'react';
import { getCitySuggestions, getWeather } from '../../infrastructure/API/httpClient';

export const useHomeScreenService = (initialCity) => {
  const [citySuggestions, setCitySuggestions] = useState([]);
  const [weatherData, setWeatherData] = useState(null);

  // Llamada a la API para obtener sugerencias de ciudades
  const fetchCitySuggestions = async (query) => {
    if (query.trim() === '') {
      setCitySuggestions([]);
      return;
    }

    try {
      const response = await getCitySuggestions(query);
      setCitySuggestions(response);
    } catch (error) {
      console.error('Error al obtener sugerencias de ciudad:', error.message);
      setCitySuggestions([]);
    }
  };

  const fetchWeatherData = async (lat, lon) => {
    try {
      const response = await getWeather(lat, lon);
      setWeatherData({
        name: response.name,
        temp: response.main.temp,
        humidity: response.main.humidity,
        desc: response.weather[0].description,
        icon: response.weather[0].icon,
      });
    } catch (error) {
      console.error('Error al obtener el clima:', error.message);
      setWeatherData(null);
    }
  };

  return {
    citySuggestions,
    weatherData,
    fetchCitySuggestions,
    fetchWeatherData,
  };
};
