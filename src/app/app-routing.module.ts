import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePessoaComponent } from './pessoas/create-pessoa/create-pessoa.component';
import { DeleteComponent } from './pessoas/delete/delete.component';
import { PessoasComponent } from './pessoas/pessoas.component';
import { UpdateComponent } from './pessoas/update/update.component';

const routes: Routes = [
  {path: 'pessoas', component: PessoasComponent },
  {path: 'pessoas/create', component: CreatePessoaComponent },
  {path: 'pessoas/update/:id', component: UpdateComponent },
  {path: 'pessoas/delete/:id', component: DeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
