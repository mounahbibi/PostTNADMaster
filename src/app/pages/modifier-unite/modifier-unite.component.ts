import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Unite } from 'src/app/uniteFromClass';
import { UniteService } from 'src/app/services/unite.service ';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modifier-unite',
  templateUrl: './modifier-unite.component.html',
  styleUrls: ['./modifier-unite.component.css']
})
export class ModifierUniteComponent implements OnInit, OnDestroy {
  unite: Unite = new Unite();
  successMessage: string = "";
  errMessage: string = "";
  private subscription: Subscription = new Subscription();

  constructor(private uniteService: UniteService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  updateUniteForm = new FormGroup({
    ou: new FormControl('', [Validators.required]),
    distinguishedName: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    l: new FormControl('', [Validators.required]),
    Country: new FormControl('', [Validators.required]),
    postalCode: new FormControl('', [Validators.required]),
    st: new FormControl('', [Validators.required]),
    street: new FormControl('', [Validators.required])
  });

  get ou() { return this.updateUniteForm.get('ou'); }
  get distinguishedName() { return this.updateUniteForm.get('distinguishedName'); }
  get description() { return this.updateUniteForm.get('description'); }
  get l() { return this.updateUniteForm.get('l'); }
  get Country() { return this.updateUniteForm.get('Country'); }
  get postalCode() { return this.updateUniteForm.get('postalCode'); }
  get st() { return this.updateUniteForm.get('st'); }
  get street() { return this.updateUniteForm.get('street'); }

  updateUnite() {
    if (this.updateUniteForm.valid) {
      this.unite = {
        ...this.unite,
        ...this.updateUniteForm.value as Unite
      };

      this.subscription = this.uniteService.modifierUnite(this.unite).subscribe(
        () => {
          this.errMessage = "";
          this.successMessage = "Unité modifiée avec succès";
        },
        (error: any) => {
          this.successMessage = "";
          this.errMessage = "L'unité ne peut pas être modifiée : " + error.message;
        }
      );
    } else {
      this.errMessage = "Veuillez remplir tous les champs requis.";
    }
  }
}
