
import React, { useState } from 'react';

import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import ImagemComTitulo from './ImagemComTitulo';
import CardContador from './CardContador';

export default function App() {
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.container}>

      <ImagemComTitulo
        titulo="Imagem importante abaixo!!"
        corTitulo="white"
        imagem="https://reactnative.dev/img/tiny_logo.png"
      />

      <CardContador
        quantidadeCliques={contador}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={() => setContador(contador + 1)}
      >
        <Text style={styles.textoBotao}>
          Incrementar (+1)
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => setContador(contador - 1)}
      >
        <Text style={styles.textoBotao}>
          Decrementar (-1)
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => setContador(0)}
      >
        <Text style={styles.textoBotao}>
          Resetar
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  botao: {
    backgroundColor: '#2878C8',
    padding: 12,
    borderRadius: 8,
    width: '90%',
    alignItems: 'center',
    marginBottom: 20,
  },

  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
