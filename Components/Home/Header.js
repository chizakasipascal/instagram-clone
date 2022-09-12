import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require('../../assets/logo.png')}
        // source={{ uri: 'https://www.seekpng.com/png/full/813-8136306_trend-new-instagram-logo-2019-png-edigital-instagram.png' }}
        />
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
        <Text style={{ color: 'white' }}>Hello</Text>
        <Text style={{ color: 'white' }}>Hello</Text>
        <Text style={{ color: 'white' }}>Hello</Text>
      </View >
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
    paddingTop:20 
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain' 
  },
  icon: {
    width:30 
  },
  iconsContainer: { 
    flexDirection: 'row', 
  } 
})
export default Header