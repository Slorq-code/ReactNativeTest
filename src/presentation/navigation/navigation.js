
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/homeScreen';
import DetailCity from '../screens/detailCity';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen 
        name="HomeScreen" 
        component={HomeScreen} 
        options={{ title: 'Andres App' }} 
      />
      <Stack.Screen 
        name="DetailCity" 
        component={DetailCity} 
        options={{ title: 'Detalles de la Ciudad' }} 
      />
    </Stack.Navigator>
  );
}
