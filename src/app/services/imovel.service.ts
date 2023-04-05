import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';
import { Imoveis } from '../Imoveis';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'admin 1234'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ImovelService {


  constructor(private api:ApiService) {

   }



  buscaImoveis(){
    return this.api.get('api/imoveis');
  }
  envia(data:any){
    return this.api.post('api/inserir', data, httpOptions);
  }
  cadastraImoveis(data:any){
    return this.api.post('api/cad_imovel', data, httpOptions);
  }


}
