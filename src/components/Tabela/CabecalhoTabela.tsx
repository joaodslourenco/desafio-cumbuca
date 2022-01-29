import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function HeaderTabela() {
  return (
    <View style={styles.tabela}>
      <View style={styles.linha}>
        <View style={styles.blocoId}>
          <Text style={styles.cabecalho}>ID</Text>
        </View>
        <View style={styles.bloco}>
          <Text style={styles.cabecalho}>Nome</Text>
        </View>
        <View style={styles.bloco}>
          <Text style={styles.cabecalho}>Valor (und)</Text>
        </View>
        <View style={styles.estoque}>
          <Text style={styles.cabecalho}>Estoque</Text>
        </View>
        <View style={styles.bloco}>
          <Text style={styles.cabecalho}>Valor total</Text>
        </View>
        <View style={styles.blocoBotao}>
          <Text style={styles.cabecalho}>Gerenciar</Text>
        </View>
      </View>
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
  cabecalho: {
    fontWeight: 'bold',
  },
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
    justifyContent: 'center',
    alignItems: 'center',
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
