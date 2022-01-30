import {useState} from 'react';

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

  function novoProduto(produto: Produto) {
    setProdutos([...produtos, produto]);
  }

  // function salvarProduto(produto: Produto) {
  //   setProdutos([...produtos, produto]);
  // }

  return {
    produto,
    produtos,
    produtoSelecionado,
    produtoExcluido,
    novoProduto,
    // salvarProduto,
  };
}
