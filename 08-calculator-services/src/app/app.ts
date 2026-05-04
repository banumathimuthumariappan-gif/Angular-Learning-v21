import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Calculator } from './services/calculator';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('08-calculator-services');
  private readonly calculatorService = inject(Calculator);
  firstNumber: number = 0;
  secondNumber: number = 0;
  result: number = 0;
  
  add(firstNumber: number, secondNumber: number) {
    this.calculatorService.add(firstNumber, secondNumber);
    this.result = this.calculatorService.getResult();
  }

  subtract(firstNumber: number, secondNumber: number) {
    this.calculatorService.subtract(firstNumber, secondNumber);
    this.result = this.calculatorService.getResult();
  }

  multiply(firstNumber: number, secondNumber: number) {
    this.calculatorService.multiply(firstNumber, secondNumber);
    this.result = this.calculatorService.getResult();
  }

  divide(firstNumber: number, secondNumber: number) {
    this.calculatorService.divide(firstNumber, secondNumber);
    this.result = this.calculatorService.getResult();
  }
}
