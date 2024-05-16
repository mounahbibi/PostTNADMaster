import { Component, OnInit } from '@angular/core';
import { Unite } from 'src/app/uniteFromClass';
import { UniteService } from 'src/app/services/unite.service ';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-liste-unite',
  templateUrl: './liste-unite.component.html',
  styleUrls: ['./liste-unite.component.css']
})
export class ListeUnitesComponent implements OnInit {

  //unites: Unite[] = [
    //{
      //ou: 'OU1',
      //distinguishedName: 'Unité 1',
      //description: 'Description 1',
      //l: 'L1', // Ajout de la propriété manquante
      //Country: 'Pays1',
      //postalCode: '12345',
      //st: 'Departement1',
      //street: 'Adresse1'
    //},
    //{
      //ou: 'OU2',
      //distinguishedName: 'Unité 2',
      //description: 'Description 2',
      //l: 'L2', // Ajout de la propriété manquante
      //Country: 'Pays2',
      //postalCode: '54321',
      //st: 'Departement2',
      //street: 'Adresse2'
    //},
    // Ajoutez d'autres objets Unite au besoin
  //];//
  uniteList:any;
  unite:any;

  constructor(private uniteService:UniteService,private routerService:RouterService) { }

  ngOnInit(): void {
    this.uniteService.getAllUnites().subscribe(data => {
      this.uniteList=data;
    })
  }

  modifierUnite(unite: Unite){
    this.routerService.routeToUpdateUnite();
  }

  confirmDelete(unite: Unite) {
    const isConfirmed = confirm("Êtes-vous sûr de vouloir supprimer cette unité ?");
    if (isConfirmed) {
      this.supprimerUnite(unite);
    } else {
      // Si l'utilisateur clique sur "Annuler", ne rien faire
    }
  }
  
  supprimerUnite(unite: Unite) {
    console.log("Unité supprimée :", unite);
    // Implémentez votre logique de suppression d'unité ici
  }
}
