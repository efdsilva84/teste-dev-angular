import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'admin 1234'
  })
};
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private api: ApiService) {

  }

  login(data:any){
    return this.api.post('api/logar', data, httpOptions);
  }

  cadastroUser(data:any){
    return this.api.post('api/cadastro', data, httpOptions);

  }




}
