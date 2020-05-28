import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css'],
})
export class PereComponent implements OnInit {
  filsS = [];

  filsForm = new FormGroup({
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
  });
  constructor() {}

  ngOnInit(): void {}
  ajouter() {
    this.filsS.push(this.filsForm.value);
    this.filsForm.reset();
  }
}
