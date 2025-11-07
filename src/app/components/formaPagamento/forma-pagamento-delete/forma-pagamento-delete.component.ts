import { Component } from '@angular/core';
import { FormaPagamento } from '../forma-pagamento.model';
import { formapagamentoService } from '../forma-pagamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-forma-pagamento-delete',
  templateUrl: './forma-pagamento-delete.component.html',
  styleUrls: ['./forma-pagamento-delete.component.css']
})
export class FormaPagamentoDeleteComponent {

  formaPagamento!: FormaPagamento;

  constructor(
    private formaPagamentoService: formapagamentoService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.formaPagamentoService.readById(id!).subscribe(formaPagamento =>{
      this.formaPagamento = formaPagamento
    })
  }

  deleteFormaPagamento(): void {
    this.formaPagamentoService.delete(this.formaPagamento.id!).subscribe(() =>{
    this.formaPagamentoService.showMessage('Forma de pagamento excluida com sucesso!')  
    this.router.navigate(['/formapagamento'])
    })
  }

  cancel(): void{
    this.router.navigate(['/formapagamento'])
  }

}