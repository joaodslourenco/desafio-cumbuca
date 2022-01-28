import React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

export default function Cadastro() {
  return (
    <View>
      <View>
        <TextInput placeholder="ID" style={styles.inputId} />
        <TextInput placeholder="Nome" style={styles.input} />
        <TextInput placeholder="Quantidade Estoque" style={styles.input} />
        <TextInput placeholder="Valor unitário" style={styles.input} />
        <TextInput placeholder="Valor total" style={styles.input} />
        <Button title="Adicionar produto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 150,
    margin: 10,
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  inputId: {
    height: 40,
    width: 50,
    margin: 10,
    borderWidth: 1,
    backgroundColor: '#fff',
  },
});
