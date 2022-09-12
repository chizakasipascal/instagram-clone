import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View>
      
      <Image
      style={styles.logo}
      source={{uri: 'https://www.seekpng.com/png/full/813-8136306_trend-new-instagram-logo-2019-png-edigital-instagram.png'}}
    />
    </View>
  )
}
const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 50,
    resizeMode:'contain'
 
  }
})
export default Header