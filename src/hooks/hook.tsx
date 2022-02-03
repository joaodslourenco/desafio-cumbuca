import {useEffect, useReducer, useState} from 'react';
import listaProdutos from '../data/listaProdutos';

import Produto from '../model/Produto';

import AsyncStorageLib from '@react-native-async-storage/async-storage';
import {Keyboard} from 'react-native';

export default function useCadastroProdutos() {
  const [produto, setProduto] = useState<Produto>(Produto.vazio());
  const [produtos, setProdutos] = useState<Produto[]>([]);
  function produtoSelecionado(produto: Produto) {
    setProduto(produto);
  }

  function produtoExcluido(produto: Produto) {
    console.warn(produto.nome);
  }

  // async function novoProduto(produto: any) {
  //   const stringProdutos = await AsyncStorageLib.getItem('products');
  //   const arrayProdutos =
  //     stringProdutos != null ? JSON.parse(stringProdutos) : [];
  //   arrayProdutos.push(produto);

  //   const jsonValue = JSON.stringify(arrayProdutos);
  //   await AsyncStorageLib.setItem('products', jsonValue);
  //   setProdutos([...produtos, produto]);
  // }

  // async function getMyObject() {
  //   const result = await AsyncStorageLib.getItem('products');
  //   const array = result != null ? JSON.parse(result) : [];
  //   // setProdutos(array);
  //   // console.log(array);
  //   setProdutos(...produtos, array);
  // }

  // useEffect(() => {
  //   getMyObject();
  // }, []);

  //teste

  async function salvarProduto(produto: Produto) {
    let produtoRecebido = produto;
    //console.log(produtoRecebido);

    const arrayProduto = [produtoRecebido];

    const dadosArmazenados = await AsyncStorageLib.getItem('produtos');
    const dadosArmazenadosParsed =
      dadosArmazenados != null ? JSON.parse(dadosArmazenados) : null;
    setProdutos(dadosArmazenadosParsed);

    let novosDados = [];

    if (dadosArmazenados === null) {
      await AsyncStorageLib.setItem('produtos', JSON.stringify(arrayProduto));
    } else {
      novosDados = [...dadosArmazenados, produtoRecebido];
      await AsyncStorageLib.setItem('produtos', JSON.stringify(novosDados));
    }

    Keyboard.dismiss();
    /* implementar função para limpar dados do form de cadastro */
  }

  async function receberDados() {
    try {
      const valorString = await AsyncStorageLib.getItem('produtos');
      const valor = valorString != null ? JSON.parse(valorString) : null;
      setProdutos(valor);
    } catch (error) {
      console.log(error);
    }
  }

  return {
    produto,
    produtos,
    produtoSelecionado,
    produtoExcluido,
    //  novoProduto,
    salvarProduto,
    receberDados,
  };
}
