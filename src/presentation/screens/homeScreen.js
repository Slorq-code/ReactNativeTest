import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, TouchableOpacity, Button } from 'react-native';
import { Text } from '../components/components';
import { useHomeScreenService } from '../../data/services/homeScreenService';
import styles from '../../theme/generalStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen({ route, navigation }) {
  const initialCity = route.params?.city || '';
  const {
    citySuggestions,
    fetchCitySuggestions,
  } = useHomeScreenService(initialCity);

  const [searchLabel, setSearchLabel] = useState(initialCity);
  const [selectedCity, setSelectedCity] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    const loadSearchHistory = async () => {
      const history = await AsyncStorage.getItem('searchHistory');
      if (history) {
        setSearchHistory(JSON.parse(history));
      }
    };
    loadSearchHistory();
  }, []);

  useEffect(() => {
    if (searchLabel.trim() !== '') {
      fetchCitySuggestions(searchLabel);
    }
  }, [searchLabel]);

  const handleCitySelect = async (city) => {
    const cityLabel = `${city.name}, ${city.state || city.country}`;
    setSearchLabel(cityLabel);
    setSelectedCity(city);

    const updatedHistory = [cityLabel, ...searchHistory.filter((item) => item !== cityLabel)].slice(0, 5);
    setSearchHistory(updatedHistory);
    await AsyncStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
  };

  const handleSearch = () => {
    if (selectedCity) {
      navigation.navigate('DetailCity', {
        cityName: `${selectedCity.name}, ${selectedCity.state || selectedCity.country}`,
        lat: selectedCity.lat,
        lon: selectedCity.lon,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consulta el clima</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa una ciudad"
        value={searchLabel}
        onFocus={() => {
          if (searchLabel.trim() === '') {
            fetchCitySuggestions('');
          }
        }}
        onChangeText={(text) => {
          setSearchLabel(text);
          if (text.trim() === '') {
            setSelectedCity(null);
          }
        }}
      />
      {searchLabel.trim() === '' && searchHistory.length > 0 && (
        <>
          <Text style={styles.subtitle}>Historial de búsqueda:</Text>
          <FlatList
            data={searchHistory}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => setSearchLabel(item)} style={styles.historyItem}>
                <Text style={styles.suggestionText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </>
      )}
      {citySuggestions.length > 0 && searchLabel.trim() !== '' && (
        <>
          <Text style={styles.subtitle}>Sugerencias:</Text>
          <FlatList
            data={citySuggestions}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleCitySelect(item)} style={styles.suggestionItem}>
                <Text style={styles.suggestionText}>{item.name}, {item.state || item.country}</Text>
              </TouchableOpacity>
            )}
          />
        </>
      )}
      <Button title="Buscar" onPress={handleSearch} />
    </View>
  );
}
