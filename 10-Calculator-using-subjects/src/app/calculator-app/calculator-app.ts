import { Component, inject } from '@angular/core';
import { Calculator } from '../calculator';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator-app',
  imports: [FormsModule],
  templateUrl: './calculator-app.html',
  styleUrl: './calculator-app.css',
})
export class CalculatorApp {
  private calculatorService = inject(Calculator);
  firstValue: number = 0;
  secondValue: number = 0;
  
  add() {
    this.calculatorService.add(this.firstValue, this.secondValue);
  }

  sub() {
    this.calculatorService.sub(this.firstValue, this.secondValue);
  }

  mul() {
    this.calculatorService.mul(this.firstValue, this.secondValue);
  }

  div() {
    this.calculatorService.div(this.firstValue, this.secondValue);
  }

}
