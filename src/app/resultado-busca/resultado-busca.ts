import { Component, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Produto } from '../model/produto';
import { ProdutoService } from '../service/produto.service';
import { CestaService } from '../service/cesta.service';

@Component({
  imports: [CommonModule],
  selector: 'app-resultado-busca',
  styleUrl: './resultado-busca.css',
  templateUrl: './resultado-busca.html',
})
export class ResultadoBusca {
  readonly produtoService = inject(ProdutoService);
  private cestaService = inject(CestaService);
  private ehNavegador = isPlatformBrowser(inject(PLATFORM_ID));

  termo = '';
  lista: Produto[] = [];

  ngOnInit() {
    if (!this.ehNavegador) return;

    this.termo = new URLSearchParams(location.search).get('q') ?? localStorage.getItem('buscaTermo') ?? '';
    const normalizar = (texto: string) => texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    const alvo = normalizar(this.termo);
    this.lista = this.produtoService.lista.filter(p =>
      normalizar(p.nome).includes(alvo) || normalizar(p.keywords).includes(alvo)
    );
  }

  verDetalhe(obj: Produto) {
    localStorage.setItem("produto", JSON.stringify(obj));
    location.href = "./detalhe?codigo=" + obj.codigo;
  }

  comprar(obj: Produto) {
    this.cestaService.adicionar(obj);
    location.href = "./cesta";
  }
}
