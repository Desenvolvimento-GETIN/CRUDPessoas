import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../pessoa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from '../pessoa.model';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  id!: string;
  pessoa!: Pessoa;
  route: any;
  _route: any;

  constructor(private pessoaService: PessoaService, private router: ActivatedRoute, private_route: Router) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.pessoaService.getPessoa(this.id).subscribe(res => {
      this.pessoa = res.data;
    });
  }

  delete() {
    this.pessoaService.deletePessoa(this.id).subscribe(res => {
      alert('Removido com sucesso!');
    })
  }

  cancel() {
    this._route.navigate(['/pessoas']);
  }
}