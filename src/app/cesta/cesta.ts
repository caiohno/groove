import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CestaService } from '../service/cesta.service';
import { PedidoService } from '../service/pedido.service';

@Component({
  imports: [CommonModule],
  selector: 'app-cesta',
  styleUrl: './cesta.css',
  templateUrl: './cesta.html',
})
export class Cesta {
  private service = inject(CestaService);
  private pedidoService = inject(PedidoService);
  mensagem: string = '';
  tipoMensagem: string = 'warning';

  get lista() {
    return this.service.cesta.itens;
  }

  get valorCesta(): number {
    return this.service.total();
  }

  formatar(valor: number): string {
    return this.service.formatar(valor);
  }

  private avisar(texto: string, tipo: string) {
    this.mensagem = texto;
    this.tipoMensagem = tipo;
  }

  remover(codigo: number) {
    this.service.remover(codigo);
    this.mensagem = '';
  }

  aumentar(codigo: number) {
    if (this.service.alterarQtd(codigo, 1)) {
      this.mensagem = '';
    } else {
      this.avisar('Quantidade máxima em estoque atingida.', 'warning');
    }
  }

  diminuir(codigo: number) {
    this.service.alterarQtd(codigo, -1);
    this.mensagem = '';
  }

  limpar() {
    this.service.limpar();
    this.avisar('Cesta esvaziada.', 'secondary');
  }

  finalizar() {
    if (this.lista.length === 0) {
      this.avisar('Sua cesta está vazia.', 'secondary');
      return;
    }
    const pedido = this.pedidoService.criarPedido(this.lista);
    this.service.limpar();
    this.avisar(`Compra finalizada com sucesso! Pedido #${pedido.numero} registrado.`, 'success');
  }
}
