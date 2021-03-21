import React from 'react'
import { Image, ImageStyle, StyleSheet } from 'react-native'

export const DemoImage: React.FC = () => (
     <Image 
          style={styles.image}
          source={require('../../../assets/demo_Comparison_Image.png')} />
)

const styles = StyleSheet.create({
     image: {
          marginTop: '5%',
          flex: 5,
          width: '100%',
          borderRadius: 10,
          resizeMode: 'cover',
          
     }as ImageStyle,
})