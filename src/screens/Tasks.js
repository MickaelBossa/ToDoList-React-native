// Librairies
import React, { useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

// Composants
import Header from '../components/Header/Header';
import TaskTile from '../components/Tasks/TaskTile';
import TaskForm from '../components/Tasks/TaskForm';
import FloatingBtn from '../components/FloatingBtn/FloatingBtn';
import TaskCounter from '../components/TaskCounter/TaskCounter';

export default function Tasks() {
  // States
  const [tasks, setTasks] = useState([]);

  const [isFormVisible, setIsFormVisible] = useState(false);

  // Fonctions
  const renderItem = ({ item }) => {
    return (
      <TaskTile
        task={item}
        isCompletedHandler={isCompletedHandler}
        deleteTask={deleteTask}
      />
    );
  };

  const onAddTask = title => {
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title: title,
        isCompleted: false,
      },
    ]);
  };

  const isCompletedHandler = id => {
    const newTasks = [...tasks];

    newTasks.forEach(task => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted;
      }
    });
    setTasks(newTasks);
  };

  const deleteTask = id => {
    const newTasks = tasks.filter(item => item.id !== id);
    setTasks(newTasks);
  };

  const toggleForm = () => {
    setIsFormVisible(prevState => !prevState);
  };

  return (
    <>
      <FlatList
        ListHeaderComponent={
          <>
            <Header />
            {isFormVisible && <TaskForm onAddTask={onAddTask} />}
            <View style={styles.counterContainer}>
              <TaskCounter title={'Created tasks'} numberTasks={tasks.length} />
              <TaskCounter
                title={'Completed tasks'}
                numberTasks={tasks.filter(task => task.isCompleted).length}
              />
            </View>
          </>
        }
        contentContainerStyle={{ flexGrow: 1 }}
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
      <FloatingBtn toggle={toggleForm} isOpen={isFormVisible} />
    </>
  );
}

const styles = StyleSheet.create({
  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
