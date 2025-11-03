import { Component } from '@angular/core';
import { FormaPagamento } from '../forma-pagamento.model';
import { formapagamentoService } from '../forma-pagamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forma-pagamento-create',
  templateUrl: './forma-pagamento-create.component.html',
  styleUrls: ['./forma-pagamento-create.component.css']
})
export class FormaPagamentoCreateComponent {

  fpagamento: FormaPagamento = {
    nome: '',
    codigo: '',
    tipo: '',
    categoria: ''
  }

  constructor(private formaPagamentoService: formapagamentoService,
    private router: Router) { }
  
  ngOnInit(): void {   
  }

  createFormaPagamento(): void {
    this.formaPagamentoService.create(this.fpagamento).subscribe(() => {
      this.formaPagamentoService.showMessage('Forma Pagamento criada!')
      this.router.navigate(['/formapagamento'])
    })
  }

  cancel(): void {
    this.router.navigate(['/formapagamento'])
  }  

}
