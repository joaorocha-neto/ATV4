import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView } from 'react-native';

function Tarefas() {
  const [tarefa, setTarefa] = useState<string[]>([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== '') {
      setTarefa([...tarefa, novaTarefa.trim()]);
      setNovaTarefa('');
    }
  };

  const removerTarefa = (indexToRemove: number) => {
    setTarefa(tarefa.filter((_, index) => index !== indexToRemove));
  };

  return (
    <View style={styles.tarefasContainer}>
      <Text style={styles.title}>Minhas Tarefas</Text>
      <TextInput
        style={styles.input}
        onChangeText={setNovaTarefa}
        value={novaTarefa}
        placeholder='Digite uma nova tarefa...'
        placeholderTextColor="#999"
        multiline
      />
      <TouchableOpacity style={styles.butao} onPress={adicionarTarefa}>
        <Text style={styles.butaotext}>Adicionar Tarefa</Text>
      </TouchableOpacity>

      <Text style={styles.texto1}>{novaTarefa}</Text> 

      <Text style={styles.texto}>Minhas Tarefas:</Text>
      <ScrollView style={styles.minhastarefas}>
        {tarefa.map((item, index) => (
          <View key={index} style={styles.tarefas}>
            
            <Text style={styles.textoDaTarefa}>{item}</Text>
            
            <TouchableOpacity onPress={() => removerTarefa(index)} style={styles.remover}>
              <Text style={styles.textoBotaoRemover}>X</Text>
            </TouchableOpacity>

          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Tarefas />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 20,
    margin: 30
  },

  input: {
    padding: 5,
    color: "#000  ",
    borderWidth: 1,
    borderColor: "#fff",
    width: "80%",
    marginBottom: 10,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: "3%"
  },

  butao: {
    backgroundColor: "#615fe6",
    width: "80%",
    padding: 8,
    alignItems: "center",
    borderRadius: 12
  },

  butaotext: {
    color: "#fff"
  },

  texto: {
    color: "#000",
    marginTop: 5,
  },

  texto1: { 
    color: "#000",
    padding: 5,
    height: "auto",
    maxWidth: "80%"
  },

  tarefasContainer: {
    alignItems: 'center',
    flex: 1,
    height: "auto",
    display: "flex",
    flexDirection: "column",
    letterSpacing: 1.5,
    backgroundColor: "#f1f1f3",
    paddingBottom: "5%",
    paddingTop: "5%",
    borderRadius: 15,
  },

  tarefas: {
    backgroundColor: "#fcfcfe",
    height: "auto",
    width: "100%",
    borderRadius: 15,
    padding: "3%",
    paddingHorizontal: "5%",
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  minhastarefas: {
    width: "80%"
  },

  remover: {
    backgroundColor: "red",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 16,
  },

  textoDaTarefa: {
    color: "#000",
    fontWeight: "bold",
    maxWidth: "85%"
  },

  textoBotaoRemover: {
    color: "#fff",
    fontWeight: 'bold',
  }
});