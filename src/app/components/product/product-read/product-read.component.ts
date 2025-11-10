import { Component } from '@angular/core';
import { Produto } from '../produto.model';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent {
 

    fornecedor!: Produto[]
    displayedColumns = ['nome', 'categoria', 'id', 'Id', 'unidade', 'ferramenta', 'metros', 'centimetros', 'litro', 'quilograma', 'grama', 'pacote', 'rolo', 'produto'];
  
    constructor(private fornecedorService: ProdutoService) { }
  
    ngOnInit(): void {
      this.fornecedorService.read().subscribe(produt => {
        this.fornecedor = produt
        console.log(produt)  
      })
    }
  
  
  }
  

