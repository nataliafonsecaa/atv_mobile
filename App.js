import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Constants from 'expo-constants';

import Apostila_03 from './components/apostila_3';
import Apostila_04 from './components/apostila04';

const corApp ='#fff';

export default function App() {

  return (
    <View style={styles.container}>
      <Apostila_04/>
      <StatusBar style={corApp==='#000' ? 'light' : 'dark'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: corApp ,
    padding: 8,

  },
});
