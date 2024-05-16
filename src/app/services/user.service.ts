import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../userFromClass'; // Adjust the import according to your project structure

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/airbusManagement';

  constructor(private httpClient: HttpClient) {}

  modifierUser(user: User): Observable<any> {
    return this.httpClient.put<any>(`${this.apiUrl}/modifierUser/${user.cn}`, user, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    });
  }

  getAllUsers(): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/getAllUsers`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    });
  }

  addUser(user: User): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}/addUser`, user, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    });
  }

  deleteUser(userCn: any): Observable<any> {
    return this.httpClient.delete<any>(`${this.apiUrl}/deleteUser/${userCn}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    });
  }

  updateUser(user: User, userCn: any): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}/updateUser/${userCn}`, user, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    });
  }
}
