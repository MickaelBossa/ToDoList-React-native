// Librairies
import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';

// Composants
import Header from '../components/Header/Header';
import TaskTile from '../components/Tasks/TaskTile';
import TaskForm from '../components/Tasks/TaskForm';

export default function Tasks() {
  // States
  const [tasks, setTasks] = useState([
    { title: 'Promener le chien', isCompleted: false, id: 0 },
    { title: 'Faire les courses', isCompleted: false, id: 1 },
  ]);

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

  return (
    <>
      <FlatList
        ListHeaderComponent={
          <>
            <Header />
            <TaskForm onAddTask={onAddTask} />
          </>
        }
        contentContainerStyle={{ flexGrow: 1 }}
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </>
  );
}
