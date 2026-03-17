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
                title="+"
                color="green"
                onPress={() => {
                  const novoPonto = contadorNos + 1;
                  if (novoPonto >= 13) {
                    setVitoriasNos(vitoriasNos + 1);
                    setContadorNos(0);
                    setContadorEles(0);
                  } else {
                    setContadorNos(novoPonto);
                  }
                }}
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
          <View style={styles.botaoGrande}>
            <Button
              title="TRUCO"
              color="blue"
              onPress={() => {
                const novoPonto = contadorNos + 3;
                if (novoPonto >= 13) {
                  setVitoriasNos(vitoriasNos + 1);
                  setContadorNos(0);
                  setContadorEles(0);
                } else {
                  setContadorNos(novoPonto);
                }
              }}
            />
          </View>
          {/* BOTÃO SEIS */}
          <View style={styles.botaoGrande}>
            <Button
              title="SEIS"
              color="pink"
              onPress={() => {
                const novoPonto = contadorNos + 6;
                if (novoPonto >= 13) {
                  setVitoriasNos(vitoriasNos + 1);
                  setContadorNos(0);
                  setContadorEles(0);
                } else {
                  setContadorNos(novoPonto);
                }
              }
              }
            />
          </View>
          {/* BOTÃO NOVE */}
          <View style={styles.botaoGrande}>
            <Button
              title="NOVE"
              color="yellow"
              onPress={() => {
                const novoPonto = contadorNos + 9;
                if (novoPonto >= 13) {
                  setVitoriasNos(vitoriasNos + 1);
                  setContadorNos(0);
                  setContadorEles(0);
                } else {
                  setContadorNos(novoPonto);
                }
              }}
            />
          </View>
          {/* BOTÃO DOZE */}
          <View style={styles.botaoGrande}>
            <Button
              title="DOZE"
              color="purple"
              onPress={() => {
                const novoPonto = contadorNos + 12;
                if (novoPonto >= 13) {
                  setVitoriasNos(vitoriasNos + 1);
                  setContadorNos(0);
                  setContadorEles(0);
                } else {
                  setContadorNos(novoPonto);
                }
              }}
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
                title="+"
                color="green"
                onPress={() => {
                  const novoPonto = contadorEles + 1;
                  if (novoPonto >= 13) {
                    setVitoriasEles(vitoriasEles + 1);
                    setContadorNos(0);
                    setContadorEles(0);
                  } else {
                    setContadorEles(novoPonto);
                  }
                }}
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
          <View style={styles.botaoGrande}>
            <Button
              title="TRUCO"
              color="blue"
              onPress={() => {
                const novoPonto = contadorEles + 3;
                if (novoPonto >= 13) {
                  setVitoriasEles(vitoriasEles + 1);
                  setContadorNos(0);
                  setContadorEles(0);
                } else {
                  setContadorEles(novoPonto);
                }
              }}
            />
          </View>
          {/* BOTÃO SEIS */}
          <View style={styles.botaoGrande}>
            <Button
              title="SEIS"
              color="pink"
              onPress={() => {
                const novoPonto = contadorEles + 6;
                if (novoPonto >= 13) {
                  setVitoriasEles(vitoriasEles + 1);
                  setContadorNos(0);
                  setContadorEles(0);
                } else {
                  setContadorEles(novoPonto);
                }
              }}
            />
          </View>
          {/* BOTÃO NOVE */}
          <View style={styles.botaoGrande}>
            <Button
              title="NOVE"
              color="yellow"
              onPress={() => {
                const novoPonto = contadorEles + 9;
                if (novoPonto >= 13) {
                  setVitoriasEles(vitoriasEles + 1);
                  setContadorNos(0);
                  setContadorEles(0);
                } else {
                  setContadorEles(novoPonto);
                }
              }}
            />
          </View>
          {/* BOTÃO DOZE */}
          <View style={styles.botaoGrande}>
            <Button
              title="DOZE"
              color="purple"
              onPress={() => {
                const novoPonto = contadorEles + 12;
                if (novoPonto >= 13) {
                  setVitoriasEles(vitoriasEles + 1);
                  setContadorNos(0);
                  setContadorEles(0);
                } else {
                  setContadorEles(novoPonto);
                }
              }}
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