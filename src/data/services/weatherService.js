import { HttpClient } from '../../infrastructure/API/httpClient';

const API_KEY = '861ac95bddd2fb2043de2de3e090a529';
const BASE_URL = 'https://api.openweathermap.org/data/3.0/weather';

export const getWeather = async (city) => {
  try {
    const response = await HttpClient.get(`${BASE_URL}?q=${city}&APPID=${API_KEY}&units=metric`);
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener el clima: ' + error.message);
  }
};
