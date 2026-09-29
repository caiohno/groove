import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Produto } from '../model/produto';
import { ItemCesta } from '../model/item-cesta';
import { Cesta } from '../model/cesta';

const CHAVE_STORAGE = 'cesta';

@Injectable({ providedIn: 'root' })
export class CestaService {
  private ehNavegador = isPlatformBrowser(inject(PLATFORM_ID));
  cesta: Cesta = new Cesta();

  constructor() {
    this.carregar();
  }

  private carregar() {
    if (!this.ehNavegador) return;
    const json = localStorage.getItem(CHAVE_STORAGE);
    if (json) {
      const obj = JSON.parse(json);
      this.cesta.itens = obj.itens ?? [];
    }
  }

  private salvar() {
    if (!this.ehNavegador) return;
    localStorage.setItem(CHAVE_STORAGE, JSON.stringify(this.cesta));
  }

  private preco(produto: Produto): number {
    return produto.valorPromo > 0 ? produto.valorPromo : produto.valor;
  }

  adicionar(produto: Produto, qtd: number = 1): boolean {
    const existente = this.cesta.itens.find(i => i.produto.codigo === produto.codigo);
    const jaNaCesta = existente ? existente.qtd : 0;
    if (jaNaCesta + qtd > produto.quantidade) return false;

    if (existente) {
      existente.qtd += qtd;
      existente.valorTotal = existente.qtd * this.preco(produto);
    } else {
      const item = new ItemCesta(produto);
      item.qtd = qtd;
      item.valorTotal = qtd * this.preco(produto);
      this.cesta.itens.push(item);
    }
    this.salvar();
    return true;
  }

  remover(codigo: number) {
    this.cesta.itens = this.cesta.itens.filter(i => i.produto.codigo !== codigo);
    this.salvar();
  }

  alterarQtd(codigo: number, delta: number): boolean {
    const item = this.cesta.itens.find(i => i.produto.codigo === codigo);
    if (!item) return false;
    const nova = item.qtd + delta;
    if (nova > item.produto.quantidade) return false;
    item.qtd = Math.max(1, nova);
    item.valorTotal = item.qtd * this.preco(item.produto);
    this.salvar();
    return true;
  }

  limpar() {
    this.cesta.itens = [];
    this.salvar();
  }

  total(): number {
    return this.cesta.itens.reduce((soma, i) => soma + i.valorTotal, 0);
  }

  quantidadeItens(): number {
    return this.cesta.itens.reduce((soma, i) => soma + i.qtd, 0);
  }

  formatar(valor: number): string {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
}
