import { Component, OnInit } from '@angular/core';
import { PessoaService } from './pessoa.service';
import { ResponsePessoas } from './pessoa.model';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {

 responsePessoas!: ResponsePessoas;

  constructor(private pessoaService: PessoaService) { }

  ngOnInit() {
    this.pessoaService.getPessoas()
      .subscribe(res => this.responsePessoas = res )
  }
}
