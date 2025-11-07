import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './views/home/home.component';
import {ProductCrudComponent} from  './views/product-crud/product-crud.component';
import { UsuarioCreateComponent } from './components/usuario/usuario-create/usuario-create.component';
import { UsuarioCrudComponent } from './views/usuario-crud/usuario-crud.component';
import { FormaPagamentoCrudComponent } from './views/forma-pagamento-crud/forma-pagamento-crud.component';
import { FornecedorCrudComponent } from './views/fornecedor-crud/fornecedor-crud.component';
import { FornecedorCreateComponent } from './components/fornecedor/fornecedor-create/fornecedor-create.component';
import { FormaPagamentoCreateComponent } from './components/formaPagamento/forma-pagamento-create/forma-pagamento-create.component';
import { FormaPagamentoUpdateComponent } from './components/formaPagamento/forma-pagamento-update/forma-pagamento-update.component';

//configuração para rotear entre as paginas na home
const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },{
    path: "products",
    component: ProductCrudComponent
  },{
    path: "usuario/create",
    component: UsuarioCreateComponent
  },{
    path: "usuarios",
    component: UsuarioCrudComponent
  },{
    path: "formapagamento",
    component: FormaPagamentoCrudComponent
  },{
    path: "formapagamento/create",
    component: FormaPagamentoCreateComponent,
  },{
    path: "formapagamento/update/:id",
    component: FormaPagamentoUpdateComponent
  },{
    path: "fornecedor",
    component: FornecedorCrudComponent
  },{
    path: "fornecedor/create",
    component: FornecedorCreateComponent
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
