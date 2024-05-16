import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Groupe } from 'src/app/groupeFromClass';
import { GroupeService } from 'src/app/services/groupe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modifier-groupe',
  templateUrl: './modifier-groupe.component.html',
  styleUrls: ['./modifier-groupe.component.css']
})
export class ModifierGroupeComponent implements OnInit {
  groupe: Groupe = new Groupe();
  successMessage: string = "";
  errMessage: string = "";
  private subscription: Subscription = new Subscription();
updateGroupeForm!: FormGroup<any>;

  constructor(private groupeService: GroupeService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  updategroupeForm = new FormGroup({
    nomCommun: new FormControl('', [Validators.required]),
    nomCompte: new FormControl('', [Validators.required]),
    distinguishedName: new FormControl('', [Validators.required])
  });

  get nomCommun() { return this.updategroupeForm.get('nomCommun'); }
  get nomCompte() { return this.updategroupeForm.get('nomCompte'); }
  get distinguishedName() { return this.updategroupeForm.get('distinguishedName'); }

  updateGroupe() {
    if (this.updategroupeForm.valid) {
      this.groupe = {
        ...this.groupe,
        ...this.updategroupeForm.value as Groupe
      };

      this.subscription = this.groupeService.modifierGroupe(this.groupe).subscribe(
        () => {
          this.errMessage = "";
          this.successMessage = "Groupe modifié avec succès";
        },
        (error: any) => {
          this.successMessage = "";
          this.errMessage = "Le groupe ne peut pas être modifié : " + error.message;
        }
      );
    } else {
      this.errMessage = "Veuillez remplir tous les champs requis.";
    }
  }
}
