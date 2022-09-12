import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import Header from '../Components/Home/Header'

const Homescreen = () => {
    return (
        <SafeAreaView style={styles.container}>
             <Header/>  
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1, 
    },
    
})

export default Homescreen