import { Component } from '@angular/core';
import { CommonModule  } from '@angular/common';

@Component({
  selector: 'app-cuadrado-mitad',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cuadrado-mitad.component.html',
  styleUrl: './cuadrado-mitad.component.scss'
})
export class CuadradoMitadComponent {
  numeros: number[] = [];
  cuadrados: number[] = [];
  mitades: number[] = [];

  calcularCuadradoMitad() {
    for (let i = 15; i <= 70; i++) {
      this.numeros.push(i);
      this.cuadrados.push(i * i);
      this.mitades.push(i / 2);
    }
  }
}
