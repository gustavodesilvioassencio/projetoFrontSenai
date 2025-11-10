import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { usuario } from './usuario.model';
import { usuarioService } from './usuario.service';

@Component({
  selector: 'app-usuario-read',
  templateUrl: './usuario-read.component.html',
  styleUrls: ['./usuario-read.component.css']
})
export class UsuarioReadComponent implements OnInit {
  usuario!: usuario[];
  displayedColumns = ['id', 'nome', 'email', 'cpf', 'senha','action'];
  pagamentos = new MatTableDataSource<usuario>([]);

  constructor(private usuarioService: usuarioService) {}

  ngOnInit(): void {
    this.usuarioService.read().subscribe((data: usuario[]) => {
      this.usuario = data;
      this.pagamentos.data = data;
      console.log(data);
    });
  }

}


