import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Detalhes'>;

export default function DetalhesScreen({ route }: Props) {
  const { tarefa } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhe da Tarefa</Text>
      <Text style={styles.tarefaText}>{tarefa}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f1f1f3',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 50,
  },
  tarefaText: {
    fontSize: 18,
    color: '#333'
  }
});