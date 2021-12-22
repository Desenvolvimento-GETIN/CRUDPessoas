import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestCreate, RequestUpdate, ResponseCreate, ResponsePessoas, ResponsePessoa, ResponseUpdate} from './pessoa.model';
import { HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private url = "https://reqres.in/api/users";

  constructor(private http: HttpClient) { }

  getPessoas(): Observable<ResponsePessoas> {
    return this.http.get<ResponsePessoas>(this.url);
  }

  createPessoa(request: RequestCreate): Observable<ResponseCreate> {
    
    return this.http.post<ResponseCreate>(this.url, request);
  }

  getPessoa(id: string): Observable<ResponsePessoa> {
    const _url = `${this.url}/${id}`;

    return this.http.get<ResponsePessoa>(_url);
  }

  updatePessoa(id: string, request: RequestUpdate): Observable<ResponseUpdate> {
    const _url = `${this.url}/${id}`;

    return this.http.put<ResponseUpdate>(_url, request);
  }

 deletePessoa(id: string): Observable<any> {
    const _url = `${this.url}/${id}`;

    return this.http.delete<any>(_url);
  }
}
