import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoginFormClass } from '../loginFromClass';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor(private httpClient: HttpClient) { }

  authenticate(userObj: LoginFormClass): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8080/airbusManagement/JWT/authenticateUser', userObj)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Erreur côté client
      console.error('Une erreur s\'est produite:', error.error.message);
    } else {
      // Erreur côté serveur
      console.error(
        `Erreur code ${error.status}, ` +
        `Message: ${error.error}`);
    }
    // Renvoie un observable avec un message d'erreur lisible
    return throwError('Une erreur est survenue, veuillez réessayer plus tard.');
  }
}
