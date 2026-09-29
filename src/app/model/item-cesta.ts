import { Produto } from "./produto";

export class ItemCesta {
   produto: Produto = new Produto();
   qtd: number = 1;
   valorTotal: number=0;

    constructor(obj:Produto){
        this.produto = obj;
        if(obj.valorPromo > 0 ){
            this.valorTotal = this.qtd * obj.valorPromo;
        } else {
            this.valorTotal = this.qtd * obj.valor;
        }
    }
}
