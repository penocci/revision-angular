import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-father-chat',
  templateUrl: './father-chat.component.html',
  styleUrls: ['./father-chat.component.css'],
})
export class FatherChatComponent implements OnInit {
  nom: string;
  participants = [];
  moyenne = 0;
  somme = 0;
  nbrpart = 0;
  constructor() {}

  ngOnInit(): void {}

 

  ajouterParticipant() {
    this.participants.push(this.nom);
    this.nom = '';
    
  }
}
