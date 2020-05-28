import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import { Subscription } from 'rxjs/internal/Subscription';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  messagesF = [];
  subscription: Subscription;
  msgS: string;

  constructor(private messageService: MessageService) {}
  ngOnInit() {
    this.subscription = this.messageService
      .accederMessageSecond()
      .subscribe((msgS) => this.messagesF.push(msgS));
      
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  ajouterMessageS() {
    this.messageService.envoyerMessageFirst(this.msgS);
    this.msgS = '';
  }
}
