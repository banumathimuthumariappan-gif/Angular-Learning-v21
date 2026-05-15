import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('12-Template-Driven-Forms');
  user = {
    fullName: '',
    email: '',
    password: '',
    gender: '',
    city: '',
    skills: [],
    about: '',
    acceptTerms: false
  }

  submitForm(userForm: any) {
    console.log(this.user);
  }
}
