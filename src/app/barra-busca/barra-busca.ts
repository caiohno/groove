import { Component } from '@angular/core';

const CHAVE_BUSCA = 'buscaTermo';

@Component({
  imports: [],
  selector: 'app-barra-busca',
  styleUrl: './barra-busca.css',
  templateUrl: './barra-busca.html',
})
export class BarraBusca {
  buscar(termo: string) {
    const valor = termo.trim();
    if (valor.length === 0) return;
    localStorage.setItem(CHAVE_BUSCA, valor);
    location.href = './busca?q=' + encodeURIComponent(valor);
  }
}
