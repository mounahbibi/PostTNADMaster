import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
interface Unite {
  ou: string;
  distinguishedName: string;
  description: string;
  l: string; // Ajout de la propriété manquante
  Country: string;
  postalCode: number;
  st: string;
  street: string;
}

@Injectable({providedIn: 'root'})
export class ListeUniteService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getUnites(): Observable<Unite[]> {
    return this.http.get<Unite[]>(`${this.apiServerUrl}/unite/all`);
  }

 
}