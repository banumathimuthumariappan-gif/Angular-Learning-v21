import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Calculator } from "./components/calculator/calculator";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, Calculator],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('03-Calculator-Application-using-components');
  firstNumber: number = 0;
  secondNumber: number = 0;

  result: number = 0;

  updateResult(result: number) {
    this.result = result;
  }

}
