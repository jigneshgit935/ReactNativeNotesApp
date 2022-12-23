import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BackButton from './components/BackButton';
import Header from './components/Header';
import { screenType } from './constant/constant';
import AddNoteScreen from './screens/AddNoteScreen';
import AllNotesScreen from './screens/AllNotesScreen';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  const [screen, setScreen] = useState(screenType.home);
  const [notes, setNotes] = useState([]);
  let content;
  const updateScreen = (data) => {
    setScreen(data);
  };

  if (screen === screenType.addNote) {
    content = (
      <AddNoteScreen
        onExit={updateScreen}
        onSave={(data) => setNotes([...notes, { id: Date.now(), note: data }])}
      />
    );
  } else if (screen === screenType.allNotes) {
    content = <AllNotesScreen notes={notes} />;
  } else if (screen === screenType.home) {
    content = <HomeScreen onExit={updateScreen} />;
  }

  console.log(notes);

  return (
    <View style={styles.container}>
      <Header />
      {screen !== screenType.home && (
        <BackButton onButtonClick={updateScreen} />
      )}
      <StatusBar style="auto" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
