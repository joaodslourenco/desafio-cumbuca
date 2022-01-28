import React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

export default function Cadastro() {
  return (
    <View>
      <View style={styles.cadastro}>
        <View style={styles.campoProduto}>
          <TextInput placeholder="ID" style={styles.inputId} />
          <TextInput placeholder="Nome" style={styles.input} />
        </View>
        <View style={styles.valorEEstoque}>
          <TextInput placeholder="Quantidade Estoque" style={styles.input} />

          <TextInput placeholder="Valor unitário" style={styles.input} />
        </View>
        <View style={styles.valorTotal}>
          <TextInput placeholder="Valor total" style={styles.input} />
        </View>
        <View style={styles.botaoAdicionarProduto}>
          <Button title="Adicionar produto" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cadastro: {
    width: '100%',
    alignItems: 'center',
  },
  campoProduto: {
    flexDirection: 'row',
  },
  inputId: {
    height: 40,
    width: 50,
    margin: 10,
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    height: 40,
    margin: 10,
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  valorEEstoque: {
    flexDirection: 'row',
  },
  valorTotal: {
    height: 60,
    width: '100%',
    marginBottom: 20,
  },
  botaoAdicionarProduto: {
    justifyContent: 'center',
    width: '50%',
  },
});
