import React from 'react';
import {StyleSheet, View} from 'react-native';
import Busca from './components/Busca';
import Cadastro from './components/Cadastro';
import Header from './components/Header';
import Tabela from './components/Tabela/Tabela';

// import { Container } from './styles';

export default function src() {
  return (
    <View style={styles.layout}>
      <Header tela="Controle de Estoque" />
      <Busca />
      <Cadastro />
      <Tabela />
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    backgroundColor: '#39375B',
  },
});
