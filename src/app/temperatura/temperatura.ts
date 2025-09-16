import { Component } from '@angular/core';

@Component({
  selector: 'app-temperatura',
  standalone: false,
  templateUrl: './temperatura.html',
  styleUrl: './temperatura.css'
})
export class Temperatura {
fahrenheit: number | null = null;

  converter(event: Event) {
    const valor = Number((event.target as HTMLInputElement).value);
    this.fahrenheit = (valor * 9/5) + 32;
  }
}
