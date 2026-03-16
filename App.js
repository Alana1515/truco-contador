import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function App() { //componente padrão (sempre vai ter)
  const [contador,setContador] = useState(1); //função para aumentar o valor

  function diminuirContagem(){ //função para diminuir o valor
    if(contador > 0){
    setContador(contador - 1);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>UNIPAR</Text>
      <Text style={styles.subtitulo}>MARCADOR</Text>

      <Text>{contador}</Text>

      <View style={{flexDirection: 'row', marginTop:5}}>
      <View style={styles.botao}>{/*--medidas do estilo do botão*/}
      <Button onPress={ () => setContador(contador + 1)} title='+' color= "green"/> {/*--deixar a tela clicavel: onPress*/}
      </View>
      <View style={styles.botao}>
      <Button onPress={diminuirContagem} title='-' color="red"/>
      </View>
      </View>

      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 40,      // tamanho da letra
    fontWeight: 'bold' // negrito
  },

  botao: {
  width: 150,
  marginHorizontal: 10
  },
  
  subtitulo: {
  fontSize: 20,
  marginBottom: 20
}
  

});