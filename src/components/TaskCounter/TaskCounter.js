import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

export default function TaskCounter({ title, numberTasks }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberTasks}>{numberTasks}</Text>
      <Text style={styles.txtTasks}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: Dimensions.get('window').width * 0.04,
    marginLeft: Dimensions.get('window').width * 0.04,
    marginTop: Dimensions.get('window').height * 0.02,
  },
  numberTasks: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  txtTasks: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
