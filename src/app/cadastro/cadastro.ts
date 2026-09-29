import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  imports: [CommonModule],
  selector: 'app-cadastro',
  templateUrl: './cadastro.html',
})
export class Cadastro {
  private service = inject(ClienteService);

  enviado = false;
  tentouSalvar = false;

  salvar(
    form: HTMLFormElement,
    nome: string,
    cpf: string,
    email: string,
    senha: string,
    telefone: string,
    endereco: string,
  ) {
    this.tentouSalvar = true;
    this.enviado = false;

    if (!form.checkValidity()) {
      return;
    }

    const c = new Cliente();
    c.nome = nome;
    c.cpf = cpf;
    c.email = email;
    c.senha = senha;
    c.telefone = telefone;
    c.endereco = endereco;

    this.service.cadastrar(c);

    this.enviado = true;
    this.tentouSalvar = false;
    form.reset();
  }
}
