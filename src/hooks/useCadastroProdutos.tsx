import {useReducer, useState} from 'react';
import listaProdutos from '../data/listaProdutos';

import Produto from '../model/Produto';

export default function useCadastroProdutos() {
  const [produto, setProduto] = useState<Produto>(Produto.vazio());
  const [produtos, setProdutos] = useState<Produto[]>(listaProdutos);
  const initialState = {listaProdutos};
  function produtoSelecionado(produto: Produto) {
    setProduto(produto);
  }

  function produtoExcluido(produto: Produto) {
    console.warn(produto.nome);
  }

  function novoProduto(produto: Produto) {
    setProdutos([...produtos, produto]);
  }

  return {
    produto,
    produtos,
    produtoSelecionado,
    produtoExcluido,
    novoProduto,
    // salvarProduto,
  };
}
