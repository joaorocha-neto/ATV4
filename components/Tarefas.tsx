import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';



export function Tarefas() {
  // --- AQUI ESTÁ A CORREÇÃO ---
  // Você quer que 'tarefa' seja um ARRAY de strings, não uma única string.
  const [tarefa, setTarefa] = useState<string[]>([]);
  // --- FIM DA CORREÇÃO ---

  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== '') {
      // Esta linha agora está correta porque 'tarefa' é um array de strings
      setTarefa([...tarefa, novaTarefa.trim()]);
      setNovaTarefa('');
    }
  }

  // Adicionando um retorno JSX mínimo para a função Tarefas,
  // senão ela não renderiza nada e não será visível na tela.
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={setNovaTarefa} // Atribua o texto digitado a 'novaTarefa'
        value={novaTarefa}
        placeholder='Adicione uma tarefa'
      />
      <Button title="Adicionar Tarefa" onPress={adicionarTarefa} />
      <Text style={styles.texto}>Tarefas:</Text>
      {/* Adicione um componente para exibir as tarefas */}
      {tarefa.map((item, index) => (
        <Text key={index} style={styles.texto}>{item}</Text>
      ))}
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
    fontSize: 30,
    marginBottom: 20, // Adicionado para espaçamento
  },
  input: {
    padding: 10, // Aumentado o padding
    color: "#fff",
    borderWidth: 1,
    borderColor: "#fff",
    width: 250, // Definido uma largura
    marginBottom: 10, // Adicionado para espaçamento
  },
  texto: {
    color: "#fff",
    marginTop: 5, // Adicionado para espaçamento entre itens
  }
});  


