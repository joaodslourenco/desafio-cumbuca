import React from 'react';
import {View} from 'react-native';
import Busca from './components/Busca';
import Cadastro from './components/Cadastro';
import Header from './components/Header';
import Tabela from './components/Tabela';

// import { Container } from './styles';

export default function src() {
  return (
    <View>
      <Header tela="Controle de Estoque" />
      <Busca />
      <Cadastro />
      <Tabela />
    </View>
  );
}
