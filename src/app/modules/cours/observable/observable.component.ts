import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Observer } from 'rxjs/internal/types';
import { from } from 'rxjs/internal/observable/from';
import { interval } from 'rxjs/internal/observable/interval';
import { timer } from 'rxjs/internal/observable/timer';
import { take, map, count, merge } from 'rxjs/operators';
import { Subject } from 'rxjs/internal/Subject';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css'],
})
export class ObservableComponent implements OnInit {
  [x: string]: any;
  status = '';
  tab: Array<number> = [];
  constructor() {}

  // ngOnInit(): void {
  //   const tableau = [1, 2, 3];
  //   const observable1: Observable<number> = interval(1000).pipe(
  //     take(10),
  //     map((elt) => elt + 1)
  //   );
  //   const observable2: Observable<number> = interval(1000).pipe(
  //     take(10),count());
  //      const observable = merge(observable1, observable2);

  //   this.subscription = observable.subscribe(
  //     (res) => {
  //       this.tab.push(res);
  //     },
  //     (error) => {
  //       this.status = error;
  //     },
  //     () => {
  //       this.status = 'fini';
  //     }
  //   );
  // }
  // ngOnDestroy() {this.subscription.unsbscribe();}
  // --------------------------------------------------------------
  // ngOnInit() {
  //   const subject = new Subject<number>();
  //   subject.subscribe({
  //     next: (value) => console.log(`A : ${value}`),
  //   });
  //   subject.subscribe({
  //     next: (value) => console.log(`B : ${value}`),
  //   });
  //   subject.next(1);
  //   subject.next(2);
  // }
  // ------------------------------------------------
  // ngOnInit() {
  //   const subject = new Subject<number>();
  //   subject.subscribe({
  //     next: (value) => console.log(`A : ${value}`),
  //   });
  //   subject.subscribe({
  //     next: (value) => console.log(`B : ${value}`),
  //   });
  //   const observable: Observable<number> = from([1, 2, 3]);

  //   observable.subscribe(subject);
  //   // subject.next(1);
  //   // subject.next(2);
  // }
  // ---------------------------------------------------
  ngOnInit() {
    const subject = new ReplaySubject(2);
    subject.subscribe({
      next: (value) => console.log(`A : ${value}`)
    });
    subject.next(1);
    subject.next(2);
    subject.subscribe({
      next: (value) => console.log(`B : ${value}`)
    });
    subject.next(3);
  }
}
