import { Component } from '@angular/core';
import { Task } from './task';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-testing-project';

  task: Task[] = [];


  addTask(task: string): void {
    const newTask: Task = { 
      name: task
     };
    this.task.push(newTask);
  }

  deleteTask(task: string) {
    this.task = this.task.filter((t) => t.name !== task);
  
  }

  getTasks(): string[] {
    return [];
  }
}
