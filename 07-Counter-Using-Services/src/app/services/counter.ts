import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Counter {
  count: number = 0;

  increment() {
    this.count ++;
  }

  decrement() {
    this.count --;
  }

  reset() {
    this.count = 0;
  }

  getCount() {
    return this.count;
  }
}
