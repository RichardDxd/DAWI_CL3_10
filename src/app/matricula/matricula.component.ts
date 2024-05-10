import { Component } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-matricula',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './matricula.component.html',
  styleUrl: './matricula.component.scss'
})
export class MatriculaComponent {
  numMaterias!: number;
  costoMatricula!: number;

  calcularCostoMatricula() {
    const costoPorMateria = 520;
    if (this.numMaterias > 5) {
      this.costoMatricula = this.numMaterias * costoPorMateria * 0.9; // Aplicar descuento del 10% si hay más de 5 materias
    } else {
      this.costoMatricula = this.numMaterias * costoPorMateria;
    }
  }
}
