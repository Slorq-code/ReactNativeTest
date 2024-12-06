import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { getWeather } from '../../infrastructure/API/httpClient';
import styles from '../../theme/generalStyle';

export default function DetailCity() {
  const route = useRoute();
  const { cityName, lat, lon } = route.params || {};
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (lat && lon) {
      getWeather(lat, lon)
        .then((data) => {
          setWeatherData({
            name: data.name,
            temp: data.main.temp,
            humidity: data.main.humidity,
            desc: data.weather[0].description,
            icon: data.weather[0].icon,
          });
        })
        .catch((error) => {
          console.error('Error al obtener el clima:', error.message);
        });
    }
  }, [lat, lon]);

  return (
    <View style={styles.detailContainer}>
      <Text style={styles.title}>Detalles de la Ciudad</Text>
      <Text style={styles.detailText}>{cityName}</Text>
      {weatherData ? (
        <>
          <Image
            style={styles.detailIcon}
            source={{ uri: `https://openweathermap.org/img/w/${weatherData.icon}.png` }}
          />
          <Text style={styles.detailText}>Temperature: {weatherData.temp}°C</Text>
          <Text style={styles.detailText}>Humidity: {weatherData.humidity}%</Text>
          <Text style={styles.detailText}>Description: {weatherData.desc}</Text>
        </>
      ) : (
        <Text style={styles.detailText}>Cargando...</Text>
      )}
    </View>
  );
}
