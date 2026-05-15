import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Calculator {
  private $result = new BehaviorSubject<number>(0);
  result = this.$result.asObservable();

  add(num1: number, num2: number) {
    this.$result.next(num1 + num2);
  }

  sub(num1: number, num2: number) {
    this.$result.next(num1 - num2);
  }

  mul(num1: number, num2: number) {
    this.$result.next(num1 * num2);
  }

  div(num1: number, num2: number) {
    this.$result.next(num1 / num2);
  }
}
