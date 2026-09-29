import { Component, inject } from '@angular/core';
import { Produto } from '../model/produto';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../service/produto.service';
import { CestaService } from '../service/cesta.service';

@Component({
  imports: [CommonModule],
  selector: 'app-vitrine',
  styleUrl: './vitrine.css',
  templateUrl: './vitrine.html',
})
export class Vitrine {
  readonly produtoService = inject(ProdutoService);
  private cestaService = inject(CestaService);

  soPromocoes = inject(ActivatedRoute).snapshot.routeConfig?.path === 'promo';

  lista: Produto[] = this.soPromocoes
    ? this.produtoService.lista.filter(obj => obj.valorPromo > 0)
    : this.produtoService.lista;

  destaques = this.produtoService.lista.filter(p => p.destaque === 1);
  discoHero = this.destaques[this.destaques.length - 1];

  verDetalhe(obj: Produto) {
    localStorage.setItem("produto", JSON.stringify(obj));
    location.href = "./detalhe?codigo=" + obj.codigo;
  }

  comprar(obj: Produto) {
    this.cestaService.adicionar(obj);
    location.href = "./cesta";
  }
}
