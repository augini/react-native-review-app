import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native'
import { globalStyles } from '../styles/Global'

export default function HomeScreen({ navigation }) {
  const [reviews, setReviews] = useState([
    { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'The growth of progressive habits', rating: 5, body: 'lorem ipsum', key: '2' },
    { title: 'Yeah, it was great fun', rating: 5, body: 'lorem ipsum', key: '3' },
    { title: 'Hello, let\'s get out of here ', rating: 5, body: 'lorem ipsum', key: '4' },
    { title: 'What are you talking about', rating: 5, body: 'lorem ipsum', key: '5' },
    { title: 'The growth of progressive habits', rating: 5, body: 'lorem ipsum', key: '6' },
    { title: 'Gearafdsf', rating: 5, body: 'lorem ipsum', key: '7' },
    { title: 'Zelda, Bfdsf', rating: 5, body: 'lorem ipsum', key: '8' },
    { title: 'Zeld', rating: 5, body: 'lorem ipsum', key: '9' },
  ])


  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText} > Home Screen </Text>
      <FlatList
        data={reviews}
        renderItem={({item}) =>
         
          <TouchableOpacity
            style={styles.item}
            onPress={()=> navigation.navigate('PreviewDetails', item.body) } >
            <Text> {item.title} </Text>
          </TouchableOpacity> }

      />
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'coral',
    borderStyle:'dashed',
    borderRadius:1,
    padding: 30,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  }
})