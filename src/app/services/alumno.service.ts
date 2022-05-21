import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Alumno } from '../models/alumno.model';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  urlApi="http://localhost:8080/alumnos"

  constructor(private readonly http: HttpClient) {  }
  
  
  getAlumnos(){
    return this.http.get<Array<Alumno>>(this.urlApi);
  }
  
  }
  
