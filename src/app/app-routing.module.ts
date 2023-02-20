import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from 'src/app/pages/inicio/inicio.component'
import { BibliotecaComponent } from './pages/biblioteca/biblioteca.component';
import { BuscarComponent } from './pages/buscar/buscar.component';

const routes: Routes = [
  {path:'', component:InicioComponent},
  {path:'buscar', component:BuscarComponent},
  {path:'biblioteca', component:BibliotecaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
