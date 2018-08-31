import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class AppService {
    constructor(private http: HttpClient) {

    }
 
    //cadastro_produto
    //cadastro_cliente_pf
    //cadastro_cliente_pj
    //cadastro_funcionario
    //compra_pf
    //compra_pj

    cadastroProduto(produto: any){
        return this.http.post(`${environment.urlApi}/cadastro_produto`,produto).toPromise();
    }
    selecionarProduto() {
        return this.http.get(`${environment.urlApi}/get_produtos`);
    }
    cadastrarPf(cliente: any) {
        return this.http.post(`${environment.urlApi}/cadastro_cliente_pf`, cliente).toPromise();
    }

    cadastrarPj(cliente: any) {
        return this.http.post(`${environment.urlApi}/cadastro_cliente_pj`, cliente).toPromise();
    }

    selecionarPj() {
        return this.http.get(`${environment.urlApi}/get_clientes`);
    }

    selecionarPf() {
        return this.http.get(`${environment.urlApi}/get_cliente_pf`);
    }

    cadastroFuncionario(func: any) {
        return this.http.post(`${environment.urlApi}/cadastro_funcionario`,func).toPromise();
    }

    selecionarFunc() {
        return this.http.get(`${environment.urlApi}/get_funcionarios`);
    }

    cadastrarCompra(compra: any){
        return this.http.post(`${environment.urlApi}/cadastro_funcionario`,compra).toPromise();
    }
}