import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pedido } from '../model/pedido';
import { PedidoService } from '../service/pedido.service';
import { CestaService } from '../service/cesta.service';

@Component({
  imports: [CommonModule],
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.html',
})
export class ListaPedidos {
  private service = inject(PedidoService);
  private cestaService = inject(CestaService);

  lista: Pedido[] = this.service.listar().slice().reverse();

  formatar(valor: number): string {
    return this.cestaService.formatar(valor);
  }

  verDetalhe(pedido: Pedido) {
    localStorage.setItem('pedidoSelecionado', JSON.stringify(pedido));
    location.href = './pedido';
  }
}
