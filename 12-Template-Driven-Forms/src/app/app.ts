import { JsonPipe } from '@angular/common';
import { JsonpInterceptor } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('12-Template-Driven-Forms');
  skillOptions = ['Angular', 'React', 'Vue'];
  selectedSkills: Record<string, boolean> = {
    Angular: false,
    React: false,
    Vue: false
  }
  user = {
    fullName: '',
    email: '',
    password: '',
    gender: '',
    city: '',
    skills: [] as String[],
    about: '',
    acceptTerms: false
  }

  getSelectedSkills() {
    return this.skillOptions.filter(skill => this.selectedSkills[skill]);
  }

  
  submitForm(userForm: any) {
    this.user.skills = this.getSelectedSkills();
    console.log(this.user);
  }
}
