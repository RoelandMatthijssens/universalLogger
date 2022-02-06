import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {Header} from './src/components/Header';
import {HomeScreen} from './src/screens/home/HomeScreen';
import {Footer} from './src/components/footer/Footer';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={Styles.container}>
        <Header />
        <HomeScreen />
        <Footer />
      </View>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
  },
});

export default App;
