import React, {useState} from 'react';
import {View, Text, Modal, Button, StyleSheet} from 'react-native';

const [modalVisivel, setModalVisivel] = useState(false);

export default function ModalGerenciar() {
  return (
    <View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    margin: 15,
    height: '50%',
    backgroundColor: '#39375B',
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
