import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Importez les classes nécessaires pour les formulaires réactifs
import { Router } from '@angular/router'; // Importez Router depuis @angular/router

@Component({
  selector: 'app-groupe',
  templateUrl: './groupe.component.html',
  styleUrls: ['./groupe.component.css']
})
export class GroupeComponent implements OnInit {
  groupForm!: FormGroup; // Déclarez la propriété groupForm de type FormGroup
  submitted = false; // Utilisez cette propriété pour suivre si le formulaire a été soumis ou non

  constructor(private formBuilder: FormBuilder, private router: Router) { // Injectez Router dans le constructeur
    this.groupForm = this.formBuilder.group({
      nomCommun: ['', Validators.required],
      nomDistingue: 'Valeur par défaut du Nom Distingué', // Valeur par défaut pour le Nom Distingué
      nomdeCompte: 'Valeur par défaut du Nom de compte' // Valeur par défaut pour le Nom de compte
    });
  }

  ngOnInit(): void {
    // Initialisez le formulaire et définissez les validateurs requis si nécessaire
    this.groupForm = this.formBuilder.group({
      nomCommun: ['', Validators.required],
      distinguishedName: ['', Validators.required],
      description: ['']
    });
  }

  // Ajoutez la méthode onSubmit pour gérer la soumission du formulaire
  onSubmit() {
    this.submitted = true;

    // Arrêtez ici si le formulaire est invalide
    if (this.groupForm.invalid) {
      return;
    }

    // Si le formulaire est valide, vous pouvez traiter les données ici
    console.log('Formulaire soumis avec succès !', this.groupForm.value);
  }

  // Ajoutez la méthode ajouterGroupe
  ajouterGroupe() {
    // Implémentez la logique pour ajouter un nouveau groupe ici
    // Vous pouvez récupérer les valeurs du formulaire en utilisant this.groupForm.value
    // Une fois le groupe ajouté, naviguez vers la page "liste-groupe"
    this.router.navigate(['/liste-groupe']);
  }
}
