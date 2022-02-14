// Librairies
import React, { useState } from 'react';
import {
  TextInput,
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
  Text,
} from 'react-native';

export default function TaskForm({ onAddTask }) {
  // State
  const [newTask, setNewTask] = useState('');

  // Fonctions
  const onChangeText = e => {
    setNewTask(e);
  };

  const onAddNewTask = () => {
    if (newTask === '') return;
    onAddTask(newTask);
    setNewTask('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={newTask}
        placeholder="Ajouter une nouvelle tâche"
      />
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.btn}
        onPress={onAddNewTask}>
        <Text style={styles.btnText}>Ajouter</Text>
      </TouchableOpacity>
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
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    width: Dimensions.get('window').width * 0.55,
    borderRadius: 7,
    height: Dimensions.get('window').height * 0.055,
  },
  btn: {
    backgroundColor: 'blue',
    width: Dimensions.get('window').width * 0.3,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height * 0.055,
  },
  btnText: {
    color: '#fff',
  },
});
