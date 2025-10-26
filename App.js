// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeView from './Home/HomeView';
import ClientesView from './Clientes/ClientesView';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="home"
          component={HomeView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="clientes"
          component={ClientesView}
          options={{ title: 'Lista de Clientes' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
