import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable} from 'rxjs';
import { TechnicalSheet } from '../models/technical-sheet.model';

@Injectable({
  providedIn: 'root',
})
export class TechnicalSheetService {

  private baseURL = "http://localhost:8080/api/v1/fichas";

  constructor(private httpClient: HttpClient) { }

  // Retorna todas as fichas técnicas
  getAll(): Observable<TechnicalSheet[]>{
    // const listas = this.httpClient.get<TechnicalSheet[]>(`${this.baseURL}`);
    return this.httpClient.get<TechnicalSheet[]>(`${this.baseURL}`);
  }

  // Busca uma ficha técnica pelo ID
  getById(id: number): Observable<TechnicalSheet>{
    return this.httpClient.get<TechnicalSheet>(`${this.baseURL}/${id}`);
  }

  // Cria uma nova ficha técnica
  create(sheet: TechnicalSheet): Observable<Object>{
    console.log(sheet);
    return this.httpClient.post(`${this.baseURL}`, sheet);
  }

  // Atualiza uma ficha técnica existente
  update(id: number, updatedSheet: TechnicalSheet): Observable<Object>{
    console.log(updatedSheet);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.put(`${this.baseURL}/${id}`, updatedSheet, { headers })
  }

  // Exclui uma ficha técnica (opcional para implementação futura)
  delete(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}


