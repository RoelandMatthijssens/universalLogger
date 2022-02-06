import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import {DebugStyles} from '../../utils/DebugStyles';
import {TrackerTile} from './TrackerTile';
import {Test} from '../test/Test';

export const HomeScreen = () => {
  return (
    <ScrollView style={{flex: 1}}>
      <View style={[DebugStyles.default, styles.container]}>
        <TrackerTile />
        <TrackerTile />
        <TrackerTile />
        <TrackerTile />
        <TrackerTile />
        <TrackerTile />
        <TrackerTile />
        <TrackerTile />
        <TrackerTile />
        <TrackerTile />
        <TrackerTile />
        <TrackerTile />
        <TrackerTile />
        <TrackerTile />
        <TrackerTile />
        <TrackerTile />
        <TrackerTile />
        <TrackerTile />
        <TrackerTile />
        <TrackerTile />
        <TrackerTile />
        <TrackerTile />
        <TrackerTile />
        <TrackerTile />
        <TrackerTile />
        <TrackerTile />
        <TrackerTile />
        <TrackerTile />
        <TrackerTile />
        <TrackerTile />
        <TrackerTile />
        <TrackerTile />
        <TrackerTile />
        <TrackerTile />
        <TrackerTile />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
});
