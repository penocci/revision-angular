import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessageService } from '../services/message.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
})
export class SecondComponent implements OnInit, OnDestroy {
  messagesS = [];
  subscription: Subscription;
  msgF: string;

  constructor(private messageService: MessageService) {}
  ngOnInit() {
    this.subscription = this.messageService
      .accederMessageFirst()
      .subscribe((msgF) => this.messagesS.push(msgF));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  ajouterMessageF() {
    this.messageService.envoyerMessageSecond(this.msgF);
    this.msgF = '';
  }
}

