import React from 'react';
import {StyleSheet, View} from 'react-native';
import Busca from './components/Busca';
import Cadastro from './components/Cadastro/Cadastro';
import Header from './components/Header';
import Tabela from './components/Tabela/Tabela';
import Produto from './model/Produto';

export default function src() {
  const produtos = [
    new Produto(1, 'Xbox Series S', 20, 2800, 56000),
    new Produto(2, 'Xbox 360', 20, 1000, 20000),
    new Produto(3, 'PS3', 15, 1000, 15000),
  ];

  function produtoSelecionado(produto: Produto) {
    console.warn(produto.nome);
  }

  function produtoExcluido(produto: Produto) {
    console.warn(produto.nome);
  }

  return (
    <View style={styles.layout}>
      <Header tela="Controle de Estoque" />
      <Busca />
      <Cadastro produto={produtos[2]} />
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
