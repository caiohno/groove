import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteService } from '../service/cliente.service';

@Component({
  imports: [CommonModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  private service = inject(ClienteService);
  erro = false;

  entrar(email: string, senha: string) {
    const cliente = this.service.autenticar(email, senha);
    this.erro = !cliente;
    if (cliente) {
      // sem backend na P1: só guarda quem "está logado" pra outras páginas usarem depois, se precisar
      localStorage.setItem('clienteLogado', JSON.stringify(cliente));
      location.href = './';
    }
  }
}
