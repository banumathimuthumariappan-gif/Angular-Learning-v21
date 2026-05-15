import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  login() {
    localStorage.setItem('isLoggedIn', 'true');
    alert("Login Successful");
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    alert("Logged out");
  }
}
