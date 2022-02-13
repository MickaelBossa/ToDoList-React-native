// Librairies
import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';

// Composants
import Header from '../../components/Header/Header';
import TaskTile from './TaskTile';

export default function Tasks() {
  // States
  const [tasks, setTasks] = useState([
    { title: 'Promener le chien', isCompleted: false },
    { title: 'Faire les courses', isCompleted: false },
  ]);

  // Fonctions
  const renderItem = ({ item }) => {
    return <TaskTile task={item} />;
  };

  return (
    <>
      <FlatList
        ListHeaderComponent={<Header />}
        contentContainerStyle={{ flexGrow: 1 }}
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </>
  );
}
