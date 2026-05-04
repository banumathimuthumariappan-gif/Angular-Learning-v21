import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './services/counter';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('07-Counter-Using-Services');
  private counterService = inject(Counter);
  count: number = 0;

  increment() {
    this.counterService.increment();
    this.count = this.counterService.getCount();
  }

  decrement() {
    this.counterService.decrement();
    this.count = this.counterService.getCount();
  }

  reset() {
    this.counterService.reset();
    this.count = this.counterService.getCount();
  }
}
