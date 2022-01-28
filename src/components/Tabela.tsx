import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';

const data = [
  {
    id: 1,
    nome: 'PlayStation 5',
    qttdEstoque: 8,
    valorUnitario: 4800,
    valorTotal: 38400,
  },
  {
    id: 2,
    nome: 'Nintendo Switch',
    qttdEstoque: 11,
    valorUnitario: 2700,
    valorTotal: 29700,
  },
  {
    id: 3,
    nome: 'Steam Deck',
    qttdEstoque: 5,
    valorUnitario: 3150,
    valorTotal: 15750,
  },
  {
    id: 4,
    nome: 'Xbox Series X',
    qttdEstoque: 10,
    valorUnitario: 4599,
    valorTotal: 45990,
  },
];

export default function Tabela() {
  return (
    <View style={styles.tabela}>
      <View style={styles.linha}>
        <View style={styles.blocoId}>
          <Text>ID</Text>
        </View>
        <View style={styles.bloco}>
          <Text>Nome</Text>
        </View>
        <View style={styles.bloco}>
          <Text>Valor (und)</Text>
        </View>
        <View style={styles.bloco}>
          <Text>Estoque</Text>
        </View>
        <View style={styles.bloco}>
          <Text>Valor total</Text>
        </View>
      </View>

      <FlatList
        data={data}
        renderItem={({item}) => (
          <View style={styles.linha}>
            <View style={styles.blocoId}>
              <Text>{item.id}</Text>
            </View>
            <View style={styles.bloco}>
              <Text>{item.nome}</Text>
            </View>
            <View style={styles.bloco}>
              <Text>{item.valorUnitario}</Text>
            </View>
            <View style={styles.bloco}>
              <Text>{item.qttdEstoque}</Text>
            </View>
            <View style={styles.bloco}>
              <Text>{item.valorTotal}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  tabela: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 500,
  },
  linha: {
    flexDirection: 'row',
  },
  bloco: {
    width: 80,
    backgroundColor: 'purple',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 0.5,
  },
  blocoId: {
    width: 30,
    backgroundColor: 'purple',
    paddingVertical: 5,
    //paddingHorizontal: 10,
    borderWidth: 0.5,
  },
});
