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
  costoTotal!: number;

  calcularCosto() {
    const costoPorMateria = 520;
    let costoSinDescuento = this.numMaterias * costoPorMateria;

    if (this.numMaterias > 5) {
      const descuento = costoSinDescuento * 0.1;
      costoSinDescuento -= descuento;
    }

    this.costoTotal = costoSinDescuento;
  }
}