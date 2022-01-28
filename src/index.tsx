import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Busca from './components/Busca';
import Cadastro from './components/Cadastro';
import Header from './components/Header';

// import { Container } from './styles';

export default function src() {
  return (
    <View>
      <Header tela="Controle de Estoque" />
      <Busca />
      <Cadastro />
    </View>
  );
}
