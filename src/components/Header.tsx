import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface HeaderProps {
  tela: string;
}

export default function Header(props: HeaderProps) {
  return (
    <View style={styles.header}>
      <Text style={styles.textoHeader}>{props.tela}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#B257E6',
  },
  textoHeader: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
