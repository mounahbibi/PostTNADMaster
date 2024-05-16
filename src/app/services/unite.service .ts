import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Unite } from '../uniteFromClass';

@Injectable({
  providedIn: 'root'
})
export class UniteService {
  private apiUrl = 'http://localhost:8080/airbusManagement';

  constructor(private httpClient: HttpClient) {}

  getAllUnites(): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/getAllProducts`, { 
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    });
  }

  addUnite(unite: Unite): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}/addProduct`, unite, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    });
  }

  deleteUnite(uniteOu: any): Observable<any> {
    return this.httpClient.delete<any>(`${this.apiUrl}/deleteProduct/${uniteOu}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    });
  }

  modifierUnite(unite: Unite): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}/updateProduct`, unite, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    });
  }
}
