import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  couleurTexte = [];

  couleurForm = new FormGroup({
    couleur: new FormControl('', Validators.required),
    texte: new FormControl('', Validators.required),
  });
  constructor() {}

  ngOnInit(): void {}
  colorer() {
    this.couleurTexte.push(this.couleurForm.value);
    this.couleurForm.reset();
  }
  
}
