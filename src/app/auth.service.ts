import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api'; // URL de votre backend Spring Boot

  constructor(private http: HttpClient) { }

  // Méthode pour envoyer les informations de connexion au backend
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }

  // Ajoutez d'autres méthodes pour gérer les autres fonctionnalités liées à l'authentification, telles que la récupération du mot de passe, la déconnexion, etc.
}
