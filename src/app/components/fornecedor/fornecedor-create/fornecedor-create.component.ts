import { Component } from '@angular/core';
import { Fornecedor } from '../fornecedor.model';
import { FornecedorService } from '../fornecedor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fornecedor-create',
  templateUrl: './fornecedor-create.component.html',
  styleUrls: ['./fornecedor-create.component.css']
})
export class FornecedorCreateComponent {

  fornecedor: Fornecedor = {
    nome_fantasia: undefined,
    razao_social: undefined,
    id: undefined,
    cnpj: '',
    inscricao_estadual: '',
    nome_representante: '',
    condicoes_pagamento: '',
    prazo_medio_entrega: '',
    observacoes: ''
  };

  //importando productService
  constructor(private fornecedorService: FornecedorService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createFornecedor(): void {
    this.fornecedorService.create(this.fornecedor).subscribe(() => {
      this.fornecedorService.showMessage('Fornecedor criado!');
      this.router.navigate(['/fornecedor']);
    });
  }

  cancel(): void {
    this.router.navigate(['/fornecedor']);
  }

}
