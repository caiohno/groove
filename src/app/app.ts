import { Component, inject, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { BarraBusca } from './barra-busca/barra-busca';
import { ClienteService } from './service/cliente.service';
import { CestaService } from './service/cesta.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, BarraBusca],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('groove');
  readonly cestaService = inject(CestaService);
  private clienteService = inject(ClienteService);

  // Mostra o nome de quem está logado no botão de cadastro, em vez do
  // texto genérico "meu cadastro" — dá pra ver quem está autenticado.
  nomeCliente(): string {
    return this.clienteService.clienteLogado()?.nome ?? '';
  }
}
