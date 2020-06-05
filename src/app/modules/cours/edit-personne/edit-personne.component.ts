import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/interfaces/personne';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonneService } from '../services/personne.service';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-edit-personne',
  templateUrl: './edit-personne.component.html',
  styleUrls: ['./edit-personne.component.css'],
})
export class EditPersonneComponent implements OnInit {
  personnes: Array<Personne> = [];
  id: number;
  personneForm = this.fb.group({
    id: [],
    nom: ['', [Validators.required, Validators.minLength(2)]],
    prenom: ['', Validators.required],
    adresses: this.fb.array([
      // this.fb.group({
      //   rue: ['', Validators.required],
      //   codePostal: ['', Validators.required],
      //   ville: ['', Validators.required],
      // })
    ]),
  });
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private personneService: PersonneService,
    private router: Router
  ) {}
  get adresses() {
    return this.personneForm.get('adresses') as FormArray;
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((data) => {
      this.id = +data.get('id');
      this.personneService.getById(this.id).subscribe((res) => {
        res.adresses.forEach((adr) => this.ajouterAdresse());
        this.personneForm.patchValue(res);
      });
    });
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
  modifierPersonne() {
    this.personneService
      .editPersonne(this.personneForm.value)
      .subscribe((res) => {
        this.router.navigateByUrl('/cours/personne');
      });
  }
  supprimerAdresse(id: number) {
    this.adresses.removeAt(id);
    this.personneService.editPersonne(this.personneForm.value).subscribe(() => {
      this.router.navigateByUrl('/cours/editpersonne/' + this.id);
    });
  }
}
