import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoasComponent } from './pessoas/pessoas.component';
import { CreatePessoaComponent } from './pessoas/create-pessoa/create-pessoa.component';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './pessoas/update/update.component';
import { DeleteComponent } from './pessoas/delete/delete.component';


@NgModule({
  declarations: [
    AppComponent,
    PessoasComponent,
    CreatePessoaComponent,
    UpdateComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
