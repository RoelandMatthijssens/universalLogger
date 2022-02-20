import React, {useState} from 'react'
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native'

import {DebugStyles} from '../../utils/DebugStyles'
import {TrackerTile} from './TrackerTile'
import {Test} from '../test/Test'
import {Header} from '../../components/header/Header'
import {Footer} from '../../components/footer/Footer'

export const HomeScreen = () => {
  const tiles = ['Toilet', 'Sleep', 'Walked', 'Gaming']
  const [filteredTiles, setFilteredTiles] = useState(tiles)
  const filterTiles = query => {
    setFilteredTiles(
      tiles.filter(name => name.toLowerCase().includes(query.toLowerCase())),
    )
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.main_container}>
        <Header onSearch={filterTiles} />
        <ScrollView style={{flex: 1}}>
          <View style={[DebugStyles.default, styles.tiles_container]}>
            {filteredTiles.map(name => (
              <TrackerTile key={name} name={name} />
            ))}
          </View>
        </ScrollView>
        <Footer />
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    flexGrow: 1,
  },
  tiles_container: {
    flex: 1,
    flexGrow: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
})
