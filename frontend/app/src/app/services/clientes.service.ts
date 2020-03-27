import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {ClienteDTO} from '.././DTO/cliente-dto';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http:HttpClient) { }

  getClientes(){
    const headers = {
      headers: {
        'Access-Control-Allow-Origin': 'Access-Control-Allow-Origin'
      }
    };
    return this.http.get('http://localhost:8080/api/clientes');
  }

  eliminaCliente(id:number){
    const headers = {
      headers: {
        'Access-Control-Allow-Origin': 'Access-Control-Allow-Origin'
      }
    };
    return this.http.delete('http://localhost:8080/api/cliente/'+ id);
  }
  agregarCliente(cliente:ClienteDTO): Observable<Response>{
    console.log(cliente.nombre);
    const headers = {
      headers: {
        'Access-Control-Allow-Origin': 'Access-Control-Allow-Origin'
      }
    };
    return this.http.post<Response>('http://localhost:8080/api/clientes',cliente);
  }
  editarCliente(id:number,cliente:ClienteDTO): Observable<Response>{
    console.log(cliente);
    console.log(id);
    const headers = {
      headers: {
        'Access-Control-Allow-Origin': 'Access-Control-Allow-Origin'
      }
    };
    return this.http.put<Response>('http://localhost:8080/api/cliente/'+ id,cliente);
  }

}
