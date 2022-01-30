import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';
import Produto from '../../model/Produto';
import Entrada from './Entrada';

interface CadastroProps {
  produto: Produto;
}

export default function Cadastro(props: CadastroProps) {
  const [id, setId] = useState(1);
  const [nome, setNome] = useState(props.produto?.nome ?? '');
  const [estoque, setEstoque] = useState(props.produto?.estoque ?? 0);
  const [valorUnitario, setValorUnitario] = useState(
    props.produto?.valorUnitario ?? 0,
  );
  const valorTotal = valorUnitario * estoque;

  return (
    <View>
      <View style={styles.cadastro}>
        <View style={styles.campoProduto}>
          <Entrada
            placeholder="ID"
            style={styles.inputId}
            editable={false}
            value={id.toString()}
          />

          <Entrada
            placeholder="Nome"
            style={styles.input}
            value={nome}
            onChangeText={setNome}
          />
        </View>
        <View style={styles.valorEEstoque}>
          <Entrada
            placeholder="Quantidade Estoque"
            style={styles.input}
            value={estoque.toString()}
            keyboardType="numeric"
            onChangeText={setEstoque}
          />

          <Entrada
            placeholder="Valor unitário"
            style={styles.input}
            value={valorUnitario.toString()}
            onChangeText={setValorUnitario}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.valorTotal}>
          <TextInput
            placeholder="Valor total"
            style={styles.input}
            editable={false}
            value={valorTotal.toString()}
          />
        </View>
        <View style={styles.botaoAdicionarProduto}>
          <Button
            title="Adicionar produto" /*esse botão tem que ativar o set ID +1 */
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cadastro: {
    width: '100%',
    alignItems: 'center',
  },
  campoProduto: {
    flexDirection: 'row',
  },
  inputId: {
    height: 40,
    width: 50,
    margin: 10,
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    height: 40,
    margin: 10,
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  valorEEstoque: {
    flexDirection: 'row',
  },
  valorTotal: {
    height: 60,
    width: '100%',
    marginBottom: 20,
  },
  botaoAdicionarProduto: {
    justifyContent: 'center',
    width: '50%',
  },
});