import { Routes } from '@angular/router';
import { CuadradoMitadComponent } from './cuadrado-mitad/cuadrado-mitad.component';
import { JubilacionComponent } from './jubilacion/jubilacion.component';
import { MatriculaComponent } from './matricula/matricula.component';
import { MenorComponent } from './menor/menor.component';

export const routes: Routes = [
    { path: 'cuadrado-mitad', component: CuadradoMitadComponent },
    { path: 'jubilacion', component: JubilacionComponent },
    { path: 'matricula', component: MatriculaComponent },
    { path: 'menor', component: MenorComponent },
    { path: ''},
];
