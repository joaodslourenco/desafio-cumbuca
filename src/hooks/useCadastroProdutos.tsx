import AsyncStorageLib from '@react-native-async-storage/async-storage';
import {useState} from 'react';
import {Keyboard} from 'react-native';
import listaProdutos from '../data/listaProdutos';

import Produto from '../model/Produto';
import ProdutoObj from '../model/ProdutoObj';

export default function useCadastroProdutos() {
  const [produto, setProduto] = useState({
    id: 1,
    nome: '',
    estoque: 0,
    valorUnitario: 0,
    valorTotal: 0,
  });
  const [produtos, setProdutos] = useState(listaProdutos);

  function produtoSelecionado(produto: Produto) {
    setProduto(produto);
  }

  function produtoExcluido(produto: Produto) {
    console.warn(produto.nome);
  }

  async function carregarDados() {
    const result = await AsyncStorageLib.getItem('produtos');
    if (result !== null) setProdutos(JSON.parse(result));
  }

  async function salvarProduto(produto: any) {
    const produtoRecebido = produto;
    const produtosAtualizados = [...produtos, produtoRecebido];
    setProdutos(produtosAtualizados);
    await AsyncStorageLib.setItem(
      'produtos',
      JSON.stringify(produtosAtualizados),
    );
  }

  // function novoProduto(produto: Produto) {
  //   setProdutos([...produtos, produto]);
  // }

  // async function salvarProduto(produto: Produto) {

  //   const dadosArmazenados = await AsyncStorageLib.getItem('produtos');
  //   const dadosArmazenadosParsed =
  //     dadosArmazenados != null ? JSON.parse(dadosArmazenados) : null;

  //   let novosDados = [];

  //   if (dadosArmazenados === null) {
  //     await AsyncStorageLib.setItem('produtos', JSON.stringify(arrayProduto));
  //   } else {
  //     novosDados = [...dadosArmazenados, produtoRecebido];
  //     await AsyncStorageLib.setItem('produtos', JSON.stringify(novosDados));
  //   }

  //   Keyboard.dismiss();
  //   /* implementar função para limpar dados do form de cadastro */
  // }

  return {
    produto,
    produtos,
    produtoSelecionado,
    produtoExcluido,
    //  novoProduto,
    salvarProduto,
    carregarDados,
  };
}
