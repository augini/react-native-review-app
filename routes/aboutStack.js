import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AboutScreen from '../screens/AboutScreen'
import Header from '../shared/Header'

const aboutStack = createStackNavigator()

export const AboutStack = () => {
  return (
    <aboutStack.Navigator>
      <aboutStack.Screen
        name="About"
        component={AboutScreen}
        options={({ navigation, route }) => ({
          headerTitle: () => <Header navigation={navigation} title = 'About' />
        })} />
    </aboutStack.Navigator>
  )
}
