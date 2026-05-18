import { JsonPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('13-Reactive-forms');

  private fb = inject(FormBuilder);

  userForm = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(3)]],
    gender: ['', [Validators.required]],
    city: ['', [Validators.required]],
    about: ['', [Validators.required]],
    acceptTerms: ['', [Validators.required]]
  });

  get fullName() { return this.userForm.get('fullName'); }
  get email() { return this.userForm.get('email'); }
  get password() { return this.userForm.get('password'); }
  get gender() { return this.userForm.get('gender'); }
  get city() { return this.userForm.get('city'); }
  get about() { return this.userForm.get('about'); }
  get acceptTerms() { return this.userForm.get('acceptTerms'); }

  submitForm() {
    this.userForm.markAllAsTouched();
    if(this.userForm.invalid) return;
    console.log(this.userForm.value);
  }
}
