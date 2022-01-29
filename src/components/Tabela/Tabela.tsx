import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Button,
  Alert,
  Modal,
} from 'react-native';
import listaProdutos from '../../data/listaProdutos';
import HeaderTabela from './CabecalhoTabela';

export default function Tabela() {
  const [modalVisivel, setModalVisivel] = useState(false);

  function confirmarExcluirProduto(item: any) {
    Alert.alert(
      'Excluir produto',
      'Tem certeza que quer excluir o produto do estoque?',
      [
        {
          text: 'Sim',
          onPress() {
            console.warn(item.nome + ' excluído com sucesso.');
          },
        },
        {
          text: 'Não',
        },
      ],
    );
  }

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisivel}
        onRequestClose={() => setModalVisivel(false)}>
        <View style={styles.modal}>
          <Text style={styles.modalTitulo}>Gerenciar estoque</Text>
          <View>
            <Text>Nome do Produto</Text>
            <Text>Quantidade estoque</Text>
            <View style={styles.botoesModal}>
              <Button title="-" />
              <Button title="+" />
            </View>
          </View>

          <Button title="Fechar" onPress={() => setModalVisivel(false)} />
        </View>
      </Modal>
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
              <Button title="✏️" onPress={() => setModalVisivel(true)} />
              <Button
                title="🗑️"
                onPress={() => confirmarExcluirProduto(item)}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linha: {
    flexDirection: 'row',
    flexGrow: 1,
  },
  bloco: {
    width: 70,
    justifyContent: 'center',
    height: 50,
    backgroundColor: '#B0B2FF',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 0.5,
  },
  blocoId: {
    width: 30,
    justifyContent: 'center',
    backgroundColor: '#B0B2FF',
    paddingVertical: 5,
    paddingLeft: 10,
    borderWidth: 0.5,
  },
  blocoBotao: {
    flexDirection: 'row',
    width: 90,
    justifyContent: 'space-between',
    height: 50,
    backgroundColor: '#B0B2FF',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 0.5,
  },
  estoque: {
    width: 63,
    justifyContent: 'center',
    height: 50,
    backgroundColor: '#B0B2FF',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 0.5,
  },
  modal: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitulo: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 50,
  },
  botoesModal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
