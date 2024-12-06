import axios from 'axios';

const API_KEY = '861ac95bddd2fb2043de2de3e090a529';
const BASE_URL = 'https://api.openweathermap.org';
const BASE_URL_CITY = 'http://api.openweathermap.org/geo/1.0/direct';

const HttpClient = axios.create({
  baseURL: BASE_URL,
});


export const getCitySuggestions = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL_CITY}?q=${query}&limit=3&appid=${API_KEY}`);
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener sugerencias de ciudad: ' + error.message);
  }
};

export const getCityCoordinates = async (city) => {
  try {
    const response = await HttpClient.get(`/geo/1.0/direct?q=${encodeURIComponent(city)}&limit=5&appid=${API_KEY}`);
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener las coordenadas de la ciudad: ' + error.message);
  }
};

export const getWeather = async (lat, lon) => {
    try {
      const response = await HttpClient.get(
        `/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
      );
      return response.data;
    } catch (error) {
      throw new Error('Error al obtener el clima: ' + error.message);
    }
  };
  
  
