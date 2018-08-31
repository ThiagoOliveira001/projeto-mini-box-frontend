import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {
  compra: any = {
    itens: []
  };
  produtos: any = [
    // { tipo: 'Teste1', desc: 'Tdffg', preco: 10, nome: 'Testando' },
    // { tipo: 'Teste1', desc: 'Tdffg', preco: 10, nome: 'Testando' },
    // { tipo: 'Teste1', desc: 'Tdffg', preco: 10, nome: 'Testando' }
  ];
  funcionarios: any = [
    // { cargo: 'x', salario: 1200, nome: 'Adolfo', cpf: '00000000000' },
    // { cargo: 'y', salario: 1200, nome: 'Adolfo', cpf: '00000000000' },
    // { cargo: 'z', salario: 1200, nome: 'Adolfo', cpf: '00000000000' }
  ];
  clientes: any = [
    // { nome: 'Teste' },
    // { nome: 'Teste' },
    // { nome: 'Teste' }
  ];

  constructor(private _service: AppService, private snack: MatSnackBar) { }

  ngOnInit() {
    this.getprodutos();
    this.getfuncionarios();
    this.getclientes();
  }

  onSubmit() {
    this._service.cadastrarCompra(this.compra).then((data: any) => {
      this.openSnack('Sucesso');
    }).catch((res:any) => {
      this.openSnack('Erro');
    });
  }

  checkProd(nome: string) {
    for (let i = 0; i < this.compra.itens.length; i++) {
      if (nome == this.compra.itens[i].produto.nome) {
        return i;
      }
      if (i == (this.compra.itens.length - 1)) {
        return -1;
      }
    }
  }

  addProd(pd: any) {
    if (this.compra.itens.length == 0) {
      this.compra.itens.push({ produto: pd, qtd: 1 });
    } else {
      for (let i = 0; i < this.compra.itens.length; i++) {
        if (pd.nome == this.compra.itens[i].produto.nome) {
          this.compra.itens[i].qtd += 1;
        } else {
          if (i == this.compra.itens.length - 1) {
            this.compra.itens.push({ produto: pd, qtd: 1 });
          }
        }
      }
    }
  }

  getprodutos(){
    this._service.selecionarProduto().subscribe(data => {
      console.log('Produtos ', data);
      this.produtos = data;
    });
  }
  getclientes() {
    // this._service.selecionarPf().subscribe(data => {
      // this.clientes = data;
      this._service.selecionarPj().subscribe(data => {
        console.log('Clientes ',data);
        this.clientes = data;
      })
    // })
  }
  getfuncionarios(){
    this._service.selecionarFunc().subscribe((data:any) => {
      console.log('Funcionarios ',data);
      // for (let element of data.dados) {
      //   let obj = Object.keys(element).map(key => ({type: key, value: obj[key]}));
      // }
      this.funcionarios = data;
      console.log(typeof(this.funcionarios))
    })
  }
   
  openSnack(text: string) { 
    this.snack.open(text, 'FECHAR', {
      duration: 3000
    });
  }
}
