import { Component, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Pedido as PedidoModel } from '../model/pedido';
import { CestaService } from '../service/cesta.service';

@Component({
  imports: [CommonModule],
  selector: 'app-pedido',
  templateUrl: './pedido.html',
})
export class Pedido {
  private cestaService = inject(CestaService);
  private ehNavegador = isPlatformBrowser(inject(PLATFORM_ID));
  obj: PedidoModel = new PedidoModel();

  ngOnInit() {
    if (!this.ehNavegador) return;

    const json = localStorage.getItem('pedidoSelecionado');
    if (json != null) {
      this.obj = JSON.parse(json);
    } else {
      location.href = './pedidos';
    }
  }

  formatar(valor: number): string {
    return this.cestaService.formatar(valor);
  }
}
