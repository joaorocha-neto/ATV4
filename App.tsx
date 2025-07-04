import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Tarefas</Text>
      <TextInput style={styles.input} placeholder='Digite uma nova tarefa...' />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: "#fff",
    fontSize: 30
  },

  input: {
    padding: 5,
    color: "#fff",
    borderWidth: 1,
    borderColor: "#fff"

  }
});
