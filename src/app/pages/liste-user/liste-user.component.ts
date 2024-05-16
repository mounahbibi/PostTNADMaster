import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/userFromClass';
import { UserService } from 'src/app/services/user.service';
import { RouterService } from 'src/app/services/router.service';


@Component({
  selector: 'app-liste-user',
  templateUrl: './liste-user.component.html',
  styleUrls: ['./liste-user.component.css']
})
export class ListeUserComponent implements OnInit {
  //users: User[] = [
    //{
      //nomCommun: 'NomCommun1',
       //nomCompte: '',
      //prenom: 'Prenom1',
      //nom: 'Nom1',
      //telephone: '',
      //adresseMail: '1',
      //codePostal: 12345, // Par exemple, attribuez une valeur numérique
      //Password: 'password1'
    //},
    
  //];

  userList:any;
  user:any;

  constructor(private userService:UserService,private routerService:RouterService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(data => {
      this.userList=data;
    })
  }

  modifierUser(user: User){
    this.routerService.routeToUpdateUser();
  }

  supprimerUtilisateur(user: User) {
    // Logique pour supprimer l'utilisateur
    console.log('Supprimer utilisateur :', user);
  }
}
