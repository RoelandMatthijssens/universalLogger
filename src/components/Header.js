import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {DebugStyles} from '../utils/DebugStyles';

export const Header = () => {
  return (
    <View style={[DebugStyles.default, Styles.container]}>
      <Text>Header</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 0.2,
    flexShrink: 0,
  },
});
