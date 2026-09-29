import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteService } from '../service/cliente.service';

@Component({
  imports: [CommonModule],
  selector: 'app-login',
  templateUrl: './login.html',
})
export class Login {
  private service = inject(ClienteService);
  erro = false;

  entrar(email: string, senha: string) {
    const cliente = this.service.autenticar(email, senha);
    this.erro = !cliente;
    if (cliente) {
      localStorage.setItem('clienteLogado', JSON.stringify(cliente));
      location.href = './';
    }
  }
}
