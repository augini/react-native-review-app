import React from 'react';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import PreviewDetailsScreen from '../screens/PreviewDetailsScreen';
import HomeScreen from '../screens/HomeScreen';
import Header from '../shared/Header'

const homeStack = createStackNavigator()

export default HomeStack = () => {
  return (
    <homeStack.Navigator>
      <homeStack.Screen 
           name="Home"
           options = {({navigation, route}) => ({
             headerTitle: () => <Header navigation = {navigation} title = 'GameZone' />
           })} 
           component={HomeScreen} />
      <homeStack.Screen name="PreviewDetails" component={PreviewDetailsScreen} />
    </homeStack.Navigator>
  )
}
