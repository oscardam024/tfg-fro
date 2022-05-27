import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './modules/home/home/home.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { InventarioComponent } from './modules/inventario/inventario.component';
import { IncidenciasComponent } from './modules/incidencias/incidencias.component';
import { PrestamosComponent } from './modules/prestamos/prestamos.component';
import { AlumnosComponent } from './modules/alumnos/alumnos.component';
import { ProfesoresComponent } from './modules/profesores/profesores.component';
import { ClasesComponent } from './modules/clases/clases.component';
import { AddprofeComponent } from './modules/addprofe/addprofe.component';
import { ModprofeComponent } from './modules/modprofe/modprofe.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InventarioComponent,
    IncidenciasComponent,
    PrestamosComponent,
    AlumnosComponent,
    ProfesoresComponent,
    ClasesComponent,
    AddprofeComponent,
    ModprofeComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
