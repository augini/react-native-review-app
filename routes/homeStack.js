import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PreviewDetailsScreen from '../screens/PreviewDetailsScreen';
import HomeScreen from '../screens/HomeScreen';

const homeStack = createStackNavigator()

export default HomeStack = () => {
  return (
    <homeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <homeStack.Screen name="Home" component={HomeScreen} />
      <homeStack.Screen name="PreviewDetails" component={PreviewDetailsScreen} />
    </homeStack.Navigator>
  )
}
