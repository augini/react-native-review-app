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
  },
  input: {
    borderWidth:1,
    borderColor:'#ddd',
    padding:10,
    fontSize:18,
    borderRadius: 6,
  },
  errorText: {
    color:'crimson',
    fontWeight:'bold',
    fontStyle:'italic',
    marginBottom:10,
    marginTop:6,
    textAlign:'center',
  }
})

export const paragraph = StyleSheet.create({
  marginVertical:8,
  lineHeight:20,
})

export const images = {
  ratings: {
    '1': require('../assets/rating-1.png'),
    '2': require('../assets/rating-2.png'),
    '3': require('../assets/rating-3.png'),
    '4': require('../assets/rating-4.png'),
    '5': require('../assets/rating-5.png'),
  },
  headerImage: require('../assets/heart_logo.png'),
  headerBackground: require('../assets/game_bg.png')
}