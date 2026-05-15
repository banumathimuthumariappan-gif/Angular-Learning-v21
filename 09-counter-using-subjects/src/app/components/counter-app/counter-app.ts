import { Component, inject } from '@angular/core';
import { Counter } from '../../services/counter';

@Component({
  selector: 'app-counter-app',
  imports: [],
  templateUrl: './counter-app.html',
  styleUrl: './counter-app.css',
})
export class CounterApp {
  private counter = inject(Counter);
  
  increment() {
    this.counter.increment();
  }

  decrement() {
    this.counter.decrement();
  }

  reset() {
    this.counter.reset();
  }
}
