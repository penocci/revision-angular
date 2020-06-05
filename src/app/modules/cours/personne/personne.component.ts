import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { Personne2 } from 'src/app/interfaces/personne2';
import { PersonneService } from '../services/personne.service';
import { AdresseService } from '../services/adresse.service';



@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css'],
})
export class PersonneComponent implements OnInit {
  personnes: Array<Personne2> = [];
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

  constructor(
    private fb: FormBuilder,
    private personneService: PersonneService,
    private adresseService: AdresseService
  ) {}

  get adresses() {
    return this.personneForm.get('adresses') as FormArray;
  }

  ngOnInit(): void {
    this.afficherPersonnes();
  }

  afficherTout() {
    this.personnes.push(this.personneForm.value);
    this.personneForm.reset();
  }

  ajouterPersonne() {
    this.personneService.addPersonne(this.personneForm.value).subscribe(() => {
      this.afficherPersonnes();
    });
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
  afficherPersonnes() {
    this.personneService.getAllPersonnes().subscribe((data) => {
      this.personnes = data;
    });
  }
  supprimerPersonne(id: number) {
    this.personneService.deletePersonne(id).subscribe(() => {
      this.afficherPersonnes();
    });
  }
  supprimerAdresse(id: number) {
    this.adresseService.deleteAdresse(id).subscribe(() => {
      this.afficherPersonnes();
    });
  }
}
