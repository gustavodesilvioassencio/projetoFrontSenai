import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-crud',
  templateUrl: './usuario-crud.component.html',
  styleUrls: ['./usuario-crud.component.css']
})
export class UsuarioCrudComponent implements OnInit {

    //construtor para configurar botao para tela de usuario
    constructor(private router: Router) { }
  
    ngOnInit(): void {
    }
  
    //criando interação com botoes
    navigateToUsuarioCreate(): void{
      this.router.navigate(['/usuario/create'])
    }
  
}
