import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Unite } from 'src/app/uniteFromClass';
import { UniteService } from 'src/app/services/unite.service ';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-unite',
  templateUrl: './unite.component.html',
  styleUrls: ['./unite.component.css']
})
export class UniteComponent implements OnInit, OnDestroy {
  unite: Unite = new Unite();
  successMessage: string = "";
  errMessage: string = "";
  private subscription: Subscription = new Subscription(); // Initialisation de subscription

  constructor(private uniteService: UniteService) { }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  addUniteForm = new FormGroup({
    ou: new FormControl('', [Validators.required]),
    distinguishedName: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    l: new FormControl('', [Validators.required]),
    Country: new FormControl('', [Validators.required]),
    postalCode: new FormControl('', [Validators.required]),
    st: new FormControl('', [Validators.required]),
    street: new FormControl('', [Validators.required])
  });

  get ou() { return this.addUniteForm.get('ou'); }
  get distinguishedName() { return this.addUniteForm.get('distinguishedName'); }
  get description() { return this.addUniteForm.get('description'); }
  get l() { return this.addUniteForm.get('l'); }
  get Country() { return this.addUniteForm.get('Country'); }
  get postalCode() { return this.addUniteForm.get('postalCode'); }
  get st() { return this.addUniteForm.get('st'); }
  get street() { return this.addUniteForm.get('street'); }

  addUnite() {
    if (this.ou?.value !== null && this.ou?.value !== undefined) {
      this.unite.ou = this.ou?.value;
    }
    if (this.distinguishedName?.value !== null && this.distinguishedName?.value !== undefined) {
      this.unite.distinguishedName = this.distinguishedName?.value;
    }
    if (this.description?.value !== null && this.description?.value !== undefined) {
      this.unite.description = this.description?.value;
    }
    if (this.l?.value !== null && this.l?.value !== undefined) {
      this.unite.l = this.l?.value;
    }
    if (this.Country?.value !== null && this.Country?.value !== undefined) {
      this.unite.Country = this.Country?.value;
    }
    if (this.postalCode?.value !== null && this.postalCode?.value !== undefined) {
      this.unite.postalCode = this.postalCode?.value;
    }
    if (this.st?.value !== null && this.st?.value !== undefined) {
      this.unite.st = this.st?.value;
    }
    if (this.street?.value !== null && this.street?.value !== undefined) {
      this.unite.street = this.street?.value;
    }

    console.log(this.unite);

    if (this.unite.ou == "") {
      this.errMessage = "L'unité ne peut pas être ajoutée : l'ou est requis";
    } else if (this.unite.description == "") {
      this.errMessage = "L'unité ne peut pas être ajoutée : la description est requise";
    } else {
      this.subscription = this.uniteService.addUnite(this.unite).subscribe(
        () => {
          this.errMessage = "";
          this.successMessage = "Unité ajoutée avec succès";
        },
        (error) => {
          this.successMessage = "";
          this.errMessage = "L'unité ne peut pas être ajoutée : " + error.message;
        }
      );
    }
  }
}
