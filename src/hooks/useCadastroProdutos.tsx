import AsyncStorageLib from '@react-native-async-storage/async-storage';
import {useState} from 'react';
import {Keyboard} from 'react-native';

import Produto from '../model/Produto';

export default function useCadastroProdutos() {
  const listaProdutos = [
    new Produto(1, 'Xbox Series S', 20, 2800, 56000),
    new Produto(2, 'Xbox 360', 20, 1000, 20000),
    new Produto(3, 'PS3', 15, 1000, 15000),
  ];
  const [produto, setProduto] = useState<Produto>(Produto.vazio());
  const [produtos, setProdutos] = useState<Produto[]>(listaProdutos);

  function produtoSelecionado(produto: Produto) {
    setProduto(produto);
  }

  function produtoExcluido(produto: Produto) {
    console.warn(produto.nome);
  }

  async function carregarDados() {
    const result = await AsyncStorageLib.getItem('produtos');
    if (result !== null)
      /* console.log(JSON.parse(result));*/ setProdutos(JSON.parse(result));
  }

  async function salvarProduto(produto: Produto) {
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
