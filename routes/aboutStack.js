import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AboutScreen from '../screens/AboutScreen'

const aboutStack = createStackNavigator()

export const AboutStack = () => {
  return (
    <aboutStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <aboutStack.Screen name="About" component={AboutScreen} />
    </aboutStack.Navigator>
  )
}
