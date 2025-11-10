import { Component } from '@angular/core';
import { Fornecedor } from '../fornecedor.model';
import { FornecedorService } from '../fornecedor.service';

@Component({
  selector: 'app-fornecedor-read',
  templateUrl: './fornecedor-read.component.html',
  styleUrls: ['./fornecedor-read.component.css']
})
export class FornecedorReadComponent {

  fornecedor!: Fornecedor[]
  displayedColumns =  ['id', 'nome_fantasia', 'razao_social', 'cnpj', 'inscricao_estadual', 'nome_representante', 'condicoes_pagamento', 'prazo_medio_entrega', 'observacoes', 'action'];

  constructor(private fornecedorService: FornecedorService) { }

  ngOnInit(): void {
    this.fornecedorService.read().subscribe(fornecedor => {
      this.fornecedor = fornecedor
      console.log(fornecedor)  
    })
  }


}
