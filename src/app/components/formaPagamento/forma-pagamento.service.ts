import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { FormaPagamento } from './forma-pagamento.model';

@Injectable({
  providedIn: 'root'
})
export class formapagamentoService {

  baseUrl = "http://localhost:8080/formas-pagamento"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
  
  create(formapagamento: FormaPagamento): Observable<FormaPagamento>{
    return this.http.post<FormaPagamento>(this.baseUrl, formapagamento)
  }

  read(): Observable<FormaPagamento[]>{
    return this.http.get<FormaPagamento[]>(this.baseUrl)
  }

  readById(id: string): Observable<FormaPagamento>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<FormaPagamento>(url)
  }
 
  update(formapagamento: FormaPagamento): Observable<FormaPagamento>{
    const url = `${this.baseUrl}/${formapagamento.id}`
    return this.http.put<FormaPagamento>(url, formapagamento)
  }
  
  delete(id: number): Observable<FormaPagamento>{    
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<FormaPagamento>(url)
  }

}
