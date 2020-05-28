import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  moyenne = 0;
  somme = 0;
  nbr = 0;
  nom: string;
  enfants = [];

  constructor() {}
  ngOnInit() {}
  computeAvg(note: number) {
    this.somme += note;
    this.nbr++;
    this.moyenne = this.somme / this.nbr;
  }
  ajouterEnfant() {
    this.enfants.push(this.nom);
    this.nom = '';
  }
}
