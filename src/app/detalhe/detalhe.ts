import { Component, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { Produto } from '../model/produto';
import { ProdutoService } from '../service/produto.service';
import { CestaService } from '../service/cesta.service';

@Component({
  imports: [CommonModule],
  selector: 'app-detalhe',
  styleUrl: './detalhe.css',
  templateUrl: './detalhe.html',
})
export class Detalhe {
    obj:Produto = new Produto();
    readonly produtoService = inject(ProdutoService);
    erroAudio = false;
    mensagem: string = "";
    private ehNavegador = isPlatformBrowser(inject(PLATFORM_ID));
    private cestaService = inject(CestaService);

    //evento apos o componente ser carregado
    ngOnInit(){
      // localStorage só existe no navegador (o projeto também renderiza no servidor, SSR)
      if(!this.ehNavegador) return;

      const codigoUrl = new URLSearchParams(location.search).get('codigo');
      let codigo = Number(codigoUrl);
      if (!codigoUrl) {
        try { codigo = JSON.parse(localStorage.getItem('produto') ?? '{}').codigo; } catch { codigo = 0; }
      }
      const produto = this.produtoService.lista.find(p => p.codigo === codigo);
      if (produto) this.obj = produto;
      else this.mensagem = 'Disco não encontrado. Volte ao catálogo para escolher outro.';
    }

    formatar(valor: number): string {
      return this.cestaService.formatar(valor);
    }

    // Wireframe: COMPRAR -> CESTA. Só segue para a cesta se conseguiu adicionar.
    comprar(){
      if (this.cestaService.adicionar(this.obj)) {
        location.href = "./cesta";
      } else {
        this.mensagem = "Você já colocou na cesta todas as unidades disponíveis deste produto.";
      }
    }
}
