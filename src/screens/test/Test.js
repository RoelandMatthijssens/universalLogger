import React from 'react';
import {View, StyleSheet} from 'react-native';

export const Test = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box} />
      <View style={styles.box} />
      <View style={styles.box} />
      <View style={styles.box} />
      <View style={styles.box} />
      <View style={styles.box} />
      <View style={styles.box} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: 'red',
  },
});
