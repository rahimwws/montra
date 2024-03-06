import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import OnBoarding from '../screens/stack/OnBoarding';

const Stack = createStackNavigator();
const Introduction = () => {
  return (
    <Stack.Navigator screenOptions={
      {
        headerShown: false
      }
    }>
      <Stack.Screen name="Home" component={OnBoarding} />
    </Stack.Navigator>
  )
}

export default Introduction