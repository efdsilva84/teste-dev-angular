import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Imoveis } from 'src/app/Imoveis';
import { ImovelService } from 'src/app/services/imovel.service';

@Component({
  selector: 'app-cad-imovel-form',
  templateUrl: './cad-imovel-form.component.html',
  styleUrls: ['./cad-imovel-form.component.css']
})
export class CadImovelFormComponent {

  dadosForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    idade: new FormControl('', Validators.required),

  });

  nome!: string
  idade!: string

constructor(private imovelService: ImovelService){

}



async onLogin(form: any){

  console.log(this.dadosForm.value);;
  this.imovelService.envia(this.dadosForm.value).subscribe((data:any)=>{
    console.log("dados inseridos", data);
  })


}
  //imovelForm!: FormGroup;

  ngOnInit():void {
    /*this.imovelForm = new FormGroup({
      id: new FormControl(''),
      nome: new FormControl('',[Validators.required]),
      idade: new FormControl('',[Validators.required])

    })*/
  }






















  /*get nome(){
    return this.imovelForm.get('nome')!;
  }

  get idade(){
    return this.imovelForm.get('idade')!;
  }

  submit(){

    if(this.imovelForm.invalid){
      return;
    }
    console.log(this.imovelForm.value);
  }*/

}
