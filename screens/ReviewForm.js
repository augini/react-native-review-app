import React from 'react'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'
import { globalStyles } from '../styles/Global'
import FlatButton from '../shared/FlatButton'
import { Formik } from 'formik'
import * as yup from 'yup'

const ReviewSchema = yup.object({
  title: yup.string()
            .required()
            .min(4),
  body: yup.string()
            .required()
            .min(8),
  rating: yup.string()
             .required()
             .test('is-num-1-5', 'Rating must be a number 1-5', (val) => {
               parseInt(val)<6 &&parseInt(val) > 0
             })
})


const ReviewForm = ({addNewReview}) => {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{
          title: '',
          body: '',
          rating: '',
        }}
        validationSchema = {ReviewSchema} 
        onSubmit={(values, actions) => { addNewReview(values),actions.resetForm() }}>
        {(props) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder='Review title'
              onChangeText={props.handleChange('title')}
              value={props.values.title}
              onBlur ={props.handleBlur('title')}
            >
            </TextInput>
            <Text style = {globalStyles.errorText} >{props.touched.title && props.errors.title } </Text>
            
            <TextInput
              style={globalStyles.input}
              placeholder='Review body'
              multiline
              minHeight = {60}
              onChangeText={props.handleChange('body')}
              value={ props.values.body }
              onBlur ={props.handleBlur('body')}
            >
            </TextInput>
            <Text style = {globalStyles.errorText} >{props.touched.body && props.errors.body}</Text>
            
            <TextInput 
                style = {globalStyles.input}
                placeholder = 'Review rating'
                onChangeText ={props.handleChange('rating')}
                value = { props.values.rating}
                keyboardType = 'numeric'
                onBlur ={props.handleBlur('rating')}
                >    
            </TextInput>
            
            <Text style = {globalStyles.errorText} >{props.touched.rating && props.errors.rating}</Text>
             <FlatButton text = 'Submit' onPress = {props.handleSubmit} />

          </View>
        )}
      </Formik>
    </View>
  )
}

export default ReviewForm

