import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require('../../assets/logo.png')}
        // source={{ uri: 'https://www.seekpng.com/png/full/813-8136306_trend-new-instagram-logo-2019-png-edigital-instagram.png' }}
        />
      </TouchableOpacity>

    </View>
  )
}
const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain'

  }
})
export default Header