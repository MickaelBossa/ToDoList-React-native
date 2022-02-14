// Librairies
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  LogBox,
} from 'react-native';

// Composants
import Tasks from './src/screens/Tasks';

export default function App() {
  LogBox.ignoreLogs(['Remote debugger']);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tasks />
      <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'} />
    </SafeAreaView>
  );
}
