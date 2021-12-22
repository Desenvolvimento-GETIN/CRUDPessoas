import { isExpressionFactoryMetadata } from "@angular/compiler/src/render3/r3_factory";

export interface Pessoa {
    id: number;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface ResponsePessoas {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Pessoa[];
}

//Modelos para a criação
export interface RequestCreate {
    name: string;
    job: string;
}
export interface ResponseCreate {
    name: string;
    job: string;
    id: string;
    createdAt: Date;
}

//Modelos para o get Pessoa
export interface ResponsePessoa {
    data: Pessoa;
}

//Modelos para update
export interface RequestUpdate {
    name: string;
    job: string;
}
export interface ResponseUpdate {
    name: string;
    job: string;
    updatedAt: Date;
}