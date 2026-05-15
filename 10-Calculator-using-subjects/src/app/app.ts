import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculatorApp } from './calculator-app/calculator-app';
import { FormsModule } from '@angular/forms';
import { Calculator } from './calculator';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CalculatorApp, FormsModule, AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private calculatorService = inject(Calculator);
  protected readonly title = signal('10-Calculator-using-subjects');
  result: any = this.calculatorService.result;
}
