import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Profesor } from 'src/app/models/profesor.model';
import { ProfesorService } from 'src/app/services/profesor.service';

@Component({
  selector: 'app-addprofe',
  templateUrl: './addprofe.component.html',
  styleUrls: ['./addprofe.component.css']
})
export class AddprofeComponent implements OnInit {
  
 profesor:Profesor = {
   idProfesor: "0",
   nombre: "Pepe",
   apellido: "Real Deverdad",
   
   dni: "01865658F",
   numeroTelefono: "656654545",
   correo: "correo@gmail.com",
   direccion: "C/ Espolón 23 4ºZ",
   profesoresAsociados: []
 }
  constructor(private readonly profesorService: ProfesorService,
    private router: Router,) { }

  ngOnInit(): void {

  }
  onSubmit(data: any){
    console.log(data);
    this.addProfesor(data);
    this.router.navigate(['/profesores']);
  }
  addProfesor(profesor: Profesor){
    this.profesorService.addProfesor(profesor).subscribe(
      data => console.log(profesor)
    )
  }
}
