import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  routeToUpdateGroupe: any;

  constructor(private router:Router) { }

  routeToLogin() {
    this.router.navigate(['login']);
  }

  routeToDashboard() {
    this.router.navigate(['dashboard']);
  }

  routeToAllUnite() {
    this.router.navigate(['liste-unite']);
  }

  routeToUpdateUnite() {
    this.router.navigate(['modifier-unite']);
  }

  routeToAllUsers() {
    this.router.navigate(['liste-user']);
  }

  routeToUpdateUser() {
    this.router.navigate(['modifier-user']);
  }

  routeToAddUser() {
    this.router.navigate(['user']);
  }

  routeToListeGroupe() {
    this.router.navigate(['liste-groupe']);
  }

  routeToModifierGroupe() {
    this.router.navigate(['modifier-groupe']);
  }

  routeToAjouterGroupe() {
    this.router.navigate(['groupe']);
  }
}
