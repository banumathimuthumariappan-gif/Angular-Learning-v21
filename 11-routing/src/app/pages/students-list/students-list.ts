import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-students-list',
  imports: [RouterLink],
  templateUrl: './students-list.html',
  styleUrl: './students-list.css',
})
export class StudentsList {
  students: any = [
    {
      id: 1,
      name: 'David',
      course: 'Angular'
    },
    {
      id: 2,
      name: 'Amit',
      course: 'React'
    },
    {
      id: 3,
      name: 'John',
      course: 'HTML'
    },
    {
      id: 4,
      name: 'Sam',
      course: 'CSS'
    }
  ];
}
