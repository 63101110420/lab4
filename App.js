import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View } from 'react-native';
import Weather from './components/Weather';


export default function App() {
  
  
  return (
  <View style={styles.container}>
  <Weather zipCode="190110"/>
  <StatusBar style="auto" />
  </View>
  );

}

const styles = StyleSheet.create({
  
  backdrop: {
    flexDirection: 'column',
    alignItems: 'center'
  }
});
