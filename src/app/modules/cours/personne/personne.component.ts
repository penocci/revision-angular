import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/interfaces/personne';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { Personne2 } from 'src/app/interfaces/personne2';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css'],
})
export class PersonneComponent implements OnInit {
  personnes: Array<Personne2> = [];

  constructor(private fb: FormBuilder) {}

  personneForm = this.fb.group({
    id: [],
    nom: ['', [Validators.required, Validators.minLength(2)]],
    prenom: ['', Validators.required],
    adresses: this.fb.array([
      this.fb.group({
        rue: ['', Validators.required],
        codePostal: ['', Validators.required],
        ville: ['', Validators.required],
      }),
    ]),
  });

  get adresses() {
    return this.personneForm.get('adresses') as FormArray;
  }

  ngOnInit(): void {}

  afficherTout() {
    this.personnes.push(this.personneForm.value);
    this.personneForm.reset();
  }
  ajouterAdresse() {
    this.adresses.push(
      this.fb.group({
        rue: ['', Validators.required],
        codePostal: ['', Validators.required],
        ville: ['', Validators.required],
      })
    );
  }
}
