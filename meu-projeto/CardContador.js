
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CardContador({ quantidadeCliques }) {
  return (
    <View style={styles.card}>

      <Text style={styles.texto}>
        Você clicou {quantidadeCliques} vezes
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#333333',
    borderRadius: 12,
    padding: 20,
    width: '90%',
    alignItems: 'center',
    marginBottom: 20,
  },

  texto: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
