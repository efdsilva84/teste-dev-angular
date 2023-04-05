import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ImovelService } from 'src/app/services/imovel.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cad-imovel-form',
  templateUrl: './cad-imovel-form.component.html',
  styleUrls: ['./cad-imovel-form.component.css']
})
export class CadImovelFormComponent {

   private imovel:any;
   fileImage!:any;


   constructor(private imovelService: ImovelService, public router: Router){

   }

     imovelForm!: FormGroup;

  /*ngOnInit():void {
    this.imovelForm = new FormGroup({
    id: new FormControl('', [Validators.required]),
    titulo: new FormControl('', [Validators.required]),
    municipio: new FormControl('', [Validators.required]),
    bairro: new FormControl('', [Validators.required]),
    logadouro: new FormControl('', [Validators.required]),
    vlrcompra: new FormControl('', [Validators.required]),
    vlrvenda: new FormControl('', [Validators.required]),
    ganho: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),

    })
  }*/






  dadosForm = new FormGroup({
    titulo: new FormControl('', [Validators.required]),
    municipio: new FormControl('', [Validators.required]),
    bairro: new FormControl('', [Validators.required]),
    logadouro: new FormControl('', [Validators.required]),
    vlrcompra: new FormControl('', [Validators.required]),
    vlrvenda: new FormControl('', [Validators.required]),
    ganho: new FormControl('', [Validators.required]),


  });

  get titulo(){
    return this.dadosForm.get('titulo')!;
  }


async cadimovel(form: any){

  console.log(this.dadosForm.value);
    if(this.dadosForm.invalid){
      return;
    }
  this.imovelService.cadastraImoveis(this.dadosForm.value).subscribe((data:any)=>{
      this.imovel = data;
      console.log("imovel cadastrado", this.imovel);
      this.router.navigate(['home']);
  });
}

onFile(event: any){
  const file: File = event.target.files[0];
    console.log(event.target.files[0]);
    if(event.target.files && event.target.files.length > 0){
       this.fileImage = event.target.files[0];

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
}
