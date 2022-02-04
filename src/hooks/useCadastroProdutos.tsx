
import AsyncStorageLib from '@react-native-async-storage/async-storage';
import {useState} from 'react';
import {Keyboard} from 'react-native';
        
import Produto from '../model/Produto';
import ProdutoObj from '../model/ProdutoObj';

export default function useCadastroProdutos() {

  let listaProdutos1: any = [];

  const [produto, setProduto] = useState({
    id: 1,
    nome: '',
    estoque: 0,
    valorUnitario: 0,
    valorTotal: 0,
  });
  const [produtos, setProdutos] = useState(listaProdutos1);

  /* cadastro */
  const [id, setId] = useState(produtos.length + 1);
  const [nome, setNome] = useState('');
  const [estoque, setEstoque] = useState(0);
  const [valorUnitario, setValorUnitario] = useState('');
  const valorTotal = +valorUnitario * +estoque;

  function produtoSelecionado(produto: Produto) {
    setProduto(produto);
  }

  async function excluirProduto(produto: any) {
    const result = await AsyncStorageLib.getItem('produtos');
    let produtos = [];
    if (result !== null) produtos = JSON.parse(result);

    const produtosAtualizados = produtos.filter(p => p.id !== produto.id);
    await AsyncStorageLib.setItem(
      'produtos',
      JSON.stringify(produtosAtualizados),
    );
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
    Keyboard.dismiss();
  }


  /* verificar amanhã*/
  // async function atualizarProduto({item}) {
  //   const result = await AsyncStorageLib.getItem('produtos');
  //   let produtos = [];
  //   if (result != null) produtos = JSON.parse(result);

  //   const novosProdutos = produtos.filter(p => {
  //     if (p.id === produto.id) {
  //       p.nome = nome;
  //       p.estoque = estoque;
  //       p.valorUnitario = valorUnitario;
  //       p.valorTotal = valorTotal;
  //     }
  //     return p;
  //   });
  //   setProdutos(novosProdutos);
  //   await AsyncStorageLib.setItem('produtos', JSON.stringify(novosProdutos));
  // }

  return {
    id,
    setId,
    nome,
    setNome,
    estoque,
    setEstoque,
    valorUnitario,
    setValorUnitario,
    valorTotal,
    produto,
    produtos,
    produtoSelecionado,
    excluirProduto,
    //  novoProduto,
    salvarProduto,
    carregarDados,
  };
}
