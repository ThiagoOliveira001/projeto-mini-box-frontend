import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {
  cliente: any = {};
  fisica:boolean = true;
  juridica:boolean = false;
  color: string = "primary";
  pessoa: string = 'fisica';
  constructor(private _service: AppService,private snack: MatSnackBar) { }

  ngOnInit() {
  }

  onSubmit(){
    if (this.cliente.cpf) {
      this._service.cadastrarPf(this.cliente).then((data: any) => {
        this.openSnack('Sucesso');
      }).catch((res: any) => {
        this.openSnack('Erro');        
      });
    } else {
      this._service.cadastrarPj(this.cliente).then((data: any) => {
        this.openSnack('Sucesso');
      }).catch((res: any) => {
        this.openSnack('Erro');        
      });
    }
  }


  openSnack(text: string) {
    this.snack.open(text, 'FECHAR', {
      duration: 3000
    });
  }
}
