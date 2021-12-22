import { Component, OnInit } from '@angular/core';
import { RequestCreate, ResponseCreate } from '../pessoa.model';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-create-pessoa',
  templateUrl: './create-pessoa.component.html',
  styleUrls: ['./create-pessoa.component.css']
})
export class CreatePessoaComponent implements OnInit {
  request: RequestCreate = {
    name: '',
    job: '',
  }

  response!: ResponseCreate

  constructor(private pessoaService: PessoaService){}
  
  ngOnInit() {
  }

  save() {
    this.pessoaService.createPessoa(this.request).subscribe(res => {
      this.response = res;
    });
  }
}
