import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Imoveis } from 'src/app/Imoveis';
import { ImovelService } from 'src/app/services/imovel.service';
@Component({
  selector: 'app-cad-imovel',
  templateUrl: './cad-imovel.component.html',
  styleUrls: ['./cad-imovel.component.css']
})
export class CadImovelComponent {
  btnText = "Compartilhar"
  dados: any = [];

  constructor(private imovelService: ImovelService) {

  }

  ngOnInit() {
  }




}
