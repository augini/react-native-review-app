import React from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
import {globalStyles} from '../styles/Global'

export default function PreviewDetailsScreen ( { route, navigation } ) {
  const body = route.params
  return (
    <View style = {globalStyles.container}> 
      <Text>{ body } </Text>
    </View>
  )
}

