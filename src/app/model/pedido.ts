import { ItemPedido } from './item-pedido';

export class Pedido {
    numero: number = 0;
    data: string = '';
    itens: ItemPedido[] = [];
    total: number = 0;
    status: string = 'Confirmado';
}
