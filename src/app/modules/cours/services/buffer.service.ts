import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BufferService {
  private subject = new Subject();
  constructor() {}

  envoyerMessage(objet) {
    this.subject.next(objet);
  }
  accederMessage() {
    return this.subject;
  }
}
