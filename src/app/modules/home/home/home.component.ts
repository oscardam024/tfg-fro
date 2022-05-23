import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/models/alumno.model';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  listaAlumnos: Array<Alumno> = [];
  constructor(private readonly alumnoService: AlumnoService
   ) {
    
   }

  ngOnInit(): void {
    
    
  }
  

}
