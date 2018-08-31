import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css']
})
export class CadastroFuncionarioComponent implements OnInit {
  funcionario: any = {};

  constructor(private _service: AppService, private snack: MatSnackBar) { }

  ngOnInit() {
  } 

  onSubmit(){
    this._service.cadastroFuncionario(this.funcionario).then((data: any) => {
      console.log(data);
      this.openSnack('Sucesso');
    }).catch((res: any) => {
      this.openSnack('Erro');
    });
  }

  openSnack(text: string) {
    this.snack.open(text, 'FECHAR', {
      duration: 3000
    })
  }
}
