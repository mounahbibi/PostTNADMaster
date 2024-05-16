import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Groupe } from '../groupeFromClass';

@Injectable({
  providedIn: 'root'
})
export class GroupeService {
  constructor(private httpClient: HttpClient) {}

  modifierGroupe(groupe: Groupe): Observable<any> {
    return this.httpClient.put<any>('http://localhost:8080/airbusManagement/modifierGroupe', groupe, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    });
  }

  getAllGroupes(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:8080/airbusManagement/getAllGroupes', { 
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    });
  }

  addGroupe(groupe: Groupe): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8080/airbusManagement/addGroupe', groupe, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    });
  }

  deleteGroupe(groupeId: any): Observable<any> {
    return this.httpClient.delete<any>(`http://localhost:8080/airbusManagement/deleteGroupe/${groupeId}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    });
  }

  updateGroupe(groupe: Groupe, groupeId: any): Observable<any> {
    return this.httpClient.post<any>(`http://localhost:8080/airbusManagement/updateGroupe/${groupeId}`, groupe, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    });
  }
}
