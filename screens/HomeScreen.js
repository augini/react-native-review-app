import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { globalStyles } from '../styles/Global'
import Card from '../shared/Card'
import CategoryCard from '../shared/CategoryCard'
import ReviewForm from './ReviewForm'

export default function HomeScreen({ navigation }) {

  const [modalOpen, setModalOpen] = useState(false)

  const [reviews, setReviews] = useState([
    { title: 'Zeldafd, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'The growth of progressive habits', rating: 5, body: 'lorem ipsum', key: '2' },
    { title: 'Yeah, it was great fun', rating: 5, body: 'lorem ipsum', key: '3' },
    { title: 'Hello, let\'s get out of here ', rating: 5, body: 'lorem ipsum', key: '4' },
    { title: 'What are you talking about', rating: 5, body: 'lorem ipsum', key: '5' },
    { title: 'The growth of progressive habits', rating: 5, body: 'lorem ipsum', key: '6' },
    { title: 'Gearafdsf', rating: 5, body: 'lorem ipsum', key: '7' },
    { title: 'Zelda, Bfdsf', rating: 5, body: 'lorem ipsum', key: '8' },
    { title: 'Zeld', rating: 5, body: 'lorem ipsum', key: '9' },
  ])

    const addNewReview = (review) => {
    review.key = Math.floor(Math.random() * 900).toString()
    setReviews([review, ...reviews])
    setModalOpen(false)
  }

  const [categories, setCategories] = useState([
    { time: 'Before', key: '1' },
    { time: 'Yesterday', key: '2' },
    { time: 'Today', key: '3' },
    { time: 'Tomorrow', key: '4' },
    { time: 'Later', key: '5' },
  ])


  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType='slide' >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name='close'
              style={{ ...styles.modalToggle, ...styles.modalClose }}
              onPress={() => setModalOpen(false)}
            />
            <ReviewForm addNewReview={addNewReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <MaterialIcons
        name='add'
        size={24}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />
      <FlatList
        flashScrollIndicators ={false}
        horizontal={true}
        data={categories}
        renderItem={({ item }) =>
          <CategoryCard>
            <Text>{item.time}</Text>
          </CategoryCard>
        }
      />
      <FlatList 
        data={reviews}
        style = {{marginTop:15}}
        renderItem={({ item }) =>
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('PreviewDetails', item)} >
            <Card>
              <Text> {item.title} </Text>
            </Card>
          </TouchableOpacity>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center'
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0
  },
  modalContent: {
    flex: 1
  }
})