import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  @Input() count: number = 0;
  @Output() countChange = new EventEmitter<number>();

  increment() {
    console.log("Count incremented: " + this.count);
    this.countChange.emit(this.count + 1);
  }

  decrement() {
    console.log("Count decremented " + this.count);
    this.countChange.emit(this.count - 1);
  }

  reset() {
    console.log("Counter resets");
    this.countChange.emit(0);
  }
}
