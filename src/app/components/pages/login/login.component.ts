import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { LoginResponse } from 'src/app/Login-response';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private userlog:any

  email!: string
  senha!: string
constructor(private userService: UsuarioService, private router: Router){

}
  dadosLogin = new FormGroup({
    email: new FormControl('', Validators.required),
    senha: new FormControl('', Validators.required),

  });

  logar(form:any){
    console.log(this.dadosLogin.value);
    this.userService.login(this.dadosLogin.value).subscribe((data:any)=>{
        this.userlog = data;
        if(this.userlog.data){
          console.log("usuario logado ", this.userlog.data[0].nome);
          localStorage.setItem("nome", this.userlog.data[0].nome);
          alert("Login Realizado com Sucesso");
          this.router.navigate(['home']);

        }else{
          alert("erro email ou senha");

          console.log("erro ao logar");
        }
    })


  }

}
