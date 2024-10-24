import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header({ nome, agencia, conta }) {
  return (
    <View style={styles.header}>
      <Text style={styles.bancoNome}>Santander</Text>
      <Text style={styles.contaInfo}>Olá, {nome}</Text>
      <Text style={styles.contaInfo}>Ag {agencia}  Cc {conta}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#8B0000',
    padding: 20,
    borderRadius: 10,
  },
  bancoNome: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  contaInfo: {
    color: '#fff',
    fontSize: 16,
  },
});
