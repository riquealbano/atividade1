import { Component } from '@angular/core';

@Component({
  selector: 'app-apolice',
  standalone: false,
  templateUrl: './apolice.html',
  styleUrl: './apolice.css'
})
export class Apolice {
  nome: string = '';
  sexo: string = 'M';
  idade: number = 0;
  valor: number = 0;
  apolice: number | null = null;

  atualizarNome(event: Event) {
    this.nome = (event.target as HTMLInputElement).value;
  }

  atualizarSexo(event: Event) {
    this.sexo = (event.target as HTMLSelectElement).value;
  }

  atualizarIdade(event: Event) {
    this.idade = Number((event.target as HTMLInputElement).value);
  }

  atualizarValor(event: Event) {
    this.valor = Number((event.target as HTMLInputElement).value);
  }

  calcular() {
    let taxa = 0;
    if (this.sexo === 'M') {
      taxa = this.idade <= 25 ? 0.15 : 0.10;
    } else {
      taxa = 0.08;
    }
    this.apolice = +(this.valor * taxa).toFixed(2);
  }
}
