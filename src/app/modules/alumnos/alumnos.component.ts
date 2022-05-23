import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno.model';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  listaALumnos: Array<Alumno>=[];
  constructor(private readonly alumnoService: AlumnoService) { }

  ngOnInit(): void {
    this.alumnoService.getAlumnos().subscribe((result)=>{
      this.listaALumnos = result;
      console.log("test",result);
    })
  }
  
  deleteAlumno(id:string): void {
    console.log("test",id);
    this.alumnoService.deleteAlumno(id).subscribe();
    window.location.reload();
  }
  

}
