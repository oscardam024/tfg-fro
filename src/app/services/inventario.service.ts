import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { toJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';
import { Observable } from 'rxjs';
import { Inventario } from '../models/inventario.model';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {
  urlApi="https://tfgdam024-app.herokuapp.com/inventario"
  constructor(private readonly http: HttpClient) {

    
   }
   getAllItems(){
    return this.http.get<Array<Inventario>>(this.urlApi);
  }
  addItem(item: Inventario):Observable<Inventario>{
    return this.http.post<Inventario>(this.urlApi, item)
    };
  addStock(item: Inventario, cantidad:number):Observable<Inventario>{
      return this.http.post<Inventario>(`${this.urlApi}/additem/${cantidad}`, item,)
      };
 }

