import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Cliente } from '../model/cliente';

const CHAVE_STORAGE = 'clientes';

// P1 não tem backend/banco de dados — os cadastros ficam em localStorage,
// simulando uma base de clientes só pra login/cadastro funcionarem de ponta a ponta.
@Injectable({ providedIn: 'root' })
export class ClienteService {
  private ehNavegador = isPlatformBrowser(inject(PLATFORM_ID));
  private clientes: Cliente[] = [];

  constructor() {
    this.carregar();
  }

  private carregar() {
    if (!this.ehNavegador) return;
    const json = localStorage.getItem(CHAVE_STORAGE);
    this.clientes = json ? JSON.parse(json) : [];
  }

  private salvar() {
    if (!this.ehNavegador) return;
    localStorage.setItem(CHAVE_STORAGE, JSON.stringify(this.clientes));
  }

  // cadastra um cliente novo, ou atualiza os dados se o e-mail já existir
  cadastrar(c: Cliente) {
    const i = this.clientes.findIndex(x => x.email.toLowerCase() === c.email.toLowerCase());
    if (i >= 0) this.clientes[i] = c;
    else this.clientes.push(c);
    this.salvar();
  }

  autenticar(email: string, senha: string): Cliente | null {
    const c = this.clientes.find(
      x => x.email.toLowerCase() === email.toLowerCase() && x.senha === senha
    );
    return c ?? null;
  }

  clienteLogado(): Cliente | null {
    if (!this.ehNavegador) return null;
    try {
      const json = localStorage.getItem('clienteLogado');
      return json ? JSON.parse(json) : null;
    } catch { return null; }
  }

  existeEmail(email: string): boolean {
    return this.clientes.some(x => x.email.toLowerCase() === email.toLowerCase());
  }
}
