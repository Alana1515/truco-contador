import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function App() { //componente padrão (sempre vai ter)
  const [contadorNos, setContadorNos] = useState(1);
  const [contadorEles, setContadorEles] = useState(1); 
//função para aumentar o valor

  function diminuirNos(){ //função para diminuir o valor
    if(contadorNos > 0){
    setContadorNos(contadorNos - 1);
    }
  }
  function diminuirEles(){ //função para diminuir o valor
    if(contadorEles > 0){
    setContadorEles(contadorEles - 1);
    }}

  return (
    <View style={styles.container}>
  <Text style={styles.titulo}>UNIPAR</Text>

  <View style={styles.linha}>
    
    {/* NÓS */}
    <View style={styles.marcador}>
      <Text style={styles.subtitulo}>NÓS</Text>
      <Text>{contadorNos}</Text>

      <View style={{ flexDirection: 'row' }}>
        <Button
          onPress={() => setContadorNos(contadorNos + 1)}
          title="+"
          color="green"
        />
        <Button
          onPress={diminuirNos}
          title="-"
          color="red"
        />
      </View>
    </View>

    {/* ELES */}
    <View style={styles.marcador}>
      <Text style={styles.subtitulo}>ELES</Text>
      <Text>{contadorEles}</Text>

      <View style={{ flexDirection: 'row' }}>
        <Button
          onPress={() => setContadorEles(contadorEles + 1)}
          title="+"
          color="green"
        />
        <Button
          onPress={diminuirEles}
          title="-"
          color="red"
        />
      </View>
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
    fontWeight: 'bold', // negrito
    textAlign: 'center' // centraliza o texto
  },

  botao: {
  width: 150,
  marginHorizontal: 10
  },

  subtitulo: {
  fontSize: 20,
  marginBottom: 20
},
  linha: {
  flexDirection: 'row', 
  justifyContent: 'space-around',
  width: '100%',
},

marcador: {
  alignItems: 'center',
},
  

});