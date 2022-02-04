import AsyncStorageLib from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Busca from './components/Busca';
import Cadastro from './components/Cadastro/Cadastro';
import Header from './components/Header';
import Tabela from './components/Tabela/Tabela';
import useCadastroProdutos from './hooks/useCadastroProdutos';

export default function src() {
  const {
    produto,
    produtos,
    salvarProduto,
    excluirProduto,
    produtoSelecionado,
    carregarDados,
  } = useCadastroProdutos();

  async function clearAll() {
    await AsyncStorageLib.clear();
  }

  // clearAll();
  useEffect(() => {
    carregarDados();
  }, [produtos]);

  return (
    <View style={styles.layout}>
      <Header tela="Controle de Estoque" />
      <Busca />
      <Cadastro produto={produto} salvarProduto={salvarProduto} />
      <Tabela produtos={produtos} />
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    backgroundColor: '#39375B',
  },
});
