import { Produto } from './produto';

export class ItemPedido {
    produto: Produto = new Produto();
    qtd: number = 1;
    valorUnitario: number = 0;
    valorTotal: number = 0;
}
