import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function PixScreen() {
  const [valor, setValor] = useState('');
  const [mensagem, setMensagem] = useState('');

  const realizarPix = () => {
    if (valor) {
      setMensagem(`PIX de R$ ${valor} enviado com sucesso!`);
    } else {
      setMensagem('Por favor, insira um valor válido.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pixTexto}>Realizar PIX</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o valor do PIX"
        keyboardType="numeric"
        value={valor}
        onChangeText={setValor}
      />
      <TouchableOpacity
        style={styles.botaoPix}
        onPress={realizarPix}>
        <Text style={styles.botaoTexto}>Enviar PIX</Text>
      </TouchableOpacity>
      {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  pixTexto: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    height: 50,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  botaoPix: {
    backgroundColor: '#FF0000', // Vermelho Santander
    padding: 15,
    borderRadius: 10,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 18,
  },
  mensagem: {
    marginTop: 20,
    fontSize: 16,
    color: '#00a650', // Verde de confirmação
  },
});
