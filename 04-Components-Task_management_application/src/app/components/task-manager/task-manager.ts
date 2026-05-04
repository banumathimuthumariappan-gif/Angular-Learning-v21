import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-manager',
  imports: [],
  templateUrl: './task-manager.html',
  styleUrl: './task-manager.css',
})
export class TaskManager {
  @Input() tasks: Task[] = [];
  @Output() deleteTask = new EventEmitter<number>();

  onDeleteTask(id: number) {
    this.deleteTask.emit(id);
  }
}
