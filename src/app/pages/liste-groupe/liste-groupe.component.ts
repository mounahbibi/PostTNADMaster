import { Component } from '@angular/core';

interface Groupe {
  NomCommun: string;
  NomDistingue: string;
  NomdeCompte: string;
}

@Component({
  selector: 'app-liste-groupe',
  templateUrl: './liste-groupe.component.html',
  styleUrls: ['./liste-groupe.component.css']
})
export class ListeGroupeComponent {
  groupes: Groupe[] = [
    { NomCommun: 'Groupe 1', NomDistingue: 'Nom Distingué 1', NomdeCompte: 'Nom de compte 1' },
    { NomCommun: 'Groupe 2', NomDistingue: 'Nom Distingué 2', NomdeCompte: 'Nom de compte 2' },
    // Ajoutez plus de groupes selon vos besoins
  ];

  constructor() { }

  modifierGroupe(groupe: any) {
    // Logique pour modifier le groupe
  }

  confirmDelete(groupe: Groupe) {
    const isConfirmed = confirm("Êtes-vous sûr de vouloir supprimer ce groupe ?");
    if (isConfirmed) {
      this.supprimerGroupe(groupe);
    } else {
      // Gestion de l'annulation de la suppression
    }
  }
  
  supprimerGroupe(groupe: Groupe) {
    // Logique pour supprimer le groupe
    console.log("Groupe supprimé :", groupe);
  }
}
