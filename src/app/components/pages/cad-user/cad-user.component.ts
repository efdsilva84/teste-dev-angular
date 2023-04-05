import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cad-user',
  templateUrl: './cad-user.component.html',
  styleUrls: ['./cad-user.component.css']
})
export class CadUserComponent {


  constructor(private userService: UsuarioService, private router: Router){

  }

  nome!: string
  email!: string
  senha!: string


  dadosCad = new FormGroup({
    nome: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    senha: new FormControl('', Validators.required),
  });

  cadastro(form:any){
    console.log("dados formularios", this.dadosCad.value);
        this.userService.cadastroUser(this.dadosCad.value).subscribe((data:any)=>{
          console.log("cadastro realizado com sucesso",);
          alert("Usuario Cadastrado com sucesso");
          this.router.navigate(['login']);


        })

  }
}
