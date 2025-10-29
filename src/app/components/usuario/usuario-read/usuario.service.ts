import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { usuario } from './usuario.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class usuarioService {

  baseUrl = "http://localhost:8080/usuario"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }


  
  create(usuario: usuario): Observable<usuario>{
    return this.http.post<usuario>(this.baseUrl, usuario)
  }

  read(): Observable<usuario[]>{
    return this.http.get<usuario[]>(this.baseUrl)
  }

  readById(proId: string): Observable<usuario>{
    const url = `${this.baseUrl}/${proId}`
    return this.http.get<usuario>(url)
  }
 
  update(usuario: usuario): Observable<usuario>{
    const url = `${this.baseUrl}/${usuario.id}`
    return this.http.put<usuario>(url, usuario)
  }
  
  delete(proId: number): Observable<usuario>{    
    const url = `${this.baseUrl}/${proId}`
    return this.http.delete<usuario>(url)
  }

}
