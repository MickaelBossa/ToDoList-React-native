// Librairies
import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';

const days = [
  'Dimanche',
  'Lundi',
  'Mardi',
  'Mercredi',
  'Jeudi',
  'Vendredi',
  'Samedi',
];

const months = [
  'Janvier',
  'Fevrier',
  'Mars',
  'Avril',
  'Mai',
  'Juin',
  'Juillet',
  'Aout',
  'Septembre',
  'Octobre',
  'Novembre',
  'Décembre',
];

export default function Header() {
  // Variables
  const date = new Date();

  return (
    <View style={styles.container}>
      <Text style={styles.date}>{`${days[date.getDay()]} ${date.getDate()} ${
        months[date.getMonth()]
      }`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: Dimensions.get('window').width * 0.05,
    marginTop: Dimensions.get('window').height * -0.01,
  },
  date: {
    fontSize: Dimensions.get('window').width * 0.08,
    fontWeight: 'bold',
  },
});
