import React, {createContext} from 'react';
import Produto from '../model/Produto';
import listaProdutos from '../data/listaProdutos';

const ProdutosContext = createContext({});

export const ProdutosProvider = props => {
  return (
    <ProdutosContext.Provider value={{listaProdutos}}>
      {props.children}
    </ProdutosContext.Provider>
  );
};

export default ProdutosContext;
