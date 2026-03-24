import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { FlatList, TextInput } from 'react-native-web';

export default function App() {
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(true);

  const buscarDados = async () => {
    try {
      const resposta = await fetch('https://jsonplaceholder.typicode.com/posts');
      const dadosr = await resposta.json();
      setDados(dadosr);
    } catch (erro) {
      console.error('Erro ao buscar dados:', erro);
    } finally {
      setLoading(false);

    }
  }

  useEffect(() => {
    buscarDados();

  }, []);

  if (loading) {
    return (
      <View style={StyleSheet.container}>
        <Text>Carregando...</Text>

      </View>
    )
  };

return (
  <View style={styles.container}>
    <FlatList
      data={dados}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.body}>{item.title}</Text>
          <Text>{item.body}</Text>

        </View>
      )} />
  </View>
);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:20,
    paddingHorizontal: 10,
  },
  card : {
    backgroundColor: '#f2f2f2',
      paddingTop: 10,
      marginBottom: 10,
      borderRadius: 5

  },
  titulo :{
    fontWeight: 'bold',
    marginBottom: 10
  }

});