import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stagiaire',
  templateUrl: './stagiaire.component.html',
  styleUrls: ['./stagiaire.component.css'],
})
export class StagiaireComponent implements OnInit {
  prenom = '';
  nom = '';

  constructor(private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe((value) => { 
      this.nom = value.get('nom');
      this.prenom = value.get('prenom');
    });
  }

  ngOnInit() {
    // this.nom = this.route.snapshot.queryParams.nom;
    // this.prenom = this.route.snapshot.queryParams.prenom;
    // this.nom = this.route.snapshot.params.nom;
    // this.prenom = this.route.snapshot.params.prenom;
    // console.log(this.nom + ' ' + this.prenom);
  }
}
