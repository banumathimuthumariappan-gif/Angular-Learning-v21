import { NgStyle, NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Highlight } from "./highlight";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgStyle, NgClass, Highlight],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('05-Directives');
  isLoggedIn: boolean = true;
  roles = ['Admin', 'User', 'Guest'];
  role = this.roles[0];

  // NgStyle
  textColor: string = 'Red';
  fontSize: number = 2;

  // ngClass
  isBold: boolean = false;
  isUnderlined: boolean = true;

  changeTextColor(color: string) {
    this.textColor = color;
  }

  changeBoldStyle() {
    this.isBold = !this.isBold;
  }

  changeUbderlineStyle() {
    this.isUnderlined = !this.isUnderlined;
  }
}
