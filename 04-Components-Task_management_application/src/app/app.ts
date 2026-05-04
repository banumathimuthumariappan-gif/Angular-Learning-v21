import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task } from './models/task.model';
import { TaskManager } from "./components/task-manager/task-manager";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskManager],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('04-Components-Task_management_application');
  tasks: Task[] = [
    {
      id: 1, 
      name: 'Purchase Courses', 
      completed: false
    },
    {
      id: 2,
      name: 'Make Payment',
      completed: false
    },
    {
      id: 3,
      name: 'Start course',
      completed: false
    },
    {
      id: 4,
      name: 'Do the projects',
      completed: false
    },
    {
      id: 5,
      name: 'Download the certificate',
      completed: false
    }
  ];

  onDeleteTask(id: number) {
    console.log("Final function");
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
