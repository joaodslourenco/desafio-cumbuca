export default class Produto {
  #id: number;
  #nome: string;
  #estoque: number;
  #valorUnitario: number;
  #valorTotal: number;

  constructor(
    id: number,
    nome: string,
    estoque: number,
    valorUnitario: number,
    valorTotal: number,
  ) {
    this.#id = id;
    this.#nome = nome;
    this.#estoque = estoque;
    this.#valorUnitario = valorUnitario;
    this.#valorTotal = valorTotal;
  }

  static vazio() {
    return new Produto(0, '', 0, 0, 0);
  }

  get id() {
    return this.#id;
  }

  get nome() {
    return this.#nome;
  }

  get estoque() {
    return this.#estoque;
  }

  get valorUnitario() {
    return this.#valorUnitario;
  }

  get valorTotal() {
    return this.#valorTotal;
  }
}

/*
Identificador (número)
Nome (string)
Quantidade em estoque (número)
Valor unitário (número)
Valor total (número)
*/
