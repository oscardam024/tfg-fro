import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddprofeComponent } from './modules/addprofe/addprofe.component';
import { AlumnosComponent } from './modules/alumnos/alumnos.component';
import { HomeComponent } from './modules/home/home/home.component';
import { IncidenciasComponent } from './modules/incidencias/incidencias.component';
import { InventarioComponent } from './modules/inventario/inventario.component';
import { PrestamosComponent } from './modules/prestamos/prestamos.component';
import { ProfesoresComponent } from './modules/profesores/profesores.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'alumnos', component: AlumnosComponent},
  { path: 'profesores', component: ProfesoresComponent},
  { path: 'inventario', component: InventarioComponent},
  { path: 'prestamos', component: PrestamosComponent},
  { path: 'incidencias', component: IncidenciasComponent},
  { path: 'addprofesores', component: AddprofeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
