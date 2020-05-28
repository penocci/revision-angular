import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/article';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
})
export class PanierComponent implements OnInit {
  articles: Array<Article> = [
    { id: 1, description: 'clavier', prixUnitaire: 20 },
    { id: 2, description: 'souris', prixUnitaire: 60 },
    { id: 3, description: 'carte graphique', prixUnitaire: 1220 },
    { id: 4, description: 'clavier', prixUnitaire: 650 },
    { id: 5, description: 'clavier', prixUnitaire: 550 },
    { id: 6, description: 'clavier', prixUnitaire: 12 },
  ];
  nombre = 0;
  total = 0;
  constructor() {}

  ngOnInit(): void {}
  afficherTotal(objet) {
    this.nombre += objet.quantite;
    this.total += objet.article.prixUnitaire * objet.quantite;
  }
}
