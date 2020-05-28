import { Component } from '@angular/core';
import { Personne } from './interfaces/personne';
import { ɵangular_packages_platform_browser_platform_browser_a } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  title = 'revisionAngular';
  nom = 'babas';
  tab = [-8, 89, 0, 5];
  personne: Personne = {
    nom: 'Penocci',
    prenom: 'babas',
    id: 1,
  };
  personnes: Array<Personne> = [
    { nom: 'wick', prenom: 'john', id: 2542 },
    { nom: 'wayne', prenom: 'alan', id: 4524 },
    { nom: 'travolta', prenom: 'mike', id: 7 },
    { nom: 'dalton', prenom: 'jack', id: 89789725 },
  ];
}
