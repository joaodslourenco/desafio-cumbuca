import React from 'react';
import {StyleSheet, View} from 'react-native';
import Busca from './components/Busca';
import Cadastro from './components/Cadastro/Cadastro';
import Header from './components/Header';
import Tabela from './components/Tabela/Tabela';
import useCadastroProdutos from './hooks/useCadastroProdutos';

export default function src() {
  const {produto, produtos, novoProduto, produtoExcluido, produtoSelecionado} =
    useCadastroProdutos();

  return (
    <View style={styles.layout}>
      <Header tela="Controle de Estoque" />
      <Busca />
      <Cadastro produto={produto} novoProduto={novoProduto} />
      <Tabela
        produtos={produtos}
        produtoSelecionado={produtoSelecionado}
        produtoExcluido={produtoExcluido}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    backgroundColor: '#39375B',
  },
});
