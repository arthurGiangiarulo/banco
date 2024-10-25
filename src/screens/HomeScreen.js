import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../components/Header.js';
import { MaterialIcons } from '@expo/vector-icons';

export default function HomeScreen() {
  const [saldoVisivel, setSaldoVisivel] = useState(false);
  const [cartaoVisivel, setCartaoVisivel] = useState(false);

  return (
    <View style={styles.container}>
      {/*  informações da conta */}
      <Header nome="Antonio" agencia="3356" conta="03084501-0" />

      {/* Saldo disponível com opção de esconder/exibir */}
      <TouchableOpacity style={styles.saldoContainer} onPress={() => setSaldoVisivel(!saldoVisivel)}>
        <Text style={styles.saldoTitulo}>Saldo disponível</Text>
        <Text style={styles.saldoValor}>
          {saldoVisivel ? 'R$ 1.000,00' : '••••'}
</Text>
      </TouchableOpacity>

      {/* Ícones de ações */}
      <View style={styles.iconesContainer}>
        <TouchableOpacity style={styles.icone}>
          <MaterialIcons name="compare-arrows" size={24} color="black" />
          <Text>Pix</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icone}>
          <MaterialIcons name="lock" size={24} color="black" />
          <Text>ID Santander</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icone}>
          <MaterialIcons name="payment" size={24} color="black" />
          <Text>Pagar</Text>
        </TouchableOpacity>
      </View>

        {/* Seção de Cartões */}
      <TouchableOpacity style={styles.cartaoContainer} onPress={() => setCartaoVisivel(!cartaoVisivel)}>
        <Text style={styles.cartaoTitulo}>Cartão final 6609</Text>
        {cartaoVisivel && <Text style={styles.cartaoInfo}>Cartão Online</Text>}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  saldoContainer: {
    marginVertical: 20,
    padding: 20,
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    alignItems: 'center',
  },
  saldoTitulo: {
    fontSize: 18,
    color: '#000',
  },
  saldoValor: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  iconesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  icone: {
    alignItems: 'center',
  },
  cartaoContainer: {
    backgroundColor: '#FF0000',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  cartaoTitulo: {
    color: '#fff',
    fontSize: 18,
  },
  cartaoInfo: {
    color: '#fff',
    fontSize: 16,
    marginTop: 10,
  },
});
