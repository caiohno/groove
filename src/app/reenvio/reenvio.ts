import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-reenvio',
  templateUrl: './reenvio.html',
})
export class Reenvio {
  enviado = false;
  erro = false;
  emailEnviado = '';

  enviar(email: string) {
    const valor = email.trim();
    const valido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
    this.erro = !valido;
    this.enviado = valido;
    this.emailEnviado = valido ? valor : '';
  }

  tentarNovamente() {
    this.enviado = false;
    this.erro = false;
    this.emailEnviado = '';
  }
}
