import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email!: string
  senha!: string

  dadosLogin = new FormGroup({
    email: new FormControl('', Validators.required),
    senha: new FormControl('', Validators.required),

  });

  logar(form:any){
    console.log(this.dadosLogin.value);


  }

}
