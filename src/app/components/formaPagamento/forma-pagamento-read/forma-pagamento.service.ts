import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { formapagamento } from './forma-pagamento.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class formapagamentoService {

  baseUrl = "http://localhost:8080/formapagamento"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }


  
  create(formapagamento: formapagamento): Observable<formapagamento>{
    return this.http.post<formapagamento>(this.baseUrl, formapagamento)
  }

  read(): Observable<formapagamento[]>{
    return this.http.get<formapagamento[]>(this.baseUrl)
  }

  readById(proId: string): Observable<formapagamento>{
    const url = `${this.baseUrl}/${proId}`
    return this.http.get<formapagamento>(url)
  }
 
  update(formapagamento: formapagamento): Observable<formapagamento>{
    const url = `${this.baseUrl}/${formapagamento.id}`
    return this.http.put<formapagamento>(url, formapagamento)
  }
  
  delete(proId: number): Observable<formapagamento>{    
    const url = `${this.baseUrl}/${proId}`
    return this.http.delete<formapagamento>(url)
  }

}
