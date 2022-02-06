import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavItem} from './NavItem';
import {DebugStyles} from '../../utils/DebugStyles';

export const Footer = () => {
  return (
    <View style={(DebugStyles.default, Styles.container)}>
      <NavItem name="Home" />
      <NavItem name="AAA" />
      <NavItem name="BBB" />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexGrow: 0.2,
  },
});
