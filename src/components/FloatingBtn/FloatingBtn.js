// Librairies
import React from 'react';
import { TouchableOpacity, View, StyleSheet, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function FloatingBtn({ toggle, isOpen }) {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={toggle}>
      <View style={styles.addBtn}>
        {isOpen ? (
          <Ionicons name="close-outline" size={25} color={'#fff'} />
        ) : (
          <Ionicons name="add-outline" size={25} color={'#fff'} />
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  addBtn: {
    backgroundColor: 'blue',
    height: Dimensions.get('window').width * 0.12,
    width: Dimensions.get('window').width * 0.12,
    borderRadius: Dimensions.get('window').width * 0.06,
    position: 'absolute',
    right: 20,
    bottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
