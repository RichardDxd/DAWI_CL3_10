import { Component } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-jubilacion',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './jubilacion.component.html',
  styleUrl: './jubilacion.component.scss'
})
export class JubilacionComponent {
  edad!: number ;
  sexo!: string ;
  puedeJubilarse! : boolean; 

  verificarJubilacion() {
    if (this.sexo.toLowerCase() === 'hombre') {
      this.puedeJubilarse = this.edad >= 60;
    } else if (this.sexo.toLowerCase() === 'mujer') {
      this.puedeJubilarse = this.edad >= 54;
    } else {
      this.puedeJubilarse = false; // Sexo no válido
    }
  }
}
