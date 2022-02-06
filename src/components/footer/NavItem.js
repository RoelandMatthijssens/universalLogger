import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {DebugStyles} from '../../utils/DebugStyles';

export const NavItem = ({name}) => {
  return (
    <View style={[DebugStyles.default, Styles.container]}>
      <Text>{name}</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
  },
});
