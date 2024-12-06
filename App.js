// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/presentation/navigation/navigation'; // Importación por defecto

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}
