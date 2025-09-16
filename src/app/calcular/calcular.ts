import { Component } from '@angular/core';

@Component({
  selector: 'app-calcular',
  standalone: false,
  templateUrl: './calcular.html',
  styleUrl: './calcular.css'
})
export class Calcular {
  n1: number = 0;
  n2: number = 0;
  n3: number = 0;
  n4: number = 0;
  resultado: number = 0;
  somar(): void {
    this.resultado = (this.n1*0.15)+ (this.n2*0.30)+(this.n3*0.10)+(this.n4*0.45);
  }
}
