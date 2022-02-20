import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {DebugStyles} from '../../utils/DebugStyles'
import {Searchbar} from 'react-native-paper'

export const Search = ({onSearch}) => {
  const [searchQuery, setSearchQuery] = React.useState('')
  const onChangeSearch = query => {
    setSearchQuery(query)
    onSearch(query)
  }

  return (
    <View style={[DebugStyles.default, Styles.container]}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
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
