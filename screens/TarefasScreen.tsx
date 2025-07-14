import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App'; 

type Props = NativeStackScreenProps<RootStackParamList, 'Tarefas'>;

export default function TarefasScreen({ navigation }: Props) {
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
        <Text style={styles.texto1}>{novaTarefa}</Text>
      <TouchableOpacity style={styles.butao} onPress={adicionarTarefa}>
        <Text style={styles.butaotext}>Adicionar Tarefa</Text>
      </TouchableOpacity>
      
      <Text style={styles.texto}>Clique em uma tarefa para ver os detalhes:</Text>
      <ScrollView style={styles.minhastarefas}>
        {tarefa.map((item, index) => (
          <TouchableOpacity 
            key={index} 
            onPress={() => navigation.navigate('Detalhes', { tarefa: item })}
          >
            <View style={styles.tarefas}>
              <Text style={styles.textoDaTarefa}>{item}</Text>
              <TouchableOpacity onPress={() => removerTarefa(index)} style={styles.remover}>
                <Text style={styles.textoBotaoRemover}>X</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  tarefasContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
    backgroundColor: "#f1f1f3",
  },
  title: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 20,
    marginTop: 50,
  },
  input: {
    padding: 10,
    color: "#000",
    borderWidth: 1,
    borderColor: "#ccc",
    width: "90%",
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  butao: {
    backgroundColor: "#615fe6",
    width: "90%",
    padding: 12,
    alignItems: "center",
    borderRadius: 12,
  },
  butaotext: {
    color: "#fff",
    fontWeight: 'bold',
  },
  texto: {
    color: "#555",
    marginTop: 20,
    marginBottom: 5,
  },

 texto1: {
    color: "#000",
    padding: 5,
    height: "auto",
    maxWidth: "80%"
    },

  minhastarefas: {
    width: "90%",
  },
  tarefas: {
    backgroundColor: "#fcfcfe",
    borderRadius: 15,
    padding: 15,
    paddingHorizontal: 20,
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  textoDaTarefa: {
    color: "#000",
    fontWeight: "bold",
    maxWidth: "85%",
  },
  remover: {
    backgroundColor: "#e74c3c",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 16,
  },
  textoBotaoRemover: {
    color: "#fff",
    fontWeight: 'bold',
  }
});