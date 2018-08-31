import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {
  produto: any = {};
  tipos: any = [
    { nome: "Alimento" },
    { nome: "Bebida" }
  ];

  constructor(private _service: AppService,private snack: MatSnackBar) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.produto);
    this._service.cadastroProduto(this.produto).then((data: any) => {
      console.log(data);
      this.snack.open('Salvo com sucesso', 'FECHAR', {
        duration: 3000
      }) 

    }).catch((res: any) => {
      this.snack.open('Erro', 'FECHAR', {
        duration: 3000
      })
    });
  }
}
