import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profesor } from 'src/app/models/profesor.model';
import { ProfesorService } from 'src/app/services/profesor.service';

@Component({
  selector: 'app-modprofe',
  templateUrl: './modprofe.component.html',
  styleUrls: ['./modprofe.component.css']
})
export class ModprofeComponent implements OnInit {
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
  @Input() id: number | undefined;
  constructor(private readonly route: ActivatedRoute,
    private router: Router,
    private readonly profesorService: ProfesorService) { }

  ngOnInit(): void {
    this.getIdPerfil;
    this.getProfesor();
  }
  getIdPerfil(): any {
    let id = null;
    this.route.params.subscribe(params => {
      id = params['id'];
    });
    return id;
  }
  onSubmit(data: any){
    console.log(data);
    this.editProfesor(data);
    
  }
  editProfesor(profesor: Profesor){
    this.profesorService.modProfesor(profesor).subscribe();
    this.router.navigate(['/profesores']);
  }
  getProfesor(){
     this.profesorService.getProfesorById(this.getIdPerfil()).subscribe((result)=>{
      this.profesor = result;
     })
    }
}
