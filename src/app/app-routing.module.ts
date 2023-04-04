import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { CadImovelComponent } from './components/pages/cad-imovel/cad-imovel.component';
import { LoginComponent } from './components/pages/login/login.component';
import { CadUserComponent } from './components/pages/cad-user/cad-user.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'novo', component: CadImovelComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cad-user', component: CadUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
