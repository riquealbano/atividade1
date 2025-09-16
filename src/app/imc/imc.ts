import { Component } from '@angular/core';

@Component({
  selector: 'app-imc',
  standalone: false,
  templateUrl: './imc.html',
  styleUrl: './imc.css'
})
export class Imc {
   peso: number = 0;
  altura: number = 0;
  imc: number | null = null;
  classificacao: string = '';

  atualizarPeso(event: Event) {
    this.peso = Number((event.target as HTMLInputElement).value);
  }

  atualizarAltura(event: Event) {
    this.altura = Number((event.target as HTMLInputElement).value);
  }

  calcular() {
    if (this.altura <= 0) {
      this.imc = null;
      this.classificacao = 'Altura inválida';
      return;
    }
    this.imc = +(this.peso / (this.altura * this.altura)).toFixed(2);

    if (this.imc < 18.5) this.classificacao = 'Abaixo do peso';
    else if (this.imc <= 24.9) this.classificacao = 'Peso normal';
    else if (this.imc <= 29.9) this.classificacao = 'Sobrepeso';
    else if (this.imc <= 34.9) this.classificacao = 'Obesidade grau I';
    else if (this.imc <= 39.9) this.classificacao = 'Obesidade grau II';
    else this.classificacao = 'Obesidade grau III';
  }
}
