import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const FlatButton = ({ text, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.button}>
      <Text style={styles.buttontext}> {text}</Text>
    </View>
  </TouchableOpacity>
)

export default FlatButton

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#f01d71',
  },
  buttontext: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
  }
})


