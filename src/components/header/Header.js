import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {DebugStyles} from '../../utils/DebugStyles'
import {Search} from './Search'

export const Header = ({onSearch}) => {
  return (
    <View style={[DebugStyles.default, Styles.container]}>
      <Search onSearch={onSearch} />
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 0.2,
    flexShrink: 0,
  },
})
