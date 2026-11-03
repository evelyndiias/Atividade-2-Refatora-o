
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ImagemComTitulo({
  titulo,
  corTitulo,
  imagem,
}) {
  return (
    <View style={styles.container}>

      <Text style={[styles.titulo, { color: corTitulo }]}>
        {titulo}
      </Text>

      <Image
        source={{ uri: imagem }}
        style={styles.imagem}
        resizeMode="contain"
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },

  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },

  imagem: {
    width: 150,
    height: 150,
  },
});
