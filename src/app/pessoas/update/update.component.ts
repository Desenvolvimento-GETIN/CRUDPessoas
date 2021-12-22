import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RequestUpdate } from "../pessoa.model";
import { PessoaService } from "../pessoa.service";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class UpdateComponent implements OnInit {

  id!: string;
  request!: RequestUpdate;
  route: any;
 
  constructor(private pessoaService: PessoaService, private router: ActivatedRoute) {}

  ngOnInit() {
      this.id = this.route.snapshot.paramMap.get('id');
      this.pessoaService.getPessoa(this.id).subscribe(res => {
      this.request = {
        name: `${res.data.first_name} ${res.data.last_name}`,
        job: ''
      }
     });
    }
    update() {
    this.pessoaService.updatePessoa(this.id, this.request).subscribe(res => {
      alert(`Atualizar: ${res.updatedAt}, Nome: ${res.name}, {Job: ${res.job}`);
    })
  }
}