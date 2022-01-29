import React from 'react';
import {Text, View, StyleSheet, FlatList, Button, Alert} from 'react-native';
import listaProdutos from '../../data/produtos';
import HeaderTabela from './CabecalhoTabela';

export default function Tabela() {
  function confirmarExcluirProduto() {
    Alert.alert(
      'Excluir produto',
      'Tem certeza que quer excluir o produto do estoque?',
      [
        {
          text: 'Sim',
          onPress() {
            console.warn('produto excluído');
          },
        },
        {
          text: 'Não',
        },
      ],
    );
  }

  return (
    <FlatList
      data={listaProdutos}
      keyExtractor={item => item.id.toString()}
      ListHeaderComponent={HeaderTabela}
      renderItem={({item}) => (
        <View style={styles.linha}>
          <View style={styles.blocoId}>
            <Text>{item.id}</Text>
          </View>
          <View style={styles.bloco}>
            <Text>{item.nome}</Text>
          </View>
          <View style={styles.bloco}>
            <Text>{`R$${item.valorUnitario}`}</Text>
          </View>
          <View style={styles.estoque}>
            <Text>{item.qttdEstoque}</Text>
          </View>
          <View style={styles.bloco}>
            <Text>{`R$${item.valorTotal}`}</Text>
          </View>
          <View style={styles.blocoBotao}>
            <Button title="✏️" onPress={() => console.warn('editar')} />
            <Button title="🗑️" onPress={confirmarExcluirProduto} />
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  linha: {
    flexDirection: 'row',
    flexGrow: 1,
  },
  bloco: {
    width: 70,
    justifyContent: 'center',
    height: 50,
    backgroundColor: 'purple',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 0.5,
  },
  blocoId: {
    width: 30,
    justifyContent: 'center',
    backgroundColor: 'purple',
    paddingVertical: 5,
    paddingLeft: 10,
    borderWidth: 0.5,
  },
  blocoBotao: {
    flexDirection: 'row',
    width: 90,
    justifyContent: 'space-between',
    height: 50,
    backgroundColor: 'purple',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 0.5,
  },
  estoque: {
    width: 63,
    justifyContent: 'center',
    height: 50,
    backgroundColor: 'purple',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 0.5,
  },
});
