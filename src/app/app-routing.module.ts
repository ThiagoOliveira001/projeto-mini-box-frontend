import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { CadastroFuncionarioComponent } from './cadastro-funcionario/cadastro-funcionario.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { CompraComponent } from './compra/compra.component';
  

const routes: Routes = [
    { path: 'cadastro-produto', component: CadastroProdutoComponent },
    { path: 'cadastro-funcionario', component: CadastroFuncionarioComponent },
    { path: 'cadastro-cliente', component: CadastroClienteComponent },
    { path: 'compra', component: CompraComponent },
    { path: '', component: AppComponent },  
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}