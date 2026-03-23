import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { FlatList, TextInput } from 'react-native-web';

export default function App() {

  const [nome, setNome] = useState(' ');

  const minhaLista = [
    {id: 1, nome: 'João', cpf: '123.546.789-00' },
    {id: 2, nome: 'MAria', cpf: '123.546.789-00' },
    {id: 3, nome: 'Pedro', cpf: '123.546.789-00'  }
  ]

  return (
    <View style={styles.container}>
      <Text>Meus contatos</Text>

      <TextInput>
        placeholder='Digite seu nome'
        value={nome}
        onChangeText={setNome}
      </TextInput>


      <FlatList>
        data={minhaLista}
        keyExtractor={item => item.ed.toSting()}
        renderItem={({ item, index }) => <Text>{item.nome}</Text>}

      </FlatList>

        </View>

  )}
const styles = StyleSheet.create({
  
})