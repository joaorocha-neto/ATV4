import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import TarefasScreen from './screens/TarefasScreen';
import DetalhesScreen from './screens/DetalhesScreen';

export type RootStackParamList = {
  Tarefas: undefined; 
  Detalhes: { tarefa: string }; 
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
        <Stack.Navigator initialRouteName="Tarefas">
          <Stack.Screen
            name="Tarefas"
            component={TarefasScreen}
            options={{ headerShown: false}}
            />
          <Stack.Screen
            name="Detalhes"
            component={DetalhesScreen}
            options={{ headerShown: false}}
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;