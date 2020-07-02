import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { globalStyles, images } from '../styles/Global'
import Card from '../shared/Card'

export default function PreviewDetailsScreen({ route, navigation }) {
  const { body, title, rating } = route.params
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text> {title} </Text>
        <Text> {body} </Text>
        <View style={styles.rating}>
          <Text> Overall:  </Text>
          <Image
            source={images.ratings[rating]}
          />
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  rating: {
    flexDirection:'row',
    justifyContent:'center',
    paddingTop:16,
    marginTop:16,
    borderTopWidth:1,
    borderTopColor:'#eee'
  }
})