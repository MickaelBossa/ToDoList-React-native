// Librairies
import React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';

// Composants
import Tasks from './src/screens/Tasks/Tasks';

export default function App() {
  return (
    <SafeAreaView>
      <Tasks />
    </SafeAreaView>
  );
}
