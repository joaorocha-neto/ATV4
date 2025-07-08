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
    color: "#fff",
    fontSize: 30,
    marginBottom: 20,
  },
  input: {
    padding: 5,
    color: "#fff",
    borderWidth: 1,
    borderColor: "#fff",
    width: "80%",
    marginBottom: 10,
  },
  butao: {
    backgroundColor: "#2196f3",
    width: "80%",
    padding: 8,
    alignItems: "center",
  },
  butaotext: {
    color: "#fff"
  },
  texto: {
    color: "#fff",
    marginTop: 5,
  },
  texto1: { 
    color: "#fff",
    padding: 1,
  },
  tarefasContainer: {
    alignItems: 'center',
    flex: 1,
    height: "auto",
    display: "flex",
    flexDirection: "column",
    letterSpacing: 1.5,
    backgroundColor: "#3d7cc1",
    paddingBottom: "5%",
    paddingTop: "5%",
    borderRadius: 15,
  },
  tarefas: {
    backgroundColor: "#2196f3",
    height: "auto",
    width: "100%",
    borderRadius: 5,
    padding: "1.5%",
    paddingHorizontal: "5%",
    color: "#fff",
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  minhastarefas: {
    width: "80%"
  },
  remover: {
    backgroundColor: "red",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 4,
  },
  textoDaTarefa: {
    color: "#fff",
    flex: 1,
  },
  textoBotaoRemover: {
    color: "#fff",
    fontWeight: 'bold',
  }
});