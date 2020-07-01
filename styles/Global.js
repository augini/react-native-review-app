import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
  },
  titleText: {
    marginBottom:10,
    fontFamily: 'nunito-sans-semibold',
    fontSize:18,
    textAlign:'center',
    color:'#333'
  }
})

export const paragraph = StyleSheet.create({
  marginVertical:8,
  lineHeight:20,
})