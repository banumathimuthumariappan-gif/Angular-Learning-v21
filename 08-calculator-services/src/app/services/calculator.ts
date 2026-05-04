import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Calculator {
  result: number = 0;

  add(num1: number, num2: number) {
    this.result = num1 + num2;
  }

  subtract(num1: number, num2: number) {
    this.result =  num1 - num2;
  }

  multiply(num1: number, num2: number) {
    this.result =  num1 * num2;
  }

  divide(num1: number, num2: number) {
    this.result =  num1 / num2;
  }

  getResult(): number {
    return this.result;
  }
}
