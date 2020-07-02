import React, {useState} from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'

const CategoryCard = (props) => {
  const [ activeColor, setActiveColor] = useState('#ffff')

  const selectItem = () => {
    setActiveColor((prevActiveColor)=> {
      return prevActiveColor === '#ffff' ? 'coral': '#ffff'
    })
  }

  return (
    <TouchableOpacity style={{...styles.card, backgroundColor: activeColor}} onPress = {selectItem}>
      <View style={styles.cardContent}>
        {props.children}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 14,
    borderWidth:0.5,
    alignItems:'center',
    justifyContent:'center',
    elevation: 3,
    shadowOffset: {
      width: 1, height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius:2,
    marginHorizontal:4,
    marginVertical:6,
  },
  cardContent: {
    marginVertical:10,
    marginHorizontal:10,
  }
})

export default CategoryCard