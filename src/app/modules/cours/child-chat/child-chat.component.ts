import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BufferService } from '../services/buffer.service';


@Component({
  selector: 'app-child-chat',
  templateUrl: './child-chat.component.html',
  styleUrls: ['./child-chat.component.css'],
})
export class ChildChatComponent implements OnInit {
  @Input() nom: string;
  // tslint:disable-next-line:no-output-native
  @Output() message = new EventEmitter<string>();
  mssg: string;
  buttonStatus = false;
  messages = [];

  constructor(private bufferService: BufferService) {}

  ngOnInit(): void {
    this.bufferService.accederMessage().subscribe((res) => {
      if (res['nom'] !== this.nom) {
        this.messages.push(res);
      }
    });
  }
  envoyer() {
    this.bufferService.envoyerMessage({
      nom: this.nom,
      message: this.mssg,
    });
    this.mssg = '';
  }
}
