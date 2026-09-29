import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-reenvio',
  styleUrl: './reenvio.css',
  templateUrl: './reenvio.html',
})
export class Reenvio {
  enviado = false;
  erro = false;
  emailEnviado = "";

  // P1 não implementa recuperação real de senha (sem backend) — só validamos
  // o formato do e-mail e simulamos a confirmação de envio.
  enviar(email: string) {
    const valor = email.trim();
    const valido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
    this.erro = !valido;
    this.enviado = valido;
    this.emailEnviado = valido ? valor : "";
  }

  tentarNovamente() {
    this.enviado = false;
    this.erro = false;
    this.emailEnviado = "";
  }
}
