import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../produto.model';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  produto: Produto = {
    nome: '',
    categoria: '',
    marca: '',
    modelo: '',
    unidadeMedida: ''
  }

  //importando productService
  constructor(private productService: ProdutoService,
    private router: Router) { }
  
  ngOnInit(): void {
    
  }

  createProduct(): void {
    this.productService.create(this.produto).subscribe(() => {
      this.productService.showMessage('Produto criado!')
      this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }  
}
