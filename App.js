import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [contadorNos, setContadorNos] = useState(1);
  const [contadorEles, setContadorEles] = useState(1);

  function diminuirNos() {
    if (contadorNos > 0) setContadorNos(contadorNos - 1);
  }

  function diminuirEles() {
    if (contadorEles > 0) setContadorEles(contadorEles - 1);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>UNIPAR</Text>

      <View style={styles.linha}>

        {/* NÓS */}
        <View style={styles.marcador}>
          <Text style={styles.subtitulo}>NÓS</Text>
          <Text>{contadorNos}</Text>

          <View style={styles.linhaBotoes}>
            <View style={styles.botaoGrande}>
              <Button
                onPress={() => setContadorNos(contadorNos + 1)}
                title="+"
                color="green"
              />
            </View>

            <View style={styles.botaoGrande}>
              <Button
                onPress={diminuirNos}
                title="-"
                color="red"
              />
            </View>
          </View>

          {/* BOTÃO TRUCO */}
          <View style={styles.botaoTruco}>
            <Button
              title="TRUCO"
              color="blue"
              onPress={() => setContadorNos(contadorNos + 3)}
            />
          </View>
          {/* BOTÃO SEIS */}
          <View style={styles.botaoSeis}>
            <Button
              title="SEIS"
              color="pink"
              onPress={() => setContadorNos(contadorNos + 6)}
            />
          </View>
          {/* BOTÃO NOVE */}
          <View style={styles.botaoNove}>
            <Button
              title="NOVE"
              color="yellow"
              onPress={() => setContadorNos(contadorNos + 9)}
            />
          </View>
          {/* BOTÃO DOZE */}
          <View style={styles.botaoDoze}>
            <Button
              title="DOZE"
              color="purple"
              onPress={() => setContadorNos(contadorNos + 12)}
            />
          </View>
        </View>

        {/* ELES */}
        <View style={styles.marcador}>
          <Text style={styles.subtitulo}>ELES</Text>
          <Text>{contadorEles}</Text>

          <View style={styles.linhaBotoes}>
            <View style={styles.botaoGrande}>
              <Button
                onPress={() => setContadorEles(contadorEles + 1)}
                title="+"
                color="green"
              />
            </View>

            <View style={styles.botaoGrande}>
              <Button
                onPress={diminuirEles}
                title="-"
                color="red"
              />
            </View>
          </View>

          {/* BOTÃO TRUCO */}
          <View style={styles.botaoTruco}>
            <Button
              title="TRUCO"
              color="blue"
              onPress={() => setContadorEles(contadorEles + 3)}
            />
          </View>
          {/* BOTÃO SEIS */}
          <View style={styles.botaoSeis}>
            <Button
              title="SEIS"
              color="pink"
              onPress={() => setContadorEles(contadorEles + 6)}
            />
          </View>
          {/* BOTÃO NOVE */}
          <View style={styles.botaoNove}>
            <Button
              title="NOVE"
              color="yellow"
              onPress={() => setContadorEles(contadorEles + 9)}
            />
          </View>
          {/* BOTÃO DOZE */}
          <View style={styles.botaoDoze}>
            <Button
              title="DOZE"
              color="purple"
              onPress={() => setContadorEles(contadorEles + 12)}
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
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  linha: {
    flexDirection: 'row',
    justifyContent: 'center', // mantém os marcadores centralizados
  },
  marcador: {
    alignItems: 'center',
    marginHorizontal: 30, // controla a distância entre NÓS e ELES
  },
  subtitulo: {
    fontSize: 20,
    marginBottom: 20,
  },
  linhaBotoes: {
    flexDirection: 'row',
    marginTop: 10,
  },
  botaoGrande: {
    width: 80,
    marginHorizontal: 5,
  },
  botaoTruco: {
    marginTop: 10,
    width: 100,
  },
});