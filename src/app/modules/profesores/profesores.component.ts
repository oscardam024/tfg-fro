import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profesor } from 'src/app/models/profesor.model';
import { ProfesorService } from 'src/app/services/profesor.service';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {
  listaProfesores: Array<Profesor>=[];
  constructor(private readonly profesorService: ProfesorService,
    private router: Router,) { }

  ngOnInit(): void {
    this.profesorService.getProfesores().subscribe((result)=>{
      this.listaProfesores = result;
      console.log("test",result);
    })
  }
  deletePofesor(id:string): void {
    console.log("test",id);
    this.profesorService.deleteProfesor(id).subscribe();
    window.location.reload();
  }
  addprofe(){
    this.router.navigate(['/addprofesores']);
  }
}
