import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { screenType } from '../constant/constant';

const HomeScreen = ({ onExit }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => onExit(screenType.addNote)}>
        <View style={styles.itemButton}>
          <Text style={styles.title}>Add New Notes</Text>
          <Icon style={styles.icon} name="arrow-forward-outline" />
        </View>
      </Pressable>
      <Pressable onPress={() => onExit(screenType.allNotes)}>
        <View style={styles.itemButton}>
          <Text style={styles.title}>View All Notes</Text>
          <Icon style={styles.icon} name="arrow-forward-outline" />
        </View>
      </Pressable>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 40,
  },
  itemButton: {
    width: Dimensions.get('screen').width - 100,
    height: '50%',
    marginVertical: 30,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    elevation: 10,
    alignItems: 'center',
  },
  title: {
    textTransform: 'uppercase',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  icon: {
    fontSize: 20,
    paddingTop: 20,
  },
});
