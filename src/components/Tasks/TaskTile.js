// Librairies
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function TaskTile({ task, isCompletedHandler, deleteTask }) {
  // Fonctions
  const onChangeStatus = () => {
    isCompletedHandler(task.id);
  };

  const onDeleteTask = () => {
    deleteTask(task.id);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={onChangeStatus}>
        <View style={styles.subContainer}>
          <Ionicons
            name={
              task.isCompleted ? 'checkmark-circle-outline' : 'ellipse-outline'
            }
            size={27}
            color="green"
          />
          <Text style={styles.title}>{task.title}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} onPress={onDeleteTask}>
        <Ionicons name="trash-outline" size={21} color="black" />
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
    borderWidth: 1,
    borderColor: 'black',
    padding: 16,
    borderRadius: 13,
    alignItems: 'center',
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginLeft: Dimensions.get('window').width * 0.04,
    fontSize: 16,
  },
});
