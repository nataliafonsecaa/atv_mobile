import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Apostila_03 from './components/apostila_3';

export default function App() {
  return (
    <View style={styles.container}>
      <Apostila_03/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
     //paddingTop: Constants.statusBarHeight,
    backgroundColor: '#9E9E9E',
    padding: 8,
  },
});
