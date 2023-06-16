//import { StatusBar } from 'expo-status-bar';
import * as React from  'react'; 
import {StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

import Index from './components/apostila_06';


import Apostila_03 from './components/apostila_3';
import Apostila_04 from './components/apostila04';
import Apostila_05 from './components/apostila_05';
import Apostila_06 from './components/apostila_06';



export default function App() {

  return (
    <View style={styles.container}>
      <Apostila_04 />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
   // alignItems:'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#AAA',
    padding: 8,

  },

});
