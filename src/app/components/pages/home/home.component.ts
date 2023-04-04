import { Component } from '@angular/core';
import { ImovelService } from 'src/app/services/imovel.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  listaImoveis:any =[];
  btnText= 'Compartilhar';
  lista:any =[];



  constructor(private imovelService: ImovelService) {

  }
  ngOnInit() {
    this.getImoveis();
  }


  async getImoveis(){
    this.imovelService.buscaImoveis().subscribe((data:any)=>{
      this.listaImoveis = data.data;
      console.log("dados imoveis", this.listaImoveis);
    })
  }





}
