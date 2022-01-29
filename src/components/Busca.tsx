import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

export default function Busca() {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Digite o produto que você procura"
        onChangeText={() => console.warn('texto alterado')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 375,
    margin: 10,
    borderWidth: 1,
    backgroundColor: '#fff',
    marginBottom: 30,
  },
});
