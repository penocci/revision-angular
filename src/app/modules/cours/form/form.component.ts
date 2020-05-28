import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  persTab = [];
  personneForm = new FormGroup({
    id: new FormControl('', Validators.required),
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    adresse: new FormGroup({
      rue: new FormControl('', Validators.required),
      ville: new FormControl('', Validators.required),
      codePostal: new FormControl('', Validators.required),
    }),
  });
  constructor() {}

  ngOnInit(): void {}
  afficherTout() {
    this.persTab.push(this.personneForm.value);
    this.personneForm.reset();
  }
}
