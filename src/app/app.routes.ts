import { Routes } from '@angular/router';
import { Vitrine } from './vitrine/vitrine';
import { Detalhe } from './detalhe/detalhe';
import { Login } from './login/login';
import { Reenvio } from './reenvio/reenvio';
import { Cadastro } from './cadastro/cadastro';
import { Cesta } from './cesta/cesta';
import { Pedido } from './pedido/pedido';
import { ResultadoBusca } from './resultado-busca/resultado-busca';
import { ListaPedidos } from './lista-pedidos/lista-pedidos';
export const routes: Routes = [
    {path:"", component:Vitrine}, {path:"promo", component:Vitrine},
    {path:"detalhe", component:Detalhe}, {path:"login", component:Login},
    {path:"cesta", component:Cesta}, {path:"pedido", component:Pedido},
    {path:"pedidos", component:ListaPedidos}, 
    {path:"cadastro", component:Cadastro}, 
    {path:"reenvio", component:Reenvio},
    {path:"busca", component:ResultadoBusca}
];
