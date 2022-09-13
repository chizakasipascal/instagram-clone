import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

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
        <TouchableOpacity>
          <MaterialIcons style={styles.icon} name="add-box" size={24} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome style={styles.icon} name="heart-o" size={24} />

        </TouchableOpacity>

        <TouchableOpacity>
          <MaterialCommunityIcons style={styles.icon} name="facebook-messenger" size={24} />

        </TouchableOpacity>
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
    paddingTop: 20
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain'
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
    resizeMode: 'contain',
    color: 'white',

  },
  iconsContainer: {
    flexDirection: 'row',
  }
})
export default Header