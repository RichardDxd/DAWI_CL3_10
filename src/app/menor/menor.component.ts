import { Component } from '@angular/core';

@Component({
  selector: 'app-menor',
  standalone: true,
  imports: [],
  templateUrl: './menor.component.html',
  styleUrl: './menor.component.scss'
})
export class MenorComponent {
  numeros: number[] = [];
  menor: number | undefined; // Variable para almacenar el número menor

  // Función para calcular el número menor de los números ingresados
  calcularMenor() {
    // Verifica si se han ingresado al menos 4 números
    if (this.numeros.length >= 4) {
      // Utiliza la función Math.min() para encontrar el número menor
      this.menor = Math.min(...this.numeros);
    } else {
      // Si no se han ingresado suficientes números, establece 'menor' como undefined
      this.menor = undefined;
    }
  }
}
