import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private subject = new Subject<string>();
  private subject2 = new Subject<string>();

  constructor() {}
  envoyerMessageFirst(msg: string) {
    this.subject.next(msg);
  }
  accederMessageFirst() {
    return this.subject;
  }
  envoyerMessageSecond(msg: string) {
    this.subject2.next(msg);
  }
  accederMessageSecond() {
    return this.subject2;
  }
}