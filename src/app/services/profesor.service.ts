import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profesor } from '../models/profesor.model';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {
  urlApi="hhttps://tfgdam024-app.herokuapp.com/profesores"
  constructor(private readonly http: HttpClient) { }
  getProfesores(){
    return this.http.get<Array<Profesor>>(this.urlApi);
  }
  deleteProfesor(id: string): Observable<{}>{
    this.urlApi = `${this.urlApi}/${id}`;
    return this.http.delete(this.urlApi);
  }
  addProfesor(profesor: Profesor):Observable<Profesor>{
    return this.http.post<Profesor>(this.urlApi, profesor);
  }
}
