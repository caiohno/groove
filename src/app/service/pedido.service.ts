import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Pedido } from '../model/pedido';
import { ItemPedido } from '../model/item-pedido';
import { ItemCesta } from '../model/item-cesta';

const CHAVE_PEDIDOS = 'pedidos';

@Injectable({ providedIn: 'root' })
export class PedidoService {
  private ehNavegador = isPlatformBrowser(inject(PLATFORM_ID));

  listar(): Pedido[] {
    if (!this.ehNavegador) return [];
    const json = localStorage.getItem(CHAVE_PEDIDOS);
    return json ? JSON.parse(json) : [];
  }

  private salvar(lista: Pedido[]) {
    if (!this.ehNavegador) return;
    localStorage.setItem(CHAVE_PEDIDOS, JSON.stringify(lista));
  }

  criarPedido(itensCesta: ItemCesta[]): Pedido {
    const lista = this.listar();

    const pedido = new Pedido();
    pedido.numero = lista.length > 0 ? Math.max(...lista.map(p => p.numero)) + 1 : 1001;
    pedido.data = new Date().toLocaleDateString('pt-BR');
    pedido.status = 'Confirmado';
    pedido.itens = itensCesta.map(item => {
      const itemPedido = new ItemPedido();
      itemPedido.produto = item.produto;
      itemPedido.qtd = item.qtd;
      itemPedido.valorTotal = item.valorTotal;
      itemPedido.valorUnitario = item.qtd > 0 ? item.valorTotal / item.qtd : 0;
      return itemPedido;
    });
    pedido.total = pedido.itens.reduce((soma, i) => soma + i.valorTotal, 0);

    lista.push(pedido);
    this.salvar(lista);
    return pedido;
  }
}
