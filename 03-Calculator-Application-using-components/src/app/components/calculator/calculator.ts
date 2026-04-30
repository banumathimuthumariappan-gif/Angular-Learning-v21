import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calculator',
  imports: [],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
})
export class Calculator {
  @Input() firstNumber: number = 0;
  @Input() secondNumber: number = 0;

  @Output() resultChange = new EventEmitter<number>();

  add() {
    this.resultChange.emit(this.firstNumber + this.secondNumber);
  }

  subtract() {
    this.resultChange.emit(this.firstNumber - this.secondNumber);
  }

  multiply() {
    this.resultChange.emit(this.firstNumber * this.secondNumber);
  }

  divide() {
    if(this.secondNumber == 0) {
      alert("Can not divide by zero");
      return;
    }
    this.resultChange.emit(this.firstNumber / this.secondNumber);
  }

}
