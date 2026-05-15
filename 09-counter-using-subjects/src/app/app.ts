import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './services/counter';
import { CounterApp } from "./components/counter-app/counter-app";
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CounterApp, AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private counter = inject(Counter);
  protected readonly title = signal('09-counter-using-subjects');
  countValue: any = this.counter.$count;
}
