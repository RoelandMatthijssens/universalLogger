import React, {useState} from 'react'
import {View, StyleSheet, SafeAreaView} from 'react-native'
import {Header} from './src/components/header/Header'
import {HomeScreen} from './src/screens/home/HomeScreen'
import {Footer} from './src/components/footer/Footer'

const App = () => {
  const tiles = ['Toilet', 'Sleep', 'Walked', 'Gaming']
  const [filteredTiles, setFilteredTiles] = useState(tiles)
  const filterTiles = query => {
    setFilteredTiles(
      tiles.filter(name => name.toLowerCase().includes(query.toLowerCase())),
    )
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={Styles.container}>
        <Header onSearch={filterTiles} />
        <HomeScreen tiles={filteredTiles} />
        <Footer />
      </View>
    </SafeAreaView>
  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
  },
})

export default App
