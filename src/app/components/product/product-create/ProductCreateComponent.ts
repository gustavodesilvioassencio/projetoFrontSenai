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
    id: 0,
    unidade: '',
    ferramenta: '',
    metros: '',
    centimetros: '',
    litro: '',
    quilograma: '',
    grama: '',
    pacote: '',
    rolo: '',
    nome: undefined,
    categoria: undefined
  };

  //importando productService
  constructor(private productService: ProdutoService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createProduct(): void {
    this.productService.create(this.produto).subscribe(() => {
      this.productService.showMessage('Produto criado!');
      this.router.navigate(['/products']);
    });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
