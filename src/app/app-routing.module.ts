import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './views/home/home.component';
import {ProductCrudComponent} from  './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { UsuarioCreateComponent } from './components/usuario/usuario-create/usuario-create.component';
import { UsuarioCrudComponent } from './views/usuario-crud/usuario-crud.component';
import { FormaPagamentoCrudComponent } from './views/forma-pagamento-crud/forma-pagamento-crud.component';

//configuração para rotear entre as paginas na home
const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductCrudComponent
  },
  {
    path: "products/create",
    component: ProductCreateComponent
  },  
  {
    path: "usuarios",
    component: UsuarioCrudComponent
  },
  {
    path: "formapagamento",
    component: FormaPagamentoCrudComponent
  },
  {
    path: "fornecedor",
    component: FormaPagamentoCrudComponent
  },
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
