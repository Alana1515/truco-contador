import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { FlatList, TextInput } from 'react-native-web';

export default function App() {


  const [nome, setNome] = useState(' ');
  const [minhaLista, setMinhaLista] = useState([]);

  function adicionarContato() {

    const novoContato = {
      id: Math.random().toString(),
      nome: nome
    }
    setMinhaLista([novoContato, ...minhaLista]);
    setNome('')

  }


  return (
    <View style={styles.container}>
      <Text>Meus contatos</Text>

      <TextInput>
        placeholder='Digite seu nome'
        value={nome}
        onChangeText={setNome}
      </TextInput>

      <button>
        title='Adicionar'
        onPress= {adicionarContato}
      </button>



      <FlatList>
        data={minhaLista}
        keyExtractor={item => item.ed.toSting()}
        renderItem={({ item, index }) => <Text>{item.nome}</Text>}

      </FlatList>

    </View>

  )
}
const styles = StyleSheet.create({

})