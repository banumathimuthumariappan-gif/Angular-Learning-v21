import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-students',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class Students {}
