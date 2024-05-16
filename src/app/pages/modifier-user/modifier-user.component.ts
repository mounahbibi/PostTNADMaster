import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/userFromClass';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modifier-user',
  templateUrl: './modifier-user.component.html',
  styleUrls: ['./modifier-user.component.css']
})
export class ModifierUserComponent implements OnInit, OnDestroy {
  user: User = new User();
  successMessage: string = "";
  errMessage: string = "";
  private subscription: Subscription = new Subscription();

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  updateUserForm = new FormGroup({
    nomCommun: new FormControl('', [Validators.required]),
    nomCompte: new FormControl('', [Validators.required]),
    prenom: new FormControl('', [Validators.required]),
    nom: new FormControl('', [Validators.required]),
    telephone: new FormControl('', [Validators.required]),
    adresseMail: new FormControl('', [Validators.required, Validators.email]),
    codePostal: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  get nomCommun() { return this.updateUserForm.get('nomCommun'); }
  get nomCompte() { return this.updateUserForm.get('nomCompte'); }
  get prenom() { return this.updateUserForm.get('prenom'); }
  get nom() { return this.updateUserForm.get('nom'); }
  get telephone() { return this.updateUserForm.get('telephone'); }
  get adresseMail() { return this.updateUserForm.get('adresseMail'); }
  get codePostal() { return this.updateUserForm.get('codePostal'); }
  get password() { return this.updateUserForm.get('password'); }

  updateUser() {
    if (this.updateUserForm.valid) {
      this.user = {
        ...this.user,
        ...this.updateUserForm.value as User
      };

      this.subscription = this.userService.modifierUser(this.user).subscribe(
        () => {
          this.errMessage = "";
          this.successMessage = "Utilisateur modifié avec succès";
        },
        (error: any) => {
          this.successMessage = "";
          this.errMessage = "L'utilisateur ne peut pas être modifié : " + error.message;
        }
      );
    } else {
      this.errMessage = "Veuillez remplir tous les champs requis.";
    }
  }
}