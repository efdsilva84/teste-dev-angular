import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CadImovelComponent } from './components/pages/cad-imovel/cad-imovel.component';
import { CadImovelFormComponent } from './components/cad-imovel-form/cad-imovel-form.component';
import { LoginComponent } from './components/pages/login/login.component';
import { CadUserComponent } from './components/pages/cad-user/cad-user.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CadImovelComponent,
    CadImovelFormComponent,
    LoginComponent,
    CadUserComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
