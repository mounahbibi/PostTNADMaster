import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginFormClass } from 'src/app/loginFromClass';
import { AuthenticationServiceService } from 'src/app/services/authentication-service.service';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginFormClass: LoginFormClass = new LoginFormClass();

  constructor(private authenticationService: AuthenticationServiceService, private routerService: RouterService) {}

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authenticationService.authenticate(this.loginFormClass).subscribe(data => {
        localStorage.setItem('token', data.token);
        if (localStorage.getItem('token') !== null) {
          this.routerService.routeToDashboard();
        } 
      });
    } else {
      // Le formulaire n'est pas valide, Angular gère déjà l'affichage des messages d'erreur en fonction des validations.
    }
  }

  loginForm = new FormGroup({
    adressmail: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
}
