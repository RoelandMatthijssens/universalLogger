import React, {useState} from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'

import {DebugStyles} from '../../utils/DebugStyles'
import {TrackerTile} from './TrackerTile'
import {Test} from '../test/Test'

export const HomeScreen = ({tiles}) => {
  return (
    <ScrollView style={{flex: 1}}>
      <View style={[DebugStyles.default, styles.container]}>
        {tiles.map(name => (
          <TrackerTile key={name} name={name} />
        ))}
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
})
