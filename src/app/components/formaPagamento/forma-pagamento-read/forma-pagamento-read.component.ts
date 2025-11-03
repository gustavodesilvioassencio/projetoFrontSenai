import { Component } from '@angular/core';
import { FormaPagamento } from '../forma-pagamento.model';
import { formapagamentoService } from '../forma-pagamento.service';

@Component({
  selector: 'app-forma-pagamento-read',
  templateUrl: './forma-pagamento-read.component.html',
  styleUrls: ['./forma-pagamento-read.component.css']
})
export class FormaPagamentoReadComponent {

  fpagamentos!: FormaPagamento[]
  displayedColumns = ['id', 'nome', 'codigo', 'tipo', 'categoria', 'action']

  constructor(private formaPagamentoService: formapagamentoService) { }

  ngOnInit(): void {
    this.formaPagamentoService.read().subscribe(fpagamentos => {
      this.fpagamentos = fpagamentos
      console.log(fpagamentos)  
    })
  }

}
