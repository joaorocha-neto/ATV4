import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Tarefas</Text>
      <Busca/>
    </View>

    
  );
}

function Busca() {
  const [inputText, setInputText] = useState('');
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={setInputText}
        value={inputText}
        placeholder='Digite uma nova tarefa...'
      />

      <Text style={styles.texto}>{inputText}</Text>
    </View>

  )
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

  },

  texto: {
    color: "#fff"
  }
});
