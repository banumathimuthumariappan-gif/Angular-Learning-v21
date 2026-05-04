import { CurrencyPipe, JsonPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExponentialPipe } from './exponential-pipe';
import { LocationUpgradeModule } from '@angular/common/upgrade';
import { TruncatePipe } from './truncate-pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UpperCasePipe, LowerCasePipe, CurrencyPipe, JsonPipe, ExponentialPipe, TruncatePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('06-Pipes');
  name: string = 'Angular Pipes Demo';
  amount: number = 1234.56;
  today = new Date();
  jsonData = { name: 'Banumathi', age: 28 };
  baseValue = 10;
  powerValue = 2;
  longText: string = 'lorem ipsum dewfhief fewfe fewkjfe njfk2wefkl jfhwehfke';
  shortText: string = 'gegqer';
}
