// Librairies
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function TaskTile({ task }) {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Ionicons name="ellipse-outline" size={21} color="green" />
        <Text style={styles.title}>{task.title}</Text>
      </View>
      <Ionicons name="trash-outline" size={21} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: Dimensions.get('window').width * 0.04,
    marginLeft: Dimensions.get('window').width * 0.04,
    marginTop: Dimensions.get('window').height * 0.02,
    borderWidth: 1,
    borderColor: 'black',
    padding: 16,
    borderRadius: 13,
  },
  subContainer: {
    flexDirection: 'row',
  },
  title: {
    marginLeft: Dimensions.get('window').width * 0.04,
    fontSize: 16,
  },
});
