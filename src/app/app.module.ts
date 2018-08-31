import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule, MatInputModule, MatSelectModule, MatRadioModule, MatListModule, MatSnackBarModule } from '@angular/material';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { CadastroFuncionarioComponent } from './cadastro-funcionario/cadastro-funcionario.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { AppService } from './app.service';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { ListaFuncionarioComponent } from './lista-funcionario/lista-funcionario.component';
import { HttpClientModule } from '@angular/common/http';
import { CompraComponent } from './compra/compra.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroProdutoComponent,
    CadastroFuncionarioComponent,
    CadastroClienteComponent,
    ListaClienteComponent,
    ListaProdutoComponent,
    ListaFuncionarioComponent,
    CompraComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    CommonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule, 
    MatSlideToggleModule,
    MatRadioModule,
    MatListModule,
    HttpClientModule,
    MatSnackBarModule
    // RouterModule.forRoot([
    //   { path: '', component: AppComponent },
    //   { path: 'cadastro-produto', component: CadastroProdutoComponent }
    // ]), 

  ],
  providers: [AppService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
 