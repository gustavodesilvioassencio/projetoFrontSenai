import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { formapagamento } from './forma-pagamento.model';
import { formapagamentoService } from './forma-pagamento.service';

@Component({
  selector: 'app-forma-pagamento-read',
  templateUrl: './forma-pagamento-read.component.html',
  styleUrls: ['./forma-pagamento-read.component.css']
})
export class FormaPagamentoReadComponent implements OnInit {

  formapagamento!: formapagamento[];
  displayedColumns = ['proId', 'propix', 'proPrecoCusto', 'proPrecoVenda', 'formapagamento', 'action'];
  pagamentos = new MatTableDataSource<formapagamento>([]);

  constructor(private formapagamentoService: formapagamentoService) {}

  ngOnInit(): void {
    this.formapagamentoService.read().subscribe(data => {
      this.formapagamento = data;
      this.pagamentos.data = data;
      console.log(data);
    });
  }

}

