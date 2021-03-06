import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {DebugStyles} from '../../utils/DebugStyles'

export const TrackerTile = ({name, icon}) => {
  return (
    <View style={[DebugStyles.default, Styles.container]}>
      <Text>{name}</Text>
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
  },
})
